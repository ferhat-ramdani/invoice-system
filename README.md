# Invoice System
API basée sur deux parties :
  * partie serveur
  * partie interface utilisateur
# Technologies Utilisées
Front-End : 
  * React.js
  * Bootstrap
  * axios
  * react-router-dom
<br>
Back-End : 
<ul>
  <li> Node.js </li>
  <li> Express </li>
  <li> Sequelize </li>
  <li> PostgreSQL </li>
</ul>
<h1>Fonctionnalités</h1>
<ul>
  <li> Creation automatique de toutes les tables et associations de la base de donnée </li>
  <li> Définition de controlleurs pour chaque table </li>
  <li> Gestions des requetes reçus par le serveur à travers des routes </li>
  <li> Interface uilisateur simple et intuitive </li>
  <li> Visualisation des factures de la base de données </li>
  <li> Creation, modification et suppression des tables à travers la plateforme </li>
</ul>
<h1>Aperçu</h1>

Page d'accuil :
<img tab="Capture page bienvenu" src="https://github.com/ferhat-ramdani/invoice-system/blob/actual-database/documentation/bienvenu.jpeg">

Page des factures:
<img tab="Capture Page des factures" src="https://github.com/ferhat-ramdani/invoice-system/blob/actual-database/documentation/factures.jpeg">

Selection d'une facture:
<img tab="Capture Selection d'une facture" src="https://github.com/ferhat-ramdani/invoice-system/blob/actual-database/documentation/factures-exemple.jpeg">

Catalogue:
<img tab="Capture Catalogue" src="https://github.com/ferhat-ramdani/invoice-system/blob/actual-database/documentation/produits.jpeg">

Selection d'un produit:
<img tab="Capture Selection d'un produit" src="https://github.com/ferhat-ramdani/invoice-system/blob/actual-database/documentation/produits-exemple.jpeg">

Modification d'un produit:
<img tab="Capture Modification d'un produit" src="https://github.com/ferhat-ramdani/invoice-system/blob/actual-database/documentation/produits-modifier.jpeg">

Page client:
<img tab="Capture Page client" src="https://github.com/ferhat-ramdani/invoice-system/blob/actual-database/documentation/clients.jpeg">

Selection d'un client:
<img tab="Capture selection d'un client" src="https://github.com/ferhat-ramdani/invoice-system/blob/actual-database/documentation/clients-exemple.jpeg">

Ajout d'un client:
<img tab="Capture Ajout d'un client" src="https://github.com/ferhat-ramdani/invoice-system/blob/actual-database/documentation/clients-ajouter.jpeg">

<h1>Démo vidéo</h1>
<video width="320" height="240" controls>
  <source src="https://github.com/ferhat-ramdani/invoice-system/blob/master/documentation/demo.mp4" type="video/mp4">
Your browser does not support the video tag.
</video>

<h1>Pistes d'améliorations et nouvelles fonctionnalités</h1>

La page catalogue n'est pas complète, les boutons "+" et "-" servent à ajouter ou supprimer un produit dans le panel de prestation, voici les fonctionnalités envisagées : 

<ul>
 <li>Dés lors qu'un article est ajouté au panier de produits choisis, une prestation est créee dans la base de donnée</li>
 <li>La prestation est mise à jour en temps réel tant que l'utilisateur rajoute ou supprime des produits du panier</li>
 <li>Le statut de la prestation n'est confirmé qu'une fois que l'utilisateur aurait cliqué sur le bouton "confirmer prestation"</li>
 <li>L'utilisateur peut choisir le client (l'acheteur) avant de confirmer à travers la liste déroulante</li>
 <li>Une fois la prestation est confirmée, une facture est aussitôt créee et peut être visualisée sur la page des factures</li>
</ul>

D'autres fonctionnalités intéressantes :
<ul>
 <li>On peut envisager de rajouter un bouton à la page des factures qui permet de générer un fichier .pdf de la facture selectionnée.</li>
 <li>On peut ajouter sur la liste des factures à coté de chaque facture le nombre de jours restant pour la date d'échéance avec une couleur distinctive</li>
 <li>On peut ajouter d'autres contraintes sur la table "facture" afin d'éviter des erreurs accidentelles</li>
 </ul>


L'application peut être étandue vers deux parties : 
<ul>
 <li>Une partie réservé pour les administrateur du system, ayant donc la permissions de lire, modifier et supprimer les données de la base de données</li>
 <li>Une partie réservée pour les utilisateurs du system, pouvant donc naviguer sur l'application et effectuer des prestations, demander des services, ...</li>
</ul>
