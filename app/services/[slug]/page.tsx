import { notFound } from "next/navigation"
import { CheckCircle2 } from "lucide-react"
import { Container, Section, SectionHeading, CTA, FaqList, Breadcrumbs } from "@/components/ui"
import { services, site } from "@/lib/site"

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const service = services.find((s) => s.slug === slug)
  if (!service) return {}
  return {
    title: service.title,
    description: service.short,
    alternates: { canonical: `/services/${service.slug}` },
    openGraph: { title: `${service.title} | ${site.name}`, description: service.short },
  }
}

export default async function ServiceDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const service = services.find((s) => s.slug === slug)
  if (!service) notFound()

  const serviceLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.title,
    description: service.intro,
    url: `${site.url}/services/${service.slug}`,
    serviceType: service.title,
    provider: { "@id": `${site.url}/#organization` },
    areaServed: { "@type": "Country", name: "United States" },
    offers: {
      "@type": "Offer",
      priceCurrency: "USD",
      priceSpecification: {
        "@type": "PriceSpecification",
        minPrice: 200,
        priceCurrency: "USD",
      },
    },
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceLd) }} />
      <div className="border-b border-gray-100 bg-white pt-8">
        <Container>
          <Breadcrumbs
            items={[
              { href: "/", label: "Home" },
              { href: "/services", label: "Services" },
              { href: `/services/${service.slug}`, label: service.title },
            ]}
          />
        </Container>
      </div>

      <Section>
        <SectionHeading as="h1" eyebrow="Service" title={service.title} lead={service.intro} />

        <div className="mt-12 grid gap-10 md:grid-cols-5">
          <div className="md:col-span-3">
            <h2 className="text-xl font-semibold">What is included</h2>
            <ul className="mt-5 space-y-3">
              {service.bullets.map((b) => (
                <li key={b} className="flex items-start gap-3 text-gray-700">
                  <CheckCircle2
                    className="mt-1 h-4 w-4 shrink-0 text-[color:var(--color-brand)]"
                    aria-hidden="true"
                  />
                  {b}
                </li>
              ))}
            </ul>
          </div>

          <aside className="md:col-span-2">
            <div className="rounded-lg border border-gray-100 bg-[color:var(--color-surface-alt)] p-7">
              <h2 className="text-lg font-semibold">The essentials</h2>
              <dl className="mt-4 space-y-3 text-sm">
                <div>
                  <dt className="text-gray-500">Turnaround</dt>
                  <dd className="font-medium">24 to 48 hours on most projects</dd>
                </div>
                <div>
                  <dt className="text-gray-500">Starting price</dt>
                  <dd className="font-medium">From $200 for smaller projects</dd>
                </div>
                <div>
                  <dt className="text-gray-500">Monthly packages</dt>
                  <dd className="font-medium">From $1,500</dd>
                </div>
                <div>
                  <dt className="text-gray-500">Delivered as</dt>
                  <dd className="font-medium">Excel and PDF, by CSI division</dd>
                </div>
                <div>
                  <dt className="text-gray-500">Software</dt>
                  <dd className="font-medium">Plan Swift, RS Means, Bluebeam, Quest</dd>
                </div>
              </dl>
            </div>
          </aside>
        </div>
      </Section>

      <Section alt>
        <SectionHeading title={`${service.title}: common questions`} />
        <div className="mt-8">
          <FaqList items={service.faqs} />
        </div>
      </Section>

      <CTA title={`Ready for a ${service.title.toLowerCase()}?`} />
    </>
  )
}
