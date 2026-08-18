# Requisitos do Projeto: Guia de Definição e Aprovação

Este documento explica como dúvidas se transformam em requisitos oficiais. O objetivo é permitir a colaboração de toda a equipe sem confundir hipóteses, respostas preliminares e decisões aprovadas.

---

## 🎯 Fonte da verdade

> **Regra central:** a implementação do sistema deve seguir exclusivamente os requisitos oficiais publicados nesta pasta.

Perguntas, pautas, atas, respostas de reuniões, a [demanda original](../demanda-original.md) e qualquer outro material preparatório ajudam a construir os requisitos, mas não são requisitos oficiais e não autorizam decisões de implementação por conta própria.

Um requisito só se torna oficial quando:

1. é redigido por um Product Owner (PO) a partir das decisões obtidas com os clientes;
2. é incluído na área oficial desta pasta;
3. passa por PR exclusivo de documentação de requisitos;
4. recebe aprovação de um PO e é incorporado à branch correspondente.

---

## 🔄 Como uma dúvida se transforma em requisito

### 1. Registrar a dúvida

Novas questões devem ser adicionadas ao arquivo [perguntas.md](./levantamento/perguntas.md). Qualquer contribuinte pode propor uma pergunta pertinente, desde que siga as [regras de contribuição](./levantamento/README.md) e o [workflow do projeto](../workflow.md).

Adicionar uma pergunta não a torna requisito nem garante que ela será discutida imediatamente. Nesse momento, ela representa apenas uma dúvida que pode afetar o entendimento do sistema.

### 2. Selecionar a pauta

As reuniões com os clientes têm tempo limitado. Por isso, os POs devem selecionar quais perguntas entrarão em cada pauta e limitar a quantidade ao que pode ser discutido com qualidade.

A seleção deve priorizar perguntas que:

- afetam o escopo ou decisões importantes do sistema;
- impedem o avanço de outras definições;
- precisam da participação direta dos clientes;
- podem ser respondidas no tempo disponível.

Uma pergunta selecionada recebe, em `perguntas.md`, um link para a reunião correspondente. As perguntas não selecionadas continuam disponíveis para reuniões futuras.

### 3. Registrar as respostas

Durante a reunião, as respostas dos clientes são registradas no arquivo da pauta, como [reuniao-01.md](./levantamento/reuniao-01.md).

Uma resposta pode ser completa, parcial ou gerar novas dúvidas. Mesmo quando completa, ela ainda é material de levantamento e não deve ser implementada diretamente como requisito.

### 4. Consolidar os requisitos oficiais

Após a reunião, os POs analisam as respostas, resolvem ambiguidades e as transformam em requisitos claros para o desenvolvimento.

Os requisitos consolidados devem:

- descrever o comportamento ou a restrição esperada;
- evitar interpretações conflitantes;
- referenciar as perguntas e reuniões que originaram a decisão;
- ser publicados por meio do fluxo de aprovação definido neste documento.

---

## 📄 O papel de cada artefato

| Artefato | Finalidade | Fonte oficial para implementação? |
| :--- | :--- | :---: |
| [Demanda original](../demanda-original.md) | Contextualizar o problema apresentado inicialmente | Não |
| [Perguntas](./levantamento/perguntas.md) | Registrar dúvidas e acompanhar seu estado | Não |
| Pautas e respostas de reuniões | Apoiar conversas e registrar o que foi informado | Não |
| Requisitos oficiais | Definir o que deve orientar o desenvolvimento | **Sim** |

Se houver divergência entre qualquer material de levantamento e um requisito oficial, prevalece o requisito oficial.

---

## ✅ Requisitos oficiais publicados

- [Gestão de protocolos](./gestao-de-protocolos.md): registro, consulta, histórico, tramitação e encerramento de protocolos.
