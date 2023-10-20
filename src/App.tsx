import Navbar from "@/scenes/navbar"
import Home from "@/scenes/home"
import Benifits from "@/scenes/benifits"
import { useEffect, useState } from "react"
import { SelectedPage } from "@/shared/types";
import OurClasses from "./scenes/classes";
import Contact from "./scenes/contact";



function App() {
  const [selectedPage, setSelectedPage] = useState<SelectedPage>(SelectedPage.Home)

  const [isTopOfPage, setIsTopOfPage] = useState<boolean>(true)
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0) {
        setIsTopOfPage(true)
        setSelectedPage(SelectedPage.Home)
      } else {
        setIsTopOfPage(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)

  }, [])
  return <div className="app bg-gray-20">

    <Navbar selectedPage={selectedPage} setSelectedPage={setSelectedPage} isTopOfPage={isTopOfPage} />
    <Home setSelectedPage={setSelectedPage} />
    <Benifits setSelectedPage={setSelectedPage} />
    <OurClasses setSelectedPage={setSelectedPage} />
    <Contact setSelectedPage={setSelectedPage} />
  </div>;
}

export default App;
