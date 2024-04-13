import { useState,useEffect } from "react"
import NewsItem from "../Components/NewsItem"


const NewsBoard = ({category}) => {

    const [articles,setArticles] = useState([])
    useEffect(() => {
     let url = `https://newsapi.org/v2/top-headlines?country=in&category=${category}&apiKey=${import.meta.env.VITE_API_KEY}`
     fetch(url).then(response => response.json()).then(data=>setArticles(data.articles));
    }, [category])
    
  return (
    <div style={{display:'flex', flexDirection:'row',alignItems:'center',justifyContent:'center',flexWrap:"wrap",marginTop:'4rem'}}>
      <h2 style={{position:'absolute',top:'5rem'}} className="text-center">Latest <span className="badge bg-danger">News</span></h2>
      {articles.map((news,index)=>{
        return <NewsItem key={index} title={news.title} description={news.description} src={news.urlToImage} url={news.url}/>
      })}
    </div>
  )
}

export default NewsBoard
