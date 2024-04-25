/*
SORTING
Eğer negatif bir sayı dönerse a, b den önce sıralanır
Eğer pozitif bir sayı dönerse b, a dan önce sıralanır
Eğer sıfır dönerse değişiklik olmaz.
*/


// arr = [55,12,5,120,65,9]
const numberSortASC = (arr) => { 
    return arr.sort( (a,b) => a - b )
}

const numberSortDESC = (arr) => { 
    return arr.sort( (a,b) => b - a )
}
// arr = ["Ali", "Veli", "Fatma", "Selin", "Şener", "Aslı" ]
const stringSortASC = (arr) => {
    return arr.sort( (a,b) => a.localeCompare(b)  );
}

const stringSortDESC = (arr) => {
    return arr.sort((a,b) => b.localeCompare(a) );
}

const randomSort = (arr) => { 
    return arr.sort( () => Math.random() - 0.5 )
 }


export {numberSortASC, numberSortDESC, stringSortASC, stringSortDESC, randomSort}