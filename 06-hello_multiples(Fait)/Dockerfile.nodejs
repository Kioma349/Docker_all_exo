# Utiliser l'image officielle Node.js comme image de base
FROM node:14

# Définir le répertoire de travail dans le conteneur
WORKDIR /app

# Copier les fichiers package.json et package-lock.json (si disponible)
COPY package*.json ./ 

# le * est utlisé pour dire de prendre tous les fichiers qui commencent par package et qui se terminent par .json

# Installer les dépendances du projet
RUN npm install

# Copier les fichiers et dossiers du projet dans le répertoire de travail du conteneur
COPY . .

# Exposer le port sur lequel l'application Node.js va s'exécuter
EXPOSE 3000

# Commande pour démarrer l'application Node.js
CMD ["node", "server.js"]
