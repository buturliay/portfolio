import Header from '@/components/Header';
import About from '@/components/About';
import Projects from '@/components/Projects';
import Experiences from '@/components/Experiences';
import Contact from '@/components/Contact';

export default function Home() {
  return (
    <main className="relative min-h-screen">
      <Header />
      <About />
      <Projects />
      <Experiences />
      <Contact />
    </main>
  );
}