# Módulo Contactos — Backend NestJS

## Estado actual
Funcional e operacional. Endpoint `POST /contactos` no backend NestJS.

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

## Dependências
- NestJS (`@nestjs/common`, `@nestjs/core`, `@nestjs/config`, `@nestjs/platform-express`)
- `firebase-admin`
- `class-validator` + `class-transformer`

## Deploy
Preparado para Render. Build: `npm run build`. Start: `node dist/main.js`. Porta via `process.env.PORT` (fallback 3000).
