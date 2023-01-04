import { useEffect } from "react"
import { useParams } from "react-router-dom"

export default function Header(){
    return <div className="container">
        <div className="header">
            <div className="header_name">
                <p>K</p>
                <svg width="47" height="54" viewBox="0 0 47 54" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M31.5323 35.842V48.4414L36.8732 45.2916V32.6921L31.5323 35.842Z" fill="#FF6060"/>
                    <path d="M46.2658 20.4632L24.3497 7.67847L12.1945 0.637604L0.22345 21.5749L0.407616 41.2153L22.1396 54L24.3497 52.703V34.1744L34.1106 16.9428L44.0558 22.6866V41.2153L46.2658 39.9183V20.4632Z" fill="#FF6060"/>
                </svg>
                <p>S</p>
                <p>A</p>
            </div>
            <div className="header_menu">
                <ul className="header_menu_list">
                    <li><a href="/">Accueil</a></li>
                    <li><a href="/apropos">A propos</a></li>
                </ul>
            </div>
        </div>
    </div>
}