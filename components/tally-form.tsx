"use client"

import Script from "next/script"

/**
 * Embeds the existing Winbid Tally form (the same form the previous site used),
 * so submissions keep arriving in the same place.
 */
export default function TallyForm({ formId }: { formId: string }) {
  const src = `https://tally.so/embed/${formId}?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1`

  return (
    <>
      <iframe
        data-tally-src={src}
        src={src}
        loading="lazy"
        width="100%"
        height={500}
        title="Request a construction estimate from Winbid Estimation"
        className="w-full rounded-lg border border-gray-100"
      />
      <Script
        src="https://tally.so/widgets/embed.js"
        strategy="lazyOnload"
        onLoad={() => {
          // @ts-expect-error - Tally attaches itself to window
          if (typeof window.Tally !== "undefined") window.Tally.loadEmbeds()
        }}
      />
      <noscript>
        <p className="mt-4 text-sm text-gray-600">
          Please enable JavaScript to use the form, or email your plans to admin@winbidestimation.co.
        </p>
      </noscript>
    </>
  )
}
