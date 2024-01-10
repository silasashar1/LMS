// "use client";

// import React, { useState } from "react";

// const YouTubeVideoEmbed = ({ videoUrl }) => {
//   return (
//     <div className="video-container">
//       <iframe
//         width="560"
//         height="315"
//         src={`https://www.youtube.com/embed/${videoUrl}`}
//         title="YouTube Video Embed"
//         frameBorder="0"
//         allowFullScreen
//       ></iframe>
//     </div>
//   );
// };

// const YouTubeVideoForm = () => {
//   const [videoUrl, setVideoUrl] = useState("");
//   const [submittedUrl, setSubmittedUrl] = useState("");

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Extract the video ID from the YouTube URL
//     const videoId = extractVideoId(videoUrl);
//     if (videoId) {
//       setSubmittedUrl(videoId);
//       setVideoUrl(""); // Clear the input field after submission
//     } else {
//       alert("Invalid YouTube URL. Please enter a valid YouTube video URL.");
//     }
//   };

//   // Function to extract video ID from YouTube URL
//   const extractVideoId = (url) => {
//     const regex = /(?:youtube\.com\/(?:[^\/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([^"&?\/\s]{11})/;
//     const match = url.match(regex);
//     return match ? match[1] : null;
//   };

//   return (
//     <div>
//       <form onSubmit={handleSubmit}>
//         <label>
//           Enter YouTube Video URL:
//           <input
//             type="text"
//             value={videoUrl}
//             onChange={(e) => setVideoUrl(e.target.value)}
//           />
//         </label>
//         <button type="submit">Submit</button>
//       </form>

//       {submittedUrl && (
//         <div>
//           <h2>Embedded Video:</h2>
//           <YouTubeVideoEmbed videoUrl={submittedUrl} />
//         </div>
//       )}
//     </div>
//   );
// };

// export default YouTubeVideoForm;
