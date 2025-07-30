# InsanyShop

[![Next.js](https://img.shields.io/badge/Next.js-15.4.4-black.svg)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-18.3.1-blue.svg)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue.svg)](https://www.typescriptlang.org/)
[![License](https://img.shields.io/badge/license-MIT-green.svg)]()
[![Version](https://img.shields.io/badge/version-0.1.0-orange.svg)]()
[![Deploy](https://img.shields.io/badge/Deploy-Vercel-black.svg)](https://insany-next-js-typescript-jest.vercel.app)

Uma moderna aplicação de e-commerce desenvolvida com Next.js, React e TypeScript, oferecendo uma experiência de compras online completa e intuitiva.

**[Ver Aplicação Online](https://insany-next-js-typescript-jest.vercel.app)**

## Sumário

- [Demo Online](#demo-online)
- [Sobre o Projeto](#sobre-o-projeto)
- [Funcionalidades](#funcionalidades)
- [Tecnologias Utilizadas](#tecnologias-utilizadas)
- [Pré-requisitos](#pré-requisitos)
- [Instalação](#instalação)
- [Scripts Disponíveis](#scripts-disponíveis)
- [Como Usar](#como-usar)
- [Deploy](#deploy)
- [Estrutura do Projeto](#estrutura-do-projeto)
- [Testes](#testes)
- [Contribuição](#contribuição)
- [Licença](#licença)

## Demo Online

A aplicação está disponível online e pode ser acessada através do link:

** [https://insany-next-js-typescript-jest.vercel.app](https://insany-next-js-typescript-jest.vercel.app)**

_Deploy automático realizado via Vercel com integração contínua._

## Sobre o Projeto

O **InsanityShop** é uma plataforma de e-commerce moderna construída com as mais recentes tecnologias web. O projeto utiliza Next.js para renderização server-side, Redux Toolkit para gerenciamento de estado, e Styled Components para estilização, proporcionando uma experiência de usuário fluida e responsiva.

### Por que InsanityShop?

- **Performance otimizada** com Next.js 15 e renderização server-side
- **Interface moderna** com componentes reutilizáveis e design responsivo
- **Gerenciamento de estado robusto** com Redux Toolkit
- **Tipagem forte** com TypeScript para maior confiabilidade
- **Testes abrangentes** com Jest e Testing Library

## Funcionalidades

- Catálogo de produtos com busca e filtros
- Carrinho de compras interativo
- Sistema de autenticação de usuários
- Design totalmente responsivo
- Interface moderna com Styled Components
- Carregamento otimizado com SWR
- Gerenciamento de estado global com Redux
- Cobertura completa de testes

## Tecnologias Utilizadas

### Frontend

- **[Next.js 15.4.4](https://nextjs.org/)** - Framework React para produção
- **[React 18.3.1](https://reactjs.org/)** - Biblioteca para interfaces de usuário
- **[TypeScript 5](https://www.typescriptlang.org/)** - Superset JavaScript com tipagem estática
- **[Styled Components 6.1.19](https://styled-components.com/)** - CSS-in-JS para estilização
- **[React Icons 5.5.0](https://react-icons.github.io/react-icons/)** - Ícones para React

### Gerenciamento de Estado

- **[Redux Toolkit 2.8.2](https://redux-toolkit.js.org/)** - Toolkit oficial do Redux
- **[React Redux 9.2.0](https://react-redux.js.org/)** - Bindings oficiais React-Redux

### Requisições e Cache

- **[Axios 1.11.0](https://axios-http.com/)** - Cliente HTTP baseado em Promise
- **[SWR 2.3.4](https://swr.vercel.app/)** - Biblioteca para fetching de dados

### Testes

- **[Jest 30.0.5](https://jestjs.io/)** - Framework de testes JavaScript
- **[Testing Library](https://testing-library.com/)** - Utilitários para testes de componentes
- **[React Test Renderer](https://reactjs.org/docs/test-renderer.html)** - Renderizador de testes React

### Desenvolvimento

- **[Commitizen](https://commitizen.github.io/cz-cli/)** - Padronização de commits
- **[Commitlint](https://commitlint.js.org/)** - Validação de mensagens de commit

## Pré-requisitos

Antes de iniciar, certifique-se de ter instalado em sua máquina:

- **Node.js** (versão 18 ou superior)
- **npm** ou **yarn**
- **Git**

## Instalação

1. **Clone o repositório**

   ```bash
   git clone https://github.com/seu-usuario/insanityshop.git
   cd insanityshop
   ```

2. **Instale as dependências**

   ```bash
   npm install
   # ou
   yarn install
   ```

3. **Configure as variáveis de ambiente**

   ```bash
   cp .env.example .env.local
   ```

   Edite o arquivo `.env.local` com suas configurações específicas.

4. **Inicie o servidor de desenvolvimento**

   ```bash
   npm run dev
   ```

5. **Acesse a aplicação**
   Abra [http://localhost:3000](http://localhost:3000) no seu navegador.

## Scripts Disponíveis

No diretório do projeto, você pode executar:

- **`npm run dev`** - Inicia o servidor de desenvolvimento
- **`npm run build`** - Cria a build de produção
- **`npm run start`** - Inicia o servidor de produção
- **`npm run lint`** - Executa o linter para verificar o código
- **`npm run commit`** - Inicia o processo de commit padronizado com Commitizen
- **`npm test`** - Executa os testes

## Como Usar

### Desenvolvimento Local

1. Execute `npm run dev` para iniciar o ambiente de desenvolvimento
2. A aplicação estará disponível em `http://localhost:3000`
3. As mudanças no código serão refletidas automaticamente (hot reload)

### Build de Produção

1. Execute `npm run build` para gerar a build otimizada
2. Execute `npm run start` para servir a aplicação em modo produção

## Deploy

A aplicação está configurada para deploy automático na **Vercel**:

- **URL de Produção**: [https://insany-next-js-typescript-jest.vercel.app](https://insany-next-js-typescript-jest.vercel.app)
- **Deploy automático** a cada push na branch main
- **Preview deployments** para Pull Requests
- **Optimizações automáticas** de performance e SEO

### Deploy Manual

Para fazer deploy manual na Vercel:

1. Instale a Vercel CLI:

   ```bash
   npm install -g vercel
   ```

2. Execute o deploy:
   ```bash
   vercel --prod
   ```

### Commits Padronizados

Este projeto utiliza Commitizen para padronizar mensagens de commit:

```bash
npm run commit
```
