let _name = document.getElementById("name");
let path = document.getElementById("path");
let url = document.getElementById("url");
let addStudent = document.querySelector("button");
let clearAll = document.getElementById("clear-students");
let loading = document.getElementById("loading");
let tableRows = document.querySelector("#Students").children;

let ui = new UI();

const showLoading = () => {
  loading.style.display = "block";
};

const removeLoading = () => {
  setTimeout(() => {
    loading.style.display = "none";
  }, 1000);
};

addStudent.addEventListener("click", (e) => {
  e.preventDefault();
  showLoading();
  const studentName = _name.value.trim();
  const pathName = path.value.trim();
  const imageUrl = url.value.trim();

  if (studentName != "" && pathName != "" && imageUrl != "") {
    const newStudentAdded = new Student(studentName, pathName, imageUrl);
    ui.addStudentTo(newStudentAdded);
    ui.clearInputs([_name, path, url]);
    ui.clearItem();
  } else {
    alert("Please fill all of the inputs!");
  }

  removeLoading();
});

clearAll.addEventListener("click", (e) => {
  [...tableRows].forEach((element) => element.remove());
});
