import { SectionContainer } from "@/components/home/section-container";

type PhasePlaceholderProps = {
  phase: number;
  title: string;
  sections: string[];
};

/** Dev-only marker for upcoming homepage phases (hidden in production). */
export function PhasePlaceholder({ phase, title, sections }: PhasePlaceholderProps) {
  if (process.env.NODE_ENV === "production") return null;

  return (
    <SectionContainer className="border-y border-dashed border-[#d9d9d9] bg-[#fafafa] py-10">
      <p className="text-xs font-semibold uppercase tracking-widest text-[#828282]">
        Phase {phase} — coming next
      </p>
      <h3 className="mt-2 text-lg font-medium text-[#253746]">{title}</h3>
      <ul className="mt-3 list-inside list-disc text-sm text-[#828282]">
        {sections.map((s) => (
          <li key={s}>{s}</li>
        ))}
      </ul>
    </SectionContainer>
  );
}
