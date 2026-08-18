# Arquivos de suporte

Esta pasta reúne os recursos de infraestrutura e operação do projeto.

| Diretório | Conteúdo |
| --- | --- |
| [`docker/`](./docker/README.md) | Imagens de produção, Docker Compose, configuração do Nginx e variáveis de ambiente. |

## Docker

O ambiente containerizado é composto por:

- **frontend:** aplicação React estática servida pelo Nginx;
- **backend:** API Fastify em Node.js;
- **database:** PostgreSQL com volume persistente.

Consulte o [guia Docker](./docker/README.md) para executar localmente e publicar
as imagens em um registry.

## Imagens publicadas

A imagem atualmente publicada do frontend está disponível no Docker Hub:

- [guilherme040903/canil_prefeitura_front](https://hub.docker.com/r/guilherme040903/canil_prefeitura_front)

Novas imagens e tags — incluindo a imagem do backend — serão adicionadas a
esta seção conforme forem publicadas.
