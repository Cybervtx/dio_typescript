## Fundamentos do Typescipt

```bash
# iniciar o projeto
npm init -y

# instalar dependecias no tyepscript
npm i -D typescript ts-node-dev

# configurar o typescript
npx tsc --init

# transpilar o typescript
npx tsc src/app.ts

# rodar sem tranpilar / precisa do dev em script
npm run dev

# exemplo de conf json
{
  "name": "dio_ts",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "dev": "ts-node-dev src/app.ts",
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "type": "commonjs",
  "devDependencies": {
    "ts-node-dev": "^2.0.0",
    "typescript": "^5.9.3"
  }
}
```

## Introdução ao react com TypeScript

```bash
# Iniciar uma aplicaçao em react
npx create-react-app my-app-ts --template typescript

# instalar o styled components
npm i styled-components
npm i --save-dev @types/styled-components

# instalando componete visual do chakra versao 2
npm i @chakra-ui/react @emotion/react

# instala o icones
npm install @chakra-ui/icons
```