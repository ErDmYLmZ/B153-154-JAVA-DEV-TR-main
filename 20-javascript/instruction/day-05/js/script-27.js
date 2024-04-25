function showSalary(){
    const txtSalary = document.querySelector("#txtSalary");
    const elResult = document.querySelector("#result");
    const elStatus = document.querySelector("input[name='status']:checked");

    let salary = Number(txtSalary.value);
    const status = elStatus.value;

    salary = status === "retired" ? salary * 0.9 : salary * 0.95

    // Yukarıdaki ternary ifadesi aşığıdaki gibi if ile de yapılabilir
    /* if(status === "retired"){
        salary = salary * 0.9
    }
    else{
        salary = salary * 0.95
    }
     */

    elResult.innerHTML = `${salary}`
}