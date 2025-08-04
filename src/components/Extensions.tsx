import {type JSX} from "react"

interface ExtensionsProps  {
    allExtensions: {
        logo: string;
        name: string;
        description: string;
        isActive: boolean;
    }[];
}

const Extensions = ({ allExtensions }: ExtensionsProps): JSX.Element => {
    return (
        <section className="flex flex-col gap-3">
            {allExtensions.map(extension => (
                <div>
                    <p>{extension.name}</p>
                </div>
            ))}
        </section>
    )
}
export default Extensions