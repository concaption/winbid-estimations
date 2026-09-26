import { Section, SectionHeading } from "@/components/ui"
import { site } from "@/lib/site"

export const metadata = {
  title: "Terms and Conditions",
  description:
    "The terms under which Winbid Estimation provides construction cost estimating services, including scope, turnaround and the basis of our estimates.",
  alternates: { canonical: "/terms" },
}

export default function TermsPage() {
  return (
    <Section>
      <SectionHeading as="h1" title="Terms and Conditions" lead="Last updated 26 September 2026." />
      <div className="mt-10 max-w-3xl space-y-6 text-gray-600">
        <div>
          <h2 className="text-xl font-semibold text-black">Scope of work</h2>
          <p className="mt-2">
            Each estimate is prepared against the drawings, specifications and instructions supplied
            at the time of the request. Scope, price and delivery date are confirmed in writing
            before work begins. Changes to the drawings after that point may require a revised
            estimate.
          </p>
        </div>
        <div>
          <h2 className="text-xl font-semibold text-black">Basis of our estimates</h2>
          <p className="mt-2">
            Quantities are taken off from the documents provided. Pricing is drawn from recognised
            cost databases and current supplier data at the time of preparation. An estimate is a
            professional assessment of likely cost, not a guaranteed price or a substitute for
            supplier and subcontractor quotations.
          </p>
        </div>
        <div>
          <h2 className="text-xl font-semibold text-black">Turnaround</h2>
          <p className="mt-2">
            Standard turnaround is 24 to 48 hours, with larger projects typically taking two to four
            days. Where an expedited delivery date is agreed, an additional fee may apply and the
            agreed date is guaranteed.
          </p>
        </div>
        <div>
          <h2 className="text-xl font-semibold text-black">Confidentiality</h2>
          <p className="mt-2">
            Drawings, specifications and pricing you share with us are treated as confidential and
            are used only to prepare your estimate.
          </p>
        </div>
        <div>
          <h2 className="text-xl font-semibold text-black">Contact</h2>
          <p className="mt-2">
            Questions about these terms can be sent to{" "}
            <a href={`mailto:${site.email}`} className="font-medium text-black hover:underline">
              {site.email}
            </a>
            .
          </p>
        </div>
      </div>
    </Section>
  )
}
