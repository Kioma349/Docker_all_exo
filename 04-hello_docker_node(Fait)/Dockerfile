# j' utiliser l'image de base officielle Node.js
FROM node:14-alpine

# ici je créer un répertoire pour l'application dans le conteneur
WORKDIR /usr/src/app

# ensuite je copier le fichier package.json et package-lock.json (si disponible)
COPY package*.json ./

# puis j'installer les dépendances du projet
RUN npm install

# je Copie les fichiers et dossiers de l'application dans le conteneur
COPY . .

# enfin j'exposer le port sur lequel l'application va tourner
EXPOSE 80

# Commande qui me permet de démarrer l'application
CMD ["node", "server.js"]
