import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import PropTypes from 'prop-types'

export default class News extends Component {
  static defaultProps={
    country:'in',
    category:'general'
  }
  static propTypes={
    country: PropTypes.string,
    category: PropTypes.string
  }
  constructor(){
    super();
    this.state={
      articles: [],
      loading:true,
      page:1
    }
  }
  async componentDidMount(){
    
    const url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=1df9aba189924d049e9d6527208c53e7&pageSize=6`;
    this.setState({loading:true})
    let data= await fetch(url);
    let parseData= await data.json()
    this.setState(
       {articles:parseData.articles,
        loading:false
       }
    )
    
  }
  nextpage=async ()=>{
    const url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=1df9aba189924d049e9d6527208c53e7&page=${this.state.page+1}&pageSize=6`;
    this.setState({loading:true})
    let data= await fetch(url);
    let parseData= await data.json()
    this.setState(
       {articles:parseData.articles,
        page:this.state.page+1,
        loading:false
      }
    )
  }
  previouspage=async ()=>{
    const url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=1df9aba189924d049e9d6527208c53e7&page=${this.state.page-1}&pageSize=6`;
    this.setState({loading: true})
    let data= await fetch(url);
    let parseData= await data.json()
    this.setState(
       {articles:parseData.articles,
        page:this.state.page-1,
        loading: false
      }
    )
  }
  render() {
    return (
      <div className='container'>
        <h1 className='text-center'>NewsMonkey :Top-News </h1>
        {this.state.loading && <Spinner/>}
          <div className='row'>
           {!this.state.loading && this.state.articles.map((element)=>{
             return <div className='col-md-4' key={element.url}>
                   <NewsItem title={element.title} description={element.content} imgUrl={element.urlToImage} 
                   newsUrl={element.url}/>
                </div>
              })}
          </div>  
          <div className="container d-flex justify-content-between my-3">
          <button disabled={this.state.page<=1} type="button" onClick={this.previouspage} className="btn btn-dark">&#8592; Previous</button>
          <button disabled={this.state.page>=4} type="button" onClick={this.nextpage} className="btn btn-dark">Next &rarr;</button>
          </div>
      </div>
    )
  }
}
// 1df9aba189924d049e9d6527208c53e7