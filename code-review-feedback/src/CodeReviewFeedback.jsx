import React, { useState } from "react";
const initialCodeReview = [
  { id: 1, title: "Readability", upvote: 0, downvote: 0 },
  { id: 2, title: "Performance", upvote: 0, downvote: 0 },
  { id: 3, title: "Security", upvote: 0, downvote: 0 },
  { id: 4, title: "Documentation", upvote: 0, downvote: 0 },
  { id: 5, title: "Testing", upvote: 0, downvote: 0 },
];
const FeedbackSystem = () => {
  const [codeReview, setCodeReview] = useState(initialCodeReview);
  const handleUpVote = (id) => {
    setCodeReview((prev) => {
      return prev.map((code) => {
        if (code.id === id) code.upvote++;
        return code;
      });
    });
  };
  const handleDownVote = (id) => {
    setCodeReview((prev) => {
      return prev.map((code) => {
        if (code.id === id) code.downvote++;
        return code;
      });
    });
  };
  return (
    <div className="my-0 mx-auto text-center w-mx-1200">
      <div className="flex wrap justify-content-center mt-30 gap-30">
        {codeReview.map((code) => (
          <div className="pa-10 w-300 card" key={code.id}>
            <h2>{code.title} </h2>
            <div className="flex my-30 mx-0 justify-content-around">
              <button
                className="py-10 px-15"
                data-testid={`upvote-btn-${code.id}`}
                onClick={() => handleUpVote(code.id)}
              >
                👍 Upvote
              </button>
              <button
                className="py-10 px-15 danger"
                data-testid={`upvote-btn-${code.id}`}
                onClick={() => handleDownVote(code.id)}
              >
                👎 Downvote
              </button>
            </div>
            <p className="my-10 mx-0" data-testid={`upvote-count-${code.id}`}>
              Upvotes: <strong>{code.upvote} </strong>
            </p>
            <p className="my-10 mx-0" data-testid={`upvote-count-${code.id}`}>
              Downvotes: <strong>{code.downvote} </strong>
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeedbackSystem;
