import { getGreeting } from "@/lib/greeting";
import { Stack } from "@/components/Stack/Stack";
import { v4 as uuid } from "uuid";

export default function Home() {
  const techStack: Stack[] = [
    {
      stackName: "Frontend",
      cards: [
        { label: "React", description: "Next.js" },
        { label: "Tailwind CSS" },
        { label: "TypeScript" },
        { label: "JavaScript" },
        { label: "HTML5" },
        { label: "CSS" },
      ],
    },
    {
      stackName: "Backend",
      cards: [{ label: "Java" }, { label: "Firebase" }],
    },
  ];
  return (
    <main className="flex flex-col gap-5 w-5/6 mx-auto">
      <h1 className="text-xl">{getGreeting()}! 👋</h1>
      <section>
        <article className="w-fit" id="about-me">
          I’m currently studying computer science. I attend classes on
          programming, databases, frontend development and frontend design.
        </article>
      </section>
      <section id="tech-stack">
        {techStack.map((stack) => (
          <Stack {...stack} key={uuid()} />
        ))}
      </section>
      <section id="projects">
        <h2 className="font-bold text-3xl mt-10">Projects</h2>
      </section>
    </main>
  );
}
