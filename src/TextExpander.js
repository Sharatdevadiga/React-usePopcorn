// import { useState } from "react";

// export default function TextExpander({
//   children,

//   collapsedNumWords = "20",
//   expandButtonText = "Show Text",
//   collapseButtonText = "Collapse Text",
//   buttonColor = "#0ea5e9",
// }) {
//   const containerStyle = {
//     width: "80%",
//     maxWidth: "400px",
//     lineHeight: "1.7",
//     padding: "2.4rem",
//     borderRadius: "11px",
//     boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
//     margin: "8px auto 16px auto",
//     borderTop: `2px solid ${buttonColor}`,
//   };

//   let totalWords = children.split(" ").length;
//   let wordsToCollapse =
//     totalWords < +collapsedNumWords
//       ? totalWords
//       : totalWords - Number(collapsedNumWords);
//   let initialText = children.split(" ").slice(wordsToCollapse).join(" ");

//   const [text, setText] = useState(initialText);
//   const [isExpanded, setIsExpanded] = useState(false);

//   function handleToggleText() {
//     setText(!isExpanded ? children : initialText);
//     setIsExpanded((isExpanded) => !isExpanded);
//   }

//   let buttonStyle = {
//     // backgroundColor: `${buttonColor}`,
//     color: `${buttonColor}`,
//     fontWeight: "bold",
//     display: "inline-block",
//     cursor: "pointer",
//     borderRadius: "8px",
//     padding: "0 4px",
//   };
//   return (
//     <div style={containerStyle}>
//       <p>
//         {text}
//         <span onClick={handleToggleText} style={buttonStyle}>
//           {!isExpanded ? `...> ${expandButtonText}` : `< ${collapseButtonText}`}
//         </span>
//       </p>
//     </div>
//   );
// }

// // function Button({ children, onToggleText }) {
// //   return <span onClick={onToggleText}>{children}</span>;
// // }

// // ---------------------------------
// function Test2() {
//   return (
//     <div>
//       <TextExpander>
//         Space travel is the ultimate adventure! Imagine soaring past the stars
//         and exploring new worlds. It's the stuff of dreams and science fiction,
//         but believe it or not, space travel is a real thing. Humans and robots
//         are constantly venturing out into the cosmos to uncover its secrets and
//         push the boundaries of what's possible.
//       </TextExpander>
//       <TextExpander
//         collapsedNumWords={20}
//         expandButtonText="Show text"
//         collapseButtonText="Collapse text"
//         buttonColor="#818cf8"
//       >
//         Space travel requires some seriously amazing technology and
//         collaboration between countries, private companies, and international
//         space organizations. And while it's not always easy (or cheap), the
//         results are out of this world. Think about the first time humans stepped
//         foot on the moon or when rovers were sent to roam around on Mars.
//       </TextExpander>

//       <TextExpander expanded={true} className="box">
//         Space missions have given us incredible insights into our universe and
//         have inspired future generations to keep reaching for the stars. Space
//         travel is a pretty cool thing to think about. Who knows what we'll
//         discover next!
//       </TextExpander>
//     </div>
//   );
// }
