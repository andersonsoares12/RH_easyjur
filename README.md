* Manual de Instalação do Cypress OBS: utilizo o sistema macOs.
*  Introdução
* Este manual fornece instruções detalhadas para instalar e configurar o Cypress, uma ferramenta poderosa de testes end-to-end. Siga os passos abaixo para preparar seu ambiente de desenvolvimento para usar o Cypress.

Requisitos
Node.js (versão 12 ou superior)
comando para instalar o nodejs caso nao tenha instalado na maquina:
caso utilize o windows ou linux visitar o site :  https://nodejs.org/en/download/package-manager
npm install -g npm


Um editor de texto (VS Code recomendado) site para instalação : https://code.visualstudio.com/

Passo 1: Instalar o Cypress
1. Inicializar o Projeto
Se ainda não tiver um projeto Node.js, inicialize um novo projeto:
Comando:
npm init -y

3. Abrir o Cypress
Para abrir o Cypress pela primeira vez e criar os arquivos de configuração padrão, execute:
npx cypress open
 

Comando para Gerar o Relatório no cypress: roda o script
npm run cy:run:chrome
