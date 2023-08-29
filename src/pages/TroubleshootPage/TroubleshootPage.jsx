import React, { useState, useEffect } from "react";
import axios from "axios";
import SecondHeaderComponent from "../../components/SecondHeaderComponent/SecondHeaderComponent";
import "./TroubleshootPage.scss";

const PORT = process.env.REACT_APP_API_SERVER;

function TroubleshootPage() {
  const [selectedIssue, setSelectedIssue] = useState("");
  const [issues, setIssues] = useState([]);
  const [response, setResponse] = useState([]);

  useEffect(() => {
    axios.get(`${PORT}/troubleshootPage/issues`)
      .then((response) => {
        setIssues(response.data);
      })
      .catch((error) => {
        console.error("Error fetching issues:", error);
      });
  }, []);

  const handleIssueChange = (event) => {
    setSelectedIssue(event.target.value);
  };

  const handleSubmit = () => {
    axios
      .post(`${PORT}/troubleshootPage`, { question: selectedIssue })
      .then((response) => {
        setResponse(response.data);
      })
      .catch((error) => {
        console.error("Error fetching response:", error);
      });
  };

  return (
    <section className="troubleshoot">
      <div className="troubleshoot__header">
        <SecondHeaderComponent />
      </div>
      <div className="troubleshoot__question">
        <h2>Let's try to find a solution!</h2>
<div className="troubleshoot__selectandbutton">
        <select value={selectedIssue} onChange={handleIssueChange}>
          <option value="">Select an issue...</option>
          {issues.map((issue) => (
            <option key={issue.id}>
              {issue.problem}
            </option>
          ))}
        </select>
        <button onClick={handleSubmit}>Submit</button>
      </div>
      </div>
      {response.length > 0 && (
        <div className="troubleshoot__response">
          {response.map((solution, index) => (
            <div className="troubleshoot__solutions" key={index}>
              <h1 className="troubleshoot__solutions--title">Solution {index + 1}</h1>
              <p className="troubleshoot__solutions--solution">Solution: {solution.solution}</p>
              <p className="troubleeshoot__solutions--instructions">Instructions: {solution.instructions}</p>
              <p className="troubleshoot__solutions--tools">Tools Required: {solution.tools_required}</p>
            </div>
          ))}
        </div>
      )}
    </section>
  );
}

export default TroubleshootPage;
