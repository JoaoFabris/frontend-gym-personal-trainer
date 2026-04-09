# 🏋️ Gym Personal Trainer — Frontend

Interface mobile-first para a plataforma de personal trainer com IA, construída com Next.js 16 e integrada ao [backend da API](https://github.com/JoaoFabris/gym-personal-trainer).

> 📦 **Backend:** [gym-personal-trainer API](https://github.com/JoaoFabris/gym-personal-trainer)

---

## 📱 Visão Geral

O frontend do **Gym Personal Trainer** entrega uma experiência focada no mobile, permitindo que o usuário visualize e execute seus planos de treino, acompanhe estatísticas de evolução e converse com uma IA integrada diretamente pelo chat da plataforma.

---

## ✨ Funcionalidades

- Autenticação com Google via **Better Auth**
- Onboarding para coleta de dados físicos e objetivo do usuário
- Visualização de planos de treino com dias e exercícios
- Execução de sessão de treino com marcação de conclusão
- Chat com IA integrado (streaming com **Vercel AI SDK**)
- Dashboard com dados da home e banner personalizado
- Heatmap e streak de consistência de treinos
- Tela de estatísticas de evolução com cards e banner
- Perfil do usuário com logout
- Navegação inferior (bottom nav) para experiência mobile
- Componentes UI com **shadcn/ui** + **Radix UI**
- Tipagem automática do cliente HTTP via **Orval** (geração de código da OpenAPI)

---

## 🛠️ Stack Técnica

| Camada | Tecnologias |
|---|---|
| **Framework** | Next.js 16 (App Router) |
| **Linguagem** | TypeScript |
| **Autenticação** | Better Auth (Google OAuth) |
| **Estilização** | Tailwind CSS v4 + tw-animate-css |
| **Componentes** | shadcn/ui + Radix UI |
| **Formulários** | React Hook Form + Zod |
| **IA (chat)** | Vercel AI SDK (@ai-sdk/react) + streamdown |
| **HTTP Client** | Orval (geração automática via OpenAPI) |
| **State/URL** | nuqs |
| **Datas** | Day.js |
| **Ícones** | Lucide React |

---

## 🚀 Como rodar localmente

### Pré-requisitos

- Node.js 20+
- pnpm
- Backend da API rodando (veja o [repositório do backend](https://github.com/JoaoFabris/gym-personal-trainer))

### 1. Clone o repositório

```bash
git clone https://github.com/JoaoFabris/frontend-gym-personal-trainer.git
cd frontend-gym-personal-trainer
```

### 2. Instale as dependências

```bash
pnpm install
```

### 3. Configure as variáveis de ambiente

Crie um arquivo `.env.local` na raiz do projeto:

```env
NEXT_PUBLIC_API_URL="http://localhost:3000"

BETTER_AUTH_SECRET="seu_secret_aqui"
BETTER_AUTH_URL="http://localhost:3001"

GOOGLE_CLIENT_ID="seu_google_client_id"
GOOGLE_CLIENT_SECRET="seu_google_client_secret"
```

### 4. Inicie o servidor de desenvolvimento

```bash
pnpm dev
```

O app estará disponível em `http://localhost:3001`.

---

## 🗂️ Estrutura do Projeto

```
app/
├── layout.tsx                  # Layout raiz com providers
├── page.tsx                    # Home — dashboard principal
├── globals.css
│
├── _components/                # Componentes globais compartilhados
│   ├── bottom-nav.tsx          # Navegação inferior mobile
│   ├── chat.tsx                # Chat com IA (streaming)
│   ├── chat-open-button.tsx
│   ├── consistency-tracker.tsx # Heatmap de consistência
│   ├── consistency-square.tsx
│   └── workout-day-card.tsx
│
├── _lib/
│   ├── auth-client.ts          # Instância do Better Auth (client)
│   ├── fetch.ts                # Wrapper do fetch configurado
│   └── api/fetch-generated/    # Cliente HTTP gerado pelo Orval
│
├── auth/                       # Página de login
│   └── _components/
│       └── sing-in-with-google.tsx
│
├── onboarding/                 # Coleta inicial de dados do usuário
│   └── page.tsx
│
├── profile/                    # Perfil e logout
│   └── _components/
│       └── logout-button.tsx
│
├── stats/                      # Estatísticas de evolução
│   └── _components/
│       ├── stat-card.tsx
│       ├── stats-heatmap.tsx
│       └── streak-banner.tsx
│
└── workout-plans/
    └── [id]/                   # Detalhe do plano de treino
        ├── page.tsx
        ├── _components/
        │   └── rest-day-card.tsx
        └── days/[dayId]/       # Execução do dia de treino
            ├── page.tsx
            ├── _actions.ts     # Server Actions
            └── _components/
                ├── exercise-card.tsx
                ├── start-workout-button.tsx
                ├── complete-workout-button.tsx
                └── back-button.tsx

components/ui/                  # Componentes shadcn/ui
lib/
└── utils.ts                    # cn() e utilitários
```

---

## 🤖 Chat com IA

O componente `chat.tsx` utiliza o `@ai-sdk/react` com streaming para proporcionar uma conversa em tempo real com a IA, integrada diretamente ao contexto do usuário (plano de treino, objetivo, histórico).

---

## 🔄 Geração de Tipos com Orval

O cliente HTTP é gerado automaticamente a partir do schema OpenAPI do backend, garantindo tipagem 100% sincronizada com a API:

```bash
pnpm exec orval
```

---

## 📦 Scripts disponíveis

| Comando | Descrição |
|---|---|
| `pnpm dev` | Inicia o servidor de desenvolvimento |
| `pnpm build` | Build de produção |
| `pnpm start` | Inicia o servidor em produção |
| `pnpm lint` | Executa o ESLint |
| `pnpm exec orval` | Regenera o cliente HTTP da API |

---

Desenvolvido por [João Fabris](https://github.com/JoaoFabris) 🚀