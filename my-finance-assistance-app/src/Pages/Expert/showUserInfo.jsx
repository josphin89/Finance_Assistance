import { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Table, Row, Col } from 'react-bootstrap';



function UserInfo() {

  const { user_id } = useParams();
  const [userDetails, setUserDetails] = useState(null);

  const getApi = () => {
    axios.get(`https://agaram.academy/api/b4/action.php?request=ai_finance_get_user_profile&user_id=${user_id}`)
      .then((res) => {
        console.log(res.data.data.data)
        if (res.data.data.data) {
          const getData = res.data.data.data;
          let getVal = JSON.parse(getData)
          setUserDetails(getVal);
        }
      })
  }


  useEffect(() => {
    getApi();
  }, [user_id]);


  return (
    <div>
      <h4 style={{ textAlign: "center", backgroundColor: "teal", padding: "10px", color: "white" }}>Requested User Details</h4>
      <Row>
        <Col sm="5">
          <div style={{ width: "100%", height: "100%" }}>

            <table style={{ borderCollapse: "collapse", marginLeft: "120px", minWidth: "100%", borderRadius: "5px 5px 0 0", overflow: "hidden", boxShadow: "0 0 20px black", marginTop: "25px" }}>
              <thead style={{ backgroundColor: "teal", color: "white", textAlign: "center", fontWeight: "bold", padding: "15px" }}>

              </thead>

              <tbody style={{ borderBottom: "5px solid teal" }}>
                <tr style={{ borderBottom: "1px solid gainsboro" }}>
                  <td style={{ padding: "10px" }}>Father Name</td>
                  <td>{userDetails?.fatherName}</td>
                </tr>
                <tr style={{ borderBottom: "1px solid gainsboro" }}>
                  <td style={{ padding: "10px" }}>Mother Name</td>
                  <td>{userDetails?.motherName}</td>
                </tr>
                <tr style={{ borderBottom: "1px solid gainsboro" }}>
                  <td style={{ padding: "10px" }}>DoB</td>
                  <td>{userDetails?.DoB}</td>
                </tr>
                <tr style={{ borderBottom: "1px solid gainsboro" }}>
                  <td style={{ padding: "10px" }}>Gender</td>
                  <td>{userDetails?.gender}</td>
                </tr>
                <tr style={{ borderBottom: "1px solid gainsboro" }}>
                  <td style={{ padding: "10px" }}>Marital Status</td>
                  <td>{userDetails?.maritalStatus}</td>
                </tr>
                <tr style={{ borderBottom: "1px solid gainsboro" }}>
                  <td style={{ padding: "10px" }}>Spouse Name</td>
                  <td>{userDetails?.spouseName}</td>
                </tr>
                <tr style={{ borderBottom: "1px solid gainsboro" }}>
                  <td style={{ padding: "10px" }}>Spouse Working Company</td>
                  <td>{userDetails?.spouseWorkingCompany}</td>
                </tr>
                <tr style={{ borderBottom: "1px solid gainsboro" }}>
                  <td style={{ padding: "10px" }}>Spouse Yearly Salary</td>
                  <td>{userDetails?.spouseSalary}</td>
                </tr>
                <tr style={{ borderBottom: "1px solid gainsboro" }}>
                  <td style={{ padding: "10px" }}>Children</td>
                  <td>{userDetails?.children}</td>
                </tr>
                <tr style={{ borderBottom: "1px solid gainsboro" }}>
                  <td style={{ padding: "10px" }}>Current Working Company</td>
                  <td>{userDetails?.currentWorkingCompany}</td>
                </tr>
                <tr style={{ borderBottom: "1px solid gainsboro" }}>
                  <td style={{ padding: "10px" }}>Salary</td>
                  <td>{userDetails?.salary}</td>
                </tr>
                <tr style={{ borderBottom: "1px solid gainsboro" }}>
                  <td style={{ padding: "10px" }}>Work Experience</td>
                  <td>{userDetails?.workExperience}</td>
                </tr>
                <tr style={{ borderBottom: "1px solid gainsboro" }}>
                  <td style={{ padding: "10px" }}>Working Hours</td>
                  <td>{userDetails?.workingHours}</td>
                </tr>
                <tr style={{ borderBottom: "1px solid gainsboro" }}>
                  <td style={{ padding: "10px" }}>Working Shift</td>
                  <td>{userDetails?.workingShift}</td>
                </tr>
                <tr style={{ borderBottom: "1px solid gainsboro" }}>
                  <td style={{ padding: "10px" }}>Yearly Salary Hike</td>
                  <td>{userDetails?.yearlySalaryHike}</td>
                </tr>
                <tr style={{ borderBottom: "1px solid gainsboro" }}>
                  <td style={{ padding: "10px" }}>Monthly Expense</td>
                  <td>{userDetails?.monthlyExpense}</td>
                </tr>
                <tr style={{ borderBottom: "1px solid gainsboro" }}>
                  <td style={{ padding: "10px" }}>value of assets</td>
                  <td>{userDetails?.assets}</td>
                </tr>
              </tbody>
            </table>

          </div>
        </Col>

        <Col sm="5">

          <div>
            <table style={{ borderCollapse: "collapse", margin: "25px 0", minWidth: "100%", borderRadius: "5px 5px 0 0", overflow: "hidden", boxShadow: "0 0 20px black", marginLeft: "160px", marginTop: "25px" }}>
              {/* <Col sm="5"> */}
              <thead style={{ backgroundColor: "teal", color: "white", textAlign: "center", fontWeight: "bold", padding: "15px" }}>
                <tr>
                  <th style={{ padding: "10px" }}>Course Name</th>
                  <th>Institute Name</th>
                  <th>Year</th>
                  <th>Percentage</th>
                </tr>
              </thead>
              <tbody>
                {userDetails?.education?.map((v) =>
                  <tr>
                    <td style={{ borderBottom: "1px solid gainsboro", padding: "5px", textAlign: "center" }}>{v.course_name}</td>
                    <td style={{ borderBottom: "1px solid gainsboro", padding: "5px", textAlign: "center" }}>{v.course_institute}</td>
                    <td style={{ borderBottom: "1px solid gainsboro", padding: "5px", textAlign: "center" }}>{v.course_year}</td>
                    <td style={{ borderBottom: "1px solid gainsboro", padding: "5px", textAlign: "center" }}>{v.course_percentage}</td>
                  </tr>
                )}
              </tbody>
              {/* </Col> */}
            </table>

            <div style={{ marginLeft: "160px", backgroundColor: "teal", width: "100%", height: "500px", borderRadius: "15px", boxShadow: "0 0 20px black" }}>
              <div style={{ marginLeft: "40px", color: "white", marginTop: "50px", padding: "20px" }}>

                <h3 style={{ marginTop: "40px" }}>Skills</h3>
                <ul style={{ listStyleType: "square" }}>
                  {userDetails?.skills?.map((value) => <li>{value}</li>)}
                </ul>

                <h3>Languages</h3>
                <ul style={{ listStyleType: "square" }}>
                  {userDetails?.languages?.map((v) => <li>{v}</li>)}
                </ul>

                <h3>Goals</h3>
                <ul style={{ listStyleType: "square" }}>
                  {userDetails?.goals?.map((v) => <li>{v}</li>)}
                </ul>
              </div>
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
}

export default UserInfo