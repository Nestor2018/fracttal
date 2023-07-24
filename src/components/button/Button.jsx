import './button.scss'

const Button = ({text, click}) =>{
  return(
    <button onClick={click} className="button">{text}</button>
  )
}

export default Button
