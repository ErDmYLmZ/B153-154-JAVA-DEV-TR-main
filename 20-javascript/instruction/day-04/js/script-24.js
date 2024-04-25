

function setMode(){
    const elBody = document.querySelector("body");
    const btn = document.querySelector("#btnMode");

    // contains dizilerde dizi içinde bir elemanın olup olmadığını tespit etmek için kullanılır
    if(elBody.classList.contains("light")){
        elBody.classList.remove("light");
        elBody.classList.add("dark");
        btn.innerText = "Light"
    }
    else{
        elBody.classList.add("light");
        elBody.classList.remove("dark");
        btn.innerText = "Dark"
    }
}