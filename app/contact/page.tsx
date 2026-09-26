import Image from "next/image"
import { Mail, MapPin, Phone, Clock } from "lucide-react"
import { Container, Section, SectionHeading, Breadcrumbs } from "@/components/ui"
import TallyForm from "@/components/tally-form"
import { site } from "@/lib/site"

export const metadata = {
  title: "Contact Us",
  description:
    "Send your construction plans and get a priced estimate in 24 to 48 hours. Call +1 804 577 8922 or email admin@winbidestimation.co. Virginia Beach, VA.",
  alternates: { canonical: "/contact" },
}

const contactLd = {
  "@context": "https://schema.org",
  "@type": "ContactPage",
  name: "Contact Winbid Estimation",
  url: `${site.url}/contact`,
  mainEntity: { "@id": `${site.url}/#organization` },
}

export default function ContactPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(contactLd) }} />
      <div className="border-b border-gray-100 bg-white pt-8">
        <Container>
          <Breadcrumbs items={[{ href: "/", label: "Home" }, { href: "/contact", label: "Contact" }]} />
        </Container>
      </div>

      <Section>
        <SectionHeading
          as="h1"
          eyebrow="Contact us"
          title="Get in touch with us"
          lead="Send the plans and the bid date. We confirm scope, price and the delivery date in writing before any work starts, so there is no surprise at either end."
        />

        <div className="mt-12 grid gap-12 md:grid-cols-5">
          <div className="md:col-span-2">
            <h2 className="text-lg font-semibold">Contact details</h2>
            <ul className="mt-5 space-y-5 text-gray-700">
              <li className="flex gap-3">
                <Phone className="mt-1 h-5 w-5 shrink-0 text-[color:var(--color-brand)]" aria-hidden="true" />
                <a href={`tel:${site.phoneHref}`} className="hover:text-black">
                  {site.phone}
                </a>
              </li>
              <li className="flex gap-3">
                <Mail className="mt-1 h-5 w-5 shrink-0 text-[color:var(--color-brand)]" aria-hidden="true" />
                <span>
                  <a href={`mailto:${site.email}`} className="block hover:text-black">
                    {site.email}
                  </a>
                  <a href={`mailto:${site.emailAlt}`} className="block text-sm text-gray-500 hover:text-black">
                    {site.emailAlt}
                  </a>
                </span>
              </li>
              <li className="flex gap-3">
                <MapPin className="mt-1 h-5 w-5 shrink-0 text-[color:var(--color-brand)]" aria-hidden="true" />
                <address className="not-italic">
                  {site.address.street}
                  <br />
                  {site.address.locality}, {site.address.region} {site.address.postalCode}
                </address>
              </li>
              <li className="flex gap-3">
                <Clock className="mt-1 h-5 w-5 shrink-0 text-[color:var(--color-brand)]" aria-hidden="true" />
                {site.hours}
              </li>
            </ul>

            <div className="relative mt-8 aspect-4/3 overflow-hidden rounded-lg">
              <Image
                src="/img/contact.jpg"
                alt="Plans being reviewed before an estimate"
                fill
                sizes="(max-width: 768px) 100vw, 40vw"
                className="object-cover"
              />
            </div>

            <div className="mt-8 rounded-lg bg-[color:var(--color-surface-alt)] p-6 text-sm text-gray-600">
              <p className="font-medium text-black">Sending plans by email?</p>
              <p className="mt-2">
                Attach your drawings and specifications, and include the bid date so we can work to
                it. Large plan sets can be sent as a shared link.
              </p>
            </div>
          </div>

          <div className="md:col-span-3">
            <h2 className="text-lg font-semibold">Request an estimate</h2>
            <p className="mt-2 text-sm text-gray-600">
              Tell us about the project and we will come back with scope, price and a delivery date.
            </p>
            <div className="mt-6">
              <TallyForm formId={site.tallyFormId} />
            </div>
          </div>
        </div>
      </Section>
    </>
  )
}
