import React from "react"
import "index.css"
import "tailwindcss/base.css"
//import props from "helpers/AnimationRevealPage"
import Hero from "components/hero/BackgroundAsImageWithCenteredContent"
import Features from "components/faqs/SingleCol"
import Cards from "components/cards/ProfileThreeColGrid"

function App() {
  return (
     <><Hero /><Features /><Cards /> </>
    
  )
}
export default App; 