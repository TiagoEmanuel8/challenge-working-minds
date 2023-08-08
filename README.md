
# Boas vindas ao projeto Minds Vacation

# Sumário

- [Apresentação do projeto](#apresentação-do-projeto)
- [Tecnologias envolvidas](#tecnologias-envolvidas)
- [Justificativas](#tecnologias-envolvidas)
- [Funcionalidades](#funcionalidades)
- [Instalação e uso](#instalação-e-uso)
- [Referencias](#referencias)

---

#  Apresentação do projeto
O Minds Vacation é um projeto que consiste numa aplicação fullstack para realizar o gerencimento de férias de forma rápida, prática e fácil.
Esse projeto foi desenvolvido para seleção do cargo de desenvolvedor fullstack da [working minds](https://www.wkm.com.br/) 

---
#  Justificativas


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

[ Carregar o gif do projeto ]

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

