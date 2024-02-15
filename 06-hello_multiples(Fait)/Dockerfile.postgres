# Je commence par utiliser l'image officielle PostgreSQL
FROM postgres:latest

# Puis, je définir l'environnement pour les connexions
ENV POSTGRES_DB=linus_db
ENV POSTGRES_USER=linus
ENV POSTGRES_PASSWORD="linus1001"

# enfin on Copie le script SQL dans le conteneur pour l'exécuter au démarrage
COPY db.sql /docker-entrypoint-initdb.d/
