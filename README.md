# Emerson SE — Portfólio Pessoal

Portfólio pessoal de **Emerson Ibraimo (DevStore)**, desenvolvedor Full Stack baseado em Maputo, Moçambique.

**Live:** [emerson-se.web.app](https://emerson-se.web.app)

---

## Stack

### Frontend
| Tecnologia | Versão |
|---|---|
| React | 19 |
| TypeScript | 6 |
| Vite | 8 |
| Tailwind CSS | 4 |
| React Router DOM | 7 |
| Framer Motion | 12 |
| Lucide React | — |

### Backend
| Tecnologia | Versão |
|---|---|
| NestJS | 11 |
| TypeScript | 5.7 |
| Firebase Admin SDK | 13 |
| Nodemailer (Gmail SMTP) | 6.9 |
| class-validator / class-transformer | — |

### Infraestrutura
- **Frontend:** Firebase Hosting (`emerson-se`)
- **Backend:** Render (Node.js)
- **Base de dados:** Firestore (colecção `contactos`)

---

## Funcionalidades

- **Hero animado** — Terminal interativo com efeito typewriter
- **Secção Sobre** — Manifesto pessoal + grelha de estatísticas
- **Toolkit** — Tecnologias organizadas por categoria (Frontend, Backend, Base de Dados, Ferramentas)
- **Projectos** — Destaque de 2 projectos com links live e GitHub
- **Contactos** — Formulário de contacto com backend NestJS + notificação por email
- **Roteamento** — Home `/` e página dedicada de projectos `/projectos`
- **Design responsivo** — Tailwind CSS, tipografia Inter + Space Grotesk + JetBrains Mono

---

## Estrutura

```
emerson-se/
├── src/                    # Frontend React
│   ├── components/         # Componentes (Header, Hero, Sobre, Toolkit, Projectos, Contactos, Footer, TerminalCard)
│   ├── pages/              # Páginas (Home, ProjectosPage)
│   ├── assets/             # Imagens estáticas
│   └── index.css           # Tema, animações, Tailwind
├── backend/                # API NestJS
│   └── src/
│       ├── config/         # Configuração + validação de env
│       ├── firebase/       # Módulo Firebase Admin
│       ├── email/          # Serviço de email (Nodemailer)
│       └── modules/contactos/  # CRUD contactos (POST /contactos)
├── public/                 # Estáticos (favicon, CV, icons)
├── project-log/            # Documentação do desenvolvimento
└── firebase.json           # Config Firebase Hosting + Firestore
```

---

## Desenvolvimento

```bash
# Frontend
npm install
npm run dev        # http://localhost:5173

# Backend
cd backend
npm install
npm run start:dev  # http://localhost:3000
```

### Variáveis de ambiente (backend)

Copie `.env.example` para `.env` e preencha:

```
PORT=3000
FRONTEND_URL=https://emerson-se.web.app
GMAIL_USER=seu-email@gmail.com
GMAIL_PASS=sua-password-de-app
FIREBASE_PROJECT_ID=emerson-se
FIREBASE_CLIENT_EMAIL=...
FIREBASE_PRIVATE_KEY=...
```

---

## API

| Método | Rota | Descrição |
|---|---|---|
| POST | `/contactos` | Envia mensagem de contacto |

**Body:** `{ nome: string, email: string, mensagem: string (min 10 caracteres) }`

---

## Deploy

### Frontend
```bash
npm run build
firebase deploy --only hosting
```

### Backend
O backend está configurado para deploy no Render. Consulte `backend/package.json` para o script de build.

---

## Licença

MIT
