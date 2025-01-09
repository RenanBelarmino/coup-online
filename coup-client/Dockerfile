# Base image para React
FROM node:18

# Define o diretório de trabalho no container
WORKDIR /app

# Copia os arquivos do package.json e package-lock.json
COPY package*.json ./

# Instala as dependências do projeto
RUN npm install

# Copia o restante do código para o container
COPY . .

# Expõe a porta 3000
EXPOSE 3000

# Comando para iniciar o projeto
CMD ["npm", "start"]
