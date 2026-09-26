import Image from "next/image"

/**
 * The company's existing logo mark, kept as-is from the previous site,
 * set beside a typeset wordmark so it reads at small sizes.
 */
export default function Logo({ className = "" }: { className?: string }) {
  return (
    <span className={`flex items-center gap-2.5 ${className}`}>
      <Image
        src="/logo.png"
        alt=""
        width={87}
        height={64}
        priority
        className="h-9 w-auto"
      />
      <span className="leading-none">
        <span className="block text-[17px] font-bold tracking-tight">Winbid</span>
        <span className="mt-0.5 block text-[10px] font-semibold tracking-[0.18em] text-[color:var(--color-brand)]">
          ESTIMATION
        </span>
      </span>
    </span>
  )
}
