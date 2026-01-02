import Header from "./components/Header";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import About from "./components/About";
import ContactFooter from "./components/ContactFooter";
import Footer from "./components/Footer";


//Apologies in advance. I decided to use NextJS to task myself with my current skillset and utlilize its responsive capabilities.
// NextJs utilizes inline styling and can appear all over the place. 
// I have therefore attached comments to necessary sections to enhance code readability.


//Main routing page
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
