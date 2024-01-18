# j'utilise l'image de base officielle Node.js
FROM node:14-alpine

# Ici je créer un répertoire pour l'application dans le conteneur
WORKDIR /usr/src/app

# Ensuite on copie les fichiers 'package.json' et 'package-lock.json' (s'il existe)
# Car ses fichiers définissent les dépendances de mon projet Node.js

COPY package.json ./
COPY package-lock.json ./

# Puis j'installe les dépendances du projet
RUN npm install

# je copie les fichiers et dossiers de l'application dans le conteneur
COPY . .

# enfin j'expose le port sur lequel l'application va tourner
EXPOSE 80

# Cette commande me permet de démarrer l'application
CMD ["node", "server.js"]
