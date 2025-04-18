import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Form,Col,Row } from 'react-bootstrap';
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import web6 from '../assets/web6.jpg'
import axios from 'axios'


function Register() {

    const navigate = useNavigate()
    const [inputValue, setInputValue] = useState({
        name: "",
        email: "",
        password: ""
    })
    const userRegister = () => {


        let name = inputValue.name.trim()
        let email = inputValue.email.trim()
        let password = inputValue.password.trim()

        if (name && email && password) {

            const formData = new FormData();
            formData.append("name", name);
            formData.append("email", email);
            formData.append("password", password);

            axios.post('https://agaram.academy/api/b4/action.php?request=ai_finance_user_register', formData)
                .then((res) => {
                    console.log(res)
                    if (res.data.status === "success") {
                        alert("Register Success")
                        setInputValue({ name: "", email: "", password: "" })
                        navigate('/login')
                    }
                })
        }
        else {
            alert("please fill all the details")
        }
    }

    return <div style={
        {
            backgroundImage: `url(${web6})`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            height: "750px"
        }
    }>
        <Row className='justify-content-center'>
        <Col md="6" lg="4">
        <div style={{ backgroundColor: "wheat", width: "500px", marginTop: "50px", borderRadius: "15px", background: "transparent", boxShadow: "0 0 10px" }}>
            <Form style={{ padding: "45px" }}>
                <h3 style={{ textAlign: "center" }}>Register</h3>
                <Form.Label>Name</Form.Label>
                <Form.Control style={{ marginTop: "10px" }} value={inputValue.name} type="text" placeholder="Enter your name" onChange={(e) => setInputValue({ ...inputValue, name: e.target.value })} required  ></Form.Control><br></br>
                <Form.Label>Email</Form.Label>
                <Form.Control style={{ marginTop: "10px" }} value={inputValue.email} type="email" placeholder="Enter your email" onChange={(e) => setInputValue({ ...inputValue, email: e.target.value })} required  ></Form.Control><br></br>
                <Form.Label>password</Form.Label>
                <Form.Control style={{ marginTop: "10px" }} value={inputValue.password} type="password" placeholder="Enter your password" onChange={(e) => setInputValue({ ...inputValue, password: e.target.value })} required  ></Form.Control><br></br>
                <br></br>
                <Button variant="dark" style={{ marginLeft: "150px" }} onClick={userRegister}>Register</Button>
            </Form>
        </div>
        </Col>
        </Row>
    </div>
}
export default Register
















