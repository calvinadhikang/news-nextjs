import NewsItem from "./components/NewsItem"
import mysql from 'mysql2/promise';
import AddForm from "./components/AddForm";
import { Erica_One } from "next/font/google";

async function getNews() {
    try {
        const url = 'http://34.128.114.78'
        const res = await fetch('http://localhost:30/news', { cache: 'no-cache' })
        const result = res.json()
        
        console.log(result)
        return result
    } catch (error) {
        console.log(error)
        return []
    }
}

async function getData(){
    try {
        // const url = 'http://localhost:3000'
        const url = 'http://34.128.114.78'
        const res = await fetch(`${url}/api/news`, { cache: 'no-cache' })
        const result = await res.json()
    
        return result.rows
    } catch (error) {
        console.log(error)
        return []
    }
}

export default async function Home() {
    const data = await getData()

    return (
        <div className='h-screen w-screen bg-slate-200 flex flex-col'>
            <div className="grow flex p-10">
                <div className="w-2/6">
                    <h1 className="text-3xl font-bold">News App</h1>
                    <p className="text-sm text-slate-600">Tau apa aja lewat sini !</p>
                </div>
                <div className="w-4/6 pe-10">
                    <p className='font-medium'>Latest News</p>
                    <div className="overflow-auto">
                    { data.map((news: NewsInterface) => <NewsItem key={news.title} title={news.title} detail={news.detail} author={news.author} image={news.image} ></NewsItem>) }
                    </div>
                </div>
                <div className="w-2/6">
                    <h1 className="font-medium mb-4">Click to add news</h1>
                    <a className='bg-blue-300 px-4 py-2 rounded' href="/add">Add News</a>
                </div>
            </div>
            <footer className='border-t border-slate-500 h-20 mt-5 flex items-center justify-center'>
                <a href="https://kelompok5-istts.et.r.appspot.com/" className='text-sm text-gray-400 hover:text-inherit'>About Developer</a>
            </footer>
        </div>
    )
}
