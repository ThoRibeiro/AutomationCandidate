<img src="https://raw.githubusercontent.com/github/explore/60cd2530141f67f07a947fa2d310c482e287e387/topics/playwright/playwright.png" width=100 height=100>

# Test automation

## Explication du projet

Le projet `Test automation` est un projet qui intègre l'outil Playwright.
Développé par Microsoft, implémenté dans ce projet avec le langage TypeScript / JavaScript.

Playwright utilise un package manager (npm, pnpm), nous utilisons pnpm pour ce projet.

## Installation et initialisation du projet

Pour commencer, vous pouvez faire un `git clone` pour __extraire le projet__.
Je vous conseille aussi d'installer dans vos extensions VSCode `Playwright Test For VSCode`.

### Initialisation de PNPM

Après le `git clone`, vous devrez installer le __package manager__ qui sera indispensable pour le projet.

Pour ce faire, si vous êtes sur MACOS vous pouvez utiliser __plusieurs commandes__ différentes pour installer pnpm :
- `brew install pnpm` (avec Homebrew) ;
- `npm install -g pnpm` (en utilisant npm) ;
- `curl -fsSL https://get.pnpm.io/install.sh | sh -` (il faut avoir CURL installé sur votre machine).

Pour-les utilisateurs de WINDOWS, il y a aussi __plusieurs commandes__ pour installer pnpm :
- `iwr https://get.pnpm.io/install.ps1 -useb | iex` (avec powershell) ;
- `wget -qO- https://get.pnpm.io/install.sh | sh -` ;
- `curl -fsSL https://get.pnpm.io/install.sh | sh -` (il faut avoir CURL installé sur votre machine).

Une fois la commande exécutée, attendez quelques secondes et pnpm sera installé sur votre poste de travail.

### Initialisation du projet

Ensuite, vous pourrez configurer le repos du projet sur votre __poste__.

Pour ce faire, exécutez la commande `pnpm dlx create-playwright -w`.
Ensuite, cliquez sur `Enter` pour toutes les demandes du package manager dans le terminal.

Une fois terminé, vous devrez __supprimer__ le dossier `-w` et exécuter la commande `pnpm install`.

## Structure du projet

Après avoir installé et configuré le repos, nous allons aborder la structure du projet.

Le projet est réparti en plusieurs sous-fichiers définis selon leurs fonctionnalités.

Dans le dossier `keywords` vous retrouverez les keywords associés et définis pour les cas de tests, dans le sous-dossier `pages`.

Ce dossier est aussi coupé en plusieurs sous-fichiers pour les __locators__ (variables), les __api__ et les __endpoints__ (variables pour les APIs).

Puis, dans le dossier `tests`, vous retrouverez les fichiers associés aux cas de tests.
Ce dossier est également divisés en fonction des tests et de leur périmètre associé (par exemple, des tests pour memo, customer, odc...).

Ensuite, le dossier `common` regroupe les sous-dossiers `config`, `data` & `functions` :

- `data` permet de retrouver les urls et autres données que vous trouverez dans les cas de tests.

- `config` permet de configurer le projet avec le `playwright.config.ts`. __Chose à savoir__, dans la config, __l'URL de lark__ est déjà initialisé via un env file.

- `functions` Ce sont des fonctions qui pourraient être utilisées a l'extérieur des tests (dans la CI/CD par exemple).

Et pour finir, vous avez les différents fichiers constituants `git`, `pnpm`, `prettier` et `eslint`.

Si vous voulez plus d'informations sur le projet, vous pouvez consulter le fichier présent sur le [Drive du projet Playwright](https://docs.google.com/document/d/1KfZkC9RzGDnjgH3Jsrd25LIHjFmnJr5J/edit#heading=h.gjdgxs)

### Conventions de nommages

Pour uniformiser nos pratiques dans projet d’automatisation, il s’agit de définir chaque typologie de nommage.

- __Nom de dossier__ : snake_case
- __Nom de fichier data__ : snake_case
- __Nom de fichier keywords__ : snake_case + camelCase
    - Par exemple, projet_pageName > lark_cartPage
- __Nom de fichier test__ : snake_case
- __Nom de classe__ : PascalCase
- __Nom de méthode / fonctions__ : camelCase
- __Nom de variable__ : camelCase
- __Nom des interfaces / types / enums__ : PascalCase
- __Nom des locators / endpoints__ : snake_case + camelCase
    - Par exemple, pour les locators DOMElement_page_locatorRole > button_cartPage_addToCart
    - Par exemple, pour les endpoints method_apiName_requestAction > get_cartApi_getCartId

### Utilisation de Prettier & ESLINT sur le projet
Pour l'utilisation d'ESLint et Prettier dans le projet, nous avons plusieurs commandes qui permettent d'accomplir différentes tâches chacune. <br>
Pour __ESLINT__ :
- `pnpm eslint .` (Permet d'afficher les erreurs dans les logs).
- `pnpm eslint . —-fix` (Cette commande permet de corriger les erreurs qu'ESLint peut résoudre. Il faut donc bien vérifier que toutes les erreurs sont corrigées après son exécution).

Pour __PRETTIER__ :
- `pnpm prettier . —-check` (Elle permet d'identifier les fichiers qui pourraient bénéficier d'une meilleure indentation).
- `pnpm prettier . —-write` (Modification des fichiers selectionnées).

Pour __TYPEDOC__ :
- `pnpm typedoc` (génère la documentation en fonction de ce qui est noté dans le fichier `typedoc.json` à la racine du projet et de même dans le fichier `tsconfig.json`).
- `pnpm typedoc --watch --logLevel 4` si vous souhaitez voir les étapes de la génération.
