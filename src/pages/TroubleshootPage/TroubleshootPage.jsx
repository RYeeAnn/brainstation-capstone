import React, { useState, useEffect } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useSpring, animated } from "react-spring";
import axios from "axios";
import SecondHeaderComponent from "../../components/SecondHeaderComponent/SecondHeaderComponent";
import "./TroubleshootPage.scss";
import trash from "../../assets/trash.svg";
import heart from "../../assets/heart.svg";
import feedback from "../../assets/feedback.png"
import FooterComponent from "../../components/FooterComponent/FooterComponent";

const PORT = process.env.REACT_APP_API_SERVER;

function TroubleshootPage() {
  const [selectedIssue, setSelectedIssue] = useState("");
  const [issues, setIssues] = useState([]);
  const [response, setResponse] = useState([]);
  const [userComment, setUserComment] = useState("");
  const [userComments, setUserComments] = useState([]);
  const [userName, setUserName] = useState("");
  const [darkMode, setDarkMode] = useState(false);
  const [showDeleteConfirmation, setShowDeleteConfirmation] = useState(false);
  const [commentToDelete, setCommentToDelete] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0)
  }, []);

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
    axios
      .get(`${PORT}/troubleshootPage/comments`)
      .then((response) => {
        setUserComments(response.data);
      })
      .catch((error) => {
        console.error("Error fetching comments:", error);
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

  const handleCommentSubmit = (event) => {
    event.preventDefault();

    const commentData = {
      name: userName,
      comment: userComment,
    };

    const toastMessage = () => {
      toast.success("Comment submitted.", {
        position: toast.POSITION.TOP_RIGHT,
      });
    };

    if (!userName || !userComment) {
      toast.error("Please fill in both your name and comment.", {
        position: toast.POSITION.TOP_RIGHT,
      });
      return;
    }

    axios
      .post(`${PORT}/troubleshootPage/comments`, commentData)
      .then(() => {
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

  const handleLikeComment = (commentId) => {
    // Send a request to the server to update the likes count
    axios
      .post(`${PORT}/troubleshootPage/like/${commentId}`)
      .then(() => {
        // Update the likes in the component's state
        setUserComments((prevComments) =>
          prevComments.map((comment) =>
            comment.id === commentId
              ? { ...comment, likes: comment.likes + 1 }
              : comment
          )
        );
      })
      .catch((error) => {
        console.error("Error liking comment:", error);
        // Handle error as needed
      });
  };

  const handleDeleteComment = (commentId) => {
    setShowDeleteConfirmation(true);
    setCommentToDelete(commentId);
  };

  const handleConfirmDelete = () => {
    // Delete the comment using the commentId stored in state
    const commentIdToDelete = commentToDelete;
    axios
      .delete(`${PORT}/troubleshootPage/comments/${commentIdToDelete}`)
      .then(() => {
        setUserComments((prevComments) =>
          prevComments.filter((comment) => comment.id !== commentIdToDelete)
        );
        toast.success("Comment deleted.", {
          position: toast.POSITION.TOP_RIGHT,
        });
      })
      .catch((error) => {
        console.error("Error deleting comment:", error);
        toast.error("Error deleting comment.", {
          position: toast.POSITION.TOP_RIGHT,
        });
      });

    // Reset the state
    setShowDeleteConfirmation(false);
    setCommentToDelete(null);
  };

  const handleCancelDelete = () => {
    // Reset the state
    setShowDeleteConfirmation(false);
    setCommentToDelete(null);
  };

  const properties = {
    dark: {
      r: 9,
      transform: "rotate(40deg)",
      cx: 12,
      cy: 4,
      opacity: 0,
    },
    light: {
      r: 5,
      transform: "rotate(90deg)",
      cx: 30,
      cy: 0,
      opacity: 1,
    },
    springConfig: { mass: 4, tension: 250, friction: 35 },
  };

  const { r, transform, cx, cy, opacity } =
    properties[darkMode ? "dark" : "light"];

  const svgContainerProps = useSpring({
    transform,
    config: properties.springConfig,
  });
  const centerCircleProps = useSpring({
    r,
    config: properties.springConfig,
  });
  const maskedCircleProps = useSpring({
    cx,
    cy,
    config: properties.springConfig,
  });
  const linesProps = useSpring({
    opacity,
    config: properties.springConfig,
  });

  const toggleDarkMode = () => {
    setDarkMode((previous) => !previous);
  };

  return (
    <section className={`troubleshoot ${darkMode ? "dark-mode" : ""}`}>
      <div className="troubleshoot__header">
        <SecondHeaderComponent />
        <ToastContainer />
      </div>
      <div className="troubleshoot__question">
        <animated.svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          stroke="currentColor"
          onClick={toggleDarkMode}
          style={{
            cursor: "pointer",
            ...svgContainerProps,
          }}
        >
          <mask id="myMask2">
            <rect x="0" y="0" width="100%" height="100%" fill="white" />
            {/* <animated.circle style={maskedCircleProps} r="9" fill="black" /> */}
          </mask>
          <animated.circle
            cx="12"
            cy="12"
            style={centerCircleProps}
            fill="black"
            mask="url(#myMask2)"
          />
          <animated.g stroke="currentColor" style={linesProps}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle fill="black" cx="12" cy="12" r="5" />
              <g stroke="currentColor">
                <line x1="12" y1="1" x2="12" y2="3" />
                <line x1="12" y1="21" x2="12" y2="23" />
                <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
                <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
                <line x1="1" y1="12" x2="3" y2="12" />
                <line x1="21" y1="12" x2="23" y2="12" />
                <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
                <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
              </g>
            </svg>
          </animated.g>
        </animated.svg>
        <h2 className="troubleshoot__title">Let's try to find a solution!</h2>
<div className="troubleshoot__selectandbutton">
  <select
    className="troubleshoot__selectandbutton--text"
    value={selectedIssue}
    onChange={handleIssueChange}
  >
    <option value="">Select an issue</option>
    {issues.map((issue) => (
      <option key={issue.id}>{issue.problem}</option>
    ))}
  </select>
  <button onClick={handleSubmit}>Submit</button>
</div>
<div className="troubleshoot__response--placeholder">
  {selectedIssue ? (
    response.length > 0 ? (
      response.map((solution, index) => (
        <div className="troubleshoot__solutions--placeholder" key={index}>
          {/* ... Your response content */}
        </div>
      ))
    ) : (
      <div className="troubleshoot__placeholder-response">
        <p>Please click submit.</p>
      </div>
    )
  ) : (
    <div className="troubleshoot__placeholder--response">
      <p>Select an issue to see the response.</p>
    </div>
  )}
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
              {/* Dangerously syntax to my instructions into ordered list*/}
              <div
                className="troubleshoot__solutions--instructions--list"
                dangerouslySetInnerHTML={{ __html: solution.instructions }}
              />
              {/* {solution.instructions
                .split("\n\n")
                .map((paragraph, paragraphIndex) => (
                  <p key={paragraphIndex}>{paragraph}</p>
                ))} */}
              <p className="troubleshoot__solutions--tools">Tools Required:</p>
              <p>{solution.tools_required}</p>
            </div>
          ))}
        </div>
      )}
      <div className="troubleshoot__commentsTitle">
        Leave feedback below! <img className="troubleshoot__commentsTitle--img" src={feedback} alt="Feedback" />
      </div>
      <form
        onSubmit={handleCommentSubmit}
        className={`troubleshoot__comments ${
          darkMode ? "dark-mode" : ""
        }`}
      >
        <input
          className={`troubleshoot__name ${darkMode ? "dark-mode" : ""}`}
          placeholder="Enter your name..."
          type=""
          value={userName}
          onChange={(event) => setUserName(event.target.value)}
        />
        <textarea
          className={`troubleshoot__comment ${
            darkMode ? "dark-mode" : ""
          }`}
          placeholder="Enter comment..."
          name=""
          value={userComment}
          onChange={(event) => setUserComment(event.target.value)}
          id=""
          cols="30"
          rows="10"
        ></textarea>
        <button className="troubleshoot__submit">Enter</button>
      </form>
      <div className="troubleshoot__responses">
        {userComments.map((comment, index) => (
          <div
            key={index}
            className={`troubleshoot__userComment ${
              darkMode ? "dark-mode" : ""
            }`}
          >
            <div className="troubleshoot__userComment--namedate">
              <p className="troubleshoot__userComment--name">{comment.name}</p>
              <p className="troubleshoot__userComment--date">
                {new Date(comment.created_at).toLocaleString()}
              </p>
            </div>
            <div className="troubleshoot__userComment--commentContainer">
              <p className="troubleshoot__userComment--comment">
                {comment.comment}
              </p>
            </div>
            <div className="troubleshoot__userComment--likedelete">
              <div
                className="troubleshoot__userComment--like"
                onClick={() => handleLikeComment(comment.id)}
              >
                <img
                  className="troubleshoot__userComment--like"
                  src={heart}
                  alt="Heart"
                />
                {comment.likes}
              </div>
              <img
                className="troubleshoot__userComment--icon"
                onClick={() => handleDeleteComment(comment.id)}
                src={trash}
                alt="trash"
              />
            </div>
          </div>
        ))}
      </div>
      {showDeleteConfirmation && (
        <div className={`delete-confirmation ${darkMode ? "dark-mode" : ""}`}>
          <p className="delete-confirmation__text">Are you sure you want to delete this comment?</p>
          <div className="delete-confirmation__buttons">
          <button onClick={handleConfirmDelete}>Yes</button>
          <button onClick={handleCancelDelete}>No</button>
          </div>
        </div>
      )}
      <FooterComponent />
    </section>
  );
}

export default TroubleshootPage;
