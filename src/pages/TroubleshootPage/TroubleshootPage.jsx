import React, { useState, useEffect } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import SecondHeaderComponent from "../../components/SecondHeaderComponent/SecondHeaderComponent";
import "./TroubleshootPage.scss";

const PORT = process.env.REACT_APP_API_SERVER;

function TroubleshootPage() {
  const [selectedIssue, setSelectedIssue] = useState("");
  const [issues, setIssues] = useState([]);
  const [response, setResponse] = useState([]);
  const [userComment, setUserComment] = useState("");
  const [userComments, setUserComments] = useState([]);
  const [userName, setUserName] = useState("");
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    axios
      .get(`${PORT}/troubleshootPage/issues`)
      .then((response) => {
        setIssues(response.data);
      })
      .catch((error) => {
        console.error("Error fetching issues:", error);
      });
  }, []);

  useEffect(() => {
    // console.log('userComments', userComments)
  }, [userComments]);

  const handleIssueChange = (event) => {
    setSelectedIssue(event.target.value);
  };

  const handleSubmit = () => {
    console.log("submit form");
    axios
      .post(`${PORT}/troubleshootPage`, { question: selectedIssue })
      .then((response) => {
        console.log("post", response.data);
        setResponse(response.data);
      })
      .catch((error) => {
        console.error("Error fetching response:", error);
      });
  };

  const handleCommentSubmit = (event) => {
    event.preventDefault();

    const commentData = {
      name: userName,
      comment: userComment,
    };

    const toastMessage = () => {
      toast.success("Comment submitted!", {
        position: toast.POSITION.TOP_RIGHT,
      });
    };

    if (!userName || !userComment) {
      toast.error("Please fill in both your name and comment!", {
        position: toast.POSITION.TOP_RIGHT,
      });
      return;
    }

    axios
      .post(`${PORT}/troubleshootPage/comments`, commentData)
      .then((response) => {
        console.log("response", response);

        // setUserComments([commentData, ...userComments]);
        setUserComment("");
        setUserName("");
        toastMessage();

        return axios.get(`${PORT}/troubleshootPage/comments`);
      })
      .then((response) => {
        setUserComments(response.data);
      })

      .catch((error) => {
        console.error("Error submitting comment:", error);
      });
  };

  useEffect(() => {
    axios
      .get(`${PORT}/troubleshootPage/comments`)
      .then((response) => {
        setUserComments(response.data);
      })
      .catch((error) => {
        console.error("Error fetching comments:", error);
      });
  }, []);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <section className={`troubleshoot ${darkMode ? "dark-mode" : ""}`}>
      <div className="troubleshoot__header">
        <SecondHeaderComponent />
        <ToastContainer />
        <button onClick={toggleDarkMode}>
          {darkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
        </button>
      </div>
      <div className="troubleshoot__question">
        <h2>Let's try to find a solution!</h2>
        <div className="troubleshoot__selectandbutton">
          <select value={selectedIssue} onChange={handleIssueChange}>
            <option value="">Select an issue...</option>
            {issues.map((issue) => (
              <option key={issue.id}>{issue.problem}</option>
            ))}
          </select>
          <button onClick={handleSubmit}>Submit</button>
        </div>
      </div>
      {response.length > 0 && (
        <div className="troubleshoot__response">
          {response.map((solution, index) => (
            <div className="troubleshoot__solutions" key={index}>
              <h1 className="troubleshoot__solutions--title">
                Solution {index + 1}
              </h1>
              <p>{solution.solution}</p>
              <p className="troubleshoot__solutions--instructions">
                Instructions:
              </p>
              {solution.instructions
                .split("\n\n")
                .map((paragraph, paragraphIndex) => (
                  <p key={paragraphIndex}>{paragraph}</p>
                ))}
              <p className="troubleshoot__solutions--tools">Tools Required:</p>
              <p>{solution.tools_required}</p>
            </div>
          ))}
        </div>
      )}
      <form
        onSubmit={handleCommentSubmit}
        className={`troubleshoot__comments ${darkMode ? "dark-mode" : ""}`}
      >
        <input
          className={`troubleshoot__name ${darkMode ? "dark-mode" : ""}`}
          placeholder="Enter your name..."
          type=""
          value={userName}
          onChange={(event) => setUserName(event.target.value)}
        />
        <textarea
          className={`troubleshoot__comment ${darkMode ? "dark-mode" : ""}`}
          placeholder="Enter comment..."
          name=""
          value={userComment}
          onChange={(event) => setUserComment(event.target.value)}
          id=""
          cols="30"
          rows="10"
        ></textarea>
        <button className="troubleshoot__submit">Enter!</button>
      </form>
      <div className="troubleshoot__responses">
        {userComments.map((comment, index) => (
          <div
            key={index}
            className={`troubleshoot__userComment ${
              darkMode ? "dark-mode" : ""
            }`}
          >
            <p>{comment.name}</p>
            <p>{comment.comment}</p>
            <p>{new Date(comment.created_at).toLocaleString()}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default TroubleshootPage;
