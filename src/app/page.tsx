import About from "./components/about";
import Intro from "./components/intro";
import Projects from "./components/projects";

export default function Home() {
  return (
    <main className="flex flex-col items-center pt-20 md:pt-28 px-4">
      <Intro />
      <About />
      <Projects />
    </main>
  );
}
