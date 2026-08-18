# Back-end

API do projeto desenvolvida com Java, Spring Boot e Spring Data JPA.

## Pré-requisitos

- Java 21
- PostgreSQL rodando localmente (ou via `support/docker/docker-compose.yml`)

## Execução local

```bash
cp .env.example .env
# ajuste as variáveis de ambiente em .env conforme necessário

./mvnw spring-boot:run
```

A API sobe por padrão na porta `3000` (configurável via `SERVER_PORT`).

## Build

```bash
./mvnw clean package
java -jar target/backend-0.0.1-SNAPSHOT.jar
```

## Testes

```bash
./mvnw test
```

## Tecnologias

- Java 21
- Spring Boot
- Spring Web
- Spring Data JPA
- PostgreSQL
