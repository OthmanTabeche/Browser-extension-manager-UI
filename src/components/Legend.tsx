import {type JSX} from "react"

interface LegendProps {
  filter: "all" | "active" | "inactive";
  setFilter: (f: "all" | "active" | "inactive") => void;
}

const Legend = ({ filter, setFilter }: LegendProps): JSX.Element => {
    return (
        <div className="flex justify-between">
          <h1 className="text-3xl font-bold mb-12">Extensions list</h1>
          <span>
            <button 
              className={`py-1.5 px-5 rounded-2xl mx-2 cursor-pointer ${filter === "all" ? "bg-red-500 text-white" : "bg-slate-500/70"} hover:bg-red-400`}
              onClick={() => {setFilter("all")}}
            >
              All
            </button>
            <button 
              className={`py-1.5 px-5 rounded-2xl mx-2 cursor-pointer ${filter === "active" ? "bg-red-500 text-white" : "bg-slate-500/70"} hover:bg-red-400`}
              onClick={() => {setFilter("active")}}
            >
              Active
            </button>
            <button 
              className={`py-1.5 px-5 rounded-2xl mx-2 cursor-pointer ${filter === "inactive" ? "bg-red-500 text-white" : "bg-slate-500/70"} hover:bg-red-400`}
              onClick={() => {setFilter("inactive")}}
            >
              Inactive
            </button>
          </span>
        </div>
    )
}

export default Legend