import { NavLink } from "react-router-dom"
import "./style.scss"
import { ChoiseModal } from "../common/index"
import { DarkForest, Yulia, Room, YuliaSit } from "../../assets/img/index"
import { useParams } from "react-router-dom";


let contantData = [
    {
        dialogs: [
            {name: "Юля", text: "Привет Семен."},
            {name: "Юля", text: "Привет Семен."},
        ],
        chars: {
            img: YuliaSit, style: {
                left: "40%",
                bottom: "",
                width: "400px",
            }
        },
        background: DarkForest,
    },
    {
        dialogs: [
            {name: "Юля", text: "Привет Семен."},
            {name: "Юля", text: "Привет Семен."},
        ],
        chars: {
            img: Yulia, 
            style: {
                left: "40%",
                bottom: "",
                width: "240px",
            }
        },
        background: DarkForest,
    },
    {
        dialogs: [
            {name: "Юля", text: "Привет Семен."},
            {name: "Юля", text: "Привет Семен."},
        ],
        chars: {
            img: Yulia, 
            style: {
                left: "40%",
                bottom: "",
                width: "240px",
            }
        },
        background: DarkForest,
    },
    {
        dialogs: [
            {name: "Юля", text: "Привет Семен."},
            {name: "Юля", text: "Привет Семен."},
        ],
        chars: {
            img: Yulia, 
            style: {
                left: "40%",
                bottom: "",
                width: "240px",
            }
        },
        background: DarkForest,
    },
   
]
const ContantPage = () => {
    let { id } = useParams()
    let numId = Number(id)
    let { dialogs, chars, background } = contantData[id]
    let {name, text} = dialogs[0]
    let {img, style} = chars
    let contentStyle = {
        backgroundImage: "url(" + background + ") ",
    }
    let characterStyle = style



    let lengthData = contantData.length
    //генерируе url в зависимости от текущего URL и длнны списка с данными
    let url = ((lengthData === (numId + 1)) ? ("/content/" + id) : ("/content/" + (numId + 1)))
    return (
        <NavLink to={url} className="navLink" >
            <section className="contantPage" style={contentStyle}  >
                <img src={img} alt="" className="contantPage__charecter" style={characterStyle} />
                <div className="contantBox">
                    <h1 className="contantBox__title">{name}</h1>
                    <p className="contantBox__text">
                        {text}
                    </p>
                    <div className="nav">
                        <div className="nav__item">
                            <NavLink to="/" className="navLink" > главная</NavLink>
                        </div>
                        <div className="nav__item">
                            <NavLink to="/" className="navLink" > настройки </NavLink>
                        </div>
                        <div className="nav__item">
                            <NavLink to="/" className="navLink" > история </NavLink>
                        </div>
                    </div>
                </div>
            </section>
        </NavLink>


    )
}


export default ContantPage