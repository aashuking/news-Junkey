import React, { Component } from "react";

export default class Newsitem extends Component {
  render() {
    let{title, description,urlToImage,url,author,date}=this.props
    return (
        <div className="my-3" key={url}>
     
            <div class="card my-2 ">
              <img src={urlToImage} class="card-img-top" alt="..." />
              <div class="card-body">
                <h5 class="card-title">{title}</h5>
                <p class="card-text">
                 {description}
                </p>
                <p class="card-text"><small class="text-muted">  Updated by~ {!author?"unknown":author} on {new Date(date).toUTCString()}</small></p>
                <a href={url}  target="_blank"class=" btn btn-dark btn-sm">
                  Read More
                </a>
              </div>
            </div>
            </div>
       
    );
  } 
}
