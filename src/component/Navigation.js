import { NavLink } from 'react-router-dom'
import './Navigation.css'
// import Ani from './img/ani.gif'
export default function Navigation() {
    return(
        <div>
            <ul className="navigation">
                {/* <li className="ani"><img src={Ani} alt ="Ani"/></li> */}
                <li><NavLink exact to = "/weather">Weather</NavLink></li>
                <li><NavLink exact to = "/climate">Climate Change</NavLink></li>
                <li><NavLink exact to = "/news">News</NavLink></li>
                <li><NavLink exact to = "/more">More</NavLink></li>
                <li><NavLink exact to = "/chart">Chart</NavLink></li>


            </ul>
        </div>
    )
}