import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Container, Section, SectionHeading, CTA, Breadcrumbs } from "@/components/ui"
import { csiDivisions, services, site } from "@/lib/site"

export const metadata = {
  title: "Construction Estimating Services",
  description:
    "Residential cost estimation, commercial project bidding and a virtual estimation assistant. All sixteen CSI divisions, including industrial MEP, delivered in 24 to 48 hours.",
  alternates: { canonical: "/services" },
}

const servicesLd = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  itemListElement: services.map((s, i) => ({
    "@type": "ListItem",
    position: i + 1,
    item: {
      "@type": "Service",
      name: s.title,
      description: s.short,
      url: `${site.url}/services/${s.slug}`,
      provider: { "@id": `${site.url}/#organization` },
      areaServed: { "@type": "Country", name: "United States" },
    },
  })),
}

export default function ServicesPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(servicesLd) }} />
      <div className="border-b border-gray-100 bg-white pt-8">
        <Container>
          <Breadcrumbs items={[{ href: "/", label: "Home" }, { href: "/services", label: "Services" }]} />
        </Container>
      </div>

      <Section>
        <SectionHeading
          as="h1"
          eyebrow="Our services"
          title="Estimation solutions for every project type"
          lead="Winbid Estimation provides accurate estimates for residential, commercial and industrial work, so you can plan effectively and bid with confidence on precise cost assessments."
        />
        <div className="mt-12 space-y-6">
          {services.map((s) => (
            <article
              key={s.slug}
              className="rounded-lg border border-gray-100 bg-white p-8 shadow-sm transition-shadow hover:shadow-md"
            >
              <h2 className="text-2xl font-semibold">{s.title}</h2>
              <p className="mt-3 max-w-3xl text-gray-600">{s.intro}</p>
              <Link
                href={`/services/${s.slug}`}
                className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-[color:var(--color-brand)] hover:underline"
              >
                About {s.title} <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            </article>
          ))}
        </div>
      </Section>

      <Section alt>
        <SectionHeading
          eyebrow="Coverage"
          title="Expert oversight across all project divisions"
          lead="From general requirements to electrical work, our team covers site construction, concrete, masonry and every division in between."
        />
        <ul className="mt-10 grid grid-cols-2 gap-x-6 gap-y-3 md:grid-cols-4">
          {csiDivisions.map((d) => (
            <li key={d} className="text-sm text-gray-700">
              {d}
            </li>
          ))}
        </ul>
      </Section>

      <CTA />
    </>
  )
}
