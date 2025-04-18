
import { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Spinner, Form, Table } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router';
import axios from 'axios';

import {
  GoogleGenerativeAI,
  HarmCategory,
  HarmBlockThreshold,
} from "@google/generative-ai";



function FinanceAi() {

  let userId = JSON.parse(localStorage.getItem("user"));
  const navigate = useNavigate();

  const [summary, setSummary] = useState("");
  const [loading, setLoading] = useState(false);
  const [inputValue, setInputValue] = useState([]);
  const [generate, setRegenerate] = useState("generate")

  const cx = "84c171dacf1aa43c1"
  const apiKey = "AIzaSyBzB9VS7Jcpv4gQbmgZevToxvucbs7UtcY"

  const genAI = new GoogleGenerativeAI(apiKey);

  const model = genAI.getGenerativeModel({
    model: "gemini-2.0-flash",
  });

  const generationConfig = {
    temperature: 1,
    topP: 0.95,
    topK: 40,
    maxOutputTokens: 8192,
    responseMimeType: "text/plain",
  };


  const getApi = () => {

    axios.get(`https://agaram.academy/api/b4/action.php?request=ai_finance_get_user_profile&user_id=${userId.id}`)

      .then((res) => {
        let getData = res.data.data.data
        setInputValue(JSON.parse(getData))

      })
  }
  useEffect(() => {
    getApi();
    run();
  }, []);

  const edit = () => {
    navigate('/userdetails')
  }

  const help = () => {
    alert("Are u interested to talk with expert?");
    navigate('/user/viewexperts')
  }


  const run = async () => {
    setLoading(true);
    const prompt = `
            Based on the name, monthly_savings, monthly_expense, salary, assets and goals 
        What are the steps should I take to reach that goal?
        1.Format the output with  proper HTML5 structure for better semantics and accessibility.
        2. Uses Bootstrap classes for consistent styling and responsiveness 
        (e.g., 'container', 'goal-card', 'section-heading').
        3.Includes custom CSS to enhance visual appeal, improve readability, and highlight key information. 
        The '.key-info' class and color scheme make important numbers stand out.
        4.Break down the plan into multiple phases with clear section headings.
        5.Add tooltips for additional explanations on key terms.
        6.Provide a disclaimer regarding financial advice and the importance of consulting a professional.
        7. Output needs to look good like real time web application.
        8. Output response will be HTML format only and avoid text which are placed outside HTML
        9. donot use $ use Rs with value
       
        
       
           
            ${JSON.stringify(inputValue)}`;

    const result = await model.generateContent(prompt);
    console.log("Summary Response:", result.response.text());
    const responseText = result.response.text().replace(/```html/g, "").replace(/```/g, "");
    setRegenerate("generated")
    setSummary(responseText);
    setLoading(false);

  }
  
  return <div>

    <Button
      variant="success"
      style={{ marginLeft: "545px", marginTop: "15px" }}
      disabled={loading}
      onClick={run}>

      {loading ? (
        <>
          <Spinner animation="border" size="sm" style={{ marginRight: "10px" }} variant="light" />
          Generating...
        </>
      ) : generate === "generate" ? "Generate Tips" : "ReGenerate"}
    </Button>
    <div dangerouslySetInnerHTML={{ __html: summary }} className="mt-3" />


    <div className="d-flex justify-content-center mt-3 gap-3">
      <Button variant='primary' onClick={edit}>Need to Edit your Profile</Button>
      <Button variant='primary' onClick={help}>Talk with Experts</Button>
    </div>



  </div>

}

export default FinanceAi;