import {type JSX} from "react"

const Legend = (): JSX.Element => {
    return (
        <div className="flex justify-between">
          <h1 className="text-3xl font-bold mb-12">Extensions list</h1>
          <span>
            <button className="py-1.5 px-5 rounded-2xl mx-2 bg-slate-500/70 hover:bg-red-400">All</button>
            <button className="py-1.5 px-5 rounded-2xl mx-2 bg-slate-500/70 hover:bg-red-400">Active</button>
            <button className="py-1.5 px-5 rounded-2xl mx-2 bg-slate-500/70 hover:bg-red-400">Inactive</button>
          </span>
        </div>
    )
}

export default Legend