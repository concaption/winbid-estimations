import Image from "next/image"

/**
 * The estimating and design software we work in, as a continuously scrolling
 * marquee. Where a brand mark is available as an open SVG we use it; the rest
 * are set as wordmarks rather than shipping unlicensed logo files.
 * The track duplicates its contents so the loop is seamless, and the animation
 * stops entirely for anyone who prefers reduced motion.
 */
type Tool = { name: string; note: string; file?: string }

const tools: Tool[] = [
  { name: "PlanSwift", note: "Quantity takeoff" },
  { name: "AutoCAD", note: "Drawing review and measurement", file: "/img/software/autocad.svg" },
  { name: "Bluebeam", note: "Plan markup" },
  { name: "Revit", note: "BIM model quantities", file: "/img/software/autodeskrevit.svg" },
  { name: "RS Means", note: "Labour and material pricing" },
  { name: "Primavera P6", note: "Programme and schedule", file: "/img/software/oracle.svg" },
  { name: "Quest Estimating", note: "Bid assembly" },
  { name: "Autodesk", note: "Construction Cloud files", file: "/img/software/autodesk.svg" },
]

function Card({ tool }: { tool: Tool }) {
  return (
    <li className="flex w-56 shrink-0 flex-col items-center gap-2 rounded-lg border border-gray-100 bg-white px-5 py-6 text-center shadow-sm">
      {tool.file ? (
        <Image
          src={tool.file}
          alt=""
          width={28}
          height={28}
          className="h-7 w-7 opacity-75"
        />
      ) : (
        <span className="flex h-7 items-center text-[13px] font-bold uppercase tracking-[0.12em] text-gray-400">
          {tool.name.split(" ")[0].slice(0, 9)}
        </span>
      )}
      <span className="text-sm font-semibold">{tool.name}</span>
      <span className="text-xs text-gray-500">{tool.note}</span>
    </li>
  )
}

export default function SoftwareStrip() {
  return (
    <div className="marquee relative overflow-hidden">
      <ul className="marquee-track flex w-max gap-4 py-1">
        {tools.map((t) => (
          <Card key={t.name} tool={t} />
        ))}
        {tools.map((t) => (
          <Card key={`${t.name}-dup`} tool={t} />
        ))}
      </ul>
      <div className="pointer-events-none absolute inset-y-0 left-0 w-16 bg-linear-to-r from-[color:var(--color-surface-alt)] to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-16 bg-linear-to-l from-[color:var(--color-surface-alt)] to-transparent" />
    </div>
  )
}
