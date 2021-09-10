import { NavLink } from "react-router-dom"
import "./style.scss"


const StarPage = () => {
    return (
        <section className="startPage">
            <NavLink to="/content/0" className="startPage__link" >Start</NavLink>
        </section>
        
    )
}


export default StarPage