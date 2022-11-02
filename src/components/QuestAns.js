import { useState, useEffect } from "react";

const QuestAns = () => {
  const [question, setQuestion] = useState(null);

  const getQuestion = async () => {
    try {
      const res = await fetch("http://jservice.io/api/random");
      const data = await res.json();
      console.log(data);

      if (data) {
        setQuestion(data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const [answer, setAnswer] = useState(false);

  const getAnswer = async () => {
    try {
      setAnswer(true);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <div>
        <h2>Score:</h2>
        <button>Reset</button>
        <h2>Points:</h2>
      </div>
      <div>
        <h2>Question:</h2>
        <p>{question[0].question}</p>
        <button onClick={getQuestion}>New Question</button>

        <h2>Category: </h2>
        <p>{question == null ? "" : question[0].category.title}</p>
      </div>
      <div>
        <h2>Answer:</h2>
        <p>{answer === false ? "" : question[0].answer}</p>
        <button onClick={getAnswer}>Click to Reveal Question</button>
      </div>
    </div>
  );
};

export default QuestAns;
