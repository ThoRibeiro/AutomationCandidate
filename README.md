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