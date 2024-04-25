

function isPrime(num){
    // num=11 // 2-3-4-5-6-7-8-9-10
    let result = true;

    for(let i=2; i<num; i++){
        if(num % i === 0){
            result = false;
            break; // döngüleri kontrollü bir şekilde durdurmak için kullanılır
        }  
    }
    return result;
}

function onIsPrimeClick(){
    const txtNum = document.querySelector("#txtNum");
    const num = txtNum.value;

    const result = isPrime(num);

    if(result){
        alert("sayı asaldır")
    }
    else{
        alert("say ıasal değildir")
    }


}

