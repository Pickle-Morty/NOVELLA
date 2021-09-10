import { NavLink } from "react-router-dom"
import "./style.scss"


const ChoiseModal = () => {
    return (
        <div className="choiseModal">
           <NavLink className= "choiseModal__link" to ="/content:0" > Моника</NavLink>
           <NavLink className= "choiseModal__link" to ="/content:1" > Юри</NavLink>
           <NavLink className= "choiseModal__link" to ="/content:2" > ПУТИН</NavLink>
       </div>
    )
}


export default ChoiseModal