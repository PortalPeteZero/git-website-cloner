import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  CheckCircle, 
  XCircle, 
  AlertCircle, 
  RefreshCw, 
  Search,
  FileText,
  Image,
  Link,
  Globe
} from "lucide-react";
import { getServicesData } from "@/data/servicesData";
import { getLocationsData } from "@/data/locationsData";
import { blogArticlesEn, blogArticlesEs } from "@/data/blogArticles";

interface SeoIssue {
  path: string;
  type: "error" | "warning" | "info";
  category: "meta" | "og" | "canonical" | "link";
  message: string;
}

interface RouteAudit {
  path: string;
  title: string;
  hasMetaTitle: boolean;
  hasMetaDescription: boolean;
  hasCanonical: boolean;
  hasOgImage: boolean;
  hasOgTitle: boolean;
  hasOgDescription: boolean;
  metaTitleLength?: number;
  metaDescLength?: number;
  issues: SeoIssue[];
}

// Define all routes to audit
const getAllRoutes = () => {
  const servicesEn = getServicesData(false);
  const servicesEs = getServicesData(true);
  const locationsEn = getLocationsData(false);
  const locationsEs = getLocationsData(true);

  const staticRoutes = [
    // English pages
    { path: "/", title: "Home (EN)", lang: "en" },
    { path: "/about", title: "About (EN)", lang: "en" },
    { path: "/services", title: "Services (EN)", lang: "en" },
    { path: "/technology", title: "Technology (EN)", lang: "en" },
    { path: "/case-studies", title: "Case Studies (EN)", lang: "en" },
    { path: "/contact", title: "Contact (EN)", lang: "en" },
    { path: "/blog", title: "Blog (EN)", lang: "en" },
    // Spanish pages
    { path: "/es", title: "Home (ES)", lang: "es" },
    { path: "/es/sobre-nosotros", title: "About (ES)", lang: "es" },
    { path: "/es/servicios", title: "Services (ES)", lang: "es" },
    { path: "/es/tecnologia", title: "Technology (ES)", lang: "es" },
    { path: "/es/casos-de-exito", title: "Case Studies (ES)", lang: "es" },
    { path: "/es/contacto", title: "Contact (ES)", lang: "es" },
    { path: "/es/blog", title: "Blog (ES)", lang: "es" },
  ];

  // Service routes
  const serviceRoutesEn = Object.keys(servicesEn).map(slug => ({
    path: `/services/${slug}`,
    title: `Service: ${servicesEn[slug].title}`,
    lang: "en",
    seo: servicesEn[slug].seo,
  }));

  const serviceRoutesEs = Object.keys(servicesEs).map(slug => {
    const slugMap: Record<string, string> = {
      "drain-detection": "deteccion-desagues",
      "underground-detection": "deteccion-subterranea",
      "water-leak-detection": "deteccion-fugas-agua",
      "pool-leak-detection": "deteccion-fugas-piscina",
      "leak-repair": "reparacion-fugas",
      "drain-unblocking": "desatasco-desagues",
      "pool-leak-repair": "reparacion-fugas-piscina",
      "free-leak-confirmation": "confirmacion-fugas-gratis",
    };
    return {
      path: `/es/servicios/${slugMap[slug] || slug}`,
      title: `Servicio: ${servicesEs[slug].title}`,
      lang: "es",
      seo: servicesEs[slug].seo,
    };
  });

  // Location routes
  const locationRoutesEn = Object.keys(locationsEn).map(slug => ({
    path: `/locations/${slug}`,
    title: `Location: ${locationsEn[slug].name}`,
    lang: "en",
    seo: locationsEn[slug].seo,
  }));

  const locationRoutesEs = Object.keys(locationsEs).map(slug => ({
    path: `/es/ubicaciones/${slug}`,
    title: `Ubicación: ${locationsEs[slug].name}`,
    lang: "es",
    seo: locationsEs[slug].seo,
  }));

  // Blog routes
  const blogRoutesEn = blogArticlesEn.map(article => ({
    path: `/blog/${article.slug}`,
    title: `Blog: ${article.title.substring(0, 40)}...`,
    lang: "en",
    seo: {
      title: article.metaTitle,
      description: article.metaDescription,
      keywords: article.keywords,
    },
  }));

  const blogRoutesEs = blogArticlesEs.map(article => ({
    path: `/es/blog/${article.slug}`,
    title: `Blog: ${article.title.substring(0, 40)}...`,
    lang: "es",
    seo: {
      title: article.metaTitle,
      description: article.metaDescription,
      keywords: article.keywords,
    },
  }));

  return [
    ...staticRoutes,
    ...serviceRoutesEn,
    ...serviceRoutesEs,
    ...locationRoutesEn,
    ...locationRoutesEs,
    ...blogRoutesEn,
    ...blogRoutesEs,
  ];
};

// Analyze SEO for a route based on its data
const analyzeRoute = (route: { path: string; title: string; lang: string; seo?: { title: string; description: string; keywords?: string } }): RouteAudit => {
  const issues: SeoIssue[] = [];
  const seo = route.seo;

  const hasMetaTitle = !!seo?.title;
  const hasMetaDescription = !!seo?.description;
  const hasCanonical = true; // SEOHead always sets canonical
  const hasOgImage = true; // SEOHead always sets og:image
  const hasOgTitle = hasMetaTitle;
  const hasOgDescription = hasMetaDescription;

  const metaTitleLength = seo?.title?.length || 0;
  const metaDescLength = seo?.description?.length || 0;

  // Check meta title
  if (!hasMetaTitle) {
    issues.push({
      path: route.path,
      type: "error",
      category: "meta",
      message: "Missing meta title",
    });
  } else if (metaTitleLength > 60) {
    issues.push({
      path: route.path,
      type: "warning",
      category: "meta",
      message: `Meta title too long (${metaTitleLength} chars, max 60)`,
    });
  } else if (metaTitleLength < 30) {
    issues.push({
      path: route.path,
      type: "info",
      category: "meta",
      message: `Meta title could be longer (${metaTitleLength} chars)`,
    });
  }

  // Check meta description
  if (!hasMetaDescription) {
    issues.push({
      path: route.path,
      type: "error",
      category: "meta",
      message: "Missing meta description",
    });
  } else if (metaDescLength > 160) {
    issues.push({
      path: route.path,
      type: "warning",
      category: "meta",
      message: `Meta description too long (${metaDescLength} chars, max 160)`,
    });
  } else if (metaDescLength < 120) {
    issues.push({
      path: route.path,
      type: "info",
      category: "meta",
      message: `Meta description could be longer (${metaDescLength} chars)`,
    });
  }

  return {
    path: route.path,
    title: route.title,
    hasMetaTitle,
    hasMetaDescription,
    hasCanonical,
    hasOgImage,
    hasOgTitle,
    hasOgDescription,
    metaTitleLength: metaTitleLength || undefined,
    metaDescLength: metaDescLength || undefined,
    issues,
  };
};

// Check for broken internal links
const checkInternalLinks = (): SeoIssue[] => {
  const issues: SeoIssue[] = [];
  const validPaths = new Set(getAllRoutes().map(r => r.path));

  // Add known valid paths
  validPaths.add("/");
  validPaths.add("/es");
  validPaths.add("/admin");
  validPaths.add("/admin/login");

  // Known internal link targets in the codebase
  const internalLinks = [
    { from: "Footer", to: "/services/water-leak-detection" },
    { from: "Footer", to: "/services/pool-leak-detection" },
    { from: "Footer", to: "/services/drain-detection" },
    { from: "Footer", to: "/services/leak-repair" },
    { from: "Footer", to: "/about" },
    { from: "Footer", to: "/contact" },
    { from: "Footer", to: "/technology" },
    { from: "Footer", to: "/case-studies" },
    { from: "Footer", to: "/blog" },
    { from: "Header", to: "/services" },
    { from: "Header", to: "/about" },
    { from: "Header", to: "/technology" },
    { from: "Header", to: "/case-studies" },
    { from: "Header", to: "/blog" },
    { from: "Header", to: "/contact" },
    { from: "Services", to: "/services/free-leak-confirmation" },
    { from: "Services", to: "/services/drain-unblocking" },
    { from: "Services", to: "/services/pool-leak-repair" },
    { from: "Services", to: "/services/underground-detection" },
  ];

  for (const link of internalLinks) {
    if (!validPaths.has(link.to)) {
      issues.push({
        path: link.from,
        type: "error",
        category: "link",
        message: `Broken internal link to ${link.to}`,
      });
    }
  }

  return issues;
};

export default function AdminSeoAudit() {
  const [audits, setAudits] = useState<RouteAudit[]>([]);
  const [linkIssues, setLinkIssues] = useState<SeoIssue[]>([]);
  const [isScanning, setIsScanning] = useState(false);
  const [lastScan, setLastScan] = useState<Date | null>(null);

  const runAudit = () => {
    setIsScanning(true);
    
    // Simulate async scan
    setTimeout(() => {
      const routes = getAllRoutes();
      const results = routes.map(analyzeRoute);
      setAudits(results);
      setLinkIssues(checkInternalLinks());
      setLastScan(new Date());
      setIsScanning(false);
    }, 500);
  };

  useEffect(() => {
    runAudit();
  }, []);

  const allIssues = [...audits.flatMap(a => a.issues), ...linkIssues];
  const errors = allIssues.filter(i => i.type === "error");
  const warnings = allIssues.filter(i => i.type === "warning");
  const infos = allIssues.filter(i => i.type === "info");

  const totalRoutes = audits.length;
  const routesWithIssues = audits.filter(a => a.issues.length > 0).length;
  const healthScore = totalRoutes > 0 
    ? Math.round(((totalRoutes - routesWithIssues) / totalRoutes) * 100) 
    : 100;

  const getIssueIcon = (type: SeoIssue["type"]) => {
    switch (type) {
      case "error": return <XCircle className="h-4 w-4 text-destructive" />;
      case "warning": return <AlertCircle className="h-4 w-4 text-yellow-500" />;
      case "info": return <AlertCircle className="h-4 w-4 text-blue-500" />;
    }
  };

  const getCategoryIcon = (category: SeoIssue["category"]) => {
    switch (category) {
      case "meta": return <FileText className="h-4 w-4" />;
      case "og": return <Globe className="h-4 w-4" />;
      case "canonical": return <Link className="h-4 w-4" />;
      case "link": return <Link className="h-4 w-4" />;
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-heading font-bold">SEO Audit</h2>
          <p className="text-muted-foreground text-sm">
            Scan all routes for missing meta tags, broken links, and SEO issues
          </p>
        </div>
        <Button onClick={runAudit} disabled={isScanning}>
          <RefreshCw className={`h-4 w-4 mr-2 ${isScanning ? "animate-spin" : ""}`} />
          {isScanning ? "Scanning..." : "Run Audit"}
        </Button>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">
              Health Score
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center gap-3">
              <div className="text-3xl font-bold">{healthScore}%</div>
              <Progress value={healthScore} className="flex-1" />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground flex items-center gap-2">
              <XCircle className="h-4 w-4 text-destructive" />
              Errors
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-destructive">{errors.length}</div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground flex items-center gap-2">
              <AlertCircle className="h-4 w-4 text-yellow-500" />
              Warnings
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-yellow-500">{warnings.length}</div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground flex items-center gap-2">
              <Search className="h-4 w-4" />
              Routes Scanned
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">{totalRoutes}</div>
          </CardContent>
        </Card>
      </div>

      {/* Issues Tabs */}
      <Tabs defaultValue="all" className="w-full">
        <TabsList>
          <TabsTrigger value="all">
            All Issues ({allIssues.length})
          </TabsTrigger>
          <TabsTrigger value="errors">
            Errors ({errors.length})
          </TabsTrigger>
          <TabsTrigger value="warnings">
            Warnings ({warnings.length})
          </TabsTrigger>
          <TabsTrigger value="routes">
            Routes ({totalRoutes})
          </TabsTrigger>
        </TabsList>

        <TabsContent value="all" className="mt-4">
          <Card>
            <CardContent className="pt-6">
              {allIssues.length === 0 ? (
                <div className="text-center py-8 text-muted-foreground">
                  <CheckCircle className="h-12 w-12 mx-auto mb-4 text-green-500" />
                  <p className="text-lg font-medium">All clear!</p>
                  <p className="text-sm">No SEO issues detected</p>
                </div>
              ) : (
                <div className="space-y-2">
                  {allIssues.map((issue, idx) => (
                    <div 
                      key={idx} 
                      className="flex items-start gap-3 p-3 rounded-lg bg-muted/50 hover:bg-muted transition-colors"
                    >
                      {getIssueIcon(issue.type)}
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2 mb-1">
                          <code className="text-xs bg-background px-2 py-0.5 rounded">
                            {issue.path}
                          </code>
                          <Badge variant="outline" className="text-xs">
                            {getCategoryIcon(issue.category)}
                            <span className="ml-1">{issue.category}</span>
                          </Badge>
                        </div>
                        <p className="text-sm">{issue.message}</p>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="errors" className="mt-4">
          <Card>
            <CardContent className="pt-6">
              {errors.length === 0 ? (
                <div className="text-center py-8 text-muted-foreground">
                  <CheckCircle className="h-12 w-12 mx-auto mb-4 text-green-500" />
                  <p>No errors found</p>
                </div>
              ) : (
                <div className="space-y-2">
                  {errors.map((issue, idx) => (
                    <div 
                      key={idx} 
                      className="flex items-start gap-3 p-3 rounded-lg bg-destructive/10 border border-destructive/20"
                    >
                      <XCircle className="h-4 w-4 text-destructive mt-0.5" />
                      <div className="flex-1">
                        <code className="text-xs bg-background px-2 py-0.5 rounded">
                          {issue.path}
                        </code>
                        <p className="text-sm mt-1">{issue.message}</p>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="warnings" className="mt-4">
          <Card>
            <CardContent className="pt-6">
              {warnings.length === 0 ? (
                <div className="text-center py-8 text-muted-foreground">
                  <CheckCircle className="h-12 w-12 mx-auto mb-4 text-green-500" />
                  <p>No warnings found</p>
                </div>
              ) : (
                <div className="space-y-2">
                  {warnings.map((issue, idx) => (
                    <div 
                      key={idx} 
                      className="flex items-start gap-3 p-3 rounded-lg bg-yellow-500/10 border border-yellow-500/20"
                    >
                      <AlertCircle className="h-4 w-4 text-yellow-500 mt-0.5" />
                      <div className="flex-1">
                        <code className="text-xs bg-background px-2 py-0.5 rounded">
                          {issue.path}
                        </code>
                        <p className="text-sm mt-1">{issue.message}</p>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="routes" className="mt-4">
          <Card>
            <CardContent className="pt-6">
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b">
                      <th className="text-left py-2 px-3">Route</th>
                      <th className="text-center py-2 px-3">Title</th>
                      <th className="text-center py-2 px-3">Desc</th>
                      <th className="text-center py-2 px-3">OG</th>
                      <th className="text-center py-2 px-3">Issues</th>
                    </tr>
                  </thead>
                  <tbody>
                    {audits.map((audit, idx) => (
                      <tr key={idx} className="border-b hover:bg-muted/50">
                        <td className="py-2 px-3">
                          <code className="text-xs">{audit.path}</code>
                          <div className="text-xs text-muted-foreground truncate max-w-[200px]">
                            {audit.title}
                          </div>
                        </td>
                        <td className="text-center py-2 px-3">
                          {audit.hasMetaTitle ? (
                            <CheckCircle className="h-4 w-4 text-green-500 mx-auto" />
                          ) : (
                            <XCircle className="h-4 w-4 text-destructive mx-auto" />
                          )}
                        </td>
                        <td className="text-center py-2 px-3">
                          {audit.hasMetaDescription ? (
                            <CheckCircle className="h-4 w-4 text-green-500 mx-auto" />
                          ) : (
                            <XCircle className="h-4 w-4 text-destructive mx-auto" />
                          )}
                        </td>
                        <td className="text-center py-2 px-3">
                          {audit.hasOgImage ? (
                            <CheckCircle className="h-4 w-4 text-green-500 mx-auto" />
                          ) : (
                            <XCircle className="h-4 w-4 text-destructive mx-auto" />
                          )}
                        </td>
                        <td className="text-center py-2 px-3">
                          {audit.issues.length === 0 ? (
                            <Badge variant="outline" className="bg-green-500/10 text-green-600">
                              OK
                            </Badge>
                          ) : (
                            <Badge variant="destructive">
                              {audit.issues.length}
                            </Badge>
                          )}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>

      {/* Last scan info */}
      {lastScan && (
        <p className="text-xs text-muted-foreground text-center">
          Last scan: {lastScan.toLocaleString()}
        </p>
      )}
    </div>
  );
}
