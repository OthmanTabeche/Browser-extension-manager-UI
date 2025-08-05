import {useState, type JSX} from "react"
import data from "../data.json"
import './index.css'

import Header from "./components/Header"
import Legend from "./components/Legend"
import Extensions from "./components/Extensions"
import Footer from "./components/Footer"

interface AllExtensions  {
  logo: string;
  name: string;
  description: string;
  isActive: boolean;
}


function App(): JSX.Element {
  const [extensions, setExtensions] = useState<AllExtensions[]>(data)
  const [filter, setFilter] = useState<"all" | "active" | "inactive">("all");

  let filtredExtensions: AllExtensions[] = extensions;
  if (filter === "active") filtredExtensions= extensions.filter(extension => extension.isActive)
  if (filter === "inactive") filtredExtensions= extensions.filter(extension => !extension.isActive)
  
  const removeExtension = (name: string): void => {
    setExtensions(extensions.filter(extension => extension.name != name))
    alert(`Extension "${name}" deleted successfully.`);
  }

  const toggleActive = (name: string): void => {
    setExtensions(extensions.map(extension => (
      extension.name === name ? 
        {...extension, isActive: !extension.isActive} :
        extension
    )))
  }
  return (
    <main className="max-w-5/6 flex flex-col mx-auto " >
      <Header />
      <Legend filter={filter} setFilter={setFilter}/>
      <Extensions filtredExtensions={filtredExtensions} removeExtension={removeExtension} toggleActive={toggleActive} />
      <Footer />
    </main>
  )
}

export default App