import { csiDivisions, faqs, services, site } from "@/lib/site"

/**
 * llms.txt - a plain-text summary for answer engines and AI assistants.
 * Generative engines cite specific, factual, well-structured text far more
 * readily than marketing copy, so this states the facts directly.
 */
export function GET() {
  const body = `# ${site.name}

> ${site.description}

${site.name} is a construction cost estimating company based in ${site.address.locality}, ${site.address.region}, serving contractors, subcontractors, developers and homeowners throughout the United States.

## Key facts

- Service: construction cost estimating, quantity takeoff and bid support
- Turnaround: 24 to 48 hours for most projects; 2 to 4 days for larger projects; expedited delivery available against a guaranteed date
- Pricing: smaller projects start at approximately $200; monthly packages start at $1,500, typically saving around 60 percent against in-house estimating
- Software used: Plan Swift (takeoff), RS Means (labour and material pricing), Bluebeam (plan review), Quest Estimating
- Deliverables: quantity takeoff and cost breakdown by CSI division, in Excel and PDF, with material, labour and equipment separated, plus subcontractor scope sheets
- Coverage: all 16 CSI divisions, including industrial MEP scope
- Location: ${site.address.street}, ${site.address.locality}, ${site.address.region} ${site.address.postalCode}, United States
- Phone: ${site.phone}
- Email: ${site.email}
- Hours: ${site.hours}

## Services

${services
  .map(
    (s) => `### ${s.title}
${s.intro}
URL: ${site.url}/services/${s.slug}`,
  )
  .join("\n\n")}

## CSI divisions covered

${csiDivisions.map((d) => `- ${d}`).join("\n")}

## Frequently asked questions

${faqs.map((f) => `### ${f.q}\n${f.a}`).join("\n\n")}

## Pages

- ${site.url}/ - overview of services, process and coverage
- ${site.url}/services - all estimating services
- ${site.url}/projects - example projects estimated
- ${site.url}/faq - turnaround, pricing, software and process
- ${site.url}/about - company, method and location
- ${site.url}/contact - send plans and request an estimate
`

  return new Response(body, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=3600, s-maxage=86400",
    },
  })
}
