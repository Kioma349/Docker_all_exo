# J'utilise l'image officielle Go comme image de base
FROM golang:latest

# Définition de mon répertoire de travail dans le conteneur
WORKDIR /app

# Copie du fichier source Go du répertoire local vers le répertoire de travail dans le conteneur
COPY . .

# Compilation de mon l'application Go
RUN go build -o main .

# Commande pour exécuter l'application Go
CMD ["./main"]
