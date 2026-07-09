# 2026-07-07 23:08 — Criação do backend NestJS com módulo Contactos + Firestore

## O que mudou
Criado um novo backend NestJS dentro da pasta `backend/` na raiz do monorepo. O projecto inclui um módulo funcional de Contactos com endpoint `POST /contactos`, que grava mensagens no Firestore via `firebase-admin` SDK. A autenticação do Firebase é feita por service account lida da variável de ambiente `FIREBASE_SERVICE_ACCOUNT` (string JSON). O backend está preparado para deploy no Render.

## Porquê
O frontend React (hospedado no Firebase Hosting) necessita de um backend para processar e persistir mensagens de contacto. Optou-se por NestJS pela sua arquitectura modular e maturidade no ecossistema Node.js, e pelo Firestore (via admin SDK) para manter consistência com o ecossistema Firebase já usado no frontend.

## Ficheiros/áreas afectadas
- `backend/package.json` — dependências NestJS, firebase-admin, class-validator, class-transformer, @nestjs/config
- `backend/tsconfig.json` — configuração TypeScript com decorators
- `backend/nest-cli.json`
- `backend/src/main.ts` — ValidationPipe global (whitelist), CORS restrito a `https://emerson-se.web.app`, porta via `PORT` env var
- `backend/src/app.module.ts` — ConfigModule (global), FirebaseModule, ContactosModule
- `backend/src/firebase/firebase-admin.provider.ts` — provider `'FIRESTORE'` injectável, lê `FIREBASE_SERVICE_ACCOUNT` do ambiente
- `backend/src/firebase/firebase.module.ts` — módulo `@Global()` que exporta o provider
- `backend/src/modules/contactos/contactos.module.ts`
- `backend/src/modules/contactos/contactos.controller.ts` — `POST /contactos` com validação
- `backend/src/modules/contactos/contactos.service.ts` — grava na coleção `contactos` com timestamp
- `backend/src/modules/contactos/dto/criar-contacto.dto.ts` — validação com class-validator
- `backend/.env.example` — placeholder para `FIREBASE_SERVICE_ACCOUNT`
- `backend/.gitignore` — node_modules, dist, .env
