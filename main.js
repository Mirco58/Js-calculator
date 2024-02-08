    // on vient ratacher les element du html à nos constante
    const ecran = document.querySelector('.ecran');
    const touches = document.querySelectorAll('.bouton');

    
    // on vient rattacher un click via addEventListner à nos touches de classe bouton via un forEach qui va lier nos touches a la fonction geretTouches
    touches.forEach(touches => {
        touches.addEventListener('click', () => gererTouches(touches.textContent));
    });

    // Fonction qui va gérer le type de touches selectionner
    function gererTouches(touches) {
        switch (touches) {
            case '=':
                calculerResultat();
                break;
            case 'C':
                effacerEcran();
                break;
            default:
                affichageValeur(touches);
        }
    }
    // function qui va venir afficher notre valeur
    function affichageValeur(valeurentrée) {
        ecran.textContent += valeurentrée;
    }

    
    // Function qui va calculer
    function calculerResultat() {
    const valeurecran = ecran.textContent;
    const operators = ['+', '-', '*', '/'];
    let currentOperator = '';

    // boucle qui va aller fouiller la valeur de l ecran et rechecher dans notre tableau d operators si il en trouve un il le stock dans currentOperator 
    for (let i = 0; i < valeurecran.length; i++) {
        if (operators.includes(valeurecran[i])) {
            currentOperator = valeurecran[i];
        }
    }
    
    if (currentOperator) {
        const valeurecup = valeurecran.split(currentOperator);
        
        const num1 = parseFloat(valeurecup[0]);
        const num2 = parseFloat(valeurecup[1]);
        
        switch (currentOperator) {
            case '+':
                ecran.textContent = Math.round((num1 + num2)*100)/100;
        
                break;
            case '-':
                ecran.textContent = Math.round((num1 - num2)*100)/100;
                break;
            case '*':
                ecran.textContent = Math.round((num1 * num2)*100)/100;
                break;
            case '/':
                if (num2 !== 0) {
                    ecran.textContent = Math.round((num1 / num2)*100)/100;
                } else {
                    ecran.textContent = 'Error : Division by zero';
                }
                break;
            default:
                ecran.textContent = 'Error';
        }
    }
}
    // function qui va effacer l ecran : on vient remplacer par du vide le contenu de l ecran via .textContent
    function effacerEcran() {
        ecran.textContent = '';
    }

    


