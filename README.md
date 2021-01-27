# Ninjapress
[![NPM](https://github.com/GuilhermeBarroso-sys/Ninja-Press-Blog/blob/main/LICENSE)

# Sobre o projeto


Ninjapress é uma aplicação full stack web construida com o intuito de colocar em prática meus conhecimentos adquiridos através do curso Formação Node.js.

A aplicação consiste em um Blog com artigos, categorias e painel administrativo, onde o conceito CRUD ( Create, Read, Update e Delete na lingua inglesa ) foi utilizado.
## Layout
### Home page
![category_page](https://imgur.com/AqDlsJ4.png)
![home](https://imgur.com/QhakAfj.png) 
### Tela de login
![login_page](https://imgur.com/DuXnlTi.png) 
### Painel Administrativo
![admin_category](https://imgur.com/3weQOmB.png) 
![admin_article](https://imgur.com/Imj2TI1.png) 
![admin_user](https://imgur.com/aZEr0k6.png)


# Principais Tecnologias utilizadas
## Back end
- JavaScript
- MySQL
- Node.js
- Express
- Sequelize
## Front end
- HTML / CSS / JS 
- Bootstrap



# Como executar o projeto


## Pré-requisitos: Node.js, mySQL Workbench

```bash
# clonar repositório
git clone https://github.com/GuilhermeBarroso-sys/Projeto-Blog.git

# entrar na pasta do projeto
cd projeto
```
# Baixar e configurar o banco de dados do projeto
  Link: https://drive.google.com/file/d/10XreP13Fxur2YF99XyfrglyjQ1mssYD_/view?usp=sharing
  
  Em seguida, faça a descompactação do arquivo baixado.
  
  ![Imgur](https://i.imgur.com/G0WGlhU.png)
  
  Inicie o mySQL Workbench e crie um schema com o nome de "ninjapress".
  
  ![Imgur](https://i.imgur.com/QzFy47I.png) ![Imgur](https://i.imgur.com/IrFUQiU.png)
  
  Clique em Apply para criar o Schema
  
  Depois da criação do Schema vá em Server -> Data Import para importar o schema baixado no link acima.
  
  ![Imgur](https://i.imgur.com/utrYU2R.png) ![Imgur](https://i.imgur.com/JaPnY0L.png)
  
  Em "Import from dump Project Folder" escolha o diretorio em que o schema baixado está localizado.
  Verifique se o Schema foi encontrado.
  Logo em seguida clique em "Start Import".
  
  Quando finalizar a importação, entre na pasta do projeto, e edite o arquivo database.js localizado na pasta /database para conectar-se com o seu  mySQL WorkBench.
  
  ![Imgur](https://i.imgur.com/UGptSqZ.png)
  
```bash
# instalar dependências
npm install

# instalar o supervisor
npm install supervisor -g

# executar o projeto
supervisor index.js
```

Para entrar no painel administrativo basta clicar em "entrar" no canto superior direito da home page e digitar "admin" no campo Usuário e Senha.





# Autor

Guilherme Barroso de Oliveira
https://www.linkedin.com/in/guilherme-barroso-931147175/
