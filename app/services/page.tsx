import Link from "next/link"
import Image from "next/image"
import { ArrowRight } from "lucide-react"
import { Container, Section, SectionHeading, CTA, Breadcrumbs } from "@/components/ui"
import { csiDivisions, services, site } from "@/lib/site"

export const metadata = {
  title: "Construction Estimating Services",
  description:
    "Construction takeoff and estimating services: residential estimates, commercial bidding and a dedicated virtual estimator. All 16 CSI divisions, MEP included.",
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
          lead="Whether you are pricing a single custom home or a multi-trade commercial bid, the work is the same: measure everything, price it against real cost data, and set it out so the person reading your bid can follow it."
        />
        <div className="mt-12 space-y-6">
          {services.map((s) => (
            <article
              key={s.slug}
              className="grid gap-8 overflow-hidden rounded-lg border border-gray-100 bg-white shadow-sm transition-shadow hover:shadow-md md:grid-cols-5"
            >
              <div className="relative aspect-16/10 md:col-span-2 md:aspect-auto">
                <Image
                  src={s.image}
                  alt={s.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 40vw"
                  className="object-cover"
                />
              </div>
              <div className="p-8 md:col-span-3 md:pl-0">
              <h2 className="text-2xl font-semibold">{s.title}</h2>
              <p className="mt-3 text-gray-600">{s.intro}</p>
              <Link
                href={`/services/${s.slug}`}
                className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-[color:var(--color-brand)] hover:underline"
              >
                About {s.title} <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
              </div>
            </article>
          ))}
        </div>
      </Section>

      <Section alt>
        <SectionHeading
          eyebrow="Coverage"
          title="Expert oversight across all project divisions"
          lead="Division 1 through Division 16, from general requirements to electrical. Nothing is quietly dropped into an allowance because it was awkward to measure."
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
