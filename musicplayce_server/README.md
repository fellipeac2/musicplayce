# musicplayce_server

## Dependências

- nodejs
- docker

## Build

- Primeiro deve-se instalar as dependências listadas acima

### build e rodar mongodb docker container

- docker pull mongo

- docker run -d -p 27017-27019:27017-27019 --name mongodb mongo
