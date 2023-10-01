import React, { Component } from 'react'
import NewsUpdate from './newsUpdate'

export class News extends Component {

  constructor() {
    super();
    this.state={
      articles: [],
      loading : false,
      page:1,
    }
  }

  async componentDidMount(){
    let url="https://newsapi.org/v2/everything?q=wool&apiKey=d6371ed7eb8740b49ccfb4de5b425432&page=1&pageSize=6";
    let data=await fetch(url);
    let parsedData= await data.json()
    this.setState({articles: parsedData.articles})
  }
  


  render() {
    return (
      <div className='container my-3'>
        <h2>Top Headlines</h2>
        <div className='row'>
          {this.state.articles.map((element)=>{
        return   <div className='col-md-4' key={element.url}>
          <NewsUpdate title={element.title} newsUrl={element.url} description={element.description.slice(0,100)} imageUrl={element.urlToImage}/>
        </div>    
          })}

        </div>
      </div>
    )
  }
}

export default News