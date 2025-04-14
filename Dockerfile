# Usa a imagem do Node.js
FROM node:18

# Define o diretório de trabalho
WORKDIR /app

# Copia os arquivos de dependência
COPY package*.json ./

# Instala as dependências
RUN npm install

# Copia o restante do projeto
COPY . .

# Expõe a porta (ajuste conforme seu backend)
EXPOSE 3001

# Comando para iniciar o app
CMD ["npm", "run", "dev"]
