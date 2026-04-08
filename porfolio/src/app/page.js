import { BackgroundBeams } from "./components/background-bean";
import Footer from "./components/footer";
import Navbar from "./components/navbar";
import { About } from "./sections/about-us";
import { Contact } from "./sections/contact";
import { Home } from "./sections/home";
import { Projects } from "./sections/projects";
import { Services } from "./sections/services";
import { Stack } from "./sections/stack";


export default function Page() {
  return (
    <div className="bg-blue-100/30 text-black">
      <BackgroundBeams/>
      <Navbar />
      <div className="flex flex-col">
      <Home />
      <About />
      <Stack />
      <Services />
      <Projects />
      <Contact />
      </div>
      <Footer/>
    </div>
  );
}