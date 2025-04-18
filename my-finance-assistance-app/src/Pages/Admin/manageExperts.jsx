import { useState, useEffect } from "react";
import { Button, Table, Container, Card, Form, Row, Col } from "react-bootstrap";
import axios from "axios";
import { useNavigate } from "react-router";

function ManageExperts() {
    const [experts, setExperts] = useState([]);
    const [isEditing, setIsEditing] = useState(false);
    const navigate = useNavigate();
    const [inputValue, setInputValue] = useState({
        id: "",
        name: "",
        email: "",
        contact: "",
        gender: "",
        designation: "",
        current_organization: "",
        years_of_experience_in_finance: "",
        areas_of_expertise: []

    });

    useEffect(() => {
        getApi();
    }, []);


    const getApi = () => {

        axios.get("https://agaram.academy/api/b4/action.php?request=ai_finance_get_all_experts")
            .then((res) => {
                console.log(res.data.data)
                setExperts(res.data.data);


            })
    }


    const handleEdit = (expert) => {
        setInputValue(expert);
        setIsEditing(true);

    };


    const handleDelete = (id) => {
        alert("Are u sure to Delete?")
        const formData = new FormData();
        formData.append("id", id);

        axios.post("https://agaram.academy/api/b4/action.php?request=ai_finance_delete_expert", formData)

        let del = experts.filter((expert) => expert.id !== id)

        setExperts(del)
    }
    const updateExpert = () => {
        const formData = new FormData();
        formData.append("id", inputValue.id);
        formData.append("name", inputValue.name);
        formData.append("email", inputValue.email);
        formData.append("contact", inputValue.contact);
        formData.append("gender", inputValue.gender);
        formData.append("designation", inputValue.designation);
        formData.append("current_organization", inputValue.current_organization);
        formData.append("years_of_experience_in_finance", inputValue.years_of_experience_in_finance);
        formData.append("areas_of_expertise", JSON.stringify(inputValue.areas_of_expertise));

        axios.post("https://agaram.academy/api/b4/action.php?request=ai_finance_update_expert_profile", formData)
            .then((res) => {
                console.log(res);
                if (res.data.status === "success") {

                    alert("Expert updated successfully");

                    getApi();

                }
            })
    }




    return <div>
        <div className="container mt-4">
            <h2 className="mb-4">Manage Experts</h2>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Contact</th>
                        <th>Gender</th>
                        <th>Designation</th>
                        <th>Organization</th>
                        <th>Experience</th>
                        <th>Expertise</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>

                    {experts.map((expert, index) => (
                        <tr>
                            <td>{expert.id}</td>
                            <td>{expert.name}</td>
                            <td>{expert.email}</td>
                            <td>{expert.contact}</td>
                            <td>{expert.gender}</td>
                            <td>{expert.designation}</td>
                            <td>{expert.current_organization}</td>
                            <td>{expert.years_of_experience_in_finance}</td>
                            <td>{typeof expert.areas_of_expertise === "string"
                                ? expert.areas_of_expertise.replace(/[\[\]"]+/g, '').split(',').join(",")
                                : expert.areas_of_expertise.join(",")}</td>
                            <td>
                                <Button variant="warning" className="me-2" onClick={() => handleEdit(expert, index)}>
                                    Edit
                                </Button>
                                <Button variant="danger" onClick={() => handleDelete(expert.id)}>
                                    Delete
                                </Button>
                            </td>
                        </tr>
                    ))
                    }

                </tbody>
            </Table>

        </div>
        {isEditing && (
            <Container className="d-flex justify-content-center align-items-center min-vh-100">
                <Card className="p-4 shadow-lg" style={{ width: "35rem" }}>
                    <h2 className="text-center mb-4">Update Expert</h2>
                    <Form>
                        <Form.Group className="mb-3">
                            <Form.Label>Name</Form.Label>
                            <Form.Control
                                type="text"
                                value={inputValue.name}
                                onChange={(e) => setInputValue({ ...inputValue, name: e.target.value })}
                            />
                        </Form.Group>

                        <Form.Group className="mb-3">
                            <Form.Label>Email</Form.Label>
                            <Form.Control
                                type="email"
                                value={inputValue.email}
                                onChange={(e) => setInputValue({ ...inputValue, email: e.target.value })}
                            />
                        </Form.Group>

                        <Form.Group className="mb-3">
                            <Form.Label>Contact</Form.Label>
                            <Form.Control
                                type="text"
                                value={inputValue.contact}
                                onChange={(e) => setInputValue({ ...inputValue, contact: e.target.value })}
                            />
                        </Form.Group>

                        <Form.Group className="mb-3">
                            <Form.Label>Gender</Form.Label>
                            <Form.Select
                                value={inputValue.gender}
                                onChange={(e) => setInputValue({ ...inputValue, gender: e.target.value })}
                            >
                                <option value="">Select Gender</option>
                                <option value="male">Male</option>
                                <option value="female">Female</option>
                            </Form.Select>
                        </Form.Group>

                        <Form.Group className="mb-3">
                            <Form.Label>Designation</Form.Label>
                            <Form.Control
                                type="text"
                                value={inputValue.designation}
                                onChange={(e) => setInputValue({ ...inputValue, designation: e.target.value })}
                            />
                        </Form.Group>

                        <Form.Group className="mb-3">
                            <Form.Label>Current Organization</Form.Label>
                            <Form.Control
                                type="text"
                                value={inputValue.current_organization}
                                onChange={(e) => setInputValue({ ...inputValue, current_organization: e.target.value })}
                            />
                        </Form.Group>

                        <Form.Group className="mb-3">
                            <Form.Label>Years of Experience</Form.Label>
                            <Form.Control
                                type="text"
                                value={inputValue.years_of_experience_in_finance}
                                onChange={(e) => setInputValue({ ...inputValue, years_of_experience_in_finance: e.target.value })}
                            />
                        </Form.Group>

                        <Form.Group className="mb-3">
                            <Form.Label>Expertise</Form.Label>
                            <Form.Control
                                type="text"
                                value={inputValue.areas_of_expertise}
                                onChange={(e) => setInputValue({ ...inputValue, areas_of_expertise: e.target.value })}
                            />
                        </Form.Group>
                        <Button variant="success" className="w-100" onClick={updateExpert}>
                            Update
                        </Button>
                    </Form>
                </Card>
            </Container>
        )}


    </div>

}

export default ManageExperts;
