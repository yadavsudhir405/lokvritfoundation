import {AppSection} from "@/app/components/app-section";

/**
 * The eight values, placed clockwise from the top of the wheel. `lines` is the
 * label split for the SVG, which has no automatic text wrapping.
 */
const CORE_VALUES = [
    {lines: ["Inclusivity"], color: "var(--color-primary)"},
    {lines: ["Equity"], color: "var(--color-secondary)"},
    {lines: ["Integrity"], color: "var(--color-accent)"},
    {lines: ["Community", "Ownership"], color: "var(--color-primary-dark)"},
    {lines: ["Sustainability"], color: "var(--color-primary)"},
    {lines: ["Collaboration"], color: "var(--color-secondary)"},
    {lines: ["Innovation"], color: "var(--color-accent)"},
    {lines: ["Respect and", "Dignity"], color: "var(--color-primary-dark)"},
];

const CENTER_X = 450;
const CENTER_Y = 350;
const ORBIT = 250;
const PETAL = 78;

function petalPosition(index: number) {
    // Start at 12 o'clock and step 45° clockwise for each of the eight values.
    const angle = (index * 2 * Math.PI) / CORE_VALUES.length;
    return {
        x: CENTER_X + ORBIT * Math.sin(angle),
        y: CENTER_Y - ORBIT * Math.cos(angle),
    };
}

function CoreValuesWheel() {
    return (
        <svg
            viewBox="0 0 900 700"
            role="img"
            aria-label="Wheel of LOKVRIT Foundation's eight core values"
            className="mx-auto w-full max-w-[760px]"
        >
            {/* Spokes first so the petals paint over their ends. */}
            {CORE_VALUES.map((value, i) => {
                const {x, y} = petalPosition(i);
                return (
                    <line
                        key={`spoke-${value.lines.join(" ")}`}
                        x1={CENTER_X}
                        y1={CENTER_Y}
                        x2={x}
                        y2={y}
                        stroke="var(--color-line)"
                        strokeWidth={2}
                    />
                );
            })}

            <circle cx={CENTER_X} cy={CENTER_Y} r={96} fill="var(--color-cream)"
                    stroke="var(--color-line)" strokeWidth={2}/>
            <text x={CENTER_X} y={CENTER_Y - 8} textAnchor="middle" fill="var(--color-primary)"
                  fontSize={22} fontWeight={700}>
                CORE
            </text>
            <text x={CENTER_X} y={CENTER_Y + 20} textAnchor="middle" fill="var(--color-primary)"
                  fontSize={22} fontWeight={700}>
                VALUES
            </text>

            {CORE_VALUES.map((value, i) => {
                const {x, y} = petalPosition(i);
                // Two-line labels straddle the centre; one-liners sit on it.
                const firstLineY = value.lines.length > 1 ? y - 6 : y + 6;
                return (
                    <g key={value.lines.join(" ")}>
                        <circle cx={x} cy={y} r={PETAL} fill={value.color}/>
                        <text textAnchor="middle" fill="#ffffff" fontSize={16} fontWeight={600}>
                            {value.lines.map((line, lineIndex) => (
                                <tspan key={line} x={x} y={firstLineY + lineIndex * 20}>
                                    {line}
                                </tspan>
                            ))}
                        </text>
                    </g>
                );
            })}
        </svg>
    );
}

export function CoreValues() {
    return (
        <AppSection id="core-values" header="CORE VALUES" headerShortDescription="What We Stand For"
                    bgColor="bg-white">
            {/* The wheel is unreadable at phone widths, so it gives way to a list. */}
            <div className="hidden md:block">
                <CoreValuesWheel/>
            </div>
            <ul className="list-disc pl-5 md:hidden">
                {CORE_VALUES.map((value) => (
                    <li key={value.lines.join(" ")} className="mb-2">
                        {value.lines.join(" ")}
                    </li>
                ))}
            </ul>
        </AppSection>
    );
}
