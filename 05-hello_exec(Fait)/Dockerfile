FROM postgres:latest

# connexions
ENV POSTGRES_DB=linus_db
ENV POSTGRES_USER=linus
ENV POSTGRES_PASSWORD=linusdb1000

# On Copie le script SQL dans le conteneur pour l'exécuter au démarrage
COPY db.sql /docker-entrypoint-initdb.d/
