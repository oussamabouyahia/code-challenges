import React, { useState } from "react";
const initialCodeReview = [
  { id: 0, title: "Readability", upvote: 0, downvote: 0 },
  { id: 1, title: "Performance", upvote: 0, downvote: 0 },
  { id: 2, title: "Security", upvote: 0, downvote: 0 },
  { id: 3, title: "Documentation", upvote: 0, downvote: 0 },
  { id: 4, title: "Testing", upvote: 0, downvote: 0 },
];
const FeedbackSystem = () => {
  const [codeReview, setCodeReview] = useState(initialCodeReview);
  const handleUpVote = (id) => {
    setCodeReview((prev) =>
      prev.map((code) =>
        code.id === id
          ? { ...code, upvote: code.upvote + 1 } // ✅ Creating a new object each time
          : code
      )
    );
  };

  const handleDownVote = (id) => {
    setCodeReview((prev) =>
      prev.map((code) =>
        code.id === id
          ? { ...code, downvote: code.downvote + 1 } // ✅ Creating a new object each time
          : code
      )
    );
  };

  return (
    <div className="my-0 mx-auto text-center w-mx-1200">
      <div className="flex wrap justify-content-center mt-30 gap-30">
        {codeReview.map((code) => (
          <div className="pa-10 w-300 card" key={code.id}>
            <h2>{code.title} </h2>
            <div className="flex my-30 mx-0 justify-content-around">
              <button
                data-testid={`upvote-btn-${code.id}`}
                onClick={() => handleUpVote(code.id)}
              >
                👍 Upvote
              </button>
              <button
                data-testid={`downvote-btn-${code.id}`}
                onClick={() => handleDownVote(code.id)}
              >
                👎 Downvote
              </button>
            </div>
            <p className="my-10 mx-0" data-testid={`upvote-count-${code.id}`}>
              Upvotes: {code.upvote}
            </p>
            <p className="my-10 mx-0" data-testid={`downvote-count-${code.id}`}>
              Downvotes: {code.downvote}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeedbackSystem;
