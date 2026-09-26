import Image from "next/image"

/**
 * The estimating and design software we work in.
 * Where a brand mark is available as an open SVG we use it; the rest are set
 * as wordmarks rather than shipping unlicensed logo files.
 */
const withMark = [
  { name: "AutoCAD", file: "/img/software/autocad.svg", note: "Drawing review and takeoff" },
  { name: "Revit", file: "/img/software/autodeskrevit.svg", note: "BIM model quantities" },
  { name: "Primavera P6", file: "/img/software/oracle.svg", note: "Programme and schedule" },
  { name: "Autodesk", file: "/img/software/autodesk.svg", note: "Construction Cloud files" },
]

const wordmarks = [
  { name: "PlanSwift", note: "Quantity takeoff" },
  { name: "Bluebeam", note: "Plan markup and measurement" },
  { name: "RS Means", note: "Labour and material pricing" },
  { name: "Quest Estimating", note: "Bid assembly" },
]

export default function SoftwareStrip() {
  return (
    <div>
      <ul className="grid grid-cols-2 gap-4 md:grid-cols-4">
        {withMark.map((s) => (
          <li
            key={s.name}
            className="flex flex-col items-center gap-3 rounded-lg border border-gray-100 bg-white px-4 py-6 text-center shadow-sm"
          >
            <Image
              src={s.file}
              alt={`${s.name} logo`}
              width={32}
              height={32}
              className="h-8 w-8 opacity-80"
            />
            <span className="text-sm font-semibold">{s.name}</span>
            <span className="text-xs text-gray-500">{s.note}</span>
          </li>
        ))}
      </ul>

      <ul className="mt-4 grid grid-cols-2 gap-4 md:grid-cols-4">
        {wordmarks.map((s) => (
          <li
            key={s.name}
            className="flex flex-col items-center gap-2 rounded-lg border border-gray-100 bg-white px-4 py-6 text-center shadow-sm"
          >
            <span className="text-base font-bold tracking-tight">{s.name}</span>
            <span className="text-xs text-gray-500">{s.note}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}
