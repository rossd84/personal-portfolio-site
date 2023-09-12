import About from "./components/About";
import Contact from "./components/Contact";
import Home from "./components/Home";
import Skills from "./components/Skills";
import Work from "./components/Work";
import PageLayout from "./components/layouts/PageLayout";

function App() {
  return (
    <PageLayout>
      <Home />
      <About />
      <Skills />
      <Work />
      <Contact />
    </PageLayout>
  );
}

export default App;
