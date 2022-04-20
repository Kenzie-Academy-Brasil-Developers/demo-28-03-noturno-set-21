import "./style.css"

const Button = ({children, func, isOn}) =>{
    return(
        <button className={isOn ? "light" : "dark"} onClick={() => func()}>{children}</button>
    )
}

export default Button