# Ici j'utilise l'image de base officielle Nginx
FROM nginx:alpine

# Ici je fait la Copie du fichier HTML et le fichier audio dans le dossier de contenu du serveur web
COPY index.html /usr/share/nginx/html/
COPY m.mp3 /usr/share/nginx/html/

# Enfin j'expose le port 80
EXPOSE 80
