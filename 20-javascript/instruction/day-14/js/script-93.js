import { numberSortASC, numberSortDESC, randomSort, stringSortASC, stringSortDESC } from "./sort.js";


const arr1 = [123,-23,56,0,787,34,67,-3,56];
const arr2 = ["Selin", "Şenay", "Gökhan", "Şevket", "Ali", "Berrin", "Çisil", "Zeki"]
console.log(arr1);
console.log(arr2);

document.getElementById("btn1").addEventListener("click", ()=>{
    const sortedArr = numberSortASC(arr1);
    console.log(sortedArr)
});

document.getElementById("btn2").addEventListener("click", ()=>{
    const sortedArr = numberSortDESC(arr1);
    console.log(sortedArr)
});

document.getElementById("btn3").addEventListener("click", ()=>{
    const sortedArr = stringSortASC(arr2);
    console.log(sortedArr)
});

document.getElementById("btn4").addEventListener("click", ()=>{
    const sortedArr = stringSortDESC(arr2);
    console.log(sortedArr)
});

document.getElementById("btn5").addEventListener("click", ()=>{
    const sortedArr = randomSort(arr2);
    console.log(sortedArr)
});