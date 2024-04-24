import React from "react";
import ReactDOM from "react-dom/client";
import { useState } from "react";
import "./index.css";
import App from "./App V1";

// function Test() {
//   const [movieRating, setMovieRating] = useState(0);

//   function handleMovieRating(rating) {
//     setMovieRating(rating);
//   }
//   const containerStyle2 = {
//     width: "80%",
//     maxWidth: "600px",
//     lineHeight: "1.7",
//     padding: "2.4rem",
//     borderRadius: "11px",
//     boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
//     margin: "8px auto 16px auto",
//   };

//   return (
//     <div>
//       <div style={containerStyle2}>
//         <StarRating
//           color="#06b6d4"
//           maxRating={10}
//           onMovieRating={handleMovieRating}
//         ></StarRating>
//         <p>This movie has the rating of {movieRating}</p>
//       </div>
//       <div style={containerStyle2}>
//         <StarRating maxRating={5}></StarRating>
//       </div>
//       <div style={containerStyle2}>
//         <StarRating
//           size={24}
//           color="#818cf8"
//           classname="test"
//           messages={["Terrible", "Bad", "Okay", "Good", "Amaizing"]}
//           defaultRating={3}
//         ></StarRating>
//       </div>
//     </div>
//   );
// }

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
