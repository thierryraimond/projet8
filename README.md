# projet8: Reprenez et améliorez un projet existant
https://openclassrooms.com/projects/reprenez-et-ameliorez-un-projet-existant

## Accès à la version finale sur mon serveur perso :
https://trsrv.ddns.net/oc/projet8/

## Installation de la dernière version du projet (version finale)

### Prérequis
- Wamp
  - Apache version minimum 2.4.9
  - PHP version minimum 5.5.12
  - MySQL version minimum 5.6.17
- Navigateurs testés et compatibles :
  - Mozilla Firefox version 53
  - Google Chrome version 58

### Instructions d'installation de la version de développement en local

- Télécharger le fichier zip : https://github.com/thierryraimond/projet8/archive/master.zip
- Créer les répertoires /oc/projet8/ dans le répertoire www de Wamp
- Décompresser le fichier zip à l'intérieur
- Importer la base de données MySQL qui se trouve au chemin suivant : www/oc/projet8/bin/dump/oc_projet8_01062017.sql
- Modifier le fichier www/oc/projet8/src/utils/Config.js
  - passer l'attribut this.local à true
- Lancer l'application avec votre navigateur web au choix (Chrome ou Firefox) en tapant l'url http://localhost/oc/projet8

#### Version de production (optimisée)
Elle se trouve par défaut dans le répertoire www/projet8/dist/
Cependant si vous avez modifié des attributs des fichiers JS tel que Config.js et faut refaire l'optimisation du projet :
Prérequis : Installer Node.js
lancer la ligne de commande suivant dans le répertoire racine du projet :
    node r.js -o build.js

le repertoire www/projet8/dist/ contient le projet avec les fichiers JS et CSS minifiés et regroupés.

#### Version de production sur un serveur distant
- Modifier le fichier www/oc/projet8/src/utils/Config.js
  - passer l'attribut this.local à false
  - modifier l'attribut this.webhost avec le chemin du projet sur votre serveur distant
- optimiser la version de production avec Node.js comme vu précédemment
- Uploader le contenu de la version minifiée du repertoire www/projet8/dist/ dans le chemin du projet sur votre serveur distant

## Informations
- les tests unitaires et fonctionnels se lancent en ouvrant votre navigateur au chemin suivant : http://localhost/oc/projet8/test.html
  les fichiers et repertoires associés :
  - www/oc/projet8/test contient tous les fichier JS testés
  - www/oc/projet8/requireConfigTest.js il s'agit du fichier de configuration qui intégre le framework de test Jasmine
  - www/oc/projet8/test.html le fichier qui intégre la configuration des tests et exécute les tests.
- le fichier d'audit des performances se trouve à la racine du projet au chemin suivant :
    www/oc/projet8/Optimiser les performances.pdf ou en téléchargement : https://github.com/thierryraimond/projet8/blob/master/Optimiser%20les%20performances.pdf
    
## Instructions du projet

### Énoncé
Dans le monde professionnel, on est souvent amené à reprendre un projet existant. Que faire quand vous vous retrouvez avec le code de quelqu'un d'autre sous les bras ? Comment l'améliorer ? Voilà un savoir-faire qui vous sera très utile au quotidien !

En effet, faire un projet de bout en bout est "facile" : on connaît son fonctionnement sur le bout des doigts. En revanche, on se rend vite compte qu'il est plus dur de reprendre le travail de qu'un d'autre... surtout quand il n'a pas de tests !

### Etape 1 : où sont les tests ?!
Vous venez d'intégrer un studio de développement de jeux web. A peine installé, on vient vous dire : "Bon, ton prédecesseur avait bien bossé, même un peu trop, et un jour sans prévenir il est parti élever des chèvres en Patagonie. Il faut que tu reprennes son projet, nos clients attendent impatiemment une mise à jour de son jeu !".

Vous vous apprêtez à sortir Google Maps pour savoir où est la Patagonie, avant de vous reprendre : "Non, c'est mon premier jour, il faut que je sois concentré. Où est ce projet, je vais n'en faire qu'une bouchée !".

On vous présente le projet : Sokonyan !
![menu de Sokonyan](https://s3-eu-west-1.amazonaws.com/sdz-upload/prod/upload/sokonyan.png)

Le jeu est une variante du Sokoban avec le célèbre Nyancat. Il consiste à déplacer des objets dans les bonnes cases.

![Sokonyan en action](https://s3-eu-west-1.amazonaws.com/sdz-upload/prod/upload/sokonyan2.png)

Commencez par télécharger le code du projet.

Analysez comment il est structuré, essayez de comprendre son fonctionnement.

Vous allez voir que ce projet ne comporte... aucun test ! Pour le prendre en main, la première étape va consister à lui adjoindre autant de tests unitaires et fonctionnels pertinents que vous pouvez. L'objectif est de créer les bases pour solidifier le projet. Ainsi, lorsque vous le modifierez par la suite, vous pourrez vous baser sur ces tests pour vérifier que vous ne "cassez" rien.

Cette étape peut être un peu longue et fastidieuse, mais elle est nécessaire pour gagner beaucoup de temps et éviter des surprises par la suite !

### Etape 2 : optimiser les performances
Les performances de ce projet peuvent être améliorées. Certaines choses vont vous sauter aux yeux ("quoi, tous ces fichiers CSS et JS chargés par le navigateur ?!"), d'autres sont un peu plus subtiles.

Faites un audit de performances et améliorez ce que vous pouvez dans le projet. Notez bien ce que vous optimisez et constatez les gains à l'aide de la console de développement.

### Etape 3 : améliorer le projet
Il est temps d'améliorer le projet, de nombreuses personnes attendent ! Voici les fonctionnalités que l'on vous réclame :

Les joueurs attendent de nouveaux niveaux. Créez une seconde aventure constituée de 3 niveaux indépendante de la première aventure déjà en place. Profitez-en pour changer un peu le décor (fonds, blocs...).
Pour corser l'affaire, d'autres personnages vont se déplacer dans ces nouveaux niveaux. Les déplacements seront simples (sur quelques cases) et en boucle. Cela signifie qu'ils bloqueront le passage du joueur. Celui-ci devra attendre que ces autres personnages se soient déplacés pour passer.
Pour effectuer ces modifications, vous devez avoir bien compris le fonctionnement du code dont vous avez hérité. Vous vous baserez sur les tests unitaires et fonctionnels déjà en place, que vous compléterez au fur et à mesure de vos modifications.

[`Les niveaux peuvent être générés à l'aide de Tiled`](http://www.mapeditor.org/)

`Merci à Dorian Milliere et Jordan Pereira-Ramos pour avoir accepté de fournir le projet de base.`
