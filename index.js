/**
 * Vérification des données d'un formulaire
 */

//On attends que le DOM (FENETRE HTML) soit chargé
    window.onload = function(){

    //Sélectionne un élément dans le DOM ayant l'ID "pseudo"
    let pseudo = document.getElementById('pseudo');
    let mail = document.getElementById('mail');
    let pass = document.getElementById ('pass');

    let confirm = document.getElementById('confirm');
    //bouton "eye"
    let bouton = document.querySelector('button');
    
    //Applique un écouteur d'événement sur l'élément précedemment sélectionné
    pseudo.addEventListener('change', verifPseudo);
    mail.addEventListener ('change', verifMail);
    pass.addEventListener('change', verifPass);
    
  
    // Selection de l'element "mot de passe"
    //document.querySelector('#password'); -> Selectionne l'ID "password"
    //document.querySelector('.pass'); -> Selectionne la classe CSS 'pass'
    //document.querySelector('input'); -> Selectionne l'element HTML "input"
    //ATTENTION! querySelector selectionne seulement le premier element trouvé!
    confirm.addEventListener('change', verifConfirm);
    //selection du bouton "eye"
    bouton.addEventListener('click',viewPassword);
}

// Permet de vérifier la donnée "pseudonyme" du formulaire
// En cas de changement du champ, la fonction 'verifPseudo' sera exercée
    function verifPseudo()
    {
    let error = document.getElementById('pseudoError');
    /** 
     * THIS correspond à l'élément ayant enclenché cette fonction,soit
     * dans notre cas de figure 'pseudo'
     * */ 
    console.log(this.value);

    // On vérifie que le nombre de caractères soit égal ou supérieur à 5
    if (this.value.length >=5) {
        this.style.borderColor ="green";
        error.style.display ='none';
    }
    else{
        this.style.borderColor ="red";
        error.style.display = 'block';
}
}
  //vérification de l'adresse mail
    function verifMail(){
    //créer un élément html "<p class="error"></p>"
    let error = document.createElement('p');//Création du tag HTML "p"
    error.classList.add('error');// Ajout de la classe CSS 'error'
    error.style.display= "block"; // Changement de la valeur du display
    error.innerText=" Votre adresse e-mail est invalide";// Ajout d'un texte

    //si l'adresse mail est correcte, on met les bordures en vert
   if(checkEmail(this.value)) {
       this.style.borderColor = 'green';
   }
   else {
    this.style.borderColor=' red';

    //Si aucun élément suit l'élément "email", on ajoute notre message d'erreur
    // .nextSibling = récupère un élément juste après un autre élément
    if (this.nextSibling.length){
    // Ajoute le nouvel élément HTML juste après notre champ 'email'
    this.after(error);
    }
   }
}

    // Expression régulière permettant la vérification syntaxique d'une adresse email
   function checkEmail(mail)
   {
       const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
       return re.test(mail);
   }


    //vérification mot de passe 6 caractères
   function verifPass()
    {
    let error = document.getElementById('passError');
    console.log(this.value);

    if (this.value.length >=6) {
        this.style.borderColor ="green";
        error.style.display ='none';
    }
    else{
        this.style.borderColor ="red";
        error.style.display = 'block';
}
}


    //Permet de voir le mot de passe en clair et de le cacher
    function viewPassword()
    {
        let password = document.querySelector('#pass');
        //'getAttribute' permet de récupérer la valeur d'un attribut sur un élément HTML
        let type = password.getAttribute('type');

        if (type === 'password') {
            password.setAttribute('type', 'text');
        }
        else{
            password.setAttribute('type','password');
        }
    }

    //Vérification mots de passe identiques

    function verifConfirm() 
    {
        let error = document.querySelector('#confirmError');

        // Récupère le champ "password"
        let password = document.querySelector('#pass')

        // récupère la valeur du champ "confirmPassword" avec la valeur du champ "pass"
        if (this.value === password.value) {
            this.style.borderColor = 'green';
            error.style.display = 'none';
        }
        else {
            this.style.borderColor = 'red';
            error.style.display = 'block';
        }
    }


    