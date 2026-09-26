import type React from "react"
import Link from "next/link"
import { site } from "@/lib/site"

export function Container({
  children,
  className = "",
}: {
  children: React.ReactNode
  className?: string
}) {
  return <div className={`mx-auto max-w-5xl px-6 ${className}`}>{children}</div>
}

export function Section({
  children,
  alt = false,
  className = "",
}: {
  children: React.ReactNode
  alt?: boolean
  className?: string
}) {
  return (
    <section
      className={`py-20 ${alt ? "bg-[color:var(--color-surface-alt)]" : "bg-white"} ${className}`}
    >
      <Container>{children}</Container>
    </section>
  )
}

export function SectionHeading({
  eyebrow,
  title,
  lead,
  as: Tag = "h2",
}: {
  eyebrow?: string
  title: string
  lead?: string
  as?: "h1" | "h2"
}) {
  return (
    <div className="max-w-3xl">
      {eyebrow && (
        <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-[color:var(--color-brand)]">
          {eyebrow}
        </p>
      )}
      <Tag
        className={`font-bold tracking-tight text-balance ${
          Tag === "h1" ? "text-4xl md:text-6xl" : "text-3xl md:text-4xl"
        }`}
      >
        {title}
      </Tag>
      {lead && <p className="mt-5 text-lg text-gray-600">{lead}</p>}
    </div>
  )
}

export function PrimaryLink({
  href,
  children,
}: {
  href: string
  children: React.ReactNode
}) {
  return (
    <Link
      href={href}
      className="inline-flex items-center justify-center rounded-md bg-black px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-gray-800"
    >
      {children}
    </Link>
  )
}

export function OutlineLink({
  href,
  children,
}: {
  href: string
  children: React.ReactNode
}) {
  return (
    <Link
      href={href}
      className="inline-flex items-center justify-center rounded-md border-2 border-black px-6 py-3 text-sm font-medium text-black transition-colors hover:bg-black hover:text-white"
    >
      {children}
    </Link>
  )
}

export function Breadcrumbs({ items }: { items: { href: string; label: string }[] }) {
  const ld = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.label,
      item: `${site.url}${item.href}`,
    })),
  }
  return (
    <nav aria-label="Breadcrumb" className="text-sm text-gray-500">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ld) }} />
      <ol className="flex flex-wrap gap-2">
        {items.map((item, i) => (
          <li key={item.href} className="flex gap-2">
            {i > 0 && <span aria-hidden="true">/</span>}
            {i === items.length - 1 ? (
              <span className="text-gray-700">{item.label}</span>
            ) : (
              <Link href={item.href} className="hover:text-black">
                {item.label}
              </Link>
            )}
          </li>
        ))}
      </ol>
    </nav>
  )
}

export function CTA({
  title = "Send us your plans and get a price",
  body = "Tell us the bid date and we work to it. Most estimates come back within 24 to 48 hours, fully broken down by CSI division.",
}: {
  title?: string
  body?: string
}) {
  return (
    <Section alt>
      <div className="rounded-lg border border-gray-100 bg-white p-10 shadow-sm">
        <h2 className="text-3xl font-bold tracking-tight text-balance">{title}</h2>
        <p className="mt-4 max-w-2xl text-gray-600">{body}</p>
        <div className="mt-8 flex flex-wrap gap-3">
          <PrimaryLink href="/contact">Get an estimate</PrimaryLink>
          <a
            href={`tel:${site.phoneHref}`}
            className="inline-flex items-center justify-center rounded-md border-2 border-black px-6 py-3 text-sm font-medium transition-colors hover:bg-black hover:text-white"
          >
            Call {site.phone}
          </a>
        </div>
      </div>
    </Section>
  )
}

export function FaqList({ items }: { items: readonly { q: string; a: string }[] }) {
  const ld = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  }
  return (
    <div>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ld) }} />
      <dl className="divide-y divide-gray-100 border-y border-gray-100">
        {items.map((f) => (
          <div key={f.q} className="py-6">
            <dt className="text-lg font-semibold">{f.q}</dt>
            <dd className="mt-2 text-gray-600">{f.a}</dd>
          </div>
        ))}
      </dl>
    </div>
  )
}
