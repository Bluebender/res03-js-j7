// Exercice 1 : Parcourir un tableau
// Objectif : Créer un tableau et le parcourir et l'afficher

let superheroes = [
    "Superman",
    "Batman",
    "Iron Man",
    "Wonder Woman",
    "Black Widow",
    "Mighty Thor"
];

// Parcourir le tableau avec la méthode for ... of et afficher le nom de chacun-e des héros et héroïnes.

function parcourir(tableau){
    for (element of tableau){
        console.log(element)
    }
}


// Exercice 2 : Afficher les éléments d'un tableau avec des conditions
// Objectif : Afficher les éléments d'un tableau s'il remplissent une condition

let numbers = [23, 54, 145, 325, 42, 987, -21];

// Parcourir le tableau avec la méthode for ... of ou la méthode for(let i...) et affichez les nombres s'ils sont égaux ou supérieurs à 100.

function afficherGrandsNombres (tableau){
    for (element of tableau){
        if (element >= 100){
            console.log(element)
        }
            
    }
}

// Exercice 3 : parcourir des tableaux imbriqués
// Objectif : Parcourir et afficher des tableaux imbriqués.

let data = [
    ["George", "Barack", "Donald"],
    [43, 44, 45],
    ["Superman", "Batman", "Iron Man"],
    ["Clark", "Bruce", "Tony"]
];

// Parcourir le tableau et ses tableaux imbriqués et affichez chacun des noms et nombres qu'ils contiennent.

function parcourir2(tableau){
    for (element of tableau){
        for(elem of element){
            console.log(elem);
        }
    }
}

// Exercice 4 : Construire un tableau
// Objectif : Construire un tableau sans doublons à partir d'un tableau qui lui contient des doublons.

let ages = [23, 45, 67, 42, 23, 21, 41, 54, 45, 68, 48, 42];

// Construire un nouveau tableau unique_ages qui ne contient aucun doublon à partir du tableau ages.

function tableauSansDoublons(tableau){
    let tableauTrie = [];
    tableauTrie.push(tableau[0]);
    
    for (element1 of tableau){
        let swich=0;
        for (element2 of tableauTrie){
            if (element1 === element2){
                swich = 1;
            }
        }
        if (swich===0){
            tableauTrie.push(element1);
        }
    }
    for (element of tableauTrie){
        console.log(element);
    }
}

// Exercice 5 : Construire un tableau avec des tableaux imbriqués
// Objectif : Construire un tableau à partir de calculs basés sur des tableaux imbriqués.

let grades = [
    [12, 11, 18],
    [13, 17, 9],
    [10, 15, 8],
    [14, 18, 13]
];

// Parcourir le tableau grades et ses tableaux imbriqués pour constuire un tableau averages qui contient les moyennes des tableaux imbriqués.
function moyenneDesTableau(tableau){
    let newTab = [];
    for (sousTableau of tableau){
        let sommeSousTableau = 0
        for (number of sousTableau){
            sommeSousTableau = sommeSousTableau + number;
        }
        let moyennSousTableau = sommeSousTableau/ sousTableau.length
        newTab.push(moyennSousTableau);
    }
    for (element of newTab){
        console.log(element);
    }
}


window.addEventListener("DOMContentLoaded", function(){

    parcourir(superheroes);
    afficherGrandsNombres(numbers);
    parcourir2(data);
    tableauSansDoublons(ages);
    moyenneDesTableau(grades);
    
});
