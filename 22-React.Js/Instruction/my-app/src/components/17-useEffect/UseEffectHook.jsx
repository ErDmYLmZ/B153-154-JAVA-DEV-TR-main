import React, { useEffect, useState } from "react";
import { Alert, Button } from "react-bootstrap";

const UseEffectHook = ({id}) => {
  const [message, setmessage] = useState("");
  const [error, setError] = useState("");

  console.log(
    "hem render hem de re-render durumlarinda  return kismi calismadan once calisir"
  );

  useEffect(() => {

    console.log(`
    Mounting:Sadece ilk renderde calisir
    
    `)


  }, []);


useEffect(()=>{
    console.log(`
    Updating: hem render hem de re-render durumlarinda calisir
    ama return kisminin calsimasi bittikten sonra calisir
        Bu efect ozellikle useref ile ile kullanilir
    `
    )

})

useEffect(() => {
console.log(`
    
Updating: ilk renderde ve de dependency degistiginde calisir
(message,id)


`


)

 
}, [message,id])


useEffect(() => {


   let timer= setTimeout(()=>{

        console.log("bes sn sonra calisacak")


    },5000)


  return () => {
  
        
/* "Unmounting: Kodlarin hafizadan atilmadan once calistigi yer" */

    clearTimeout(timer)
   
  }
}, [])




  return (
    <div style={{margin:"5rem auto ",textAlign:"center"}}>
      <Alert style={{margin:"5rem auto ",textAlign:"center",width:"50rem"}} >
        {message} ------- {error}
      </Alert>

      <div className="d-flex justify-content-evenly mt-4 cursor-pointer">
        <Button
          variant="danger"
          onClick={() => setmessage("Merhaba Useeffect Hooku")}
        >
          Set Message
        </Button>
        <Button variant="info" onClick={() => setError("Error Useeffect ")}>
          Set Error
        </Button>
      </div>
    </div>
  );
};

export default UseEffectHook;
