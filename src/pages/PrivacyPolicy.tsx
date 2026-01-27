import Layout from "@/components/layout/Layout";
import SEOHead from "@/components/seo/SEOHead";
import { useLanguage } from "@/i18n/LanguageContext";
import { Mail, Phone, MapPin, ExternalLink } from "lucide-react";

const PrivacyPolicy = () => {
  const { isSpanish } = useLanguage();

  return (
    <Layout>
      <SEOHead 
        title={isSpanish 
          ? "Política de Privacidad | Canary Detect" 
          : "Privacy Policy | Canary Detect"}
        description={isSpanish
          ? "Política de Privacidad de Canary Detect - Descubra cómo recopilamos, usamos y protegemos sus datos personales de acuerdo con el RGPD."
          : "Privacy Policy for Canary Detect - Learn how we collect, use, and protect your personal data in accordance with GDPR."}
        canonical={isSpanish 
          ? "https://canary-detect.com/es/politica-de-privacidad" 
          : "https://canary-detect.com/privacy-policy"}
      />
      
      <div className="bg-gradient-to-b from-canary-navy to-canary-navy/95 py-16 md:py-20">
        <div className="container mx-auto px-4 md:px-6">
          <h1 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-white text-center">
            {isSpanish ? "Política de Privacidad" : "Privacy Policy"}
          </h1>
          <p className="text-white/70 text-center mt-4">
            {isSpanish ? "Última actualización: 27 de enero de 2026" : "Last Updated: 27 January 2026"}
          </p>
        </div>
      </div>

      <section className="py-12 md:py-16 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto prose prose-slate dark:prose-invert prose-headings:font-heading prose-headings:text-canary-navy prose-p:text-muted-foreground prose-li:text-muted-foreground prose-a:text-primary prose-a:no-underline hover:prose-a:underline prose-strong:text-canary-navy">
            
            {isSpanish ? (
              <>
                <p className="lead text-lg">
                  Esta Política de Privacidad describe cómo Camello Blanco S.L., que opera como Canary Detect ("nosotros", "nos" o "nuestro"), recopila, utiliza y protege su información personal cuando visita nuestro sitio web https://canary-detect.com (el "Sitio Web") y utiliza nuestros servicios.
                </p>
                <p>
                  Estamos comprometidos a proteger su privacidad y garantizar que sus datos personales se manejen de manera segura y responsable de acuerdo con el Reglamento General de Protección de Datos (RGPD) y las leyes españolas de protección de datos.
                </p>

                <h2>1. Quiénes Somos (El Responsable del Tratamiento)</h2>
                <p>La entidad legal responsable del tratamiento de sus datos personales es:</p>
                <ul className="list-none pl-0 space-y-2 bg-muted/30 p-6 rounded-lg">
                  <li><strong>Nombre Legal:</strong> Camello Blanco S.L.</li>
                  <li><strong>Nombre Comercial:</strong> Canary Detect</li>
                  <li><strong>NIF/CIF:</strong> B72431232</li>
                  <li><strong>Domicilio Social:</strong> Zona Industrial, 1, 35580 Playa Blanca, Lanzarote, España</li>
                  <li><strong>Email:</strong> <a href="mailto:info@canary-detect.com" className="inline-flex items-center gap-1"><Mail className="h-4 w-4" />info@canary-detect.com</a></li>
                  <li><strong>Teléfono:</strong> <a href="tel:+34711051071" className="inline-flex items-center gap-1"><Phone className="h-4 w-4" />+34 711 051 071</a></li>
                </ul>

                <h2>2. Qué Datos Personales Recopilamos</h2>
                <p>Podemos recopilar los siguientes tipos de datos personales:</p>
                <ul>
                  <li><strong>Datos de Identidad:</strong> Su nombre y apellidos.</li>
                  <li><strong>Datos de Contacto:</strong> Su dirección de correo electrónico, número de teléfono y dirección de la propiedad.</li>
                  <li><strong>Datos Técnicos:</strong> Dirección de protocolo de Internet (IP), tipo y versión del navegador, configuración de zona horaria y ubicación, tipos y versiones de complementos del navegador, sistema operativo y plataforma, y otra tecnología en los dispositivos que utiliza para acceder a este sitio web.</li>
                  <li><strong>Datos de Uso:</strong> Información sobre cómo utiliza nuestro sitio web y servicios.</li>
                </ul>
                <p>Recopilamos estos datos cuando usted:</p>
                <ul>
                  <li>Rellena un formulario de contacto en nuestro sitio web.</li>
                  <li>Solicita que le devolvamos la llamada.</li>
                  <li>Nos contacta directamente por correo electrónico o teléfono.</li>
                  <li>Utiliza nuestros servicios.</li>
                </ul>

                <h2>3. Cómo Utilizamos Sus Datos Personales</h2>
                <p>Utilizamos sus datos personales para los siguientes fines:</p>
                <ul>
                  <li><strong>Para Prestar Nuestros Servicios:</strong> Para responder a sus consultas, proporcionar presupuestos, programar citas y realizar servicios de detección y reparación de fugas.</li>
                  <li><strong>Para Comunicarnos Con Usted:</strong> Para enviarle información relacionada con su solicitud de servicio y gestionar nuestra relación comercial con usted.</li>
                  <li><strong>Para Mejorar Nuestro Sitio Web:</strong> Para analizar cómo se utiliza nuestro sitio web, lo que nos ayuda a mejorar su funcionalidad y experiencia de usuario.</li>
                </ul>

                <h2>4. Base Legal para el Tratamiento de Sus Datos</h2>
                <p>Solo procesaremos sus datos personales cuando la ley nos lo permita. Con más frecuencia, utilizaremos sus datos personales en las siguientes circunstancias:</p>
                <ul>
                  <li><strong>Ejecución de un Contrato:</strong> Cuando necesitemos procesar sus datos para ejecutar el contrato de servicio que estamos a punto de celebrar o hemos celebrado con usted.</li>
                  <li><strong>Intereses Legítimos:</strong> Cuando sea necesario para nuestros intereses legítimos (o los de un tercero) y sus intereses y derechos fundamentales no anulen esos intereses. Por ejemplo, para mejorar nuestros servicios.</li>
                  <li><strong>Consentimiento:</strong> Cuando nos haya dado su consentimiento explícito para hacerlo, por ejemplo, marcando una casilla para recibir comunicaciones comerciales.</li>
                </ul>

                <h2>5. Conservación de Datos</h2>
                <p>Solo conservaremos sus datos personales durante el tiempo necesario para cumplir los fines para los que los recopilamos, incluidos los fines de satisfacer cualquier requisito legal, contable o de informes. Por ley, debemos conservar la información básica sobre nuestros clientes (incluidos los Datos de Contacto, Identidad y Transacción) durante seis años después de que dejen de ser clientes a efectos fiscales.</p>

                <h2>6. Compartición de Datos y Terceros</h2>
                <p>No vendemos, comercializamos ni transferimos de otro modo sus datos personales a terceros. Esto no incluye a terceros de confianza que nos ayudan a operar nuestro sitio web o a llevar a cabo nuestro negocio, siempre que esas partes acepten mantener esta información confidencial. También podemos divulgar su información cuando creemos que la divulgación es apropiada para cumplir con la ley, hacer cumplir las políticas de nuestro sitio o proteger nuestros derechos, propiedad o seguridad o los de otros.</p>

                <h2>7. Sus Derechos de Protección de Datos</h2>
                <p>Bajo el RGPD, tiene los siguientes derechos en relación con sus datos personales:</p>
                <ul>
                  <li><strong>El derecho de acceso:</strong> Tiene derecho a solicitar copias de sus datos personales.</li>
                  <li><strong>El derecho de rectificación:</strong> Tiene derecho a solicitar que corrijamos cualquier información que considere inexacta o que completemos información que considere incompleta.</li>
                  <li><strong>El derecho de supresión:</strong> Tiene derecho a solicitar que eliminemos sus datos personales, bajo ciertas condiciones.</li>
                  <li><strong>El derecho a limitar el tratamiento:</strong> Tiene derecho a solicitar que limitemos el tratamiento de sus datos personales, bajo ciertas condiciones.</li>
                  <li><strong>El derecho de oposición al tratamiento:</strong> Tiene derecho a oponerse a nuestro tratamiento de sus datos personales, bajo ciertas condiciones.</li>
                  <li><strong>El derecho a la portabilidad de los datos:</strong> Tiene derecho a solicitar que transfiramos los datos que hemos recopilado a otra organización, o directamente a usted, bajo ciertas condiciones.</li>
                </ul>

                <h2>8. Cómo Ejercer Sus Derechos</h2>
                <p>Si desea ejercer cualquiera de los derechos mencionados anteriormente, póngase en contacto con nosotros en <a href="mailto:info@canary-detect.com">info@canary-detect.com</a>. Responderemos a su solicitud en el plazo de un mes. No cobraremos ninguna tarifa por procesar su solicitud a menos que su solicitud sea manifiestamente infundada o excesiva.</p>

                <h2>9. Política de Cookies</h2>
                <p>Nuestro sitio web puede utilizar cookies para mejorar su experiencia. Una cookie es un pequeño archivo que solicita permiso para colocarse en el disco duro de su ordenador. Recomendamos implementar un banner de consentimiento de cookies y crear una página separada y detallada de Política de Cookies que explique las cookies específicas que utiliza.</p>

                <h2>10. Seguridad de Sus Datos</h2>
                <p>Estamos comprometidos a garantizar que su información esté segura. Hemos implementado procedimientos físicos, electrónicos y de gestión adecuados para salvaguardar y proteger la información que recopilamos en línea para evitar el acceso o la divulgación no autorizados.</p>

                <h2>11. Cambios a Esta Política de Privacidad</h2>
                <p>Podemos actualizar esta política de privacidad de vez en cuando. Le notificaremos cualquier cambio publicando la nueva política de privacidad en esta página. Le aconsejamos que revise esta Política de Privacidad periódicamente para ver si hay cambios.</p>

                <h2>12. Cómo Presentar una Reclamación</h2>
                <p>Si no está satisfecho con nuestra respuesta a una queja o cree que no estamos procesando sus datos personales de acuerdo con la ley, puede presentar una reclamación ante la Agencia Española de Protección de Datos (AEPD).</p>
                <ul className="list-none pl-0 space-y-2 bg-muted/30 p-6 rounded-lg">
                  <li><strong>Sitio Web:</strong> <a href="https://www.aepd.es/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1"><ExternalLink className="h-4 w-4" />https://www.aepd.es/</a></li>
                  <li><strong>Dirección:</strong> <span className="inline-flex items-center gap-1"><MapPin className="h-4 w-4" />C/ Jorge Juan, 6, 28001 Madrid, España</span></li>
                </ul>

                <h2>13. Contacto</h2>
                <p>Si tiene alguna pregunta sobre esta Política de Privacidad, póngase en contacto con nosotros:</p>
                <ul className="list-none pl-0 space-y-2 bg-muted/30 p-6 rounded-lg">
                  <li><strong>Por email:</strong> <a href="mailto:info@canary-detect.com" className="inline-flex items-center gap-1"><Mail className="h-4 w-4" />info@canary-detect.com</a></li>
                  <li><strong>Por teléfono:</strong> <a href="tel:+34711051071" className="inline-flex items-center gap-1"><Phone className="h-4 w-4" />+34 711 051 071</a></li>
                  <li><strong>Por correo postal:</strong> <span className="inline-flex items-center gap-1"><MapPin className="h-4 w-4" />Zona Industrial, 1, 35580 Playa Blanca, Lanzarote, España</span></li>
                </ul>
              </>
            ) : (
              <>
                <p className="lead text-lg">
                  This Privacy Policy describes how Camello Blanco S.L., trading as Canary Detect ("we", "us", or "our"), collects, uses, and protects your personal information when you visit our website https://canary-detect.com (the "Website") and use our services.
                </p>
                <p>
                  We are committed to protecting your privacy and ensuring that your personal data is handled in a safe and responsible manner in accordance with the General Data Protection Regulation (GDPR) and Spanish data protection laws.
                </p>

                <h2>1. Who We Are (The Data Controller)</h2>
                <p>The legal entity responsible for processing your personal data is:</p>
                <ul className="list-none pl-0 space-y-2 bg-muted/30 p-6 rounded-lg">
                  <li><strong>Legal Name:</strong> Camello Blanco S.L.</li>
                  <li><strong>Trading Name:</strong> Canary Detect</li>
                  <li><strong>NIF/CIF:</strong> B72431232</li>
                  <li><strong>Registered Address:</strong> Zona Industrial, 1, 35580 Playa Blanca, Lanzarote, Spain</li>
                  <li><strong>Email:</strong> <a href="mailto:info@canary-detect.com" className="inline-flex items-center gap-1"><Mail className="h-4 w-4" />info@canary-detect.com</a></li>
                  <li><strong>Phone:</strong> <a href="tel:+34711051071" className="inline-flex items-center gap-1"><Phone className="h-4 w-4" />+34 711 051 071</a></li>
                </ul>

                <h2>2. What Personal Data We Collect</h2>
                <p>We may collect the following types of personal data:</p>
                <ul>
                  <li><strong>Identity Data:</strong> Your first name and last name.</li>
                  <li><strong>Contact Data:</strong> Your email address, telephone number, and property address.</li>
                  <li><strong>Technical Data:</strong> Internet protocol (IP) address, browser type and version, time zone setting and location, browser plug-in types and versions, operating system and platform, and other technology on the devices you use to access this website.</li>
                  <li><strong>Usage Data:</strong> Information about how you use our website and services.</li>
                </ul>
                <p>We collect this data when you:</p>
                <ul>
                  <li>Fill in a contact form on our website.</li>
                  <li>Request a callback.</li>
                  <li>Contact us directly by email or phone.</li>
                  <li>Use our services.</li>
                </ul>

                <h2>3. How We Use Your Personal Data</h2>
                <p>We use your personal data for the following purposes:</p>
                <ul>
                  <li><strong>To Provide Our Services:</strong> To respond to your inquiries, provide quotes, schedule appointments, and carry out leak detection and repair services.</li>
                  <li><strong>To Communicate With You:</strong> To send you information related to your service request and to manage our customer relationship with you.</li>
                  <li><strong>To Improve Our Website:</strong> To analyse how our website is used, which helps us to improve its functionality and user experience.</li>
                </ul>

                <h2>4. Legal Basis for Processing Your Data</h2>
                <p>We will only process your personal data when the law allows us to. Most commonly, we will use your personal data in the following circumstances:</p>
                <ul>
                  <li><strong>Performance of a Contract:</strong> Where we need to process your data to perform the service contract we are about to enter into or have entered into with you.</li>
                  <li><strong>Legitimate Interests:</strong> Where it is necessary for our legitimate interests (or those of a third party) and your interests and fundamental rights do not override those interests. For example, for improving our services.</li>
                  <li><strong>Consent:</strong> Where you have given us explicit consent to do so, for example, by ticking a box to receive marketing communications.</li>
                </ul>

                <h2>5. Data Retention</h2>
                <p>We will only retain your personal data for as long as necessary to fulfil the purposes we collected it for, including for the purposes of satisfying any legal, accounting, or reporting requirements. By law, we have to keep basic information about our customers (including Contact, Identity, and Transaction Data) for six years after they cease being customers for tax purposes.</p>

                <h2>6. Data Sharing and Third Parties</h2>
                <p>We do not sell, trade, or otherwise transfer your personal data to outside parties. This does not include trusted third parties who assist us in operating our website or conducting our business, so long as those parties agree to keep this information confidential. We may also release your information when we believe release is appropriate to comply with the law, enforce our site policies, or protect ours or others' rights, property, or safety.</p>

                <h2>7. Your Data Protection Rights</h2>
                <p>Under GDPR, you have the following rights in relation to your personal data:</p>
                <ul>
                  <li><strong>The right to access:</strong> You have the right to request copies of your personal data.</li>
                  <li><strong>The right to rectification:</strong> You have the right to request that we correct any information you believe is inaccurate or complete information you believe is incomplete.</li>
                  <li><strong>The right to erasure:</strong> You have the right to request that we erase your personal data, under certain conditions.</li>
                  <li><strong>The right to restrict processing:</strong> You have the right to request that we restrict the processing of your personal data, under certain conditions.</li>
                  <li><strong>The right to object to processing:</strong> You have the right to object to our processing of your personal data, under certain conditions.</li>
                  <li><strong>The right to data portability:</strong> You have the right to request that we transfer the data that we have collected to another organization, or directly to you, under certain conditions.</li>
                </ul>

                <h2>8. How to Exercise Your Rights</h2>
                <p>If you wish to exercise any of the rights set out above, please contact us at <a href="mailto:info@canary-detect.com">info@canary-detect.com</a>. We will respond to your request within one month. We will not charge a fee to process your request unless your request is manifestly unfounded or excessive.</p>

                <h2>9. Cookie Policy</h2>
                <p>Our website may use cookies to enhance your experience. A cookie is a small file that asks permission to be placed on your computer's hard drive. We recommend implementing a cookie consent banner and creating a separate, detailed Cookie Policy page that explains the specific cookies you use.</p>

                <h2>10. Security of Your Data</h2>
                <p>We are committed to ensuring that your information is secure. We have put in place suitable physical, electronic, and managerial procedures to safeguard and secure the information we collect online to prevent unauthorised access or disclosure.</p>

                <h2>11. Changes to This Privacy Policy</h2>
                <p>We may update this privacy policy from time to time. We will notify you of any changes by posting the new privacy policy on this page. You are advised to review this Privacy Policy periodically for any changes.</p>

                <h2>12. How to Lodge a Complaint</h2>
                <p>If you are not satisfied with our response to a complaint or believe we are not processing your personal data in accordance with the law, you can lodge a complaint with the Spanish Data Protection Authority (Agencia Española de Protección de Datos - AEPD).</p>
                <ul className="list-none pl-0 space-y-2 bg-muted/30 p-6 rounded-lg">
                  <li><strong>Website:</strong> <a href="https://www.aepd.es/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1"><ExternalLink className="h-4 w-4" />https://www.aepd.es/</a></li>
                  <li><strong>Address:</strong> <span className="inline-flex items-center gap-1"><MapPin className="h-4 w-4" />C/ Jorge Juan, 6, 28001 Madrid, Spain</span></li>
                </ul>

                <h2>13. Contact Us</h2>
                <p>If you have any questions about this Privacy Policy, please contact us:</p>
                <ul className="list-none pl-0 space-y-2 bg-muted/30 p-6 rounded-lg">
                  <li><strong>By email:</strong> <a href="mailto:info@canary-detect.com" className="inline-flex items-center gap-1"><Mail className="h-4 w-4" />info@canary-detect.com</a></li>
                  <li><strong>By phone:</strong> <a href="tel:+34711051071" className="inline-flex items-center gap-1"><Phone className="h-4 w-4" />+34 711 051 071</a></li>
                  <li><strong>By post:</strong> <span className="inline-flex items-center gap-1"><MapPin className="h-4 w-4" />Zona Industrial, 1, 35580 Playa Blanca, Lanzarote, Spain</span></li>
                </ul>
              </>
            )}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default PrivacyPolicy;
