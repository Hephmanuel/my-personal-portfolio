import Header from "./components/Header";
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import About from "./components/About";
import ContactFooter from "./components/ContactFooter";
import Footer from "./components/Footer";

export default function Page() {
  return (
    <main className="bg-primaryBg min-h-screen">
      <Header />
      <Hero />
      <About />
      <Projects />
      <ContactFooter />
      <Footer />
    </main>
  );
}
