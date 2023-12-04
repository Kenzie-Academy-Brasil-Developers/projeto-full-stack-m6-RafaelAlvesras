# Bem-vindo ao CONNECT !

# Documentação da API

## Tabela de Conteúdos

- [Visão Geral](#1-visão-geral)
- [Início Rápido](#3-início-rápido)
- [Instalando Dependências](#31-instalando-dependências)
- [Variáveis de Ambiente](#32-variáveis-de-ambiente)
- [Migrations](#33-variáveis-de-ambiente)
- [Endpoints](#5-endpoints)

---

## 1. Visão Geral

Visão geral do projeto, um pouco das tecnologias usadas.

- [Express](https://expressjs.com/pt-br/)
- [TypeScript](https://www.typescriptlang.org/)
- [PostgreSQL](https://www.postgresql.org/)
- [TypeORM](https://typeorm.io/)
- [React](https://pt-br.legacy.reactjs.org/)

A URL base da aplicação:
http://localhost:3000

---

## 3. Início Rápido

[ Voltar para o topo ](#tabela-de-conteúdos)

### 3.1. Instalando Dependências

Clone o projeto em sua máquina e instale as dependências com o comando:

npm install


### 3.2. Variáveis de Ambiente

Em seguida, crie um arquivo *.env, copiando o formato do arquivo **.env.example*:


cp .env.example .env


Configure suas variáveis de ambiente com suas credenciais do Postgres e uma nova database da sua escolha.

### 3.3. Migrations

Execute as migrations com o comando:


npm run typeorm migration:run -d src/data-source.ts

---

## 5. Endpoints

[ Voltar para o topo ](#tabela-de-conteúdos)

### Índice

- [Clients](clients)

  - [POST - /clients](criação-de-cliente)
  - [GET - /clients](listando-clientes)
  - [PATCH - /clients/:id](atualizando-cliente)
  - [DELETE - /clients/:id](deletando-cliente)

- [Contacts](contacts)

  - [POST - /contacts](criação-de-contato)
  - [GET - /contacts](listando-contatos-do-cliente-logado)
  - [PATCH - /contacts/:id](atualizando-contato)
  - [DELETE - /contacts/:id](deletando-contato)

- [Login](login)
  - [POST - /login](geração-token-acesso)

---

## 1. *Clients*

[ Voltar para os Endpoints ](endpoints)

O objeto Client é definido como:

| Campo      | Tipo           | Descrição                                             |
| ---------  | -------------- | ----------------------------------------------------- |
| id         | string         | Identificador único do cliente.                       |
| fullName   | string         | O nome completo do cliente.                           |
| email      | string         | O e-mail do cliente.                                  |
| password   | string         | A senha de acesso do cliente.                         |
| phoneNumber| string         | Telefone de contato do cliente.                       |
| createdAt  | string         | Data/hora de criação do cliente.                      |
| deletedAt  | string \| null | Data/hora em que o cliente foi marcado como excluído. |

O objeto Contact é definido como:

| Campo      | Tipo   | Descrição                            |
| ---------  | ------ | ------------------------------------ |
| id         | string | Identificador único do usuário       |
| fullName   | string | O nome completo do usuário.          |
| nickName   | string | O apelido do usuário.                |
| email      | string | O e-mail do usuário.                 |
| phoneNumber| string | Telefone de contato do usuário       |
| clientId   | string | Id do cliente relacionado ao contato |
| createdAt  | string | Data/hora de criação do contato      |

### Endpoints

| Método | Rota            | Descrição                                     |
| ------ | --------------- | --------------------------------------------- |
| POST   | /login          | Geração de um token                           |
| POST   | /clients        | Criação de um cliente.                        |
| GET    | /clients        | Lista todos os clientes                       |
| PATCH  | /clients/:id    | Atualiza cliente usando seu ID como parâmetro |
| DELETE | /clients/:id    | Deleta cliente usando seu ID como parâmetro   |
| POST   | /contacts       | Criação de um contato.                        |
| GET    | /contacts       | Lista contatos relacionados ao cliente logado |
| PATCH  | /contacts/:id   | Atualiza contato usando seu ID como parâmetro |
| DELETE | /contacts/:id   | Deleta contato usando seu ID como parâmetro   |

---

### 1.1. *Criação de Cliente*

[ Voltar para os Endpoints ](#5-endpoints)

### /clients

### Exemplo de Request:


POST /clients
Host: http://localhost:3000
Authorization: None
Content-type: application/json


### Corpo da Requisição:

json
{
  "fullName": "melaine",
  "email": "melaine@mail.com",
  "password": "12345",
  "phoneNumber": "23323237"
}


### Exemplo de Response:


201 Created


json
{
  "id": "9fd1d3c3-11a5-4d72-b8b7-b63d84a7bc31",
  "fullName": "melaine",
  "email": "melaine@mail.com",
  "createdAt": "2023-12-01",
  "phoneNumber": "23323237"
}


### Possíveis Erros:

| Código do Erro | Descrição             |
| -------------- | --------------------- |
| 409 Conflict   | Email already exists. |

---

### 1.2. *Listando Clientes*

[ Voltar aos Endpoints ](endpoints)

### /clients

### Exemplo de Request:


GET /clients
Host: http://localhost:3000
Authorization: None
Content-type: application/json


### Corpo da Requisição:

json
Vazio


### Exemplo de Response:


200 OK


json
[
  {
    "id": "9fd1d3c3-11a5-4d72-b8b7-b63d84a7bc31",
    "fullName": "João Carlos Firmino",
    "email": "jcnino@mail.com",
    "createdAt": "2023-12-01",
    "phoneNumber": "23********"
  }
]


### Possíveis Erros:

Retorno com lista vazia.

---

### 1.3. *Atualizar cliente*

[ Voltar aos Endpoints ](endpoints)

### /clients/:id

### Exemplo de Request:


PATCH /clients/clientId
Host: http://localhost:3000
Authorization: Bearer Token
Content-type: application/json


### Parâmetros da Requisição:

| Parâmetro | Tipo   | Descrição                      |
| --------- | ------ | ------------------------------ |
| id        | string | Identificador único do cliente |

### Corpo da Requisição:

json
{
  "phoneNumber": "1799454600"
}


### Exemplo de Response:

json
{
  "id": "9fd1d3c3-11a5-4d72-b8b7-b63d84a7bc31",
  "fullName": "melaine",
  "email": "melaine@mail.com",
  "createdAt": "2023-12-01",
  "phoneNumber": "1799454600"
}


### Possíveis Erros:

| Código do Erro | Descrição         |
| -------------- | ----------------- |
| 404 Not Found  | Client not found. |

### 1.4. *Deletar cliente*

[ Voltar aos Endpoints ](endpoints)

### /clients/:id

### Exemplo de Request:


DELETE /clients/clientId
Host: http://localhost:3000
Authorization: Bearer Token
Content-type: application/json


### Parâmetros da Requisição:

| Parâmetro | Tipo   | Descrição                      |
| --------- | ------ | ------------------------------ |
| id        | string | Identificador único do cliente |

### Corpo da Requisição:

json
Vazio


### Exemplo de Response:

json
204 No Content


### Possíveis Erros:

| Código do Erro | Descrição         |
| -------------- | ----------------- |
| 404 Not Found  | Client not found. |

### 1.5. *Criação de Contato*

[ Voltar para os Endpoints ](#5-endpoints)

### /contacts

### Exemplo de Request:


POST /contacts
Host: http://localhost:3000
Authorization: Bearer Token
Content-type: application/json


### Corpo da Requisição:

json
{
  "fullName": "João Carlos Firmino",
  "nickName": "Nino"
  "email": "jcnino@mail.com",
  "phoneNumber": "2330000"
}


### Exemplo de Response:


201 Created


json
{
  "id": "9fd1d3c3-11a5-4d72-b8b7-b63d84a7bc31",
  "fullName": "João Carlos Firmino",
  "nickName": "Nino"
  "email": "jcnino@mail.com",
  "createdAt": "2023-12-01",
  "phoneNumber": "23323237"
}


### 1.6. *Listando Contatos*

[ Voltar aos Endpoints ](endpoints)

### /contacts

### Exemplo de Request:


GET /contacts
Host: http://localhost:3000
Authorization: Bearer Token
Content-type: application/json


### Corpo da Requisição:

json
Vazio


### Exemplo de Response:


200 OK


json
[
    {
        "id": "9fd1d3c3-11a5-4d72-b8b7-b63d84a7bc31",
        "fullName": "João Carlos Firmino",
        "nickName": "Nino"
        "email": "jcnino@mail.com",
        "createdAt": "2023-12-01",
        "phoneNumber": "23323237"
    }
]


### Possíveis Erros:

Retorno com lista vazia.

---

### 1.7. *Atualizar contato*

[ Voltar aos Endpoints ](endpoints)

### /contacts/:id

### Exemplo de Request:


PATCH /contacts/contactId
Host: http://localhost:3000
Authorization: Bearer Token
Content-type: application/json


### Parâmetros da Requisição:

| Parâmetro | Tipo   | Descrição                      |
| --------- | ------ | ------------------------------ |
| id        | string | Identificador único do cliente |

### Corpo da Requisição:

### Deep partial, aceita qualquer atualização no body, podendo passar de um a todos os argumentos

json
{
  "phoneNumber": "1799454600"
}


### Exemplo de Response:

json
{
    "id": "9fd1d3c3-11a5-4d72-b8b7-b63d84a7bc31",
    "fullName": "João Carlos Firmino",
    "nickName": "Nino"
    "email": "jcnino@mail.com",
    "createdAt": "2023-12-01",
    "phoneNumber": "23323237"
}


### Possíveis Erros:

| Código do Erro | Descrição          |
| -------------- | ------------------ |
| 404 Not Found  | Contact not found. |

### 1.8. *Deletar contato*

[ Voltar aos Endpoints ](endpoints)

### /contacts/:id

### Exemplo de Request:


DELETE /contacts/contactId
Host: http://localhost:3000
Authorization: Bearer Token
Content-type: application/json


### Parâmetros da Requisição:

| Parâmetro | Tipo   | Descrição                      |
| --------- | ------ | ------------------------------ |
| id      | string | Identificador único do cliente |

### Corpo da Requisição:

json
Vazio


### Exemplo de Response:

json
204 No Content


### Possíveis Erros:

| Código do Erro | Descrição          |
| -------------- | ------------------ |
| 404 Not Found  | Contact not found. |

### 1.9. *Login*

[ Voltar aos Endpoints ](endpoints)

### /login

### Exemplo de Request:


POST /login
Host: http://localhost:3000
Authorization: None
Content-type: application/json


### Corpo da Requisição:

json
{
  "email": "jcnino@mail.com",
  "password": "12345"
}


### Exemplo de Response:

json
{
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InZpcmd5bmlhYmFjY2FuN0BtYWlsLmNvbSIsImNsaWVudCI6eyJpZCI6ImYzZGYxZTE4LWViODEtNDNmMy04NGY5LWQ3NjU4NjdjNzIwYiIsImZ1bGxOYW1lIjoiQ2FybGEgMiIsImVtYWlsIjoidmlyZ3luaWFiYWNjYW43QG1haWwuY29tIiwicGFzc3dvcmQiOiIkMmEkMTAkblIwV21PeWV1ZldvamsvcjQyNmVzLnlQd1NTYVN5Q1VFWHRGWXE2R3ZhenVaV21haWxSV2kiLCJwaG9uZSI6IjE3IDk5KioqKioiLCJjcmVhdGVkQXQiOiIyMDIzLTExLTMwIiwiZGVsZXRlZEF0IjpudWxsfSwiaWF0IjoxNzAxNjc0NzgzLCJleHAiOjE3MDE2ODE5ODMsInN1YiI6ImYzZGYxZTE4LWViODEtNDNmMy04NGY5LWQ3NjU4NjdjNzIwYiJ9.STw9SwxiY8FS2bcSyN94T9FkyE-TXzdK9NWp1OyhaXs",
  "client": {
    "id": "9fd1d3c3-11a5-4d72-b8b7-b63d84a7bc31",
    "fullName": "João Carlos Firmino",
    "email": "jcnino@mail.com",
    "createdAt": "2023-11-30",
    "phoneNumber": "17994546"
  }
}


### Possíveis Erros:

| Código do Erro   | Descrição           |
| ---------------- | ------------------- |
| 401 Unauthorized | Invalid credentials |