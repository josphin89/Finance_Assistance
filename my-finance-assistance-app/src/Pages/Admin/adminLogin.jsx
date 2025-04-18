
import { useState, useEffect } from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Form, Container, Row, Col, Card } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router';
import axios from 'axios';
function AdminLogin() {
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

            axios.post("https://agaram.academy/api/b4/action.php?request=ai_finance_admin_login", formData)
                .then((response) => {

                    console.log(response);


                    if (response.data.status === "success") {

                        alert("Login Successful");
                       navigate("/admin/registerexperts");

                }else{
                    alert("Invalid Output");
                }


           })
    }
    return <div>
        <Container className="d-flex justify-content-center align-items-center vh-100">
            <Row>
                <Col>
                    <Card className="p-4 shadow-lg login-card">
                        <h3 className="text-center">Admin Login</h3>
                        <Form>
                            <Form.Group className="mb-3">
                                <Form.Label>Email:</Form.Label>
                                <Form.Control type="email" placeholder="Enter Email"
                                    value={loginDetails.email}
                                    onChange={(e) => setLoginDetails({ ...loginDetails, email: e.target.value })} />
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <Form.Label>Password:</Form.Label>
                                <Form.Control type="password" placeholder="Enter Password"
                                    value={loginDetails.password}
                                    onChange={(e) => setLoginDetails({ ...loginDetails, password: e.target.value })} />
                            </Form.Group>
                            <Button variant="success" className="w-100" onClick={submit}>Login</Button>
                        </Form>
                    </Card>
                </Col>
            </Row>
        </Container>
    </div>
}
export default AdminLogin







