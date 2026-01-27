import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { Resend } from "https://esm.sh/resend@4.0.0";

const resend = new Resend(Deno.env.get("RESEND_API_KEY"));

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
};

interface LeakEnquiryRequest {
  name: string;
  phone: string;
  email: string;
  address?: string;
  message?: string;
  enquiryType: "Free Leak Test Enquiry" | "Full Leak Survey Request";
}

const handler = async (req: Request): Promise<Response> => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { name, phone, email, address, message, enquiryType }: LeakEnquiryRequest = await req.json();

    // Validate required fields
    if (!name || !phone || !email || !enquiryType) {
      console.error("Missing required fields:", { name, phone, email, enquiryType });
      throw new Error("Missing required fields: name, phone, email, and enquiryType are required");
    }

    console.log("Received leak enquiry:", { name, phone, email, address, enquiryType });

    const isFreeLeak = enquiryType === "Free Leak Test Enquiry";
    const subject = isFreeLeak 
      ? `🆓 Free Leak Test Request from ${name}`
      : `📋 Full Leak Survey Request from ${name}`;

    const emailHtml = `
      <!DOCTYPE html>
      <html>
        <head>
          <style>
            body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
            .container { max-width: 600px; margin: 0 auto; padding: 20px; }
            .header { background: ${isFreeLeak ? '#22c55e' : '#3b82f6'}; color: white; padding: 20px; border-radius: 8px 8px 0 0; }
            .header h1 { margin: 0; font-size: 24px; }
            .header .badge { display: inline-block; background: rgba(255,255,255,0.2); padding: 4px 12px; border-radius: 20px; font-size: 12px; margin-top: 8px; }
            .content { background: #f9fafb; padding: 20px; border: 1px solid #e5e7eb; border-top: none; }
            .field { margin-bottom: 16px; }
            .field-label { font-weight: bold; color: #6b7280; font-size: 12px; text-transform: uppercase; margin-bottom: 4px; }
            .field-value { font-size: 16px; color: #111827; }
            .message-box { background: white; padding: 16px; border-radius: 8px; border: 1px solid #e5e7eb; margin-top: 16px; }
            .footer { padding: 16px; text-align: center; color: #9ca3af; font-size: 12px; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h1>${isFreeLeak ? '🆓 Free Leak Test Request' : '📋 Full Leak Survey Request'}</h1>
              <span class="badge">${enquiryType}</span>
            </div>
            <div class="content">
              <div class="field">
                <div class="field-label">Customer Name</div>
                <div class="field-value">${name}</div>
              </div>
              <div class="field">
                <div class="field-label">Phone Number</div>
                <div class="field-value"><a href="tel:${phone}">${phone}</a></div>
              </div>
              <div class="field">
                <div class="field-label">Email Address</div>
                <div class="field-value"><a href="mailto:${email}">${email}</a></div>
              </div>
              ${address ? `
              <div class="field">
                <div class="field-label">Property Address</div>
                <div class="field-value">${address}</div>
              </div>
              ` : ''}
              ${message ? `
              <div class="message-box">
                <div class="field-label">Message</div>
                <div class="field-value">${message}</div>
              </div>
              ` : ''}
            </div>
            <div class="footer">
              Sent from Canary Detect Website • ${new Date().toLocaleString('en-GB', { timeZone: 'Atlantic/Canary' })}
            </div>
          </div>
        </body>
      </html>
    `;

    const emailResponse = await resend.emails.send({
      from: "Canary Detect Website <onboarding@resend.dev>",
      to: ["pete.ashcroft@sygma-solutions.com"],
      replyTo: email,
      subject: subject,
      html: emailHtml,
    });

    if (emailResponse.error) {
      console.error("Resend error:", emailResponse.error);
      throw new Error(emailResponse.error.message || "Failed to send email");
    }

    console.log("Email sent successfully:", emailResponse.data);

    return new Response(JSON.stringify({ success: true, messageId: emailResponse.data?.id }), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
        ...corsHeaders,
      },
    });
  } catch (error: any) {
    console.error("Error in send-leak-enquiry function:", error);
    return new Response(
      JSON.stringify({ error: error.message || "Failed to send enquiry" }),
      {
        status: 500,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  }
};

serve(handler);
