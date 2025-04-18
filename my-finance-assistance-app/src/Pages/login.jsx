import { useState, useEffect } from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Form, Table,Container,Row,Col,Card } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router';
import axios from 'axios';
import { setLoginUsers } from '../Redux/Slices/login';
import image from '../assets/image1.webp';
function Login() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [loginDetails, setLoginDetails] = useState({
        email: "",
        password: ""
    })
    const submit = () => {
                
        if (loginDetails.email === "" || loginDetails.password === "") {
            alert("Please Fill");
            return;
        }
        
        const formData = new FormData();
        formData.append("email", loginDetails.email);
        formData.append("password", loginDetails.password);

        axios.post("https://agaram.academy/api/b4/action.php?request=ai_finance_user_login", formData)
            .then((response) => {
                
                console.log(response);
                
               
                if (response.data.status === "success") {
                  
                    alert("Login Successful");

                

                    const userData = response.data.data
                    dispatch(setLoginUsers(userData));
                    localStorage.setItem("user",JSON.stringify(userData))
                    console.log(userData);

                    
                    navigate("/userdetails");
                       
            }
           
            else {
               alert("Email or Password not found, Please Register");
               navigate("/register")
           }
       })
}

return (    
    <div
        style={{
            backgroundImage: `url(${image})`,
            backgroundSize: "cover",
           height:"543px",
            backgroundRepeat: "no-repeat",
            
        }}
    >
            
            <Row className="justify-content-center">
                <Col md={6} lg={4}>
                    <Card className="p-4 shadow-lg" style={{ backgroundColor: "rgba(255, 255, 255, 0.85)", borderRadius: "10px", marginTop:"100px" }}>
                        <Card.Body>
                            <h3 className="text-center mb-4 text-dark">Login</h3>
                            <Form>
                                <Form.Group className="mb-3">
                                    <Form.Label>Email:</Form.Label>
                                    <Form.Control
                                        type="email"
                                        placeholder="Enter Email"
                                        value={loginDetails.email}
                                        onChange={(e) => setLoginDetails({ ...loginDetails, email: e.target.value })}
                                    />
                                </Form.Group>

                                <Form.Group className="mb-3">
                                    <Form.Label>Password:</Form.Label>
                                    <Form.Control
                                        type="password"
                                        placeholder="Enter Password"
                                        value={loginDetails.password}
                                        onChange={(e) => setLoginDetails({ ...loginDetails, password: e.target.value })}
                                    />
                                </Form.Group>

                                <Button variant="dark" className="w-100" onClick={submit}>
                                    Login
                                </Button>
                            </Form>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </div>
   
);
}

export default Login;













   
    
   
    

