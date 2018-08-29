import React, { Component } from "react";
import { Link } from 'react-router-dom';
import axios from 'axios';

class News_detail extends Component {
  constructor(props) {
    super(props)
    this.state = {
      articleDetails : [],
      idArticle: parseInt(this.props.match.params.index, 10)
    } 
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
      ', Hour : ' +
      hour +
      ':' +
      (minute < 10 ? '0' + minute : minute);
    return composedTime;
  }

  // list Detail News
  componentDidMount() {      
    axios.get('https://newsapi.org/v2/top-headlines?sources=al-jazeera-english&apiKey=cc474d575828432c8c562bd5dc35d3f8')
    .then((res)=> {         
        this.setState
        (
            {
                articleDetails: res.data.articles[this.state.idArticle]
            }            
        )         
    }).catch(err => console.log(err))
  }
  
  render(){
    return ( 
        <div align="center"> 
            <div className="content">                
            <h3>
            <Link to='/newsapi'>Back</Link> Title : {this.state.articleDetails.title}                  
            </h3>
            <div className="image">
                <img src={this.state.articleDetails.urlToImage} height="300" width="512" alt="" />
            </div>            
            <p><strong>Description</strong>: {this.state.articleDetails.description}</p>
            <div className="article">
                <p>
                    Author : <i>{this.state.articleDetails.author ? this.state.articleDetails.author : this.props.default}</i>, 
                    Date : {this.formatDate(this.state.articleDetails.publishedAt)}
                </p>                
            </div>
            </div>            
         </div>
      
    );
  }

}

export default News_detail;