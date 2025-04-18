

import { useState, useEffect } from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Form, Container, Row, Col, Card, CloseButton } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router';
import axios from 'axios';
function RegisterExperts() {
  
    const navigate = useNavigate();

 const [areaofexpertise, setAreaofexpertise] = useState([])

    const [inputValue, setInputValue] = useState({
        name: "",
        email: "",
        password: "",
        contact: "",
        gender: "",
        designation: "",
        current_organization: "",
        years_of_experience_in_finance: "",
        areas_of_expertise: []
    })

    const addexpertiseBtn = () => {
        if (areaofexpertise == "") {
            alert("please enter value")
        }
        else {
            let x = [areaofexpertise]
            let y = [...inputValue.areas_of_expertise, ...x]

            setInputValue({ ...inputValue, areas_of_expertise: y })
            setAreaofexpertise("")
        }
    }

    const deleteareas_of_expertise = (v) => {
        let del = inputValue.areas_of_expertise.filter((items) => items != v)
        setInputValue({ ...inputValue, areas_of_expertise: del })
    } 

    const Register = async () => {
        if (!inputValue.name || !inputValue.email || !inputValue.password) {
            alert("All fields are required");
            return;
        }


        const formData = new FormData();
        formData.append("name", inputValue.name);
        formData.append("email", inputValue.email);
        formData.append("password", inputValue.password);
        formData.append("contact", inputValue.contact);
        formData.append("gender", inputValue.gender);
        formData.append("designation", inputValue.designation);
        formData.append("current_organization", inputValue.current_organization);
        formData.append("years_of_experience_in_finance", inputValue.years_of_experience_in_finance);
        formData.append("areas_of_expertise", JSON.stringify(inputValue.areas_of_expertise));

        axios.post('https://agaram.academy/api/b4/action.php?request=ai_finance_expert_register', formData)
            .then((res) => {
                console.log(res)
                alert("Registered Sucessfully");

                setInputValue({
                    name: "", email: "", password: "", contact: "", gender: "",
                    designation: "", current_organization: "", years_of_experience_in_finance: "",
                    areas_of_expertise: []
                });
                navigate('/admin/manageexperts')
            })
    }
    return <div>
        <Container className="d-flex justify-content-center align-items-center min-vh-100">
            <Card className="p-4 shadow-lg" style={{ width: '30rem' }}>
                <h2 className="text-center mb-4">Register Experts</h2>
                <Form>
                    <Form.Group className="mb-3">
                        <Form.Label>Name</Form.Label>
                        <Form.Control type="text" placeholder="Enter your name"
                            value={inputValue.name}
                            onChange={(e) => setInputValue({ ...inputValue, name: e.target.value })} required />
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="email" placeholder="Enter your email"
                            value={inputValue.email}
                            onChange={(e) => setInputValue({ ...inputValue, email: e.target.value })} required />
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Enter your password"
                            value={inputValue.password}
                            onChange={(e) => setInputValue({ ...inputValue, password: e.target.value })} required />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>Contact</Form.Label>
                        <Form.Control type="number" placeholder="Enter your phone number"
                            value={inputValue.contact}
                            onChange={(e) => setInputValue({ ...inputValue, contact: e.target.value })} required />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Row>

                            <Form.Label column sm="3" >Gender</Form.Label>

                            <Col sm="3" className='mt-2'>
                                <Form.Check type="radio" label="Male" value="male"
                                    checked={inputValue.gender == "male"}
                                    onChange={(e) => setInputValue({ ...inputValue, gender: e.target.value })} />
                            </Col>
                            <Col sm="2" className='mt-2'>
                                <Form.Check type="radio" label="female" value="female"
                                    checked={inputValue.gender == "female"}
                                    onChange={(e) => setInputValue({ ...inputValue, gender: e.target.value })} />
                            </Col>
                        </Row>
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>Designation</Form.Label>
                        <Form.Control type="Designation" placeholder="Enter your Designation"
                            value={inputValue.designation}
                            onChange={(e) => setInputValue({ ...inputValue, designation: e.target.value })} required />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>Current Organization</Form.Label>
                        <Form.Control type="text" placeholder="Enter your Current Organization"
                            value={inputValue.current_organization}
                            onChange={(e) => setInputValue({ ...inputValue, current_organization: e.target.value })} required />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>Experience</Form.Label>
                        <Form.Control type="Experience" placeholder="Enter your Experience"
                            value={inputValue.years_of_experience_in_finance}
                            onChange={(e) => setInputValue({ ...inputValue, years_of_experience_in_finance: e.target.value })} required />
                    </Form.Group>
                  
                        <Form.Group className="mb-3">
                            <Row>
                                <Col sm="2">
                                    <Form.Label>Area of expertise</Form.Label>
                                </Col>
                                <Col sm="6">
                                    <Form.Control type="text" value={areaofexpertise}
                                        onChange={(e) => setAreaofexpertise(e.target.value.trim())} 
                                        placeholder=" Enter area of expertise"
                                        style={{ backgroundColor: "inherit" }}
                                    />
                                    <ul>
                                        {(inputValue.areas_of_expertise || []).map((v) =>
                                            <li>{v}<CloseButton
                                                onClick={() => deleteareas_of_expertise(v)} /></li>
                                        )}
                                    </ul>
                                </Col>
                                <Col sm="2">
                                    <Button variant='dark' onClick={addexpertiseBtn}>Add</Button>
                                </Col>
                            </Row>
                        </Form.Group>


                    <Button variant="dark" className="w-100" onClick={Register}>Register</Button>
                </Form>
            </Card>
        </Container>

        {/* <Button variant="dark" style={{ marginLeft: "150px" }} onClick={Register}>Register</Button> */}
    </div>
}

export default RegisterExperts








