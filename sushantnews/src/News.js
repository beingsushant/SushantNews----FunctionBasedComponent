import React, { Component } from 'react';
import NewsItem from './NewsItem';
import 'bootstrap/dist/css/bootstrap.min.css';
import PropTypes from 'prop-types';
import './News.css'
import InfiniteScroll from 'react-infinite-scroll-component';
import Spinner from './Spinner';

export default class News extends Component {
    static defaultProps = {
        country: 'in',
        pageSize: 20, 
        category: 'general',
      }


    constructor(){
        super();
        this.state = {
            articles: [],
            page: 0,
            loading: true   
        }
    }

    async updateNews(){
        this.setState({loading: true})
        let url = `https://newsapi.org/v2/top-headlines?country=us&category=${this.props.category}&apiKey=3930023da7cb45199b2fa70c0240f0bb&page=${this.state.page}&pageSize=20`;
        let data = await fetch(url);
        let parsedData = await data.json()
        console.log(parsedData); 
        let totalPages0=Math.ceil(parsedData.totalResults/20);
        this.setState({page: this.state.page, articles: parsedData.articles, totalPages: totalPages0, loading: false})
        console.log("-------TotalPageMount----");
        console.log(this.state.totalPages);
    }
     
    async componentDidMount(){ 
        this.setState({page: this.state.page+1});
        this.updateNews();
    }

    handleclicknext = async () => {
        this.setState({page: this.state.page+1});
        this.updateNews();

        console.log("-------Pagenext----");
        console.log(this.state.page);
    }

    handleclickprev = async () => {
        console.log("next button clicked");
        this.setState({page: this.state.page-1});
        this.updateNews();

        console.log("-------Pageprev----");
        console.log(this.state.page);
    }

    fetchData = async () => {
        this.setState({page: this.state.page+1, loading: true});
        let url = `https://newsapi.org/v2/top-headlines?country=us&category=${this.props.category}&apiKey=3930023da7cb45199b2fa70c0240f0bb&page=${this.state.page}&pageSize=20`;
        let data = await fetch(url);
        let parsedData = await data.json()
        console.log(parsedData); 
        let totalPages0=Math.ceil(parsedData.totalResults/20);
        this.setState({page: this.state.page, articles: this.state.articles.concat(parsedData.articles), totalPages: totalPages0, loading: false})
        console.log("-------fetchdata----");
        console.log(this.state.totalPages);
        console.log(this.state.loading);
    }

    render() {
        return (
            <div className='container'>
                <div className="container2">
            <h2>Top Articles from {this.props.category}</h2>
          </div>
                {this.state.loading && <Spinner />}
                <InfiniteScroll
                    dataLength={this.state.articles.length} //This is important field to render the next data
                    next={this.fetchData}
                    hasMore={this.state.page<=this.state.totalPages?true:false}
                    loader={<Spinner/>}
                    endMessage={
                        <p style={{ textAlign: 'center' }}>
                            <b>Yay! You have seen it all</b>
                        </p>
                    }
                    >
                <div className='row'>
                    {this.state.articles.map((element) => {
                        return <div className='col-md-4' key={element.url} style={{margin: '10px 0px 10px 0px'}}>
                            <NewsItem title={element.title} description={element.description} imageurl={element.urlToImage} url={element.url} />
                        </div>
                    })}
                </div>
                <div className="container d-flex justify-content-between">
                     <button type="button" disabled={this.state.page<=1?true:false} onClick={this.handleclickprev} className="btn" style={{ display: 'flex', marginRight: '14px', marginBottom: '10px' }}>Prev</button>
                     <button type="button" disabled={this.state.page>=this.state.totalPages?true:false} onClick={this.handleclicknext} className="btn" style={{ display: 'flex', marginRight: '14px', marginBottom: '10px' }}>Next</button>
                </div>
                </InfiniteScroll>
            </div >
        )
    }
}