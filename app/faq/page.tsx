import { Container, Section, SectionHeading, CTA, FaqList, Breadcrumbs } from "@/components/ui"
import { faqs } from "@/lib/site"

export const metadata = {
  title: "FAQ: Turnaround, Pricing and Process",
  description:
    "How long a construction estimate takes, what it costs, the software we use and what you receive at the end. Straight answers with real numbers.",
  alternates: { canonical: "/faq" },
}

export default function FaqPage() {
  return (
    <>
      <div className="border-b border-gray-100 bg-white pt-8">
        <Container>
          <Breadcrumbs items={[{ href: "/", label: "Home" }, { href: "/faq", label: "FAQ" }]} />
        </Container>
      </div>

      <Section>
        <SectionHeading
          as="h1"
          eyebrow="FAQ"
          title="Questions contractors ask before sending plans"
          lead="Turnaround, price, software, and what lands in your inbox at the end. Real numbers rather than a request to get in touch for a quote. If your question is not here, call and ask."
        />
        <div className="mt-10">
          <FaqList items={faqs} />
        </div>
      </Section>

      <CTA />
    </>
  )
}
