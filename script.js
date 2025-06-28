const correctPassword = "01849360175";

function login() {
  const enteredPassword = document.getElementById("adminPassword").value;
  if (enteredPassword === correctPassword) {
    document.getElementById("adminLogin").style.display = "none";
    document.getElementById("mainApp").style.display = "block";
  } else {
    alert("Wrong password!");
  }
}

function uploadVideo() {
  const fileInput = document.getElementById("videoFile");
  const file = fileInput.files[0];
  if (!file) return alert("Select a video file first.");

  const videoURL = URL.createObjectURL(file);
  const videoList = document.getElementById("videoList");

  const videoContainer = document.createElement("div");
  videoContainer.innerHTML = \`
    <video controls src="\${videoURL}"></video>
    <br>
    <button onclick="this.parentElement.remove()">Delete</button>
  \`;
  videoList.appendChild(videoContainer);

  fileInput.value = "";
}