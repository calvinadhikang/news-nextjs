"use client"
import { useState } from "react"

export default function AddForm() {
    const [title, setTitle] = useState("")
    const [detail, setDetail] = useState("")
    const [author, setAuthor] = useState("")

    const handleSubmit = async () => {
        console.log('submit')
        const data = {
            title: title,
            detail: detail,
            author: author,
        }

        const url = 'http://localhost:3000'
        const res = await fetch(`${url}/api/news`, {
            method: 'POST',
            body: JSON.stringify(data)
        })
    }

    return(
        <div className="w-screen h-screen flex items-center justify-center bg-slate-400">
            <div className="p-2 rounded bg-white mt-4 w-1/2">
                <h1 className="text-lg mb-2 font-medium text-center">Add News</h1>
                <div className="flex flex-col gap-y-2 mb-2">
                    <p>Title</p>
                    <input className="border border-gray-400 rounded text-xs p-2" type="text" value={title} onChange={(event) => setTitle(event.target.value)} />
                    <p>Detail</p>
                    <input className="border border-gray-400 rounded text-xs p-2" type="text" value={detail} onChange={(event) => setDetail(event.target.value)}/>
                    <p>Author</p>
                    <input className="border border-gray-400 rounded text-xs p-2" type="text" value={author}onChange={(event) => setAuthor(event.target.value)}/>
                </div>
                <button className="bg-blue-300 rounded px-4 py-2 text-xs" onClick={() => handleSubmit() }>Submit</button>
            </div>
        </div>
    )
}