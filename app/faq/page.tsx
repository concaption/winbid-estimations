import { Container, Section, SectionHeading, CTA, FaqList, Breadcrumbs } from "@/components/ui"
import { faqs } from "@/lib/site"

export const metadata = {
  title: "FAQ: Turnaround, Pricing and Process",
  description:
    "How long a construction estimate takes, what it costs, which estimating software we use, and how to send your plans. Answers from Winbid Estimation.",
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
          lead="Turnaround, cost, software and process. If your question is not here, call us and ask."
        />
        <div className="mt-10">
          <FaqList items={faqs} />
        </div>
      </Section>

      <CTA />
    </>
  )
}
