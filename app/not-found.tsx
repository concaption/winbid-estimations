import { Section, SectionHeading, PrimaryLink, OutlineLink } from "@/components/ui"

export const metadata = {
  title: "Page not found",
  robots: { index: false, follow: true },
}

export default function NotFound() {
  return (
    <Section>
      <SectionHeading
        as="h1"
        eyebrow="404"
        title="That page has moved or never existed"
        lead="The site was rebuilt recently, so an old link may no longer resolve. Everything below is a good place to pick up."
      />
      <div className="mt-8 flex flex-wrap gap-3">
        <PrimaryLink href="/">Back to home</PrimaryLink>
        <OutlineLink href="/services">See our services</OutlineLink>
        <OutlineLink href="/contact">Get an estimate</OutlineLink>
      </div>
    </Section>
  )
}
