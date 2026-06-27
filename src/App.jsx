import { useState } from "react";
import About from "./components/About";
import ClosingCTA from "./components/ClosingCTA";
import FAQ from "./components/FAQ";
import Features from "./components/Features";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import SocialProof from "./components/SocialProof";
import Testimonials from "./components/Testimonials";
import { content } from "./data/content";
function App() {
  const [lang, setLang] = useState("en");

  const changeLanguageHandler = () => {
    setLang((prev) => (prev === "en" ? "ar" : "en"));
  };

  return (
    <div dir={lang === "ar" ? "rtl" : "ltr"}>
      <Header
        changeLanguageHandler={changeLanguageHandler}
        translations={content[lang].header}
      />
      <Hero translations={content[lang].hero} />
      <SocialProof translations={content[lang].socialProof} />
      <Features translations={content[lang].features} />
      <About translations={content[lang].about} />
      <Testimonials translations={content[lang].testimonials} />
      <FAQ translations={content[lang].faq} />
      <ClosingCTA translations={content[lang].closingCta} />
      <Footer translations={content[lang].footer} />
    </div>
  );
}

export default App;
