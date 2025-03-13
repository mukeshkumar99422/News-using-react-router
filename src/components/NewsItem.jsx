import React from 'react'
import newsImage from '../assets/news-image.jpg';
export const NewsItem = ({title,description,url,urlToImage}) => {
  return (
      <div className="card bg-dark text-light mb-3 my-3 mx-3 px-2 py-2" style={{width: "345px", display: "inline-block"}}>
          <img src={urlToImage?urlToImage:newsImage} className="card-img-top" style={{height:"200px",width:"328px"}} alt="..."/>
          <div className="card-body">
              <h5 className="card-title">{`${title.slice(0,50)}...`}</h5>
              <p className="card-text">{`${description?description.slice(0,50):"this news can be read in read more"}...`}</p>
              <a href={url} className="btn btn-primary">Read More</a>
          </div>
      </div>
  )
}
