import Link from "next/link"
import { services, site } from "@/lib/site"

export default function Footer() {
  return (
    <footer className="border-t border-gray-100 bg-[color:var(--color-surface-alt)]">
      <div className="mx-auto max-w-5xl px-6 py-16">
        <div className="grid gap-10 md:grid-cols-4">
          <div className="md:col-span-2">
            <div className="text-lg font-bold tracking-tight">
              Winbid<span className="text-[color:var(--color-brand)]"> Estimation</span>
            </div>
            <p className="mt-3 max-w-sm text-sm text-gray-600">
              Precision in every estimation, confidence in every project. Construction cost
              estimating for contractors, developers and homeowners across the United States.
            </p>
          </div>

          <div>
            <h2 className="text-sm font-semibold">Services</h2>
            <ul className="mt-3 space-y-2 text-sm text-gray-600">
              {services.map((s) => (
                <li key={s.slug}>
                  <Link href={`/services/${s.slug}`} className="hover:text-black">
                    {s.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-sm font-semibold">Contact</h2>
            <ul className="mt-3 space-y-2 text-sm text-gray-600">
              <li>
                <a href={`tel:${site.phoneHref}`} className="hover:text-black">
                  {site.phone}
                </a>
              </li>
              <li>
                <a href={`mailto:${site.email}`} className="hover:text-black">
                  {site.email}
                </a>
              </li>
              <li className="pt-1">
                <address className="not-italic">
                  {site.address.street}
                  <br />
                  {site.address.locality}, {site.address.region} {site.address.postalCode}
                </address>
              </li>
              <li className="pt-1">{site.hours}</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-gray-200 pt-6 text-sm text-gray-500 sm:flex-row sm:items-center sm:justify-between">
          <p>
            &copy; {new Date().getFullYear()} {site.name}. All rights reserved.
          </p>
          <div className="flex gap-5">
            <Link href="/faq" className="hover:text-black">
              FAQ
            </Link>
            <Link href="/privacy" className="hover:text-black">
              Privacy
            </Link>
            <Link href="/terms" className="hover:text-black">
              Terms
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
