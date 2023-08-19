import { getGreeting } from "@/lib/greeting";
import { Stack } from "@/components/Stack/Stack";
import { v4 as uuid } from "uuid";
import Link from "next/link";

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
    <main className="flex flex-col gap-5 w-5/6 mx-auto mb-5">
      <h1 className="text-xl">{getGreeting()}! 👋</h1>
      <section>
        <p className="w-fit" id="about-me">
          I’m currently studying computer science. I attend classes on
          programming, databases, frontend development and frontend design.
        </p>
      </section>
      <hr className="bg-zinc-800 dark:bg-zinc-300 h-px border-0" />
      <section id="tech-stack">
        <h2 className="font-bold text-3xl mt-2">Tech stack</h2>
        {techStack.map((stack) => (
          <Stack {...stack} key={uuid()} />
        ))}
      </section>
      <hr className="bg-zinc-800 dark:bg-zinc-300 h-px border-0" />
      <section id="projects">
        <h2 className="font-bold text-3xl my-2">Projects</h2>
        <p>
          Tons of small projects, none of which are interesting, but you can
          checkout my{" "}
          <Link href="https://github.com/mirekbartunek" className="underline">
            GitHub
          </Link>
        </p>
      </section>
    </main>
  );
}
