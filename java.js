const videoElements = document.querySelectorAll(".myvideo");
const videoRow = document.getElementById("videoRow");

videoElements.forEach(function(video) {
    video.addEventListener("mouseover", function() {
        video.play();
    });
    video.addEventListener("mouseout", function() {
        video.pause();
    });
});

document.addEventListener("fullscreenchange", function() {
    // Get all video elements
    const videoElements = document.querySelectorAll("video");

    // Check if the document is in fullscreen and contains a video element
    const fullscreenVideo = document.fullscreenElement && document.fullscreenElement.querySelector("video");

    if (fullscreenVideo) {
        // Unmute the video when it enters fullscreen
        fullscreenVideo.muted = false;
    } else {
        // Mute all videos when exiting fullscreen
        videoElements.forEach(function(video) {
            video.muted = true;
        });
    }
});


// Video data for search functionality
const videos = [
  { title: "Kong vs Godzilla", url: "https://d3p9jc8wv1aukb.cloudfront.net/godzilla%20vs%20kong.mp4" },
  { title: "Red Dead Redemption", url: "https://d3p9jc8wv1aukb.cloudfront.net/rdr2.mp4" },
  { title: "Venom Last Dance", url: "https://d3p9jc8wv1aukb.cloudfront.net/venom.mp4" },
  { title: "Interstellar Cornfield Chase", url: "https://d3p9jc8wv1aukb.cloudfront.net/instellar.mp4" },
  { title: "Inception Theme Song", url: "https://d3p9jc8wv1aukb.cloudfront.net/inception.mp4" },
  { title: "Oppenheimer Beauty in 4 mins", url: "https://d3p9jc8wv1aukb.cloudfront.net/oppenheimer.mp4" },
  { title: "deadpool & wolverine", url: "https://d3p9jc8wv1aukb.cloudfront.net/deadpool.mp4" },
  { title: "mission impossible 8", url: "https://d3p9jc8wv1aukb.cloudfront.net/mip.mp4" },
  { title: "what if season 3 ", url: "https://d3p9jc8wv1aukb.cloudfront.net/what if.mp4" },
];

// Search function
function searchVideo() {
  const searchInput = document.getElementById("searchInput").value.toLowerCase();
  const resultContainer = document.getElementById("resultContainer");
  const videoRow = document.getElementById("videoRow");

  // Hide the main video row when searching
  videoRow.classList.add("hidden");

  // Clear previous search results
  resultContainer.innerHTML = "";

  // Filter videos by search term
  const filteredVideos = videos.filter(video =>
      video.title.toLowerCase().includes(searchInput)
  );

  // Display search results in full view if found
  if (filteredVideos.length > 0) {
      filteredVideos.forEach(video => {
          const videoCard = document.createElement("div");
          videoCard.className = "full-video";
          videoCard.innerHTML = `
              <h3>${video.title}</h3>
              <video src="${video.url}" controls autoplay width="100%"></video>
          `;
          resultContainer.appendChild(videoCard);
      });
  } else {
      resultContainer.innerHTML = "<p>No videos found.</p>";
  }
}

// Reset the search and show main video list if search is cleared
document.getElementById("searchInput").addEventListener("input", function () {
  const resultContainer = document.getElementById("resultContainer");
  const videoRow = document.getElementById("videoRow");

  if (this.value === "") {
      resultContainer.innerHTML = "";
      videoRow.classList.remove("hidden");
  }
  


});

