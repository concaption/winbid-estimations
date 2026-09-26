import { Section, SectionHeading } from "@/components/ui"
import { site } from "@/lib/site"

export const metadata = {
  title: "Privacy Policy",
  description:
    "How Winbid Estimation collects, uses and protects the information you share when requesting a construction estimate.",
  alternates: { canonical: "/privacy" },
}

export default function PrivacyPage() {
  return (
    <Section>
      <SectionHeading as="h1" title="Privacy Policy" lead="Last updated 26 September 2026." />
      <div className="mt-10 max-w-3xl space-y-6 text-gray-600">
        <div>
          <h2 className="text-xl font-semibold text-black">What we collect</h2>
          <p className="mt-2">
            When you contact us or submit the estimate request form, we collect the name, email
            address, phone number and project details you provide, along with any drawings or
            specifications you send us.
          </p>
        </div>
        <div>
          <h2 className="text-xl font-semibold text-black">How we use it</h2>
          <p className="mt-2">
            We use your information to prepare your estimate, respond to your enquiry and keep in
            touch about the work in progress. We do not sell your information, and we do not share
            your drawings or project details with third parties outside the preparation of your
            estimate.
          </p>
        </div>
        <div>
          <h2 className="text-xl font-semibold text-black">Your project documents</h2>
          <p className="mt-2">
            Plans and specifications you send remain yours. We store them only as long as needed to
            complete and support your estimate, and we will delete them on request.
          </p>
        </div>
        <div>
          <h2 className="text-xl font-semibold text-black">Contact</h2>
          <p className="mt-2">
            For any question about this policy, or to ask us to delete your information, email{" "}
            <a href={`mailto:${site.email}`} className="font-medium text-black hover:underline">
              {site.email}
            </a>{" "}
            or call {site.phone}.
          </p>
        </div>
      </div>
    </Section>
  )
}
