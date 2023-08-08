
# Boas vindas ao projeto Minds Vacation

# Sumário

- [Apresentação do projeto](#apresentação-do-projeto)
- [Tecnologias](#tecnologias)
- [Funcionalidades](#funcionalidades)
- [Preview](#preview)
- [Instalação e uso](#instalação-e-uso)

---

#  Apresentação do projeto
O Minds Vacation é um projeto que consiste numa aplicação fullstack para realizar o gerencimento de férias de forma rápida, prática e fácil.
Esse projeto foi desenvolvido para seleção do cargo de desenvolvedor fullstack da [working minds](https://www.wkm.com.br/) 

---
#  Tecnologias

Para fazer o projeto utilizei como principais ferramentas:

 - [Typescript](https://www.typescriptlang.org/)
 - [Node](https://nodejs.org/en/docs)
 - [Nest](https://nestjs.com/)
 - [React](https://react.dev/)
 - [Next](https://nextjs.org/)
 - [Prisma](https://www.prisma.io/)
 - [Mysql](https://www.mysql.com/)
 - [Chakra](https://chakra-ui.com/)

---

# Funcionalidades

Fluxo de Usuarios
- Cadastrar um novo usuario
- Listar usuarios cadastrados
- Listar um unico usuario cadastrado
- Editar dados cadastrados
- Excluir cadastro

Fluxo de Login
- Realizar Login no sistema

Fluxo de Cargos
- Cadastrar um novo cargo
- Listar cargos cadastrados
- Listar um unico cargo cadastrado
- Editar cargos cadastrados
- Excluir cargos

Fluxo de Férias
- Cadastrar férias
- Listar férias de todos os usuarios
- Listar uma única férias de um usuário
- Editar férias cadastradas
- Excluir férias

---

# Preview

O projeto foi construido pensando em responsividade, então nas imagens abaixo, algumas são de telas de celular e outras em uma tela de desktop

![Captura-de-tela-de-2023-08-07-23-40-27](https://github.com/TiagoEmanuel8/challenge-working-minds/assets/72472530/ecfcdaa4-63c8-40b7-8766-95f59aa8183e)
![Captura-de-tela-de-2023-08-07-23-49-19](https://github.com/TiagoEmanuel8/challenge-working-minds/assets/72472530/e9c992db-4499-4827-b091-0147ce0e3f0e)
![Captura-de-tela-de-2023-08-07-23-43-33](https://github.com/TiagoEmanuel8/challenge-working-minds/assets/72472530/b90020d7-3a3a-4acd-8a05-7ff82c0937fb)
![Captura-de-tela-de-2023-08-07-23-45-57](https://github.com/TiagoEmanuel8/challenge-working-minds/assets/72472530/22fca54c-89c0-471c-9234-bd85364f558a)
![Captura-de-tela-de-2023-08-07-23-44-09](https://github.com/TiagoEmanuel8/challenge-working-minds/assets/72472530/266ef2c7-27f2-4ae2-a655-87c3ab692fdc)
![Captura-de-tela-de-2023-08-07-23-40-53](https://github.com/TiagoEmanuel8/challenge-working-minds/assets/72472530/6958dd4e-0c1d-4ccb-a2e0-5488515a14a0)

---

# Instalação e uso

Para executar o projeto sua máquina deve satisfazer os requisitos abaixo.  
  
Pré-requisitos  
  
```  
- node v18.16.0  
- npm v9.5.1  
- git version v2.34.1  
  
```  
  
[Download node js](https://nodejs.org/en/)  
  
[Download git](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git)  
  
### Clonando o projeto  
  
Digite o comando abaixo para clonar o projeto.  
  
```  
git clone https://github.com/TiagoEmanuel8/challenge-working-minds.git
  
```  
  
### Abra 2 terminais e em cada um dele entre nas pastas  
  
```  
cd backend
  
```  
e
```  
cd frontend
  
```  

### Substitua as variáveis de ambiente  
  
 em backend:
```  
DATABASE_URL="mysql://'usuario do mysql':'senha do mysql'@localhost:'número da porta'/'nome banco de dados'"

PORT=`número da porta`

JWT_KEY=`uma senha` 
```  
e em frontend:
```  
NEXT_PUBLIC_API_URL='http://localhost:`número definido na variável PORT, que está acima`' 
```  
  
### Instale as dependências  
  Ainda com os 2 terminais abertos execute o comando abaixo em ambos:
```  
npm install  
```  
### Execute o projeto  
  
em backend use
```  
npm run start:dev  
```  
e em frontend use
``` 
npm run dev  
``` 
---

