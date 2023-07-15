
import Form from "../Form";
import "./styles.css"
import Abstraction from "../../Assets/Abstraction.png"
const Background = () => {
    return (
        <div className="background">
            <div className="info">
                <div className="heading">
                    Find 3D Objects, Mockups and illustraations here
                </div>
                <img src={Abstraction} alt="Abstraction" />
            </div>
            <Form />


        </div>
    )
}

export default Background