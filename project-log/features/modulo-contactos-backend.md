# Módulo Contactos — Backend + Frontend

## Estado actual
Funcional e integrado de ponta a ponta. Backend NestJS com endpoint `POST /contactos` e frontend React ligado ao backend via fetch nativo.

## O que faz
Recebe mensagens de contacto enviadas do frontend, valida os campos (nome, email, mensagem) e persiste no Firestore.

## Endpoint
- `POST /contactos` — espera `{ nome, email, mensagem }` no body
- Valida com class-validator: nome (string obrigatória), email (formato email), mensagem (string, min 10 caracteres)
- Devolve `201 Created` com `{ id, mensagem: "Mensagem enviada com sucesso." }`

## Persistência
Grava na colecção `contactos` do Firestore com os campos:
- `nome`, `email`, `mensagem` (do body)
- `criadoEm` (Date — Firestore Timestamp)

## Autenticação Firebase
Firebase Admin SDK inicializado via `admin.credential.cert()` com credentials lidas da variável de ambiente `FIREBASE_SERVICE_ACCOUNT` (string JSON completa).

## Frontend integrado
O formulário em `src/components/Contactos.tsx` agora:
- Usa `useState` para controlar campos (nome, email, mensagem) e estado de envio
- Faz `fetch` POST para `/contactos` com `Content-Type: application/json`
- Tem feedback visual: loading (botão desabilitado + spinner), success (mensagem de confirmação com `CheckCircle` e reset do formulário), error (alerta vermelho com `AlertCircle`)
- Usa `VITE_API_URL` do `.env` da raiz para apontar para o backend

## Dependências
- NestJS (`@nestjs/common`, `@nestjs/core`, `@nestjs/config`, `@nestjs/platform-express`)
- `firebase-admin`
- `class-validator` + `class-transformer`

## Deploy
Preparado para Render. Build: `npm run build`. Start: `node dist/main.js`. Porta via `process.env.PORT` (fallback 3000).
