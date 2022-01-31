# Linkgroup

<img id='topo' src="https://logodownload.org/wp-content/uploads/2019/09/linktree-logo.png" alt="Página admin">

 Seja bem vindo(a) ao nosso projeto! Nós desenvolvemos uma cópia do [Linktree](https://linktr.ee/). Nesse projeto, nós desenvolvemos a maioria das funcionalidades do site e também o front-end por completo! =D

### Ajustes e melhorias

O projeto ainda está em desenvolvimento e as próximas atualizações serão voltadas nas seguintes tarefas:

- [x] Administrador Geral
- [x] Migration and Seeders
- [ ] Visual da página de links do usuário
- [ ] Versão PRO

## 💻 Pré-requisitos

Antes de começar, verifique se você atendeu aos seguintes requisitos:
* Você tem uma máquina `<Windows / Linux / Mac>`.
* Você instalou a versão mais recente de `<NodeJS e a versão mais recente do NPM(Node Package Manager)>`
* Você tem a versão mais recente do `<MySQL Workbench>`.
* Você clonou o projeto `<utilizando o GIT Clone>`.

## 🚀 Instalando

Para instalar o Linkgroup, siga estas etapas:

Windows, Linux e macOS:
```js
Clone o repositório em seu VScode;
git clone https://github.com/FelipeSantanaa/LinkGroup.git
```
Após clonar o projeto em sua máquina, crie um arquivo <b>.env</b> na raíz do projeto e preencha as informações
de acordo com o seu banco de dados:
~~~sql
DB_NAME=linkgroup
DB_USER=root
DB_PWD= 
DB_HOST=localhost
DB_PORT=3306
DB_DIALECT=mysql
~~~
Depois de criar o arquivo e preencher as informações, prossiga com os seguintes passos:
```js
Abra o terminal e digite cd ./server;

Em seguida, digite npm install para instalar todas dependências necessárias.
```


## 🔐 Banco de dados
Para criar o banco de dados, utilize os seguintes comandos em seu terminal:
~~~~sql
npx sequelize-cli db:create
npx sequelize-cli db:migrate
~~~~

Após criar o Banco de dados, usaremos o seguinte comando para popular as tabelas:
~~~sql
npx sequelize-cli db:seed:all
~~~

## ☕ Usando o Linkgroup

Para iniciar o Linkgroup, siga estas etapas:

```js
Seguindo os passos da instalação, assim que todas dependências e o banco de dados forem instaladas,
digite npm start no terminal;
Acesse em seu navegador localhost:3000.
```

## 🤝 Colaboradores

Agradecemos às seguintes pessoas que contribuíram para este projeto:

<table>
  <tr>
    <td align="center">
      <a href="#">
        <img src="https://avatars.githubusercontent.com/u/82964133?v=4" width="100px;" alt="Foto do Lucas no GitHub"/><br>
        <sub>
          <b>Lucas Gabriel</b>
        </sub>
      </a>
    </td>
    <td align="center">
      <a href="#">
        <img src="https://avatars.githubusercontent.com/u/50604515?v=4" width="100px;" alt="Foto do Altair no GitHub"/><br>
        <sub>
          <b>Altair Jesus</b>
        </sub>
      </a>
    </td>
    <td align="center">
      <a href="#">
        <img src="https://avatars.githubusercontent.com/u/86272689?v=4" width="100px;" alt="Foto do Robert no GitHub"/><br>
        <sub>
          <b>Robert Bezerra</b>
        </sub>
      </a>
       <td align="center">
      <a href="#">
        <img src="https://avatars.githubusercontent.com/u/69217173?v=4" width="100px;" alt="Foto do Felipe no GitHub"/><br>
        <sub>
          <b>Felipe Alves</b>
        </sub>
      </a>
    </td>
  </tr>
</table>

<table>
  <tr>
    <td align="center">
      <a href="#">
        <img src="https://br.digitalhouse.com/wp-content/uploads/2018/02/dh-coding-school-logo.jpg" width="100px;" alt="Foto da Digital House"/><br>
        <sub>
          <b>Não podemos deixar de agradecer também a instituição e aos professores<br> Marcelo e Henrique que foram essenciais para o desenvolvimento
          do projeto.</b>
        </sub>
      </a>
    </td>
  </tr>
  </table>


## 📝 Licença

Esse projeto está sob licença do MIT. Veja o arquivo [LICENÇA](https://github.com/FelipeSantanaa/LinkGroup/blob/main/LICENSE) para mais detalhes.

[⬆ Voltar ao topo](#topo)<br>
