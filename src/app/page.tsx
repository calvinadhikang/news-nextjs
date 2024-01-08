import NewsItem from "./components/NewsItem"

async function getNews() {
    const res = await fetch('http://localhost:30/news', { next: { revalidate: 1000 } })
    const result = res.json()
    
    console.log(result)
    return result
}

export default async function Home() {
    const data = await getNews()

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
                    {data.map((news: NewsInterface) => <NewsItem title={news.title} detail={news.detail} author={news.author} image={news.image} ></NewsItem>)}
                    </div>
                </div>
                <div className="w-2/6">
                    <p className='font-medium'>Add News</p>
                </div>
            </div>
            <footer className='border-t border-slate-500 h-20 mt-5 flex items-center justify-center'>
                <p className='text-sm text-gray-400 hover:text-inherit'>About Developer</p>
            </footer>
        </div>
    )
}
