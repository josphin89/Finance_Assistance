import { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {  Row, Col } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router';
import axios from 'axios';

function ShowUser() {

    let userId = JSON.parse(localStorage.getItem("user"))
    console.log(userId)
  const [inputValue, setInputValue] = useState({})
  const dispatch = useDispatch();
  const navigate = useNavigate();


  const getApi = () => {
  axios.get(`https://agaram.academy/api/b4/action.php?request=ai_finance_get_user_profile&user_id=${userId.id}`)
      .then((res) => {
        if (res.data.data.data) {
          const getData = JSON.parse(res.data.data.data);
          
          setInputValue(getData);
        }
      })
  }


  useEffect(() => {
    getApi();
  }, []);

  const update=()=>{
    navigate('/userDetails')
  }

  const ask=()=>{
    navigate('/finance_ai')
  }
  
   
  return (
    <div>
      <h3 style={{ textAlign: "center" }}>My Profile</h3>
      <Row>
        <Col sm="5">
          <div style={{ width: "100%", height: "100%" }}>
            <table style={{ borderCollapse: "collapse", marginLeft: "90px", minWidth: "100%", borderRadius: "5px 5px 0 0", overflow: "hidden", boxShadow: "0 0 20px black",marginTop:"25px" }}>
              <thead style={{backgroundColor:"red"}}>
              </thead>

              <tbody style={{ borderBottom: "5px solid teal" }}>
                <tr style={{ borderBottom: "1px solid gainsboro" }}>
                  <td style={{ padding:"10px"}}>Father Name</td>
                  <td>{inputValue.fatherName}</td>
                </tr>
                <tr style={{ borderBottom: "1px solid gainsboro" }}>
                  <td style={{ padding: "10px" }}>Mother Name</td>
                  <td>{inputValue.motherName}</td>
                </tr>
                <tr style={{ borderBottom: "1px solid gainsboro" }}>
                  <td style={{ padding: "10px" }}>DoB</td>
                  <td>{inputValue.DoB}</td>
                </tr>
                <tr style={{ borderBottom: "1px solid gainsboro" }}>
                  <td style={{ padding: "10px" }}>Gender</td>
                  <td>{inputValue.gender}</td>
                </tr>
                <tr style={{ borderBottom: "1px solid gainsboro" }}>
                  <td style={{ padding: "10px" }}>Marital Status</td>
                  <td>{inputValue.maritalStatus}</td>
                </tr>
                <tr style={{ borderBottom: "1px solid gainsboro" }}>
                  <td style={{ padding: "10px" }}>Spouse Name</td>
                  <td>{inputValue.spouseName}</td>
                </tr>
                <tr style={{ borderBottom: "1px solid gainsboro" }}>
                  <td style={{ padding: "10px" }}>Spouse Working Company</td>
                  <td>{inputValue.spouseWorkingCompany}</td>
                </tr>
                <tr style={{ borderBottom: "1px solid gainsboro" }}>
                  <td style={{ padding: "10px" }}>Spouse Yearly Salary</td>
                  <td>{inputValue.spouseSalary}</td>
                </tr>
                <tr style={{ borderBottom: "1px solid gainsboro" }}>
                  <td style={{ padding: "10px" }}>Children</td>
                  <td>{inputValue.children}</td>
                </tr>
                <tr style={{ borderBottom: "1px solid gainsboro" }}>
                  <td style={{ padding: "10px" }}>Current Working Company</td>
                  <td>{inputValue.currentWorkingCompany}</td>
                </tr>
                <tr style={{ borderBottom: "1px solid gainsboro" }}>
                  <td style={{ padding: "10px" }}>Salary</td>
                  <td>{inputValue.salary}</td>
                </tr>
                <tr style={{ borderBottom: "1px solid gainsboro" }}>
                  <td style={{ padding: "10px" }}>Work Experience</td>
                  <td>{inputValue.workExperience}</td>
                </tr>
                <tr style={{ borderBottom: "1px solid gainsboro" }}>
                  <td style={{ padding: "10px" }}>Working Hours</td>
                  <td>{inputValue.workingHours}</td>
                </tr>
                <tr style={{ borderBottom: "1px solid gainsboro" }}>
                  <td style={{ padding: "10px" }}>Working Shift</td>
                  <td>{inputValue.workingShift}</td>
                </tr>
                <tr style={{ borderBottom: "1px solid gainsboro" }}>
                  <td style={{ padding: "10px" }}>Yearly Salary Hike</td>
                  <td>{inputValue.yearlySalaryHike}</td>
                </tr>
                <tr style={{ borderBottom: "1px solid gainsboro" }}>
                  <td style={{ padding: "10px" }}>Monthly Expense</td>
                  <td>{inputValue.monthlyExpense}</td>
                </tr>
                <tr style={{ borderBottom: "1px solid gainsboro" }}>
                  <td style={{ padding: "10px" }}>value of assets</td>
                  <td>{inputValue.assets}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </Col>

        <Col sm="5">

          <div>
            <table style={{ borderCollapse: "collapse", margin: "25px 0", minWidth: "100%", borderRadius: "5px 5px 0 0", overflow: "hidden", boxShadow: "0 0 20px black", marginLeft: "160px" }}>
              {/* <Col sm="5"> */}
              <thead style={{ backgroundColor: "teal", color: "white", textAlign: "center", fontWeight: "bold", padding: "15px" }}>
                <tr>
                  <th style={{padding:"10px"}}>Course Name</th>
                  <th>Institute Name</th>
                  <th>Year</th>
                  <th>Percentage</th>
                </tr>
              </thead>
              <tbody>
                {inputValue.education?.map((v) =>
                  <tr>
                    <td style={{ borderBottom: "1px solid gainsboro",padding:"5px",textAlign:"center" }}>{v.course_name}</td>
                    <td style={{ borderBottom: "1px solid gainsboro",padding:"5px",textAlign:"center" }}>{v.course_institute}</td>
                    <td style={{ borderBottom: "1px solid gainsboro",padding:"5px",textAlign:"center" }}>{v.course_year}</td>
                    <td style={{ borderBottom: "1px solid gainsboro",padding:"5px",textAlign:"center" }}>{v.course_percentage}</td>
                  </tr>
                )}
              </tbody>
              {/* </Col> */}
            </table>

            <div style={{ marginLeft: "160px", backgroundColor: "teal", width: "100%", height: "500px", borderRadius: "15px", boxShadow: "0 0 20px black" }}>
              <div style={{ marginLeft: "40px", color: "white",marginTop:"50px",padding:"20px" }}>

                <h3 style={{ marginTop: "40px" }}>Skills</h3>
                <ul style={{ listStyleType: "square" }}>
                  {inputValue.skills?.map((value) => <li>{value}</li>)}
                </ul>

                <h3>Languages</h3>
                <ul style={{ listStyleType: "square" }}>
                  {inputValue.languages?.map((v) => <li>{v}</li>)}
                </ul>

                <h3>Goals</h3>
                <ul style={{ listStyleType: "square" }}>
                  {inputValue.goals?.map((v) => <li>{v}</li>)}
                </ul>
              </div>
            </div>
            <button style={{marginLeft:"450px", padding:"8px", backgroundColor:"teal", border:"none", borderRadius:"5px", marginTop:"15px",color:"white"}} onClick={update}>Update</button>
            <button style={{marginLeft:"425px", padding:"8px", backgroundColor:"teal", border:"none", borderRadius:"5px", marginTop:"15px",color:"white"}} onClick={ask}>Ask Guidance</button>
          </div>
        </Col>
      </Row>
    </div>

  );
}

export default ShowUser