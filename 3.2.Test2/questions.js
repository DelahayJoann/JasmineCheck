let CreationTableauLangages =  () => {
    return ["Html", "CSS", "Java", "PHP"];
}

let CreationTableauNombres =  () => {
    return [...Array(6).keys()];
}

let RemplacementElement =  (langages) => {
    langages.splice(2, 1, "Javascript");
    return langages;
}

let AjoutElementLangages =  (langages) => {
    langages.push("Ruby", "Python");
    return langages;
}

let AjoutElementNombres =  (nombres) => {
    nombres.unshift(-2,-1);
    return nombres;
}

let SuppressionPremierElement =  (langages) => {
    langages.shift();
    return langages;
}

let SuppressionDernierElement =  (langages) => {
    langages.pop();
    return langages;
}

let ConversionChaineTableau =  (reseaux_sociaux_chaine) => {
    return reseaux_sociaux_chaine.split(',');
}

let ConversionTableauChaine =  (langages) => {
    return langages.join(',');
}

let TriTableau =  (reseaux_sociaux) => {
    return reseaux_sociaux.sort((a, b) => {
        return a.localeCompare(b)
    });
}

let InversionTableau =  (reseaux_sociaux) =>{
    return reseaux_sociaux.reverse();
}
