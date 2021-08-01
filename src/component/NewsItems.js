import React from "react";
import "./NewsItems.css"


const colors = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];
let r = Math.floor(Math.random() * 4) + 1
const NewsItems = (props) => {
    return (
        <div >
           
        <div className = "newsItems" style={{ background: colors[r] }} >
            <img className="newsImg" src = {props.urlToImage} alt = "New graphic" />
        <h3>
            <a href ={props.url}>{props.title}</a>
        </h3>
        <p>{props.description}</p>
        </div>
        </div>
    )
}

export default NewsItems