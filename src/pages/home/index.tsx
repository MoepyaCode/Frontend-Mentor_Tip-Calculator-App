import { assets } from "@app-assets"
import { Main } from "@app-components"
import { TipCalculator } from "./components"

export default function Home() {

  const renderLogo = () => (
    <img className="object-contain" src={assets.logo} alt="" />
  )

  return (
    <Main className="font-space-mono bg-[#C5E4E7] flex flex-col items-center pt-[50px] gap-10">
      {renderLogo()}
      <TipCalculator />
    </Main>
  )
}