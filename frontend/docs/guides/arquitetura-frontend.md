# Guia de arquitetura do front-end

Este guia define a convenção proposta para o front-end do monorepo. O objetivo é manter as funcionalidades fáceis de localizar, evoluir e testar, sem acoplar partes não relacionadas da aplicação.

> **Status:** esta é uma proposta de organização. As bibliotecas mencionadas aqui, com exceção de React e TypeScript, ainda não foram instaladas nem configuradas.

## Estrutura proposta

O código é organizado principalmente por **feature** (funcionalidade ou domínio), e não pelo tipo técnico de arquivo. Assim, tudo que pertence a uma entidade fica próximo: telas, chamadas à API, hooks, tipos e testes.

```text
src/
├── api/                    # Cliente HTTP e recursos globais de API
├── app/                    # Composição da aplicação: providers e configuração global
├── assets/                 # Imagens, fontes e arquivos estáticos importados
├── components/             # Componentes reutilizáveis em mais de uma feature
├── features/               # Funcionalidades organizadas por domínio
│   ├── entidade-a/
│   │   ├── api/            # Requisições e mapeamentos da feature
│   │   ├── hooks/          # Hooks específicos da feature
│   │   ├── pages/          # Páginas/telas da feature
│   │   ├── components/     # Componentes internos (opcional)
│   │   ├── types.ts        # Tipos e contratos próprios
│   │   ├── presentation.ts # Adaptadores para exibição (labels, formatos etc.)
│   │   └── index.ts        # API pública da feature, quando necessária
│   └── entidade-b/
├── hooks/                  # Hooks reutilizáveis em todo o front
├── lib/                    # Utilitários, configurações e integrações reutilizáveis
├── routes/                 # Definição e proteção das rotas
├── test/                   # Configuração e utilitários compartilhados de testes
├── types/                  # Tipos realmente globais
├── index.css               # Estilos globais e tokens base
└── main.tsx                # Ponto de entrada da aplicação
```

As pastas só devem ser criadas quando tiverem uma responsabilidade real. Uma feature simples pode começar apenas com `pages/`, `api/` e `types.ts`; não é necessário criar arquivos vazios para completar o desenho.

## Regra prática: onde cada coisa fica?

- Algo usado somente por uma feature deve ficar dentro dela. Ex.: formulário, modal, hook e tipos de `entidade-a`.
- Algo usado por duas ou mais features pode ir para `components/`, `hooks/` ou `lib/`, conforme sua responsabilidade.
- Um componente em `components/` deve ser genérico e não conhecer regras de negócio de uma feature.
- Em `api/` ficam configurações compartilhadas, como a instância HTTP. Chamadas e contratos específicos ficam em `features/<entidade>/api/`.
- Em `routes/` ficam os caminhos, guards e a composição da navegação; a implementação da tela continua em `features/<entidade>/pages/`.
- `types/` não é um depósito de tipos: se o tipo pertence a uma feature, ele permanece nela.

## Dependências planejadas

| Área | Biblioteca | Papel |
| --- | --- | --- |
| Base | React + TypeScript | Construção da interface com segurança de tipos. |
| Navegação | React Router | Páginas, rotas aninhadas, parâmetros e navegação. |
| Estilização | Tailwind CSS | Classes utilitárias e consistência visual. |
| Componentes | shadcn/ui | Componentes acessíveis e customizáveis, mantidos no projeto. |
| Ícones | Lucide React | Ícones SVG consistentes e leves. |
| Formulários | React Hook Form | Estado e submissão de formulários com boa performance. |
| Validação | Zod | Esquemas e validação de dados, inclusive integrável aos formulários. |
| HTTP | Axios | Cliente para comunicação com a API do backend. |
| Dados remotos | React Query | Cache, carregamento, erro e atualização de dados obtidos da API. |

## Fluxos esperados

### Comunicação com o backend

```text
Página da feature
        ↓
hook da feature (React Query)
        ↓
função da feature em api/
        ↓
cliente HTTP compartilhado (Axios)
        ↓
Backend
```

### Formulários

Use o React Hook Form para controlar os campos e o Zod para definir e validar o formato dos dados antes do envio.

## Convenções de importação e dependências

Para evitar acoplamento entre áreas do sistema, siga esta direção:

```text
app e routes → features → componentes/hooks/lib compartilhados
```

- Uma feature pode usar código compartilhado, mas código compartilhado não deve importar uma feature.
- Evite importar arquivos internos de outra feature. Se for necessário compartilhar algo, extraia-o para uma área compartilhada ou exponha-o pelo `index.ts` da feature.
- Prefira nomes baseados no domínio e na intenção, como `features/entidade-a/pages/ListarEntidadeAPage.tsx`, em vez de nomes genéricos como `Page1.tsx`.
- Mantenha regras de negócio, transformação de dados e chamadas à API fora de componentes visuais sempre que isso melhorar a leitura e o reuso.

## Antes de adicionar uma nova biblioteca

Esta lista não é uma autorização para instalar tudo de uma vez. Antes de adicionar uma dependência, alinhe com o time de front-end:

1. qual problema ela resolve;
2. onde ela será configurada;
3. qual é o impacto em bundle, manutenção e tipos;
4. se uma dependência já adotada resolve o mesmo problema.

Quando uma biblioteca for aprovada, atualize este guia com sua finalidade e a decisão de configuração adotada.
