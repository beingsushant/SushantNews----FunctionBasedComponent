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
        let url = `https://newsapi.org/v2/top-headlines?country=us&category=${props.category}&apiKey=c2d923d97950457ea05e70112b869de1&page=${page}&pageSize=20`;
        let data = await fetch(url);
        props.setProgress(40);
        let parsedData = await data.json()
        console.log(parsedData); 
        let totalPages0=Math.ceil(parsedData.totalResults/20);
        setLoading(false);
        props.setProgress(80);
        setArticles(parsedData.articles);
        setTotalPages(totalPages0);
        console.log("-------TotalPageMount----");
        console.log(totalPages);
        props.setProgress(100);
        console.log("-------Page:----");
        console.log(page);
    }
     
    useEffect(() => {
        updateNews(); 
        // eslint-disable-next-line
    }, [])

    const handleclicknext = async () => {

        setPage(page+1);
        setLoading(true);
        props.setProgress(20);
        let url = `https://newsapi.org/v2/top-headlines?country=us&category=${props.category}&apiKey=c2d923d97950457ea05e70112b869de1&page=${page+1}&pageSize=20`;
        let data = await fetch(url);
        console.log(url);
        props.setProgress(40);
        let parsedData = await data.json()
        console.log(parsedData); 
        let totalPages0=Math.ceil(parsedData.totalResults/20);
        setLoading(false);
        props.setProgress(80);
        setArticles(parsedData.articles);
        setTotalPages(totalPages0);
        console.log("-------TotalPageMount----");
        console.log(totalPages);
        props.setProgress(100);
        console.log("-------Pagenext----");
        console.log(page);
    }

    const handleclickprev = async () => {
        console.log("prev button clicked");
        props.setProgress(20);
        setPage(page-1);
        setLoading(true);
        let url = `https://newsapi.org/v2/top-headlines?country=us&category=${props.category}&apiKey=c2d923d97950457ea05e70112b869de1&page=${page-1}&pageSize=20`;
        let data = await fetch(url);
        props.setProgress(40);
        let parsedData = await data.json()
        console.log(parsedData); 
        let totalPages0=Math.ceil(parsedData.totalResults/20);
        setLoading(false);
        props.setProgress(80);
        setArticles(parsedData.articles);
        setTotalPages(totalPages0);
        console.log("-------TotalPageMount----");
        console.log(totalPages);
        props.setProgress(100);
        console.log("-------Pageprev----");
        console.log(page);
    }

    const fetchData = async () => {
        setLoading(true);
        setPage(page+1);
        let url = `https://newsapi.org/v2/top-headlines?country=us&category=${props.category}&apiKey=c2d923d97950457ea05e70112b869de1&page=${page}&pageSize=20`;
        let data = await fetch(url);
        let parsedData = await data.json()
        console.log(parsedData); 
        let totalPages0=Math.ceil(parsedData.totalResults/20);
        setArticles(articles.concat(parsedData.articles));
        setLoading(false);
        setPage(page);
        setTotalPages(totalPages0);
        console.log("-------fetchdata----");
        console.log(totalPages);
        console.log(loading);
    }


        return (
            <div className='container'>
                <div className="container2">
            <h2>Top Articles from {props.category}</h2>
          </div>
                {loading && <Spinner />}
                {/* <InfiniteScroll
                    dataLength={articles.length} //This is important field to render the next data
                    next={fetchData}
                    hasMore={page<=totalPages?true:false}
                    loader={<Spinner/>}
                    endMessage={
                        <p style={{ textAlign: 'center' }}>
                            <b>Yay! You have seen it all</b>
                        </p>
                    }
                    > */}
                <div className='row'>
                    {articles.map((element) => {
                        return <div className='col-md-4' key={element.url} style={{margin: '10px 0px 10px 0px'}}>
                            <NewsItem title={element.title} description={element.description} imageurl={element.urlToImage} url={element.url} />
                        </div>
                    })}
                </div>
                <div className="container d-flex justify-content-between">
                     <button type="button" disabled={page<=1?true:false} onClick={handleclickprev} className="btn" style={{ display: 'flex', marginRight: '14px', marginBottom: '10px' }}>Prev</button>
                     <button type="button" disabled={page>=totalPages?true:false} onClick={handleclicknext} className="btn" style={{ display: 'flex', marginRight: '14px', marginBottom: '10px' }}>Next</button>
                </div>
                {/* </InfiniteScroll> */}
            </div >
        )
}
News.propTypes = {
    category: PropTypes.string,
}
export default News