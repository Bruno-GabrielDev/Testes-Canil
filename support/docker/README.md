# Ambiente Docker

Esta configuração gera imagens independentes para o frontend e o backend e
inicia também o PostgreSQL. Ela é adequada para desenvolvimento integrado e
para publicação posterior em um registry de imagens.

## Serviços

| Serviço | Porta exposta | Responsabilidade |
| --- | --- | --- |
| `frontend` | `8080` por padrão | Nginx com os arquivos estáticos do React. Encaminha `/api/*` para o backend. |
| `backend` | Não exposta | API Fastify, acessível apenas pela rede interna do Compose. |
| `database` | Não exposta | PostgreSQL 16 com dados persistidos no volume `postgres_data`. |

O frontend e o backend possuem healthchecks. O frontend só inicia após o
backend estar saudável, e o backend aguarda o banco estar disponível.

## Pré-requisitos

- Docker Engine ou Docker Desktop com Docker Compose v2;
- uma senha segura para o PostgreSQL.

## Executar localmente

Abra um terminal nesta pasta e crie o arquivo de variáveis:

```powershell
Copy-Item .env.example .env
```

Edite `.env` e substitua `POSTGRES_PASSWORD` por uma senha segura. Em seguida:

```powershell
docker compose up --build -d
docker compose ps
```

Abra `http://localhost:8080`. A verificação da API está disponível em
`http://localhost:8080/api/health`.

Para acompanhar os logs:

```powershell
docker compose logs -f
```

Para parar os serviços sem apagar os dados do banco:

```powershell
docker compose down
```

## Variáveis de ambiente

| Variável | Padrão | Descrição |
| --- | --- | --- |
| `REGISTRY` | `canil-prefeitura` | Namespace do registry para as imagens. Ex.: `ghcr.io/minha-organizacao`. |
| `IMAGE_TAG` | `latest` | Tag aplicada às imagens de frontend e backend. |
| `FRONTEND_PORT` | `8080` | Porta do host para a aplicação. |
| `POSTGRES_DB` | `canil` | Nome do banco de dados. |
| `POSTGRES_USER` | `canil` | Usuário do banco de dados. |
| `POSTGRES_PASSWORD` | — | Senha obrigatória do banco. Não use a senha de exemplo em produção. |

## Publicar imagens

Defina no `.env` o namespace e uma tag imutável, por exemplo:

```dotenv
REGISTRY=ghcr.io/minha-organizacao
IMAGE_TAG=v1.0.0
```

Autentique-se no registry escolhido e execute:

```powershell
docker compose build
docker compose push frontend backend
```

No servidor de destino, copie `docker-compose.yml` e um `.env` com os valores
de produção — especialmente uma senha exclusiva. Em seguida, execute:

```powershell
docker compose pull
docker compose up -d
```

O volume `postgres_data` preserva o banco entre atualizações. Faça backups do
banco antes de operações de manutenção ou mudanças de esquema.
