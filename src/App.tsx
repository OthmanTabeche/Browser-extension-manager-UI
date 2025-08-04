import {useState, type JSX} from "react"
import data from "../data.json"
import './index.css'

import Header from "./components/Header"
import Legend from "./components/Legend"
import Extensions from "./components/Extensions"

interface AllExtensions  {
  logo: string;
  name: string;
  description: string;
  isActive: boolean;
}

function App(): JSX.Element {
  const [allExtensions, setAllExtensions] = useState<AllExtensions[]>(data)
  const [active, setActive] = useState<AllExtensions[]>()
  const [inactive, setInactive] = useState<AllExtensions[]>()


    return (
      <main className="max-w-5/6 flex flex-col mx-auto " >
        <Header />
        <Legend />
        <Extensions allExtensions={allExtensions} />
      </main>
    )
}

export default App