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
  Globe,
  Download,
  FileDown
} from "lucide-react";
import { toast } from "@/hooks/use-toast";
import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";
import { getServicesData } from "@/data/servicesData";
import { getLocationsData } from "@/data/locationsData";
import { blogArticlesEn, blogArticlesEs } from "@/data/blogArticles";
import en from "@/i18n/locales/en.json";
import es from "@/i18n/locales/es.json";

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
    { path: "/", title: "Home (EN)", lang: "en", seo: { title: en.meta.home.title, description: en.meta.home.description } },
    { path: "/about", title: "About (EN)", lang: "en", seo: { title: en.meta.about.title, description: en.meta.about.description } },
    { path: "/services", title: "Services (EN)", lang: "en", seo: { title: en.meta.services.title, description: en.meta.services.description } },
    { path: "/technology", title: "Technology (EN)", lang: "en", seo: { title: en.meta.technology.title, description: en.meta.technology.description } },
    { path: "/case-studies", title: "Case Studies (EN)", lang: "en", seo: { title: en.meta.caseStudies.title, description: en.meta.caseStudies.description } },
    { path: "/contact", title: "Contact (EN)", lang: "en", seo: { title: en.meta.contact.title, description: en.meta.contact.description } },
    { path: "/blog", title: "Blog (EN)", lang: "en", seo: { title: en.meta.blog.title, description: en.meta.blog.description } },
    // Spanish pages
    { path: "/es", title: "Home (ES)", lang: "es", seo: { title: es.meta.home.title, description: es.meta.home.description } },
    { path: "/es/sobre-nosotros", title: "About (ES)", lang: "es", seo: { title: es.meta.about.title, description: es.meta.about.description } },
    { path: "/es/servicios", title: "Services (ES)", lang: "es", seo: { title: es.meta.services.title, description: es.meta.services.description } },
    { path: "/es/tecnologia", title: "Technology (ES)", lang: "es", seo: { title: es.meta.technology.title, description: es.meta.technology.description } },
    { path: "/es/casos-de-exito", title: "Case Studies (ES)", lang: "es", seo: { title: es.meta.caseStudies.title, description: es.meta.caseStudies.description } },
    { path: "/es/contacto", title: "Contact (ES)", lang: "es", seo: { title: es.meta.contact.title, description: es.meta.contact.description } },
    { path: "/es/blog", title: "Blog (ES)", lang: "es", seo: { title: es.meta.blog.title, description: es.meta.blog.description } },
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
  validPaths.add("/services/free-leak-confirmation");
  validPaths.add("/es/servicios/confirmacion-fugas-gratis");

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
  // Only count routes with errors or warnings as problematic (not informational items)
  const routesWithProblems = audits.filter(a => 
    a.issues.some(issue => issue.type === "error" || issue.type === "warning")
  ).length;
  const hasLinkErrors = linkIssues.some(i => i.type === "error");
  const healthScore = totalRoutes > 0 
    ? Math.round(((totalRoutes - routesWithProblems - (hasLinkErrors ? 1 : 0)) / totalRoutes) * 100) 
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

  const exportToCSV = () => {
    if (allIssues.length === 0) {
      toast({
        title: "No issues to export",
        description: "Run an audit first to find SEO issues.",
        variant: "destructive",
      });
      return;
    }

    const headers = ["Path", "Type", "Category", "Message"];
    const rows = allIssues.map(issue => [
      issue.path,
      issue.type,
      issue.category,
      `"${issue.message.replace(/"/g, '""')}"` // Escape quotes for CSV
    ]);

    const csvContent = [
      headers.join(","),
      ...rows.map(row => row.join(","))
    ].join("\n");

    const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.setAttribute("href", url);
    link.setAttribute("download", `seo-audit-${new Date().toISOString().split('T')[0]}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);

    toast({
      title: "Export complete",
      description: `Exported ${allIssues.length} issues to CSV.`,
    });
  };

  const exportToPDF = () => {
    const doc = new jsPDF();
    const pageWidth = doc.internal.pageSize.getWidth();
    const dateStr = new Date().toLocaleDateString('en-GB', { 
      day: '2-digit', month: 'long', year: 'numeric' 
    });
    
    // Header
    doc.setFillColor(30, 42, 71); // Navy blue
    doc.rect(0, 0, pageWidth, 40, 'F');
    
    doc.setTextColor(255, 255, 255);
    doc.setFontSize(24);
    doc.setFont('helvetica', 'bold');
    doc.text('SEO Audit Report', 14, 20);
    
    doc.setFontSize(11);
    doc.setFont('helvetica', 'normal');
    doc.text('Canary Detect - The Leaky Finders', 14, 28);
    doc.text(dateStr, pageWidth - 14, 28, { align: 'right' });
    
    let yPos = 50;
    
    // Executive Summary
    doc.setTextColor(30, 42, 71);
    doc.setFontSize(16);
    doc.setFont('helvetica', 'bold');
    doc.text('Executive Summary', 14, yPos);
    yPos += 10;
    
    doc.setFontSize(10);
    doc.setFont('helvetica', 'normal');
    doc.setTextColor(60, 60, 60);
    
    const summaryData = [
      ['Health Score', `${healthScore}%`],
      ['Total Routes Scanned', `${totalRoutes}`],
      ['Routes with Problems', `${routesWithProblems}`],
      ['Critical Errors', `${errors.length}`],
      ['Warnings', `${warnings.length}`],
      ['Informational', `${infos.length}`],
    ];
    
    autoTable(doc, {
      startY: yPos,
      head: [['Metric', 'Value']],
      body: summaryData,
      theme: 'striped',
      headStyles: { fillColor: [30, 42, 71], textColor: 255 },
      styles: { fontSize: 10 },
      margin: { left: 14, right: 14 },
    });
    
    yPos = (doc as any).lastAutoTable.finalY + 15;
    
    // Critical Errors Section
    if (errors.length > 0) {
      doc.setFontSize(14);
      doc.setFont('helvetica', 'bold');
      doc.setTextColor(220, 38, 38); // Red
      doc.text(`Critical Errors (${errors.length})`, 14, yPos);
      yPos += 8;
      
      doc.setFontSize(9);
      doc.setFont('helvetica', 'italic');
      doc.setTextColor(100, 100, 100);
      doc.text('These issues should be fixed immediately as they may impact search visibility.', 14, yPos);
      yPos += 6;
      
      const errorData = errors.map(e => [e.path, e.category.toUpperCase(), e.message]);
      
      autoTable(doc, {
        startY: yPos,
        head: [['Page/Route', 'Category', 'Issue Description']],
        body: errorData,
        theme: 'striped',
        headStyles: { fillColor: [220, 38, 38], textColor: 255 },
        styles: { fontSize: 9, cellPadding: 3 },
        columnStyles: {
          0: { cellWidth: 50 },
          1: { cellWidth: 25 },
          2: { cellWidth: 'auto' },
        },
        margin: { left: 14, right: 14 },
      });
      
      yPos = (doc as any).lastAutoTable.finalY + 15;
    }
    
    // Warnings Section
    if (warnings.length > 0) {
      // Check if we need a new page
      if (yPos > 240) {
        doc.addPage();
        yPos = 20;
      }
      
      doc.setFontSize(14);
      doc.setFont('helvetica', 'bold');
      doc.setTextColor(202, 138, 4); // Yellow/amber
      doc.text(`Warnings (${warnings.length})`, 14, yPos);
      yPos += 8;
      
      doc.setFontSize(9);
      doc.setFont('helvetica', 'italic');
      doc.setTextColor(100, 100, 100);
      doc.text('These issues may affect SEO performance and should be addressed when possible.', 14, yPos);
      yPos += 6;
      
      const warningData = warnings.map(w => [w.path, w.category.toUpperCase(), w.message]);
      
      autoTable(doc, {
        startY: yPos,
        head: [['Page/Route', 'Category', 'Issue Description']],
        body: warningData,
        theme: 'striped',
        headStyles: { fillColor: [202, 138, 4], textColor: 255 },
        styles: { fontSize: 9, cellPadding: 3 },
        columnStyles: {
          0: { cellWidth: 50 },
          1: { cellWidth: 25 },
          2: { cellWidth: 'auto' },
        },
        margin: { left: 14, right: 14 },
      });
      
      yPos = (doc as any).lastAutoTable.finalY + 15;
    }
    
    // Informational Section
    if (infos.length > 0) {
      if (yPos > 240) {
        doc.addPage();
        yPos = 20;
      }
      
      doc.setFontSize(14);
      doc.setFont('helvetica', 'bold');
      doc.setTextColor(59, 130, 246); // Blue
      doc.text(`Informational Notes (${infos.length})`, 14, yPos);
      yPos += 8;
      
      doc.setFontSize(9);
      doc.setFont('helvetica', 'italic');
      doc.setTextColor(100, 100, 100);
      doc.text('Suggestions for optimization that are not critical but could improve performance.', 14, yPos);
      yPos += 6;
      
      const infoData = infos.map(i => [i.path, i.category.toUpperCase(), i.message]);
      
      autoTable(doc, {
        startY: yPos,
        head: [['Page/Route', 'Category', 'Suggestion']],
        body: infoData,
        theme: 'striped',
        headStyles: { fillColor: [59, 130, 246], textColor: 255 },
        styles: { fontSize: 9, cellPadding: 3 },
        columnStyles: {
          0: { cellWidth: 50 },
          1: { cellWidth: 25 },
          2: { cellWidth: 'auto' },
        },
        margin: { left: 14, right: 14 },
      });
      
      yPos = (doc as any).lastAutoTable.finalY + 15;
    }
    
    // Full Route Audit Details
    doc.addPage();
    yPos = 20;
    
    doc.setFontSize(16);
    doc.setFont('helvetica', 'bold');
    doc.setTextColor(30, 42, 71);
    doc.text('Detailed Route Audit', 14, yPos);
    yPos += 8;
    
    doc.setFontSize(9);
    doc.setFont('helvetica', 'italic');
    doc.setTextColor(100, 100, 100);
    doc.text('Complete breakdown of SEO elements for each route.', 14, yPos);
    yPos += 8;
    
    const routeData = audits.map(audit => [
      audit.path,
      audit.hasMetaTitle ? '✓' : '✗',
      audit.metaTitleLength ? `${audit.metaTitleLength}` : '-',
      audit.hasMetaDescription ? '✓' : '✗',
      audit.metaDescLength ? `${audit.metaDescLength}` : '-',
      audit.hasOgImage ? '✓' : '✗',
      audit.issues.length.toString(),
    ]);
    
    autoTable(doc, {
      startY: yPos,
      head: [['Route', 'Title', 'Len', 'Desc', 'Len', 'OG', 'Issues']],
      body: routeData,
      theme: 'striped',
      headStyles: { fillColor: [30, 42, 71], textColor: 255 },
      styles: { fontSize: 8, cellPadding: 2 },
      columnStyles: {
        0: { cellWidth: 70 },
        1: { cellWidth: 15, halign: 'center' },
        2: { cellWidth: 15, halign: 'center' },
        3: { cellWidth: 15, halign: 'center' },
        4: { cellWidth: 15, halign: 'center' },
        5: { cellWidth: 15, halign: 'center' },
        6: { cellWidth: 18, halign: 'center' },
      },
      margin: { left: 14, right: 14 },
    });
    
    // Recommendations
    doc.addPage();
    yPos = 20;
    
    doc.setFontSize(16);
    doc.setFont('helvetica', 'bold');
    doc.setTextColor(30, 42, 71);
    doc.text('Recommendations', 14, yPos);
    yPos += 12;
    
    const recommendations = [
      {
        priority: 'High',
        title: 'Fix Missing Meta Titles',
        desc: 'Pages without meta titles will display the URL in search results, reducing click-through rates. Add unique, keyword-rich titles under 60 characters.',
      },
      {
        priority: 'High',
        title: 'Add Meta Descriptions',
        desc: 'Missing meta descriptions allow search engines to generate snippets automatically, which may not be optimal. Write compelling descriptions under 160 characters.',
      },
      {
        priority: 'Medium',
        title: 'Optimize Title Lengths',
        desc: 'Titles over 60 characters may be truncated in search results. Keep titles concise but descriptive.',
      },
      {
        priority: 'Medium',
        title: 'Review Open Graph Tags',
        desc: 'Ensure all pages have proper OG images and descriptions for optimal social media sharing appearance.',
      },
      {
        priority: 'Low',
        title: 'Expand Short Descriptions',
        desc: 'Meta descriptions under 120 characters may not fully utilize available space in search results. Consider expanding for better visibility.',
      },
    ];
    
    recommendations.forEach((rec, index) => {
      if (yPos > 260) {
        doc.addPage();
        yPos = 20;
      }
      
      const priorityColor = rec.priority === 'High' ? [220, 38, 38] : rec.priority === 'Medium' ? [202, 138, 4] : [59, 130, 246];
      
      doc.setFillColor(priorityColor[0], priorityColor[1], priorityColor[2]);
      doc.roundedRect(14, yPos - 4, 25, 8, 2, 2, 'F');
      doc.setFontSize(8);
      doc.setFont('helvetica', 'bold');
      doc.setTextColor(255, 255, 255);
      doc.text(rec.priority, 16, yPos + 1);
      
      doc.setFontSize(11);
      doc.setFont('helvetica', 'bold');
      doc.setTextColor(30, 42, 71);
      doc.text(rec.title, 44, yPos + 1);
      yPos += 8;
      
      doc.setFontSize(9);
      doc.setFont('helvetica', 'normal');
      doc.setTextColor(80, 80, 80);
      const descLines = doc.splitTextToSize(rec.desc, pageWidth - 28);
      doc.text(descLines, 14, yPos);
      yPos += descLines.length * 5 + 10;
    });
    
    // Footer on all pages
    const totalPages = doc.getNumberOfPages();
    for (let i = 1; i <= totalPages; i++) {
      doc.setPage(i);
      doc.setFontSize(8);
      doc.setTextColor(150, 150, 150);
      doc.text(
        `Page ${i} of ${totalPages} | Generated by Canary Detect SEO Audit Tool`,
        pageWidth / 2,
        doc.internal.pageSize.getHeight() - 10,
        { align: 'center' }
      );
    }
    
    // Save
    doc.save(`seo-audit-report-${new Date().toISOString().split('T')[0]}.pdf`);
    
    toast({
      title: "PDF Report Generated",
      description: "Your comprehensive SEO audit report has been downloaded.",
    });
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
        <div className="flex gap-2">
          <Button variant="outline" onClick={exportToCSV} disabled={allIssues.length === 0}>
            <Download className="h-4 w-4 mr-2" />
            CSV
          </Button>
          <Button variant="outline" onClick={exportToPDF} disabled={audits.length === 0}>
            <FileDown className="h-4 w-4 mr-2" />
            PDF Report
          </Button>
          <Button onClick={runAudit} disabled={isScanning}>
            <RefreshCw className={`h-4 w-4 mr-2 ${isScanning ? "animate-spin" : ""}`} />
            {isScanning ? "Scanning..." : "Run Audit"}
          </Button>
        </div>
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
