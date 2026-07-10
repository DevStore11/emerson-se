# Arquitectura Actual

## Visão geral
Monorepo com frontend React + Vite + TypeScript + Tailwind (Firebase Hosting) e backend NestJS (Render).

```
emerson-se/
├── src/              # Frontend React (Vite + TypeScript + Tailwind)
├── public/           # Assets estáticos do frontend
├── backend/          # Backend NestJS
│   └── src/
│       ├── main.ts
│       ├── app.module.ts
│       ├── firebase/
│       │   ├── firebase-admin.provider.ts
│       │   └── firebase.module.ts
│       └── modules/
│           └── contactos/
│               ├── contactos.controller.ts
│               ├── contactos.service.ts
│               ├── contactos.module.ts
│               └── dto/
│                   └── criar-contacto.dto.ts
├── firebase.json
├── firestore.rules
└── project-log/
    ├── changelog/
    ├── features/
    ├── architecture/
    └── archive/
```

## Stack

### Frontend
- React + Vite + TypeScript + Tailwind CSS
- Hospedado em Firebase Hosting

### Backend (novo)
- NestJS 11
- Firestore (via `firebase-admin` SDK)
- class-validator / class-transformer para validação
- @nestjs/config para gestão de ambiente
- Deploy no Render com Node.js

### Base de dados
- Firestore (Google Cloud / Firebase)

## Autenticação Firebase (backend)
O backend usa `firebase-admin` SDK com service account. A variável de ambiente `FIREBASE_SERVICE_ACCOUNT` contém o JSON completo das credenciais (não versionada — apenas `.env.example` com placeholder).

## Fluxos de dados

### Contactos (formulário do frontend → backend → Firestore)
```
Frontend → POST /contactos → [ValidationPipe] → ContactosController → ContactosService → Firestore (colecção "contactos")
```

## Ficheiros de configuração do frontend
- `.env` (raiz) — contém `VITE_API_URL` para apontar o frontend para o backend (não versionado)
- `.env.example` (raiz) — template para o `.env` (versionado)

## Fluxo completo de contactos (actualizado)
```
Contactos.tsx → fetch POST → /contactos → [ValidationPipe] → ContactosController → ContactosService → Firestore (colecção "contactos") + notificação email
```

## Próximos passos previstos
- Criar outros módulos de negócio no backend (projectos, etc.)
- Configurar deploy no Render (backend) e Firebase Hosting (frontend)
