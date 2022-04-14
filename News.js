import React, { useEffect,useState } from 'react';
import NewsItem from './NewsItem';
import 'bootstrap/dist/css/bootstrap.min.css';
import PropTypes from 'prop-types';
import './News.css'
import InfiniteScroll from 'react-infinite-scroll-component';
import Spinner from './Spinner';

const News = (props) => {


    const [articles, setArticles] = useState([])
    const [loading, setLoading] = useState(true)
    const [page, setPage] = useState(1)
    const [totalResults, setTotalResults] = useState(0)
    const [totalPages, setTotalPages] = useState(1)

    const updateNews = async () => {
        setLoading(true);
        props.setProgress(20);
        let url = `https://newsapi.org/v2/top-headlines?country=in&category=${props.category}&apiKey=c2d923d97950457ea05e70112b869de1&page=${page}&pageSize=20`;
        let data = await fetch(url);
        props.setProgress(40);
        let parsedData = await data.json()
        console.log(parsedData); 
        let totalPages0=Math.ceil(parsedData.totalResults/20);
        props.setProgress(80);
        setArticles(parsedData.articles);
        setTotalPages(totalPages0);
        setTotalResults(parsedData.totalResults);
        console.log("-------TotalPageMount----");
        console.log(totalPages);
        props.setProgress(100);
        console.log("-------articlesLength----");
        console.log(articles.length);
        setLoading(false);
    }
     
    useEffect(() => {
        updateNews(); 
        // eslint-disable-next-line
    }, [])

   

    const fetchData = async () => {
        setLoading(true);
        props.setProgress(20);
        let url = `https://newsapi.org/v2/top-headlines?country=in&category=${props.category}&apiKey=c2d923d97950457ea05e70112b869de1&page=${page+1}&pageSize=20`;
        setPage(page+1);
        let data = await fetch(url);
        props.setProgress(40);
        let parsedData = await data.json()
        props.setProgress(60);
        console.log(parsedData); 
        let totalPages0=Math.ceil(parsedData.totalResults/20);
        setArticles(articles.concat(parsedData.articles));
        props.setProgress(60);
        setLoading(false);
        setTotalResults(parsedData.totalResults);
        props.setProgress(100);
        setTotalPages(totalPages0);
        console.log("-------articlesLength----");
        console.log(articles.length);
        console.log(totalResults);
    }


        return (
            <div className='container'>
                <div className="container2">
            <h2>Top Articles from {props.category}</h2>
          </div>
                {loading && <Spinner />}
                <InfiniteScroll
                    dataLength={articles.length} //This is important field to render the next data
                    next={fetchData}
                    hasMore={articles.length !== totalResults}
                    loader={<Spinner/>}
                    endMessage={
                        <p style={{ textAlign: 'center' }}>
                            <b>Yay! You have seen it all</b>
                        </p>
                    }
                    >
                <div className='row'>
                    {articles.map((element) => {
                        return <div className='col-md-4' key={element.url} style={{margin: '10px 0px 10px 0px'}}>
                            <NewsItem title={element.title} description={element.description} imageurl={element.urlToImage} url={element.url} />
                        </div>
                    })}
                </div>
                {/* <div className="container d-flex justify-content-between">
                     <button type="button" disabled={page<=1?true:false} onClick={handleclickprev} className="btn" style={{ display: 'flex', marginRight: '14px', marginBottom: '10px' }}>Prev</button>
                     <button type="button" disabled={page>=totalPages?true:false} onClick={handleclicknext} className="btn" style={{ display: 'flex', marginRight: '14px', marginBottom: '10px' }}>Next</button>
                </div> */}
                </InfiniteScroll>
            </div >
        )
}
News.propTypes = {
    category: PropTypes.string,
}
export default News