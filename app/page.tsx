import Link from "next/link"
import Image from "next/image"
import SoftwareStrip from "@/components/software-strip"
import { ArrowRight, Clock, FileSpreadsheet, Ruler, CheckCircle2 } from "lucide-react"
import { Container, Section, SectionHeading, PrimaryLink, OutlineLink, CTA, FaqList } from "@/components/ui"
import { csiDivisions, faqs, projects, services, site } from "@/lib/site"

export const metadata = {
  title: `${site.name} - ${site.tagline}`,
  description:
    "Construction estimating and takeoff services for contractors. Residential, commercial and industrial estimates by CSI division, in 24 to 48 hours, from $200.",
  alternates: { canonical: "/" },
}

const stats = [
  { value: "24-48 hrs", label: "Typical turnaround" },
  { value: "16", label: "CSI divisions covered" },
  { value: "From $200", label: "Smaller projects" },
  { value: "~60%", label: "Saved against in-house" },
]

export default function HomePage() {
  return (
    <>
      <section className="border-b border-gray-100 bg-white py-20 md:py-28">
        <Container>
          <div className="grid items-center gap-12 md:grid-cols-2">
          <div>
            <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-[color:var(--color-brand)]">
              Construction cost estimating
            </p>
            <h1 className="text-4xl font-bold tracking-tight text-balance md:text-6xl">
              Win bids with expert cost estimation
            </h1>
            <p className="mt-6 text-lg text-gray-600">
              Send us the plans and the bid date. You get a line-by-line takeoff priced by CSI
              division, with labour and material separated, usually inside 24 to 48 hours. Bid with a
              number you can defend, and stop losing evenings to measuring drawings.
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <PrimaryLink href="/contact">Get an estimate</PrimaryLink>
              <OutlineLink href="/services">See what we estimate</OutlineLink>
            </div>
          </div>
          <div className="relative aspect-4/3 overflow-hidden rounded-lg">
            <Image
              src="/img/hero.jpg"
              alt="Construction site under way, the kind of project Winbid Estimation prices"
              fill
              priority
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
          </div>

          <dl className="mt-16 grid grid-cols-2 gap-8 border-t border-gray-100 pt-10 md:grid-cols-4">
            {stats.map((s) => (
              <div key={s.label}>
                <dt className="sr-only">{s.label}</dt>
                <dd>
                  <span className="block text-2xl font-bold md:text-3xl">{s.value}</span>
                  <span className="mt-1 block text-sm text-gray-500">{s.label}</span>
                </dd>
              </div>
            ))}
          </dl>
        </Container>
      </section>

      <Section>
        <SectionHeading
          eyebrow="Our services"
          title="Estimation services under one roof"
          lead="Residential and commercial estimates, industrial MEP scope and renovation work, plus a dedicated estimator for contractors who bid every week."
        />
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {services.map((s) => (
            <article
              key={s.slug}
              className="overflow-hidden rounded-lg border border-gray-100 bg-white shadow-sm transition-shadow hover:shadow-md"
            >
              <div className="relative aspect-16/10">
                <Image
                  src={s.image}
                  alt={s.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover"
                />
              </div>
              <div className="p-7">
              <h3 className="text-xl font-semibold">{s.title}</h3>
              <p className="mt-3 text-gray-600">{s.short}</p>
              <Link
                href={`/services/${s.slug}`}
                className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-[color:var(--color-brand)] hover:underline"
              >
                Read more <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
              </div>
            </article>
          ))}
        </div>
      </Section>

      <Section alt>
        <SectionHeading
          eyebrow="How it works"
          title="Plans in, priced estimate out"
          lead="No procurement process, no onboarding call, no minimum commitment. Three steps from drawings to a number you can put in a bid."
        />
        <ol className="mt-12 grid gap-8 md:grid-cols-3">
          {[
            {
              icon: FileSpreadsheet,
              title: "1. Send your plans",
              body: "Email your drawings to admin@winbidestimation.co or use the form. Include the bid date and any specifications or allowances.",
            },
            {
              icon: Ruler,
              title: "2. We take off and price",
              body: "Quantity takeoff in Plan Swift, priced with RS Means and live supplier data, broken out by division with labour and material separated.",
            },
            {
              icon: Clock,
              title: "3. You bid",
              body: "You receive the estimate in Excel and PDF, plus scope sheets to send to subcontractors. Usually within 24 to 48 hours.",
            },
          ].map((step) => (
            <li key={step.title} className="rounded-lg bg-white p-7 shadow-sm">
              <step.icon className="h-6 w-6 text-[color:var(--color-brand)]" aria-hidden="true" />
              <h3 className="mt-4 text-lg font-semibold">{step.title}</h3>
              <p className="mt-2 text-gray-600">{step.body}</p>
            </li>
          ))}
        </ol>
      </Section>

      <Section>
        <SectionHeading
          eyebrow="Coverage"
          title="Every division, on every project"
          lead="Winbid Estimation covers all sixteen CSI divisions, from general requirements through to electrical, including industrial MEP scope."
        />
        <ul className="mt-10 grid grid-cols-2 gap-x-6 gap-y-3 md:grid-cols-4">
          {csiDivisions.map((d) => (
            <li key={d} className="flex items-start gap-2 text-sm text-gray-700">
              <CheckCircle2
                className="mt-0.5 h-4 w-4 shrink-0 text-[color:var(--color-brand)]"
                aria-hidden="true"
              />
              {d}
            </li>
          ))}
        </ul>
      </Section>

      <Section alt>
        <SectionHeading
          eyebrow="Our toolkit"
          title="The software behind the numbers"
          lead="Measured, priced and checked in the platforms your team already knows. When a general contractor questions a line, the source of the number is something they recognise."
        />
        <div className="mt-12">
          <SoftwareStrip />
        </div>
      </Section>

      <Section>
        <SectionHeading
          eyebrow="Our projects"
          title="Work we have estimated"
          lead="Projects across residential, commercial and industrial sectors, spanning the full range of CSI divisions."
        />
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {projects.map((p) => (
            <article key={p.slug} className="overflow-hidden rounded-lg border border-gray-100 bg-white shadow-sm">
              <div className="relative aspect-16/10">
                <Image
                  src={p.image}
                  alt={p.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover"
                />
              </div>
              <div className="p-7">
                <p className="text-xs font-semibold uppercase tracking-widest text-[color:var(--color-brand)]">
                  {p.sector}
                </p>
                <h3 className="mt-2 text-lg font-semibold">{p.title}</h3>
                <p className="mt-3 text-sm text-gray-600">{p.summary}</p>
              </div>
            </article>
          ))}
        </div>
        <div className="mt-10">
          <OutlineLink href="/projects">View all projects</OutlineLink>
        </div>
      </Section>

      <Section alt>
        <SectionHeading
          eyebrow="Questions"
          title="What contractors ask us first"
          lead="Turnaround, pricing and the software behind the numbers."
        />
        <div className="mt-10">
          <FaqList items={faqs.slice(0, 4)} />
        </div>
        <div className="mt-8">
          <OutlineLink href="/faq">Read all FAQs</OutlineLink>
        </div>
      </Section>

      <CTA />
    </>
  )
}
