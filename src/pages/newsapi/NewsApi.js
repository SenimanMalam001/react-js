import React, { Component } from "react";
import axios from 'axios'
import { Link } from 'react-router-dom'

class News extends Component {

  constructor(props) {
    super(props);
    this.state = {
      article: []
    };
  }
 // list News
  componentDidMount() {
    axios.get('https://newsapi.org/v2/top-headlines?sources=al-jazeera-english&apiKey=cc474d575828432c8c562bd5dc35d3f8')
    .then((res)=> {
    console.log(res.data)    
    this.setState
    (
      {article: res.data.articles}
    )
    }).catch(err => console.log(err))
}

    formatDate(date) {
      var time = new Date(date);
      var year = time.getFullYear();
      var day = time.getDate();
      var hour = time.getHours();
      var minute = time.getMinutes();
      var month = time.getMonth() + 1;
      var composedTime =
        day +
        '/' +
        month +
        '/' +
        year +
        ' | ' +
        hour +
        ':' +
        (minute < 10 ? '0' + minute : minute);
      return composedTime;
    }

  render() {
    return (
      <div className="App">
      
      {
        this.state.article.map((news, index) => {
          return (
            <div  align="center" key={index}> 
              <div className="content">                
                <h3>
                  <Link to={`/newsapi/${index}`}> <strong>{this.formatDate(news.publishedAt)}</strong> {news.title} </Link>                  
                </h3>
                <p>{news.description ? news.description : "No Available Description"}</p>                
              </div>
              <div className="image">
                <img src={news.urlToImage ? news.urlToImage : "http://via.placeholder.com/512x512"} height="240" width="480" alt="" />
              </div>

            </div>
          )
        })
      }
      
     </div>
    );
  }
}

export default News;