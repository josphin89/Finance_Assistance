import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Table } from 'react-bootstrap';
import { useEffect, useState } from 'react';
import axios from 'axios';

function ViewExperts() {
    let userId = JSON.parse(localStorage.getItem("user"))

    const [viewExperts, setViewExperts] = useState([]);
    const [isRequested, setIsRequested] = useState({}); 

    useEffect(() => {
        getApi();
    }, []);

    const getApi = () => {
        axios.get(`https://agaram.academy/api/b4/action.php?request=ai_finance_get_all_experts&user_id=${userId?.id}`)
            .then((res) => {
                console.log(res);
                let getData = res.data.data;
                setViewExperts(getData);

               
        })
    }
            
    

    const sendRequest = (expertId) => {
        setIsRequested(true)
        
        const formData = new FormData();
        formData.append("user_id", userId.id);
        formData.append("expert_id", expertId);

        axios.post("https://agaram.academy/api/b4/action.php?request=ai_finance_expert_request", formData)
            .then((response) => {
                if (response.data.status === "success") {
                    alert("Request sent successfully");
                } else {
                    alert("Failed");
                }
            });
    };

    return (
        <div>
            <h2 style={{ textAlign: "center" }}>Experts Assistance</h2>
            <div style={{ maxWidth: "1300px", maxHeight: "1000px", marginLeft: "100px", marginTop: "50px" }}>
                <Table border={2} striped bordered hover>
                    <thead>
                        <tr>
                            <th>S.no</th>
                            <th>Name</th>
                            <th>Contact</th>
                            <th>Email</th>
                            <th>Gender</th>
                            <th>Designation</th>
                            <th>Current Organization</th>
                            <th>Years of Experience</th>
                            <th>Areas of Expertise</th>
                            <th>Expert Assistance</th>
                        </tr>
                    </thead>
                    <tbody>
                        {viewExperts.map((v) => (
                            <tr>
                                <td>{v.id}</td>
                                <td>{v.name}</td>
                                <td>{v.contact}</td>
                                <td>{v.email}</td>
                                <td>{v.gender}</td>
                                <td>{v.designation}</td>
                                <td>{v.current_organization}</td>
                                <td>{v.years_of_experience_in_finance}</td>
                                <td>{typeof v.areas_of_expertise === "string"
                                ? v.areas_of_expertise.replace(/[\[\]"]+/g, '').split(',').join(",")
                                : v.areas_of_expertise.join(",")}</td>
                                <td>
                                    <Button
                                        variant="success"
                                        onClick={() => sendRequest(v.id)}
                                        disabled={v.isRequested} 
                                    >
                                        {v.isRequested ? "Requested" : "Contact Request"}
                                    </Button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
            </div>
        </div>
    );
}

export default ViewExperts;
