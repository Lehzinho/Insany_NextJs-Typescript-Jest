# InsanyShop

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

**[https://insany-next-js-typescript-jest.vercel.app](https://insany-next-js-typescript-jest.vercel.app)**

Deploy automático realizado via Vercel com integração contínua.

## Sobre o Projeto

O **InsanyShop** é uma plataforma de e-commerce moderna construída com as mais recentes tecnologias web. O projeto utiliza Next.js para renderização server-side, Redux Toolkit para gerenciamento de estado, e Styled Components para estilização, proporcionando uma experiência de usuário fluida e responsiva.

### Por que InsanyShop?

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

- **Next.js 15.4.4** - Framework React para produção
- **React 18.3.1** - Biblioteca para interfaces de usuário
- **TypeScript 5** - Superset JavaScript com tipagem estática
- **Styled Components 6.1.19** - CSS-in-JS para estilização
- **React Icons 5.5.0** - Ícones para React

### Gerenciamento de Estado

- **Redux Toolkit 2.8.2** - Toolkit oficial do Redux
- **React Redux 9.2.0** - Bindings oficiais React-Redux

### Requisições e Cache

- **Axios 1.11.0** - Cliente HTTP baseado em Promise
- **SWR 2.3.4** - Biblioteca para fetching de dados

### Testes

- **Jest 30.0.5** - Framework de testes JavaScript
- **Testing Library** - Utilitários para testes de componentes
- **React Test Renderer** - Renderizador de testes React

### Desenvolvimento

- **Commitizen** - Padronização de commits
- **Commitlint** - Validação de mensagens de commit

## Pré-requisitos

Antes de iniciar, certifique-se de ter instalado em sua máquina:

- **Node.js** (versão 18 ou superior)
- **npm** ou **yarn**
- **Git**

## Instalação

1. **Clone o repositório**

   ```bash
   git clone https://github.com/Lehzinho/Insany_NextJs-Typescript-Jest.git
   cd InsanyShop
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
- **`npm run test:watch`** - Executa os testes em modo de observação
- **`npm run test:coverage`** - Executa os testes com relatório de cobertura

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

## Testes

O projeto utiliza Jest e Testing Library para testes:

```bash
# Executar todos os testes
npm test

# Executar testes em modo de observação
npm run test:watch

# Gerar relatório de cobertura
npm run test:coverage
```

---
