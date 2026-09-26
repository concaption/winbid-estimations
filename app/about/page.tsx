import Image from "next/image"
import { Container, Section, SectionHeading, CTA, Breadcrumbs } from "@/components/ui"
import { csiDivisions, site } from "@/lib/site"

export const metadata = {
  title: "About Winbid Estimation",
  description:
    "Winbid Estimation is a construction cost estimating firm in Virginia Beach, Virginia, providing takeoffs and bid support to contractors, developers and homeowners across the United States.",
  alternates: { canonical: "/about" },
}

export default function AboutPage() {
  return (
    <>
      <div className="border-b border-gray-100 bg-white pt-8">
        <Container>
          <Breadcrumbs items={[{ href: "/", label: "Home" }, { href: "/about", label: "About" }]} />
        </Container>
      </div>

      <Section>
        <SectionHeading
          as="h1"
          eyebrow="Our company"
          title="Estimating built for the way contractors actually bid"
          lead="Winbid Estimation provides comprehensive estimation services, whether the job is a single residential build or a large-scale commercial bid."
        />
        <div className="relative mt-10 aspect-21/9 overflow-hidden rounded-lg">
          <Image
            src="/img/about/site.jpg"
            alt="Construction site being measured and priced"
            fill
            priority
            sizes="(max-width: 768px) 100vw, 900px"
            className="object-cover"
          />
        </div>

        <div className="mt-10 max-w-3xl space-y-5 text-gray-600">
          <p>
            We deliver precise, detailed cost breakdowns that help you make a vision real within a
            budget. Our expertise in industrial MEP and renovation work means complex projects are
            handled with the same confidence as straightforward ones.
          </p>
          <p>
            Every estimate is produced by experienced estimators using established platforms, Plan
            Swift for takeoff, RS Means for labour and material pricing, Bluebeam for plan review
            and Quest Estimating. Using recognised pricing databases matters, because it means the
            numbers hold up when a client or a general contractor questions a line.
          </p>
          <p>
            Most estimates are returned within 24 to 48 hours. Larger projects generally take two to
            four days, and when a bid date is tight, expedited delivery is available against a
            guaranteed date. Tell us the deadline when you send the plans and we work to it.
          </p>
        </div>
      </Section>

      <Section alt>
        <SectionHeading
          eyebrow="What we cover"
          title="Expert oversight across every division"
          lead="From general requirements to electrical work, including site construction, concrete, masonry and mechanical scope."
        />
        <div className="mt-10 grid gap-10 md:grid-cols-2">
          <ul className="grid grid-cols-2 gap-x-6 gap-y-3">
            {csiDivisions.map((d) => (
              <li key={d} className="text-sm text-gray-700">
                {d}
              </li>
            ))}
          </ul>
          <div className="relative aspect-4/3 overflow-hidden rounded-lg">
            <Image
              src="/img/about/facilities.jpg"
              alt="Building under construction across multiple trades"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
        </div>
      </Section>

      <Section>
        <SectionHeading eyebrow="Where we are" title="Based in Virginia Beach, working nationwide" />
        <div className="mt-8 grid gap-8 md:grid-cols-2">
          <div className="text-gray-600">
            <p>
              Our office is at {site.address.street}, {site.address.locality}, {site.address.region}{" "}
              {site.address.postalCode}. We work with general contractors, subcontractors,
              developers and homeowners across the United States, and plans can be sent from
              anywhere.
            </p>
            <p className="mt-4">
              Reach us on{" "}
              <a href={`tel:${site.phoneHref}`} className="font-medium text-black hover:underline">
                {site.phone}
              </a>{" "}
              or at{" "}
              <a href={`mailto:${site.email}`} className="font-medium text-black hover:underline">
                {site.email}
              </a>
              , {site.hours}.
            </p>
          </div>
          <dl className="rounded-lg border border-gray-100 bg-[color:var(--color-surface-alt)] p-7 text-sm">
            <div className="flex justify-between border-b border-gray-200 py-2">
              <dt className="text-gray-500">Typical turnaround</dt>
              <dd className="font-medium">24 to 48 hours</dd>
            </div>
            <div className="flex justify-between border-b border-gray-200 py-2">
              <dt className="text-gray-500">Larger projects</dt>
              <dd className="font-medium">2 to 4 days</dd>
            </div>
            <div className="flex justify-between border-b border-gray-200 py-2">
              <dt className="text-gray-500">Smaller projects from</dt>
              <dd className="font-medium">$200</dd>
            </div>
            <div className="flex justify-between py-2">
              <dt className="text-gray-500">Monthly packages from</dt>
              <dd className="font-medium">$1,500</dd>
            </div>
          </dl>
        </div>
      </Section>

      <CTA />
    </>
  )
}
