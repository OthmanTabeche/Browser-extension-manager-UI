import {type JSX} from "react"

import logo from "../../public/images/logo.svg"
import sun from "../../public/images/icon-sun.svg"

const Header = (): JSX.Element => {
    return (
        <header className="bg-slate-700 p-4 my-10 flex justify-between rounded-2xl">
            <img className="w-36" src={logo} alt="Logo" />
            <button>
                <img className="bg-slate-500/70 p-2 rounded-md" src={sun} alt="Sun Icon" />
            </button>
        </header>
    )
}

export default Header