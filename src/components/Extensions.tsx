import {type JSX} from "react"

interface ExtensionsProps  {
    filtredExtensions: {
        logo: string;
        name: string;
        description: string;
        isActive: boolean;
    }[];
    removeExtension: (name: string) => void
    toggleActive: (name: string) => void
}

const Extensions = ({ filtredExtensions, removeExtension, toggleActive}: ExtensionsProps): JSX.Element => {
    return (
        <section className="flex flex-wrap gap-4 mb-4">
        {filtredExtensions.map((extension) => (
          <div key={extension.name} className="bg-slate-700 shadow rounded-lg p-4 w-96 h-52 flex flex-col justify-between">
            <div className="flex items-start justify-between gap-4">
              <div className="flex-shrink-0 w-16 h-16">
                <img
                  src={extension.logo}
                  alt={`${extension.name} logo`}
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="flex flex-col justify-start flex-1">
                <h1 className="text-lg font-bold mb-1">{extension.name}</h1>
                <p className="text-stone-300/75 text-sm">{extension.description}</p>
              </div>
            </div>
            <div className="mt-auto flex items-center justify-between pt-4">
              <button 
                className="bg-slate-800/45 px-3 py-1.5 rounded-2xl text-[15px] text-white font-light cursor-pointer hover:hover:scale-105 transition-transform duration-200 ease-out"
                onClick={() => {{removeExtension(extension.name)}}}
              >
                Remove
              </button>
              <label className="inline-flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  className="sr-only peer"
                  checked={extension.isActive}
                  onChange={() => {toggleActive(extension.name)}}
                />
                <div
                  className={
                    `relative w-11 h-6 rounded-full 
                    transition-colors duration-200
                    ${extension.isActive
                      ? 'bg-[hsl(3,71%,56%)] dark:bg-[hsl(3,71%,56%)]'
                      : 'bg-gray-200 dark:bg-gray-400'
                    }
                    peer-focus:ring-4 peer-focus:ring-[hsl(3,86%,64%)] dark:peer-focus:ring-[hsl(3,77%,44%)]`
                  }
                >
                  <div
                    className={
                      `absolute top-0.5 left-[2px] bg-white border border-gray-300 rounded-full h-5 w-5 transition-all
                      ${extension.isActive ? 'translate-x-full border-white' : ''}`
                    }
                    style={{ transition: 'transform 0.2s' }}
                  />
                </div>
              </label>
            </div>
          </div>
        ))}
      </section>
    );
};

export default Extensions