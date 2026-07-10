# 2026-07-10 12:00 — Integração frontend-backend do formulário de contactos

## O que mudou
- Ligado o formulário de contacto (`Contactos.tsx`) ao endpoint `POST /contactos` do backend NestJS
- Adicionado `useState` para campos (nome, email, mensagem) e estado de envio (idle/loading/success/error)
- Implementado `fetch` nativo com feedback visual: loading spinner no botão, mensagem de sucesso com `CheckCircle`, mensagem de erro com `AlertCircle`
- Criado `.env` na raiz com `VITE_API_URL=http://localhost:3000` para o Vite
- Criado `.env.example` na raiz como template
- Adicionado `.env` ao `.gitignore` da raiz
- Corrigidas aspas mal formadas no `backend/.env.example` (EMAIL_APP_PASSWORD e outras tinham aspas abertas sem fechar)

## Porquê
O formulário de contacto existia visualmente mas não submetia dados para lado nenhum — os inputs não tinham `value`/`onChange` nem `onSubmit`. Era a peça que faltava para o backend NestJS (já funcional) receber mensagens.

## Ficheiros/áreas afectadas
- `src/components/Contactos.tsx` — lógica de estado, submissão e feedback visual
- `.env` (raiz) — novo, variável `VITE_API_URL`
- `.env.example` (raiz) — novo, template vazio
- `.gitignore` (raiz) — adicionada regra `.env`
- `backend/.env.example` — corrigida formatação de variáveis
