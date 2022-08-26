// const token = getToken();
// const form = document.querySelector(".form");
// form.addEventListener("submit", (e) => {
//   e.preventDefault();
//   console.log(token);

//   const file = document.querySelector(".file");
//   const url = "http://localhost:4000/api/file/uploads";
//   const formData = new FormData();
//   formData.append("file", file.files[0]);

//   const myHeaders = new Headers();
//   myHeaders.append("Content-Type", "application/json");
//   myHeaders.append("Authorization", token);
//   fetch(url, {
//     method: "POST",
//     headers: myHeaders,
//     body: formData,
//   })
//     .then((res) => res.json())
//     .then((result) => {
//       console.log(result);
//     })
//     .catch((error) => {
//       console.error("Error:", error);
//     });
// });
