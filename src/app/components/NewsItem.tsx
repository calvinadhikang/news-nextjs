export default function NewsItem({
    title, 
    detail,
    author,
    image,
} : NewsInterface){
    return(
        <div className="p-4 rounded-lg shadow my-4 bg-slate-50">
            <h2 className="text-lg font-medium">{title}</h2>
            <p className="text-xs mb-2 text-gray-500">{author}</p>
            <p className="text-sm">{detail}</p>
        </div>
    );
}