import { students } from "../data/students.js";

document.getElementById("btnShowLowScores").addEventListener("click", () => {
  const pointEls = document.querySelectorAll(
    "#tblStudents tbody tr td:last-child"
  );

  pointEls.forEach((pointEl, index) => {
    const point = pointEl.innerText;
    if (point < 50) {
      document
        .querySelector(`#tblStudents tbody tr:nth-child(${index + 1})`)
        .classList.add("table-danger");
      //pointEl.closest("tr").classList.add("table-danger")
    }
  });
});

const loadStudents = () => {
  let strStudentRows = "";

  students.forEach((student, index) => {
    strStudentRows += `<tr>
        <th scope="row">${index + 1}</th>
        <td>${student.name}</td>
        <td>${student.point}</td>
        <td><button class="btn btn-warning btn-sm btn-delete">❌</button></td> 
      </tr>`;
  });

  document.querySelector("#tblStudents tbody").innerHTML = strStudentRows;
};

const createEventsForDeleteButtons = () => {
  document.querySelectorAll(".btn-delete").forEach((btnDel) => {
    btnDel.addEventListener("click", (e) => {
      const name = e.target.closest("tr").querySelector("td").innerText;
      
      const result = confirm(`Are you sure to delete ${name}?`);

      if(result){
        // Delete operation
      }
      
    });
  });
};

loadStudents();
createEventsForDeleteButtons();
