import { Container, Section, SectionHeading, CTA, Breadcrumbs } from "@/components/ui"
import { projects } from "@/lib/site"

export const metadata = {
  title: "Projects We Have Estimated",
  description:
    "Industrial, residential and commercial projects estimated by Winbid Estimation, spanning all CSI divisions, from manufacturing facility expansions to retail developments.",
  alternates: { canonical: "/projects" },
}

export default function ProjectsPage() {
  return (
    <>
      <div className="border-b border-gray-100 bg-white pt-8">
        <Container>
          <Breadcrumbs items={[{ href: "/", label: "Home" }, { href: "/projects", label: "Projects" }]} />
        </Container>
      </div>

      <Section>
        <SectionHeading
          as="h1"
          eyebrow="Our projects"
          title="Completed projects"
          lead="A cross-section of the work we estimate, spanning residential, commercial and industrial sectors and the full range of CSI divisions."
        />
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {projects.map((p) => (
            <article
              key={p.slug}
              className="rounded-lg border border-gray-100 bg-white p-7 shadow-sm transition-shadow hover:shadow-md"
            >
              <p className="text-xs font-semibold uppercase tracking-widest text-[color:var(--color-brand)]">
                {p.sector}
              </p>
              <h2 className="mt-2 text-lg font-semibold">{p.title}</h2>
              <p className="mt-3 text-sm text-gray-600">{p.summary}</p>
            </article>
          ))}
        </div>
      </Section>

      <CTA title="Have a project like one of these?" />
    </>
  )
}
