import Form from "../components/Form"
import BG from "../assets/BG.jpg"

function Register() {
    <div className="TempBG">
        <img src={BG}/>
    </div>
    return <Form route="/api/user/register/" method="register" />
}

export default Register