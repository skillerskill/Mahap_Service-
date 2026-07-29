# 🧼 Mahap Service Website - Plataforma Institucional

Plataforma Web moderna, responsiva e de alta conversão desenvolvida para a **Mahap Service Lda.** (empresa especialista em higienização, detailer automóvel e controlo de pragas sediada em Luanda, Angola). O website destaca a parceria e representação oficial dos produtos sustentáveis americanos **Spartan®** no mercado angolano.

## 🚀 Tecnologias Utilizadas

Este projeto foi estruturado de forma modular e limpa para facilitar uma futura integração com bases de dados e APIs de backend:

- **Framework:** [Next.js 15+](https://nextjs.org) (App Router)
- **Linguagem:** JavaScript (ES6+)
- **Estilização:** [Tailwind CSS](https://tailwindcss.com)
- **Ícones:** Lucide React (Renderizados em SVG nativo)

## 🏗️ Arquitetura do Projeto (Modular)

O código foi componentizado para garantir escalabilidade, separando a lógica de apresentação das páginas institucionais:

```text
src/
├── app/
│   ├── layout.js          # Configuração global de SEO, metadados e fontes
│   ├── page.js            # Página Inicial (Landing Page consolidada)
│   ├── servicos/
│   │   └── page.js        # Página dedicada para listagem expandida de serviços
│   ├── contacto/
│   │   └── page.js        # Página do formulário de contacto e agendamentos
│   └── globals.css        # Configurações e diretivas do Tailwind
└── components/
    ├── Navbar.js          # Menu de navegação global dinâmico
    ├── Hero.js            # Banner de entrada com CTAs focadas em conversão
    ├── ServicesGrid.js    # Mapeamento dinâmico dos cartões de serviços
    ├── SpartanBanner.js   # Secção de autoridade da marca Spartan®
    └── Footer.js          # Rodapé corporativo com contactos diretos
```

## 🛠️ Funcionalidades Implementadas

- **Navegação Modular:** Roteamento nativo do Next.js entre as páginas `/`, `/servicos` e `/contacto`.
- **Estratégia de Conversão (CTA):** Botões rápidos integrados com a API do WhatsApp e links de chamada direta para os números de atendimento de Luanda (+244 928 258 795).
- **Formulário Inteligente:** Página de contacto estruturada com estados de controlo do React, preparada para substituição direta por rotas de backend (API endpoints).
- **SEO Otimizado:** Metadados e tags semânticas estruturadas especificamente para motores de busca em Luanda/Angola.
- **Responsividade Total:** Design focado na experiência Mobile-First.
