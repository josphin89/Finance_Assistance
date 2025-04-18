import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, CloseButton, Container, Table } from 'react-bootstrap';
import { useEffect, useState } from 'react';
import img from '../assets/image4.jpg'
import Navbar from 'react-bootstrap/Navbar';
import axios from 'axios'
import { useNavigate } from 'react-router';




function UserDetails() {


    let UserId = JSON.parse(localStorage.getItem("user"))

    

const navigate = useNavigate();

    const [skillsValue, setSkillsValue] = useState([])

    const [languagesValue, setLanguageValue] = useState([])

    const [educationValue, setEducationValue] = useState({
        course_name: "",
        course_institute: "",
        course_year: "",
        course_percentage: ""
    })

    const [userGoal, setUserGoal] = useState([])

    const [inputvalue, setInputValue] = useState({
        fatherName: "",
        motherName: "",
        DoB: "",
        gender: "",
        maritalStatus: "",
        spouseName: "",
        spouseWorkingCompany: "",
        spouseSalary: "",
        children: "",
        currentWorkingCompany: "",
        salary: "",
        workExperience: "",
        workingHours: "",
        workingShift: "",
        yearlySalaryHike: "",
        monthlyExpense: "",
        monthlySaving: "",
        assets: "",
        education: [],
        skills: [],
        languages: [],
        goals: []
    })

    useEffect(() => {
        getApi()
    
    }, [])

    const submitBtn = () => {

        if (inputvalue.fatherName == "" ||
            inputvalue.motherName == "" ||
            inputvalue.DoB == "" ||
            inputvalue.gender == "" ||
            inputvalue.maritalStatus == "" ||
            inputvalue.currentWorkingCompany == "" ||
            inputvalue.salary == "" ||
            inputvalue.workExperience == "" ||
            inputvalue.workingHours == "" ||
            inputvalue.workingShift == "" ||
            inputvalue.yearlySalaryHike == "" ||
            inputvalue.monthlyExpense == "" ||
            inputvalue.monthlySaving == "" ||
            inputvalue.assets == "") {
            alert("Please Enter value")
        }
        else {
            const formData = new FormData();

            formData.append("user_id", UserId.id);

            formData.append("data", JSON.stringify(inputvalue))

            axios.post('https://agaram.academy/api/b4/action.php?request=ai_finance_update_user_profile', formData)
                .then((res) => {
                });
                alert("Submitted Successfully")
                navigate('/showuserdetails')
        }

    }

    const getApi = () => {

        axios.get(`https://agaram.academy/api/b4/action.php?request=ai_finance_get_user_profile&user_id=${UserId.id}`)

            .then((res) => {
                let getData = res.data.data.data
                setInputValue(JSON.parse(getData))

            })
    }

    const addSkillsBtn = () => {
        if (skillsValue == "") {
            alert("please enter value")
        }
        else {
            let y = [...inputvalue.skills, skillsValue]

            setInputValue({ ...inputvalue, skills: y })
            setSkillsValue("")
        }
    }

    const addLanguageBtn = () => {
        if (languagesValue == "") {
            alert("please enter value")
        }
        else {
            let y = [...inputvalue.languages, languagesValue]

            setInputValue({ ...inputvalue, languages: y })
            setLanguageValue("")
        }

    }

    const addEducationValue = () => {
        if (educationValue.course_name == "" || educationValue.course_institute == "" || educationValue.course_year == "" || educationValue.course_percentage == "") {
            alert("please enter value")
        }
        else {
            let y = [...inputvalue.education, educationValue]

            setInputValue({ ...inputvalue, education: y })
            setEducationValue({
                course_name: "",
                course_institute: "",
                course_year: "",
                course_percentage: ""
            })
        }

    }

    const addGoalBtn = () => {
        if (userGoal == "") {
            alert("please Enter Value")
        }
        else {
            let y = [...inputvalue.goals, userGoal]

            setInputValue({ ...inputvalue, goals: y })
            setUserGoal("")
        }
    }

    const deleteSkills = (v) => {
        let del = inputvalue.skills.filter((items) => items != v)
        setInputValue({ ...inputvalue, skills: del })
    }

    const deleteLanguages = (v) => {
        let del = inputvalue.languages.filter((items) => items != v)
        setInputValue({ ...inputvalue, languages: del })
    }

    const deleteEducation = (v) => {
        let del = inputvalue.education.filter((items) => items != v)
        setInputValue({ ...inputvalue, education: del })
    }

    const deleteGoals = (v) => {
        let del = inputvalue.goals.filter((items) => items != v)
        setInputValue({ ...inputvalue, goals: del })
    }


    return <div style={
        {
            backgroundImage: `url(${img})`,
            backgroundSize: "cover",
            backgroundAttachment: "revert",
            backgroundRepeat: "no-repeat",
            maxHeight: "2000px"
        }}>
        <Navbar style={{ marginBottom: "4px", width: "100%" }} bg="dark" data-bs-theme="dark">
            <Container className='mt-25'>
                <Navbar.Brand href="#home">Pocket Planner</Navbar.Brand>
            </Container>
        </Navbar>
        <Container>
            <Form style={{ border: "5px solid white", padding: "20px" }}>
                <Row>
                    <Col sm="6">
                        <h3>Personal Details</h3>
                        <Form.Group as={Row} className="mb-3" >
                            <Form.Label column sm="3">Father Name</Form.Label>
                            <Col sm="6">
                                <Form.Control
                                    style={{ backgroundColor: "inherit" }}
                                    type="text"
                                    value={inputvalue.fatherName}
                                    placeholder="Enter Father Name"
                                    onChange={(e) => setInputValue({ ...inputvalue, fatherName: e.target.value.trimStart() })} />
                            </Col>
                        </Form.Group>
                        <Form.Group as={Row} className="mb-3">
                            <Form.Label column sm="3" >Mother Name</Form.Label>
                            <Col sm="6">
                                <Form.Control type="text" placeholder="Enter Mother Name"
                                    value={inputvalue.motherName}
                                    style={{ backgroundColor: "inherit" }}
                                    onChange={(e) => setInputValue({ ...inputvalue, motherName: e.target.value.trimStart() })} />
                            </Col>
                        </Form.Group>
                        <Form.Group as={Row} className="mb-3">
                            <Form.Label column sm="3">Date of Birth</Form.Label>
                            <Col sm="6">
                                <Form.Control type="date" placeholder="Enter Date of Birth"
                                    value={inputvalue.DoB}
                                    style={{ backgroundColor: "inherit" }}
                                    onChange={(e) => setInputValue({ ...inputvalue, DoB: e.target.value })} />
                            </Col>
                        </Form.Group>
                        <Form.Group as={Row} className="mb-3">
                            <Row>
                                <Col sm="3">
                                    <Form.Label column sm="3" >Gender</Form.Label>
                                </Col>
                                <Col sm="3" className='mt-2'>
                                    <Form.Check type="radio" label="Male" value="male"
                                        checked={inputvalue.gender == "male"}
                                        onChange={(e) => setInputValue({ ...inputvalue, gender: e.target.value })} />
                                </Col>
                                <Col sm="2" className='mt-2'>
                                    <Form.Check type="radio" label="female" value="female"
                                        checked={inputvalue.gender == "female"}
                                        onChange={(e) => setInputValue({ ...inputvalue, gender: e.target.value })} />
                                </Col>
                            </Row>
                        </Form.Group>
                        <Form.Group as={Row} className="mb-3">
                            <Row>
                                <Col sm="3">
                                    <Form.Label column sm="3" >Marital Status</Form.Label>
                                </Col>
                                <Col sm="3" className='mt-2'>
                                    <Form.Check type="radio" label="Married" value="married"
                                        checked={inputvalue.maritalStatus == "married"}
                                        onChange={(e) => setInputValue({ ...inputvalue, maritalStatus: e.target.value })} />
                                </Col>
                                <Col sm="2" className='mt-2'>
                                    <Form.Check type="radio" label="Single" value="single"
                                        checked={inputvalue.maritalStatus == "single"}
                                        onChange={(e) => setInputValue({ ...inputvalue, maritalStatus: e.target.value })} />
                                </Col>
                            </Row>
                        </Form.Group>
                        <Form.Group as={Row} className="mb-3">
                            <Form.Label column sm="3">Spouse Name</Form.Label>
                            <Col sm="6">
                                <Form.Control type="text" placeholder="Enter Spouse Name"
                                    value={inputvalue.spouseName}
                                    style={{ backgroundColor: "inherit" }}
                                    onChange={(e) => setInputValue({ ...inputvalue, spouseName: e.target.value.trimStart() })} />
                            </Col>
                        </Form.Group>
                        <Form.Group as={Row} className="mb-3">
                            <Form.Label column sm="3" >Spouse Working Company</Form.Label>
                            <Col sm="6">
                                <Form.Control type="text" placeholder="Enter Spouse Working Company"
                                    value={inputvalue.spouseWorkingCompany}
                                    style={{ backgroundColor: "inherit" }}
                                    onChange={(e) => setInputValue({ ...inputvalue, spouseWorkingCompany: e.target.value.trimStart() })} />
                            </Col>
                        </Form.Group>
                        <Form.Group as={Row} className="mb-3">
                            <Form.Label column sm="3" >Spouse Salary</Form.Label>
                            <Col sm="6">
                                <Form.Control type="number" placeholder="Enter Spouse Salary"
                                    value={inputvalue.spouseSalary}
                                    style={{ backgroundColor: "inherit" }}
                                    onChange={(e) => setInputValue({ ...inputvalue, spouseSalary: e.target.value.trimStart() })} />
                            </Col>
                        </Form.Group>
                        <Form.Group as={Row} className="mb-3" >
                            <Form.Label column sm="3" >Children</Form.Label>
                            <Col sm="6">
                                <Form.Control type="number" placeholder="Enter Children"
                                    value={inputvalue.children}
                                    style={{ backgroundColor: "inherit" }}
                                    onChange={(e) => setInputValue({ ...inputvalue, children: e.target.value })} />
                            </Col>
                        </Form.Group>
                        <Form.Group as={Row} className="mb-3">
                            <Form.Label column sm="3" >Current Working Company</Form.Label>
                            <Col sm="6">
                                <Form.Control type="text" placeholder="Enter Current Working Company"
                                    value={inputvalue.currentWorkingCompany}
                                    style={{ backgroundColor: "inherit" }}
                                    onChange={(e) => setInputValue({ ...inputvalue, currentWorkingCompany: e.target.value.trimStart() })} />
                            </Col>
                        </Form.Group>
                        <Form.Group as={Row} className="mb-3" >
                            <Form.Label column sm="3" >Salary</Form.Label>
                            <Col sm="6">
                                <Form.Control type="number" placeholder="Enter Salary"
                                    value={inputvalue.salary}
                                    style={{ backgroundColor: "inherit" }}
                                    onChange={(e) => setInputValue({ ...inputvalue, salary: e.target.value })} />
                            </Col>
                        </Form.Group>
                        <Form.Group as={Row} className="mb-3">
                            <Form.Label column sm="3" >Work Experience</Form.Label>
                            <Col sm="6">
                                <Form.Control type="text" placeholder="Enter Work Experience"
                                    value={inputvalue.workExperience}
                                    style={{ backgroundColor: "inherit" }}
                                    onChange={(e) => setInputValue({ ...inputvalue, workExperience: e.target.value.trimStart() })} />
                            </Col>
                        </Form.Group>

                    </Col>

                    {/* column 2nd part */}

                    <Col sm="6">
                        <Form.Group as={Row} className="mb-3" >
                            <Form.Label column sm="3" >Working Hours</Form.Label>
                            <Col sm="6">
                                <Form.Control type="number" placeholder="Enter Working Hours"
                                    value={inputvalue.workingHours}
                                    style={{ backgroundColor: "inherit" }}
                                    onChange={(e) => setInputValue({ ...inputvalue, workingHours: e.target.value })} />
                            </Col>
                        </Form.Group>
                        <Form.Group as={Row} className="mb-3">
                            <Form.Label column sm="3" >Working Shift</Form.Label>
                            <Col sm="6">
                                <Form.Control type="text" placeholder="Enter Working Shift"
                                    value={inputvalue.workingShift}
                                    style={{ backgroundColor: "inherit" }}
                                    onChange={(e) => setInputValue({ ...inputvalue, workingShift: e.target.value.trimStart() })} />
                            </Col>
                        </Form.Group>
                        <Form.Group as={Row} className="mb-3">
                            <Form.Label column sm="3" >Yearly Salary Hike</Form.Label>
                            <Col sm="6">
                                <Form.Control type="number" placeholder="Enter Yearly Salary Hike"
                                    value={inputvalue.yearlySalaryHike}
                                    style={{ backgroundColor: "inherit" }}
                                    onChange={(e) => setInputValue({ ...inputvalue, yearlySalaryHike: e.target.value })} />
                            </Col>
                        </Form.Group>
                        <Form.Group as={Row} className="mb-3">
                            <Form.Label column sm="3" >Monthly Expense</Form.Label>
                            <Col sm="6">
                                <Form.Control type="number" placeholder="Enter Monthly Expense"
                                    value={inputvalue.monthlyExpense}
                                    style={{ backgroundColor: "inherit" }}
                                    onChange={(e) => setInputValue({ ...inputvalue, monthlyExpense: e.target.value })} />
                            </Col>
                        </Form.Group>
                        <Form.Group as={Row} className="mb-3">
                            <Form.Label column sm="3">Monthly Savings</Form.Label>
                            <Col sm="6">
                                <Form.Control type="number" placeholder="Enter Monthly Savings"
                                    value={inputvalue.monthlySaving}
                                    style={{ backgroundColor: "inherit" }}
                                    onChange={(e) => setInputValue({ ...inputvalue, monthlySaving: e.target.value })} />
                            </Col>
                        </Form.Group>
                        <Form.Group as={Row} className="mb-3">
                            <Form.Label column sm="3" >Value of Assets</Form.Label>
                            <Col sm="6">
                                <Form.Control type="number" placeholder="Enter Assets"
                                    value={inputvalue.assets}
                                    style={{ backgroundColor: "inherit" }}
                                    onChange={(e) => setInputValue({ ...inputvalue, assets: e.target.value })} />
                            </Col>
                        </Form.Group>
                        <h3>Education</h3>
                        <Form.Group as={Row} className="mb-3">
                            <Form.Label column sm="3" >Course Name</Form.Label>
                            <Col sm="6">
                                <Form.Control type="text" placeholder="Enter Course Name"
                                    style={{ backgroundColor: "inherit" }} value={educationValue.course_name}
                                    onChange={(e) => setEducationValue({ ...educationValue, course_name: e.target.value.trimStart() })} />
                            </Col>
                        </Form.Group>
                        <Form.Group as={Row} className="mb-3">
                            <Form.Label column sm="3">Course Institute</Form.Label>
                            <Col sm="6">
                                <Form.Control type="text" placeholder="Enter Course Institute"
                                    style={{ backgroundColor: "inherit" }} value={educationValue.course_institute}
                                    onChange={(e) => setEducationValue({ ...educationValue, course_institute: e.target.value.trimStart() })} />
                            </Col>
                        </Form.Group>
                        <Form.Group as={Row} className="mb-3">
                            <Form.Label column sm="3" >Course Year</Form.Label>
                            <Col sm="6">
                                <Form.Control type="number" placeholder="Enter Course Year"
                                    style={{ backgroundColor: "inherit" }} value={educationValue.course_year}
                                    onChange={(e) => setEducationValue({ ...educationValue, course_year: e.target.value })} />
                            </Col>
                        </Form.Group>
                        <Form.Group as={Row} className="mb-3">
                            <Row>
                                <Col sm="3">
                                    <Form.Label>Course Percentage</Form.Label>
                                </Col>
                                <Col sm="5">
                                    <Form.Control type="number" placeholder="Enter Course Percentage"
                                        style={{ backgroundColor: "inherit" }} value={educationValue.course_percentage}
                                        onChange={(e) => setEducationValue({ ...educationValue, course_percentage: e.target.value })} />
                                </Col>
                                <Col sm="2">
                                    <Button onClick={addEducationValue} variant='dark' >Add</Button>
                                </Col>
                            </Row>
                        </Form.Group>
                        <Table striped bordered hover   >
                            <thead >
                                <tr>
                                    <th>Course Name</th>
                                    <th>Course Institute</th>
                                    <th>Course Year</th>
                                    <th>Course Percentage</th>
                                    <th>Delete</th>
                                </tr>
                            </thead>
                            <tbody>
                                {inputvalue.education.map((v) =>
                                    <tr>
                                        <td>{v.course_name}</td>
                                        <td>{v.course_institute}</td>
                                        <td>{v.course_year}</td>
                                        <td>{v.course_percentage}</td>
                                        <td><Button variant='dark' onClick={() => deleteEducation(v)}>del</Button></td>
                                    </tr>
                                )}
                            </tbody>
                        </Table>

                        <h3>Skills</h3>
                        <Form.Group as={Row} className="mb-3">
                            <Row>
                                <Col sm="2">
                                    <Form.Label>Skills</Form.Label>
                                </Col>
                                <Col sm="6">
                                    <Form.Control type="text" value={skillsValue}
                                        onChange={(e) => setSkillsValue(e.target.value.trimStart())} placeholder=" Enter Skills"
                                        style={{ backgroundColor: "inherit" }}
                                    />
                                    <ul>
                                        {inputvalue.skills.map((v) =>
                                            <li>{v}<CloseButton
                                                onClick={() => deleteSkills(v)} /></li>
                                        )}
                                    </ul>
                                </Col>
                                <Col sm="2">
                                    <Button variant='dark' onClick={addSkillsBtn}>Add</Button>
                                </Col>
                            </Row>
                        </Form.Group>

                        <h3>Languages</h3>
                        <Form.Group as={Row} className="mb-3">
                            <Row>
                                <Col sm="2">
                                    <Form.Label>Languages</Form.Label>
                                </Col>
                                <Col sm="6">
                                    <Form.Control type="text" placeholder="Enter Languages"
                                        value={languagesValue}
                                        onChange={(e) => setLanguageValue(e.target.value.trimStart())}
                                        style={{ backgroundColor: "inherit" }} />
                                    <ul>
                                        {inputvalue.languages.map((v) =>
                                            <li>{v}<CloseButton
                                                onClick={() => deleteLanguages(v)} /></li>
                                        )}
                                    </ul>
                                </Col>

                                <Col sm="2">
                                    <Button onClick={addLanguageBtn} variant='dark' >Add</Button>
                                </Col>
                            </Row>
                        </Form.Group>

                    </Col>
                </Row>

                <div>
                    <h3 style={{ textAlign: "center" }}>Goals</h3>
                    <Form.Group as={Row} className="mb-3 mt-4" style={{ marginLeft: "300px" }}>
                        <Row>
                            <Col sm="8">
                                <Form.Control type='text' placeholder='Enter Your Goals'
                                    onChange={(e) => setUserGoal(e.target.value.trimStart())}
                                    value={userGoal} />
                                <ul>
                                    {inputvalue.goals.map((v) =>
                                        <li>{v}<CloseButton
                                            onClick={() => deleteGoals(v)} /></li>
                                    )}
                                </ul>
                            </Col>
                            <Col sm="4">
                                <Button variant='dark' onClick={addGoalBtn}>Add</Button>
                            </Col>

                        </Row>
                    </Form.Group>
                </div>

                <Button onClick={submitBtn} variant='dark' size='lg' style={{ marginLeft: "577px" }}>Submit</Button>

            </Form>
        </Container>
    </div>
}

export default UserDetails

