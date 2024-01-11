import { ReactNode } from "react"

export default async function Layout({children} : {
    children: ReactNode
}) {
    return(
        <div className="w-screen h-screen flex items-center justify-center bg-slate-400">
            <div className="p-2 rounded bg-white mt-4 w-1/2">
            <h1 className="text-lg mb-2 font-medium text-center">Add News</h1>
                {children}
            </div>
        </div>
    )
}