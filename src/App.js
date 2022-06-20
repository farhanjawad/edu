import React from "react"
//import "style.css"
import "tailwindcss/base.css"
import AnimationRevealPage from "./helpers/AnimationRevealPage"
import Hero from "./components/hero/FullWidthWithImage"
//import Features from "./components/features/ThreeColSimple"

function App() {
  return (
    <AnimationRevealPage disabled>
      <Hero />
    </AnimationRevealPage>
  )
}
export default App; 