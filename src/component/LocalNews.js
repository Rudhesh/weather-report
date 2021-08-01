import React from "react";
import "./NewsItems.css"


const colors = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];
let r = Math.floor(Math.random() * 4) + 1
const LocalNews = (props) => {
    return (
        <div >
        <div className = "newsItems" style={{ background: colors[r] }} >
           {/* <h2>{props.content}</h2> */}
            <img className="newsImg" src = {props.image} alt = "New graphic" />
        <h3>
            <a href ={props.url}>{props.title}</a>
        </h3>
        <p>{props.description}</p>
        </div>
        </div>
    )
}

export default LocalNews