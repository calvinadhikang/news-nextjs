import NewsItem from "./components/NewsItem"
import mysql from 'mysql2/promise';
import AddForm from "./components/AddForm";

async function getNews() {
    const res = await fetch('http://localhost:30/news', { cache: 'no-cache' })
    const result = res.json()
    
    console.log(result)
    return result
}

async function getData(){
    const url = 'http://localhost:3000'
    const res = await fetch(`${url}/api/news`, { cache: 'no-cache' })
    const result = await res.json()

    return result.rows
}

export default async function Home() {
    const data = await getData()

    return (
        <div className='h-screen w-screen bg-slate-200 flex flex-col'>
            <div className="grow flex p-10">
                <div className="w-2/6">
                    <h1 className="text-3xl font-bold">News App</h1>
                    <p className="text-sm text-slate-600">Brought to you by <span className="italic">Kelompok 5</span></p>
                </div>
                <div className="w-4/6 pe-10">
                    <p className='font-medium'>Latest News</p>
                    <div className="overflow-auto">
                    { data.map((news: NewsInterface) => <NewsItem title={news.title} detail={news.detail} author={news.author} image={news.image} ></NewsItem>) }
                    </div>
                </div>
                <div className="w-2/6">
                    <a className='font-medium' href="/add">Add News</a>
                </div>
            </div>
            <footer className='border-t border-slate-500 h-20 mt-5 flex items-center justify-center'>
                <p className='text-sm text-gray-400 hover:text-inherit'>About Developer</p>
            </footer>
        </div>
    )
}
