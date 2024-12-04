# questbitv2

== LENDO A APLICAÇÃO ==
Para simplesmente ler o código fonte da aplicação, o uso de qualquer IDE serve

== REQUISITOS PARA RODAR A APLICAÇÃO ==
Para rodar a aplicação é necessário ter instalado na sua máquina:

- O Visual Studio Code 
link para download do mesmo para Windows: https://code.visualstudio.com/docs/setup/windows

- Node.js e node package manager (npm)
- O npm já vem instalado com o Node.js
link para download do mesmo para Windows: https://nodejs.org/pt/download/prebuilt-installer

Pode-se verificar a instalação do Node.js e npm através do uso dos comandos no cmd:

node -v (para verificar a instalação do node)
npm -v (para verificar a instalação do npm)

Após a configuração do ambiente, podemos rodar o comando git clone para clonar o reposítório para dentro da nossa máquina:
comando: git clone https://github.com/devmpedroso/questbit.git

Caso não possua o git instalado, é possível obter o projeto em zip. Basta ir em code, dentro do projeto no Github, e escolher tal opção.

! CUIDADO AO CLONAR O SISTEMA DENTRO DE OUTRA PASTA !
Caso crie uma pasta na área de trabalho para clonar o repositório dentro da mesma, deve-se tomar cuidado, pois as pastas BACKEND e FRONTEND devem ficar na raiz de uma única pasta, por se tratar da estrutura da aplicação.

Após clonar o repositório com sucesso e garantir que as duas pastas (BACKEND e FRONTEND) estão na raiz do projeto, basta agora instalar as dependências do frontend na parte de extensões do Visual Studio Code e backend via linha de comando.

No Visual Studio Code vá no ícone de 4 quadradinhos e vá na barra de pesquisa. Na barra de pesquisa, busque pela seguinte extensão:

Live Server

Ela é quem irá disponibilizar, localmente, as páginas do frontend.

No Visual Studio Code, pode-se usar o atalho ctrl + shift + ' e abrirá o terminal. Caso prefira, pode-se ir também no cabeçalho da aplicação e clicar em 'View' e escolher a opção terminal.

Após, usar o comando:

cd backend

E rodar o npm para instalação das dependências com o seguinte comando:

npm i

Você terá as dependências instaladas e o ambiente pronto.

== RODANDO A APLICAÇÃO ==

Basta ir no terminal novamente, acessar a pasta backend e rodar o comando:

npm run dev

Isso irá: 
inicializar o servidor - indicado no terminal quando com sucesso
conectar ao banco de dados na nuvem - indicado no terminal quando com sucesso

Após, basta clicar em Go Live, quando instalado o Live Server, que fica localizado no canto inferior direito da tela no Visual Studio Code.

== Acessando a página de login ==

Caso você seja direcionado para a tela com os diretórios, basta clicar e navegar no seguinte caminho:

frontend > pages > signup.html

Essa é a página de cadastro, onde você pode começar a análise da aplicação.

== FUNCIONALIDADES QUE NÃO ESTÃO IMPLEMENTADOS ==

- A página de data (que possue a seta como icon) não deve der acessada. Caso seja, basta retornar.

- o gráfico de indicação de tarefas completas 
