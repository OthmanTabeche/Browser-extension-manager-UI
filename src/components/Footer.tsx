import {type JSX} from "react"

const Footer = (): JSX.Element => {
    return (
        <footer className="flex justify-center items-center m-12">
            <h3>Made by <a href="https://github.com/OthmanTabeche" className="underline">Othman</a></h3>
        </footer>
    )
}

export default Footer