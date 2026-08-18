# Front-end

Convenções de arquitetura, organização por features e uso das dependências: [guia do front-end](docs/guides/arquitetura-frontend.md).

## Tecnologias

- React + TypeScript
- Tailwind CSS (integrado ao Vite)
- React Router
- shadcn/ui
- Lucide React
- React Hook Form + Zod
- Axios + React Query

> React, TypeScript e Tailwind CSS já fazem parte do projeto. As demais tecnologias listadas são planejadas e ainda não foram instaladas ou configuradas.

## Estrutura atual

O código segue organização por feature, conforme o [guia de arquitetura](docs/guides/arquitetura-frontend.md):

```text
src/
├── app/                         # Composição da aplicação e providers
├── components/layout/           # Shell compartilhado da aplicação
├── features/home/pages/         # Página inicial da feature home
├── routes/router.tsx            # Data Router da aplicação
├── assets/                      # Imagens e arquivos importados
├── index.css                    # Tailwind e estilos globais
└── main.tsx                     # Ponto de entrada
```
