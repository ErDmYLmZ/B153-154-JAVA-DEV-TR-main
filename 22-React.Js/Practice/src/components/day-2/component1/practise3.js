import React from "react";
import student from "./Students.json";

const Practise3 = () => {
  return (
    <div>
      <ul>
        {student
          .filter((item) => item.yas < 25)
          .map((item, index) => (
            <li key={index}>{item.isim}</li>
          ))}
      </ul>
      <select name="kurs" id="kurs" defaultValue={"seciniz"}>
        <option value="seciniz" disabled>
          Seçiniz
        </option>
        {student
          .reduce((values, student) => {
            if (!values.includes(student.kurs)) {
              values.push(student.kurs);
            }
            return values;
          }, [])
          .map((item, index) => (
            <option key={index} value={item}>
              {item}
            </option>
          ))}
      </select>
    </div>
  );
};

export default Practise3;
