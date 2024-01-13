"use client"
import { Erica_One } from "next/font/google"
import { useState } from "react"

export default function AddForm() {
    const [title, setTitle] = useState("")
    const [detail, setDetail] = useState("")
    const [author, setAuthor] = useState("")

    const handleSubmit = async () => {
        try {
            console.log('submit')
            const data = {
                title: title,
                detail: detail,
                author: author,
            }
    
            // const url = 'http://localhost:3000'
            const url = 'http://34.101.195.149'
            const res = await fetch(`${url}/api/news`, {
                method: 'POST',
                body: JSON.stringify(data)
            })
        } catch (error) {
            console.log(error)
        }
    }

    return(
        <div className="bg-white p-4 rounded shadow">
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
    )
}