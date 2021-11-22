let students = document.querySelector("#Students");
let studentsList = document.querySelector("#Students").children;

class UI {
  addStudentTo(newStudentAdded) {
    students.innerHTML += `<tr>
    <th><img src="${newStudentAdded.imageUrl}" class="img-fluid img-thumbnail" style="width:100px; border-radius:50%"></img></th>
    <th>${newStudentAdded.studentName}</th>
    <th>${newStudentAdded.pathName}</th>
    </tr>`;
  }
  clearInputs(array) {
    array.forEach((element) => {
      element.value = "";
    });
  }

  clearItem() {
    [...studentsList].forEach((student) => {
      student.firstElementChild.addEventListener("click", (e) => {
        let ask = confirm("Are you sure about deleting this student info!");
        if (ask == true) {
          student.remove();
        }
      });
    });
  }
}
