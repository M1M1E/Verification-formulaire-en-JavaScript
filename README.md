# Vérification d'un formulaire en JavaScript

**Cet exercice doit permettre la vérification des données d'un formulaire en temps réel.**  
Vous aurez besoin d'utiliser les écouteurs d'évènements et de manipuler le DOM pour faire apparaître/disparaître des informations.

## Formulaire
Sur une page HTML, créer un formulaire contenant les champs suivants :
* pseudonyme
* adresse email
* mot de passe
* confirmation du mot de passe
* bouton d'envoi

Vous êtes libre niveau visuel.

## Vérification
En JavaScript, vous devez effectuer des vérifications de données en temps réel selon les champs :
* **pseudonyme :** doit contenir au minimum 5 caractères
* **adresse email :** doit être valide
* **mot de passe :** doit contenir au minimum 6 caractères 
* **confirmation du mot de passe :** doit être identique au mot de passe

Si la donnée ne passe pas le test, modifier la bordure du champ concerné par une bordure rouge et afficher un message d'erreur en dessous de celui-ci.
Si la donnée passe avec succès le test, modifier la bordure du champ concerné par une bordure verte.

## Bonus
Sur les champs "mot de passe" et "confirmer mot de passe", ajouter une icône en forme d’oeil.

Au clic sur l’icône, fait en sorte que le mot de passe écrit dans le champ concerné, devienne visible.  
Au second clic sur la même icône, le mot de passe redevient caché.
