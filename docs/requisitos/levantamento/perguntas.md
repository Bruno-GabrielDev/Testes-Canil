# Perguntas de levantamento de requisitos

## Contexto

- O Canil Municipal de São Carlos acolhe aproximadamente 200 cães, 150 gatos e 30 equinos.
- O principal problema relatado é a baixa visibilidade dos animais disponíveis para adoção e a dificuldade de acesso da população às informações.
- O sistema deve permitir que a equipe cadastre e atualize animais e que a população consulte os animais disponíveis.
- Filtros, busca e correspondência entre preferências e características dos animais são possibilidades, não obrigações.
- O uso inicial é municipal, embora o acesso público possa ocorrer a partir de outras regiões.
- A solução poderá futuramente ser adotada por outros municípios.

---

<a id="q001"></a>
### Q001 — Usuários e ações

Quais tipos de usuário precisam utilizar o sistema, como visitantes interessados em adoção, servidores responsáveis pelos animais e gestores de acesso? Para cada tipo, quais ações devem ser possíveis?

`ABERTA` · [`R1`](./reuniao-01.md#q001)

---

<a id="q002"></a>
### Q002 — Núcleo obrigatório

Quais capacidades são indispensáveis? Validem, removam ou completem: cadastro de animais, controle de publicação, listagem pública, página de detalhes, busca ou filtros e um meio de iniciar o processo de adoção.

`ABERTA` · [`R1`](./reuniao-01.md#q002)

---

<a id="q003"></a>
### Q003 — Nome e vocabulário

O nome público correto é “Canil Municipal”, mesmo incluindo gatos e equinos? Quais termos oficiais devem ser usados para instituição, animal acolhido, animal disponível, interessado e adoção?

`ABERTA` · [`R1`](./reuniao-01.md#q003)

---

<a id="q004"></a>
### Q004 — Dados atuais e incorporação

Quais planilhas, papéis, sistemas, pastas de fotos e redes sociais armazenam hoje as informações dos animais, quem é responsável por cada fonte e como os registros existentes deverão entrar no sistema: importação, digitação manual ou somente cadastro de novos animais? Quais registros históricos precisam ser incluídos?

`ABERTA`

---

<a id="q005"></a>
### Q005 — Volume

Confirmem a quantidade atual por espécie, o máximo de animais ativos já observado, a capacidade física, a média de entradas por mês e a projeção para os próximos cinco anos.

`ABERTA` · [`R1`](./reuniao-01.md#q005)

---

<a id="q006"></a>
### Q006 — Condições de uso

A equipe trabalhará em computador, tablet ou celular? Há conexão estável em todos os locais? Existem animais em lares temporários, clínicas, outras unidades ou somente em uma unidade física?

`ABERTA` · [`R1`](./reuniao-01.md#q006)

---

<a id="q007"></a>
### Q007 — Espécies e municípios

Quais são todas as espécies abrangidas pela operação do Canil Municipal e quais devem aparecer no site? O sistema será específico para São Carlos ou deverá ser configurável para atender outros municípios e diferentes conjuntos de espécies?

`ABERTA` · [`R1`](./reuniao-01.md#q007)

---

<a id="q008"></a>
### Q008 — Dados obrigatórios

Para cada item, indiquem se é obrigatório, opcional ou não será usado: código, espécie, nome, sexo, data de nascimento estimada, raça, porte, peso, pelagem, descrição ou história, comportamento, compatibilidades, condição de saúde, necessidades especiais, data de entrada, local atual, status e fotografias. Há campos adicionais exclusivos para alguma espécie?

`ABERTA` · [`R1`](./reuniao-01.md#q008)

---

<a id="q009"></a>
### Q009 — Finalidade do cadastro

O cadastro existirá exclusivamente para divulgar animais disponíveis para adoção ou também substituirá controles internos do canil? Se for apenas um catálogo de adoção, confirmem se todos os campos armazenados poderão ser públicos e quais controles continuarão fora do sistema. Se também houver controle interno, indiquem quais dados deverão ser restritos à equipe.

`ABERTA` · [`R1`](./reuniao-01.md#q009)

---

<a id="q010"></a>
### Q010 — Identificação do animal

Existe um código oficial, número de prontuário ou microchip que identifique o animal sem depender do nome? Esse identificador pode ser público?

`ABERTA` · [`R1`](./reuniao-01.md#q010)

---

<a id="q011"></a>
### Q011 — Classificações padronizadas

Quais listas oficiais serão usadas para faixa etária, raça, sem raça definida, porte, pelagem e outras características usadas na consulta pública?

`ABERTA`

---

<a id="q012"></a>
### Q012 — Comportamento e compatibilidade

As características comportamentais serão texto livre, marcadores padronizados ou ambos? Quem pode avaliá-las e quais compatibilidades serão informadas, como crianças, cães, gatos, equinos, apartamento ou necessidade de quintal?

`ABERTA`

---

<a id="q013"></a>
### Q013 — Informações de saúde

O público deve ver castração, vacinação, vermifugação, microchip, deficiência, tratamento em andamento ou necessidades especiais? Há informações clínicas que devem permanecer restritas?

`ABERTA`

---

<a id="q014"></a>
### Q014 — Fotografias

Qual número de fotos é adequado para os usuários conhecerem o animal? Quais requisitos de qualidade, autoria e autorização devem ser observados? O que deve ocorrer quando não houver foto? Considerem que a quantidade e a retenção das imagens afetam o custo de infraestrutura.

`ABERTA`

---

<a id="q015"></a>
### Q015 — Estados do animal

Quais estados precisam existir e o que cada um significa? Validem, removam ou completem: rascunho, disponível, com interesse em andamento, reservado, adotado, devolvido e removido.

`ABERTA` · [`R1`](./reuniao-01.md#q015)

---

<a id="q016"></a>
### Q016 — Visibilidade por estado

Animais reservados ou adotados somem do site, continuam visíveis com um aviso ou permanecem em uma área separada?

`ABERTA`

---

<a id="q017"></a>
### Q017 — Vários interessados

O contato de uma pessoa reserva o animal? Podem existir vários interessados ao mesmo tempo? Qual critério define prioridade e quem registra a decisão?

`ABERTA`

---

<a id="q018"></a>
### Q018 — Retenção dos registros

Após a adoção do animal, em quais situações a exclusão definitiva é permitida? O registro histórico deve ser guardado por quanto tempo? Considerem que a retenção de dados, principalmente fotos, afeta o custo de infraestrutura.

`ABERTA`

---

<a id="q019"></a>
### Q019 — Login para consulta pública

Qual informação ou ação, se alguma, exigiria que o cidadão criasse uma conta antes de consultar animais ou demonstrar interesse?

`ABERTA` · [`R1`](./reuniao-01.md#q019)

---

<a id="q020"></a>
### Q020 — Correspondência automática

Os filtros permitem ao cidadão restringir o catálogo pelos critérios escolhidos e já podem atender à busca por animais compatíveis. Qual resultado adicional se espera de uma correspondência automática entre preferências e animais? Os filtros e a busca são suficientes para alcançar o objetivo ou existe uma necessidade que eles não atendem?

`ABERTA` · [`R1`](./reuniao-01.md#q020)

---

<a id="q021"></a>
### Q021 — Processo atual de adoção

Quais são as etapas atuais desde o primeiro contato até a adoção concluída, incluindo entrevista, documentos, visita, avaliação, termo, taxa, entrega e acompanhamento?

`ABERTA` · [`R1`](./reuniao-01.md#q021)

---

<a id="q022"></a>
### Q022 — Adoção no sistema

O processo de adoção deverá ser realizado integralmente no sistema, apenas iniciado nele e continuado por um canal externo, ou conduzido totalmente fora dele? Se houver início ou redirecionamento pelo sistema, qual será o canal principal, como WhatsApp oficial, telefone, e-mail, formulário, agendamento ou outro, e o que caracterizará o início do processo?

`ABERTA` · [`R1`](./reuniao-01.md#q022)

---

<a id="q023"></a>
### Q023 — Conta do cidadão

Caso seja solicitado login, qual ação concreta exige uma conta e não pode ser atendida por link, protocolo ou contato direto? Que benefício compensa cadastro, recuperação de senha, segurança e tratamento de dados pessoais?

`ABERTA`

---

<a id="q024"></a>
### Q024 — Rastreabilidade

É necessário registrar quem criou, alterou, publicou, retirou, mudou o status, arquivou ou excluiu um animal? Por quanto tempo esse histórico deve ficar disponível?

`ABERTA`

---

<a id="q025"></a>
### Q025 — Conteúdo institucional

Contatos, horários, textos e critérios mudam com que frequência? Quais conteúdos precisam ser editáveis pela equipe sem uma intervenção técnica?

`ABERTA`

---

<a id="q026"></a>
### Q026 — Relatórios e métricas

É necessário acompanhar acessos, contatos, tempo de publicação, animais disponíveis, adoções ou algum outro indicador? Se sim, quem utilizará cada informação, com qual finalidade e frequência? Há uma ferramenta de análise aprovada pelo município e quais dados ela pode coletar?

`ABERTA`

---

<a id="q027"></a>
### Q027 — Confirmação e pendências

As respostas registradas representam corretamente as decisões tomadas? Quais pontos ficaram pendentes, quem deverá respondê-los e até quando?

`ABERTA` · [`R1`](./reuniao-01.md#q027)

---

<a id="q028"></a>
### Q028 — Cadastro e autenticação do usuário

Quais tipos de usuário poderão criar uma conta no sistema? O cadastro do cidadão deverá utilizar alguma identidade ou serviço oficial do governo, como gov.br, ou será realizado diretamente pelo sistema? Quais dados serão necessários no cadastro e quais serão obrigatórios?

`ABERTA`

---

<a id="q029"></a>
### Q029 — Tipos e quantidades de animais

Quais tipos de animais deverão ser representados no sistema e quais quantidades devem ser consideradas para cada tipo? Além de cães, gatos e equinos, existem outras espécies, categorias ou situações que precisam ser previstas? Esses tipos e quantidades devem ser configuráveis para permitir a futura adoção do sistema por outros municípios?

`ABERTA`

---

<a id="q030"></a>
### Q030 — Hospedagem e armazenamento de fotografias

Onde as fotografias dos animais deverão ser armazenadas? Existe uma infraestrutura ou serviço de armazenamento aprovado pelo município? Há requisitos de capacidade, segurança, disponibilidade, backup, tamanho ou formato dos arquivos que precisam ser considerados?

`ABERTA`

---

<a id="q031"></a>
### Q031 — Persistência e retenção dos dados

Por quanto tempo os diferentes dados do sistema deverão ser mantidos? Existem políticas municipais ou requisitos legais para retenção, backup, arquivamento e exclusão dos dados? Quais dados podem ser excluídos definitivamente e quais devem permanecer para fins históricos ou administrativos?

`ABERTA`

---

<a id="q032"></a>
### Q032 — Dados do animal após a adoção

Após a adoção, quais informações do animal devem permanecer armazenadas e quais podem ser alteradas, arquivadas ou excluídas? O histórico do animal deverá continuar acessível à equipe? Quais informações, especialmente dados de saúde, fotos e dados relacionados ao adotante, devem ser preservadas e por quanto tempo?

`ABERTA`

---

<a id="q033"></a>
### Q033 — Verificação da identidade do usuário

Em quais situações será necessário verificar a identidade ou os dados de um usuário? A verificação será necessária apenas para iniciar ou concluir uma adoção, ou também para outras ações? Quais documentos, informações ou serviços oficiais poderão ser utilizados para essa verificação?

`ABERTA`

---

<a id="q034"></a>
### Q034 — Fluxo de adoção no sistema

Quais etapas do processo de adoção precisam ser registradas ou executadas pelo sistema, desde a manifestação de interesse até a conclusão? O sistema deverá apenas encaminhar o interessado para o atendimento da equipe ou deverá controlar etapas como análise, entrevista, documentação, aprovação, reserva, retirada e conclusão da adoção?

`ABERTA`

---

<a id="q035"></a>
### Q035 — Retirada e entrega do animal

Como será realizada a retirada ou entrega do animal após a aprovação da adoção? É necessário agendamento? Quais informações ou documentos deverão ser confirmados no momento da retirada e quem poderá registrar a entrega no sistema? Existem situações em que o animal será encaminhado para outro local em vez de retirado diretamente pelo adotante?

`ABERTA`

---

<a id="q036"></a>
### Q036 — Aptidão para adoção

Quais critérios determinam se uma pessoa está apta a adotar um animal? A aptidão deverá ser verificada automaticamente pelo sistema, analisada pela equipe ou por uma combinação dos dois? Quais informações, documentos, avaliações ou condições poderão impedir ou restringir uma adoção, e essa decisão deverá ficar registrada?

`ABERTA`
