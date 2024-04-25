

document.getElementById("frmLogin").addEventListener("submit", (e)=>{
    e.preventDefault(); // default olan submit davranışı engellendi


    const txtEmail = document.getElementById("txtEmail");
    const txtPassword = document.getElementById("txtPassword");

    try{
        const email = txtEmail.value;
        const password = txtPassword.value;

        if(!email || !isEmailValid(email) ) throw new Error("Please enter a valid email");
        if(!password) throw new Error("Please enter your password");
        e.target.submit();
        

    }
    catch(err){

          alert(err.message);
    }
    
    



})



const isEmailValid = (email) => { 
    const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
    return emailRegex.test(email);

 }