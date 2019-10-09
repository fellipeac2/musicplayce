# musicplayce_server

## Dependências

- nodejs
- docker
- ubuntu 16.04+

## build and run

- Primeiro deve-se instalar as dependências listadas acima

### build e rodar mongodb docker container

- docker pull mongo

- docker run -d -p 27017-27019:27017-27019 --name mongodb mongo

### build server como docker container

- inicialize o comando ifconfig para encontrar o ip do contêiner do mongodb

- modifique o ip do contêiner do mongodb na variável de ambiente DATABASE_URL dentro do arquivo arquivo .env

- $ docker build -t musicplayce_server .

### run server

- $ docker run -p 8080:8080 -d musicplayce_server

## Pacotes utilizados no app

- express : para fazer o roteamento das operações CRUD na string
- mongoose : para encapsular o banco de dados utilizado
- cors : permite requerimentos ajax acessar recuros de hosts remotos

## Google cloud

Há uma aplicação rodando os containers do mongodb e desse server em um solução de cloud da google.
### ler string:
- abra com um navegador o site http://34.69.217.179:8080/string/
### inserir uma string:
- curl -X POST -H "Content-Type:application/json" http://localhost:8080/string -d '{"text": "Olá mundo"}'
### deletar uma string:
- tenha \_id da string em mãos
- curl -X DELETE -H "Content-Type:application/json" http://localhost:8080/string/*\_id*
### modificar uma string:
- tenha \_id da string em mãos
- curl -X PUT -H "Content-Type:application/json" http://localhost:8080/string/*\_id* -d '{"text": "Olá Brasil"}'
