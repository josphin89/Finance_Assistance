import { Form, Button, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react'
import { useNavigate } from 'react-router';
import { useDispatch } from 'react-redux';
import axios from 'axios';
import bg from '../../assets/bg.webp';
import { setExpertLoginUsers } from '../../Redux/Slices/expertLogin';


function ExpertLogin() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [inputValue, setinputValue] = useState({
        email: "",
        password: ""
    })

    const submit = () => {
        if (inputValue.email === "" || inputValue.password === "") {
            alert("Please Fill");
            return;
        }
        console.log(inputValue)
        const formData = new FormData();
        formData.append("email", inputValue.email);
        formData.append("password", inputValue.password);

        axios.post("https://agaram.academy/api/b4/action.php?request=ai_finance_expert_login", formData)
            .then((response) => {


                if (response.data.status === "success") {
                    alert("Login Successful");

                    const userData = response.data.data
                    dispatch(setExpertLoginUsers(userData));
                    localStorage.setItem("users",JSON.stringify(userData))
                    console.log(userData);
                    navigate('/expert/viewuserdetails')
                }
            })
    }

    return <div style={{
         backgroundImage: `url(${bg})`,
                    backgroundSize: "cover",
                    backgroundRepeat: "no-repeat",
                    height: "729px",
                    overflowX:"hidden"
    }}>
        <Row className='justify-content-center'>
            <Col md="6" lg="4">
                <div style={{ width: "500px", marginTop: "100px", borderRadius: "15px", background: "transparent", boxShadow: "0 0 10px" }} >
                    <Form style={{ padding: "45px" }}>
                    <h3 style={{ textAlign: "center", color:"white" }}>Expert Login</h3>
                        <Form.Group className="mb-3">
                            <Form.Label style={{marginTop:"10px"}}><b>Email</b></Form.Label>
                            <Form.Control type="email" placeholder="Enter email" value={inputValue.email} onChange={(e) => setinputValue({ ...inputValue, email: e.target.value })} required />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label style={{marginTop:"10px"}}><b>Password</b></Form.Label>
                            <Form.Control type="password" placeholder="Enter password" value={inputValue.password} onChange={(e) => setinputValue({ ...inputValue, password: e.target.value })} required />
                        </Form.Group>
                        <Button type="button" style={{ marginLeft: "170px", backgroundColor: "black" ,border:"none", marginTop:"15px"}} onClick={submit}> Login </Button>
                    </Form>
                </div>
            </Col>
        </Row>
    </div>
}
 
export default ExpertLogin