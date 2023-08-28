import React, { useState } from 'react';
import axios from 'axios'; 
import SecondHeaderComponent from '../../components/SecondHeaderComponent/SecondHeaderComponent';
import './TroubleshootPage.scss';

const PORT = process.env.REACT_APP_API_SERVER

function TroubleshootPage() {
    const [userQuestion, setUserQuestion] = useState('');
    const [response, setResponse] = useState('');

    const handleUserQuestionChange = (event) => {
        setUserQuestion(event.target.value);
    };

    const handleSubmit = () => {
        axios.post(`${PORT}`, { question: userQuestion })
            .then(response => {
                setResponse(response.data.response);
            })
            .catch(error => {
                console.error('Error fetching response:', error);
            });
    };

    return (
        <section className="troubleshoot">
            <div className="troubleshoot__header">
            <SecondHeaderComponent />
            </div>
            <div className="questionSection">
                <h2>Ask a Question</h2>
                <textarea
                    rows="4"
                    placeholder="Type your question here..."
                    value={userQuestion}
                    onChange={handleUserQuestionChange}
                />
                <button onClick={handleSubmit}>Submit</button>
            </div>
            {response && (
                <div className="responseSection">
                    <h2>Response</h2>
                    <p>{response}</p>
                </div>
            )}
        </section>
    );
}

export default TroubleshootPage;
