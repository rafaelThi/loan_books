# Formato da Aplicação

- Dividida em duas partes, donos de livros e usuários.
- Donos fornecem e usuários solicitam
- Donos podem apenas emprestar e usuários apenas solicitar


# Cadastro de Livros

**RF**
*Requisitos Funcionais*
- Dono do livro deve cadastrar o livro com o quantidade, nome e autor do livro

**RNF**
*Requisitos Não Funcionais*
- Cadastrar em um DB Postgre

**RN**
*Regras de Negócio*
- Para cadastrar um livro, deve estar logado em um login exclusivo de 'dono de livro'

# Busca por Livro
**RF**
*Requisitos Funcionais*
- Usuário deve buscar por nome OU autor do livro

**RNF**
*Requisitos Não Funcionais*

**RN**
*Regras de Negócio*
- Para buscar um livro, deve estar logado

# Cadastro de Usuário e Dono do livro 
**RF**
*Requisitos Funcionais*
- Usuário e dono do livro deve poder se cadstrar usando nome + sobrenome, email e senha.

**RNF**
*Requisitos Não Funcionais*

**RN**
*Regras de Negócio*
- Não pode haver dois ususarios com o mesmo email
- Senha tem que possuir no minimo 6 letras 

# Solicitação de Empréstimo

**RF**
*Requisitos Funcionais*
- Usuário deve poder solicitar um livro especifico

**RNF**
*Requisitos Não Funcionais*


**RN**
*Regras de Negócio*
- Dono do livro deve receber um notificação da solicitação
- Para o usuário solicitar um livro, deve estar logado

# Aceite de Empréstimo

**RF**
*Requisitos Funcionais*
- O dono do livro deve poder aceitar ou negar a solicitação

**RNF**
*Requisitos Não Funcionais*


**RN**
*Regras de Negócio*
- O dono do livro deve receber uma notificação sobre sua solicitação
- O dono do livro, para negar ou aceitar, deve estar logado no login de 'dono de livro'


# Devolução

**RF**
*Requisitos Funcionais*
- O usuário deve poder devolver antes da data prevista
- O usuário pode pedir uma renovação da solicitação, tendo que ser aprovada novamente

**RNF**
*Requisitos Não Funcionais*


**RN**
*Regras de Negócio*
- O dono do livro e o usuário devem receber uma notificação sobre a devolução
- O dono deve receber uma notificação sobre sua nova solicitação
- O dono, para negar ou aceitar a nova solicitação, deve estar logado no login de 'dono de livro'
