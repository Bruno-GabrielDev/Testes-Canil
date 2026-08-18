# Git & GitHub Workflow: Guia Essencial para Iniciantes (ou não)

Este documento descreve o fluxo de trabalho padrão para versionamento de código no nosso projeto. O objetivo aqui é manter tudo organizado e seguro, garantindo que o código só vá para produção após ser testado e revisado.

Se você nunca trabalhou com Git em um fluxo empresarial antes, não se preocupe! Este guia foi feito para ser seguido passo a passo.

---

## 📌 Convenção de Nomenclatura de Branches (Ramificações)

Pense numa *branch* como uma linha do tempo paralela onde você pode alterar o código sem quebrar o projeto principal. 
Para mantermos a organização, toda branch deve ter o nome da tarefa (Issue) que você está resolvendo.

**Formato:** `ISSUE_NUMERO-DA-ISSUE`

**Exemplos válidos:**
- `ISSUE_12`
- `ISSUE_405`

---

## ⚙️ Fluxo de Trabalho Passo a Passo

### 1. Atualizar o seu computador com o código mais recente
Antes de começar a programar, você precisa garantir que está trabalhando na versão mais atual do projeto. Nossa branch principal de desenvolvimento se chama `DEV`.

```bash
# Muda para a branch DEV
git checkout DEV

# O 'fetch' baixa as informações sobre o que há de novo no GitHub como branchs e commits, mas não altera seus arquivos ainda.
# Dica: Caso você faça checkout para uma branch que sabe que existe no repositório remoto, mas ela não aparece na sua máquina, rode este comando. Pode ser que ele ajude
git fetch

# O 'pull' efetivamente puxa o código novo e atualiza os arquivos no seu computador.
git pull origin DEV
```

### 2. Criar a sua própria Branch
Nunca escreva código diretamente na `DEV` ou na `PRD` (Produção). Crie o seu espaço isolado.

```bash
# Cria uma nova branch e já te move para ela (-b)
git checkout -b ISSUE_42
```

### 3. Salvar as alterações (Staging e Commits)
Conforme você cria as funcionalidades (ex: nova entidade de banco de dados, layout de listagem), você precisa "salvar" esse progresso no histórico do Git.

```bash
# Mostra quais arquivos você alterou, criou ou deletou (use sempre!)
git status

# Prepara todos os arquivos alterados para serem salvos (o ponto significa 'tudo')
git add .

# Se preferir preparar um arquivo específico:
# git add ./backend/repositories/AnimalRepository.ts

# Tira uma 'foto' (commit) do momento atual do código com uma mensagem descritiva
git commit -m "feat: adiciona entidade de tipos ao modelo de dados"
```

### 4. Enviar a sua Branch para o GitHub (Push)
Até agora, tudo o que você fez está apenas no seu computador. É hora de mandar para o repositório remoto (GitHub).

```bash
# Envia a branch para o GitHub. O '-u' cria um elo entre o seu PC e o servidor remoto.
# Nas próximas vezes que for enviar atualizações desta branch, você poderá usar apenas 'git push' (já que o '-u' salvou a referência).
git push -u origin ISSUE_42
```

### 5. Abrir um Pull Request (PR)
O Pull Request (PR) é o coração do nosso fluxo. Ele é um pedido oficial que diz: *"Terminei minha tarefa. Alguém pode revisar meu código e juntá-lo à branch DEV?"*

**Via Interface Web (Mais fácil para iniciantes):**

1. Acesse a página do repositório no GitHub.
2. Vai aparecer um botão amarelo sugerindo o PR para a sua branch. Clique em **"Compare & pull request"**.
   * *Nota: Caso esse botão amarelo não apareça, vá até a aba "Pull requests" do repositório e clique em "New pull request".*
3. Preencha o título e a descrição explicando o que você fez, seguindo a padronização abaixo:

**Padrão de Título e Descrição para PRs:**
```text
Título: #NUMERO-DA-ISSUE - Título da issue
Descrição: #NUMERO-DA-ISSUE
```
*(A issue original já deve descrever o suficiente o que está sendo realizado.).*

**Exemplo prático:**
```text
Título: #354 - Adicionar tela para cadastro de animais
Descrição: #354
```

4. Clique em **"Create pull request"**.

### 6. Trocar de Branch e Limpeza
Terminou uma tarefa e o PR foi aprovado? É hora de pegar uma tarefa nova. 

```bash
# Volta para a branch DEV original
git checkout DEV

# Lembre-se de rodar um 'git pull origin DEV' aqui antes de criar a próxima branch!
```

---

## 🚧 Regras de Proteção e Merges (DEV e PRD)

⚠️ **Atenção: Acordo de Conduta da Equipe**

Atualmente, nosso repositório é privado e utiliza o plano gratuito do GitHub. Isso significa que as travas automáticas de proteção (como bloqueio direto de push) **não são forçadas pelo sistema**. 
Encare as regras a seguir como um **acordo de damas & cavalheiros**. É estritamente necessário seguir esse processo manualmente para evitar acidentes em branches que são a fonte da verdade do projeto.

### Como funciona o merge para a `DEV` (Ambiente de Desenvolvimento)
* **Sem Push Direto:** Nunca rode `git push origin DEV` do seu terminal.
* **Obrigatório PR:** Você deve sempre enviar o código usando a sua branch (ex: `ISSUE_42`) e abrir um Pull Request direcionado para a `DEV`.
* **Aprovação Necessária:** O merge do seu código só deve ser feito após **pelo menos 1 Tech Lead** revisar seu código e aprovar. Não aprove nem faça o merge do próprio código.

### Como funciona o merge para a `PRD` (Ambiente de Produção/Final)
* A `PRD` é a versão oficial, estável e final do sistema. Ela possui regras de segurança ainda mais restritas.
* O fluxo normal é criar um Pull Request da `DEV` com destino à `PRD` após o sistema ser homologado e testado.
* **Restrição de Acesso (Merge Fechado):** Mesmo que o PR receba as aprovações da equipe e os testes passem, **apenas os Maintainers/Administradores** do projeto devem realizar o "Merge" final. Se você não é um maintainer, não conclua PRs direcionados à Produção.

---

## ❓ Dúvidas Comuns (FAQ do Iniciante)

**1. O meu `git push` deu um erro gigante em vermelho dizendo "protected branch hook declined". O que eu fiz?**
Você provavelmente tentou dar um push estando nas branches `DEV` ou `PRD` (caso as proteções sejam ativadas no futuro). Verifique em qual branch você está com o comando `git branch`. Se estiver nelas, crie uma nova branch (`git checkout -b ISSUE_XX`), e tente o push novamente.

**2. Eu aprovei um PR de um colega, mas não devo fazer o merge. Por quê?**
Se o PR for direcionado para a `PRD`, apenas Maintainers devem concluir a operação. Se for para a `DEV`, verifique se não faltam validações de sistema (ex: testes automatizados falharam) antes de prosseguir.

**3. O GitHub está acusando "Merge Conflict" no meu PR. O que é isso?**
Isso acontece quando você e outro colega alteram exatamente o mesmo arquivo e a mesma linha de código. O Git não sabe qual versão manter. Você precisará resolver o conflito localmente, escolhendo qual parte do código fica, fazer um novo commit com a resolução e dar push novamente. Em caso de dúvidas para resolver esses conflitos, **não hesite** em pedir ajuda à equipe.

**4. Fiz um commit na branch errada (estava na DEV em vez da minha branch nova). E agora?**
Calma! Se você ainda **não** deu push, o erro só existe na sua máquina. Crie a branch nova imediatamente digitando `git checkout -b ISSUE_XX`. O seu novo commit irá "viajar" com você para essa nova branch. Depois disso, será necessário resetar a branch antiga. Como pode ser seu primeiro contato com isso, chame um desenvolvedor mais experiente para rodar os comandos de reset junto com você.

**5. Por que eu preciso fazer 'fetch' e 'pull'?**
O `fetch` atualiza sua máquina dizendo *quais* branches novas existem ou o que mudou lá no GitHub, mas ele não mexe nos seus arquivos soltos. O `pull` faz o trabalho pesado de baixar e alterar os seus arquivos locais para ficarem iguais aos da nuvem.

---

## 🛠️ Cheatsheet de Comandos Rápidos

| Comando | Descrição |
| :--- | :--- |
| `git status` | Exibe arquivos modificados e prontos para commit. **(Dica: use esse comando toda hora!)** |
| `git branch` | Lista suas branches locais. A que tem um `*` é a que você está usando agora. |
| `git log --oneline` | Mostra o histórico de commits de forma resumida e fácil de ler. |
| `git diff` | Mostra exatamente quais linhas de código você adicionou ou apagou. |
| `git stash` | Guarda seu trabalho pela metade (temporariamente) sem fazer um commit. Útil se precisar trocar de branch rapidinho. |
| `git stash pop` | Traz de volta o trabalho que você guardou com o stash. |