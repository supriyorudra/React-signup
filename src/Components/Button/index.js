import "./styles.css";

const Button = ({logo, text}) => {
  return (
    <div className="button">
        <div className="logo">{logo}</div>
        <div className="text">{text}</div>
    </div>
  )
}

export default Button