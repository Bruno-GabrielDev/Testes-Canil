# Requisito: Gestão de protocolos

## Status

Aceito

## Requisitos funcionais

### REQ-PRO-001 — Categorias e encaminhamento inicial

Todo protocolo deve pertencer a uma destas categorias:

| Categoria | Encaminhamento inicial |
| :--- | :--- |
| Denúncia de maus-tratos | Departamento de Fiscalização e Proteção Animal |
| Acolhimento ou recolhimento de cães e gatos | Canil e Gatil do Departamento de Controle e Defesa Animal |
| Acolhimento ou recolhimento de animais de grande porte | Posto Zootécnico do Departamento de Controle e Defesa Animal |

A categoria deve determinar o encaminhamento inicial sem impedir uma tramitação posterior autorizada.

---

### REQ-PRO-002 — Registro do protocolo

O sistema deve atribuir um identificador único a cada protocolo e permitir o registro de:

- número recebido de uma fonte externa, quando houver;
- categoria;
- descrição;
- solicitante ou estabelecimento;
- telefone;
- endereço;
- bairro;
- órgão e meio de atendimento;
- departamento responsável;
- responsável pelo atendimento;
- observações.

Os campos obrigatórios e suas validações dependem da resposta registrada em **Questões em aberto**.

---

### REQ-PRO-003 — Independência de processos administrativos

O protocolo não deve depender de um processo administrativo nem exigir vínculo com um processo para ser registrado, consultado, tramitado ou encerrado.

---

### REQ-PRO-004 — Consulta de protocolos

O sistema deve permitir localizar protocolos, no mínimo, por:

- identificador ou número do protocolo;
- categoria;
- situação;
- departamento ou responsável atual;
- solicitante ou estabelecimento;
- pessoa vinculada;
- endereço;
- bairro;
- período de registro.

Os resultados devem apresentar as informações necessárias para identificar o protocolo e acessar seus detalhes.

---

### REQ-PRO-005 — Relação por endereço

Ao consultar um protocolo, o sistema deve identificar outros protocolos registrados para o mesmo endereço.

Essa relação deve apoiar a consulta de ocorrências anteriores. Ela não representa roteirização de visitas ou definição automática de trajetos.

---

### REQ-PRO-006 — Vínculo com pessoas

O sistema deve permitir vincular um protocolo a uma pessoa cadastrada e consultar os protocolos anteriormente relacionados a ela.

O vínculo deve apoiar a análise do histórico, mas não deve, isoladamente, declarar culpa nem aplicar automaticamente impedimentos em outros processos.

---

### REQ-PRO-007 — Histórico de atividades

Cada protocolo deve manter um histórico cronológico das atividades realizadas. Cada registro do histórico deve informar, no mínimo:

- data e hora;
- atividade realizada;
- usuário responsável;
- observação, quando houver.

O histórico deve permanecer disponível após o encerramento do protocolo.

---

### REQ-PRO-008 — Tramitação

O sistema deve permitir a transferência autorizada de um protocolo entre departamentos ou setores.

Cada tramitação deve registrar a origem, o destino, o usuário responsável, a data e hora e o motivo informado. O sistema deve indicar claramente onde o protocolo se encontra no momento.

---

### REQ-PRO-009 — Encerramento

Um protocolo aberto deve poder ser encerrado por um usuário autorizado. O encerramento deve exigir um motivo e ser registrado no histórico com seu responsável e data e hora.

Protocolos encerrados devem continuar disponíveis para consulta e não podem desaparecer dos históricos relacionados à pessoa ou ao endereço.

---

### REQ-PRO-010 — Usuários e acesso

O módulo deve ser utilizado por usuários internos identificados. O sistema deve diferenciar acessos conforme o perfil e o departamento do usuário.

Toda criação, alteração, tramitação e encerramento deve registrar o usuário responsável. A matriz exata de permissões depende da resposta registrada em **Questões em aberto**.

---

### REQ-PRO-011 — Auditoria

O sistema deve auditar as alterações realizadas nos protocolos, registrando:

- protocolo alterado;
- usuário responsável;
- data e hora;
- campo alterado;
- valor anterior;
- novo valor.

Os registros de auditoria não devem ser alteráveis pelos usuários comuns do módulo.

---

### REQ-PRO-012 — Uso simultâneo

Os dados de protocolos devem estar disponíveis de forma centralizada para os usuários autorizados. Uma alteração concluída por um usuário deve ficar disponível aos demais sem troca manual de arquivos ou cópias locais do banco de dados.

---

### REQ-PRO-013 — Impressão

O sistema deve gerar uma versão para impressão do protocolo contendo seus dados principais, situação atual e histórico de atividades.

---

### REQ-PRO-014 — Migração do histórico

Os protocolos e históricos considerados relevantes no sistema Microsoft Access devem ser importados para o novo sistema antes da substituição do controle antigo.

Os dados abrangidos e as regras de tratamento de inconsistências dependem do inventário indicado em **Questões em aberto**.

---

### REQ-PRO-015 — Cadastro de animais

O sistema deve permitir cadastrar os animais sob responsabilidade do Departamento de Controle e Defesa Animal.

O cadastro deve conter, conforme aplicável:

- identificador interno;
- microchip;
- nome;
- espécie;
- raça;
- sexo;
- data ou estimativa de nascimento;
- descrição;
- características;
- situação;
- observações;
- fotografias.

O cadastro do animal deve existir independentemente do protocolo.

---

### REQ-PRO-016 — Identificação por microchip

O sistema deve permitir registrar o número do microchip do animal e validar sua unicidade.

Um animal poderá ser cadastrado sem microchip quando ainda não possuir identificação.

O identificador interno do animal deve permanecer mesmo quando o microchip for incluído ou alterado posteriormente.

---

### REQ-PRO-017 — Entrada de animais

O sistema deve permitir registrar a entrada de animais.

Para cães e gatos, a entrada deve poder utilizar um animal previamente cadastrado ou permitir seu cadastro durante o atendimento.

Para animais de grande porte, a entrada deve permitir registrar, conforme aplicável:

- data de entrada;
- nome;
- espécie;
- sexo;
- raça;
- nascimento ou estimativa;
- descrição;
- microchip;
- proprietário ou responsável;
- endereço;
- bairro;
- documentos;
- telefones;
- fotografias.

O sistema deve gerar e permitir imprimir a ficha correspondente à entrada.

---

### REQ-PRO-018 — Saída ou destinação de animais

O sistema deve permitir registrar a saída ou destinação de um animal e vinculá-la ao seu histórico.

Para animais de grande porte, quando a destinação depender de decreto, o sistema deve permitir registrar a referência ao decreto ou documento correspondente.

O fluxo e os dados obrigatórios da destinação por decreto dependerão das regras administrativas definidas.

---

### REQ-PRO-019 — Cadastro de pessoas

O sistema deve permitir cadastrar pessoas relacionadas aos protocolos ou animais.

O cadastro deve contemplar, conforme aplicável:

- identificador;
- tipo de vínculo;
- nome;
- RG;
- CPF;
- endereço;
- bairro;
- telefone;
- celular;
- observações.

Quando um CPF já estiver cadastrado, o sistema deve permitir localizar o cadastro existente para evitar duplicidade.

---

### REQ-PRO-020 — Histórico do animal

O sistema deve disponibilizar o histórico operacional de cada animal.

O histórico deve permitir consultar os registros relacionados ao animal, incluindo, conforme aplicável:

- entradas;
- saídas;
- adoções;
- ocorrências;
- destinações;
demais registros operacionais aprovados.

O histórico deve permanecer disponível após a mudança da situação do animal.

---

### REQ-PRO-021 — Situação do animal

O sistema deve manter a situação atual de cada animal.

As situações oficiais deverão ser definidas pela administração e devem permitir distinguir, conforme necessário, animais disponíveis para adoção, adotados, indisponíveis, em atendimento, transferidos e outras situações aplicáveis.

A alteração da situação deve ser registrada no histórico do animal.

---

### REQ-PRO-022 — Adoção de animais de pequeno porte

O sistema deve permitir registrar a adoção de cães e gatos relacionando:

- animal;
- pessoa adotante;
- data;
- usuário responsável;
demais informações exigidas pelo procedimento.

Caso o animal ou a pessoa ainda não esteja cadastrado, o sistema deve permitir realizar o cadastro necessário durante o atendimento.

A confirmação da adoção deve atualizar a situação do animal e registrar a operação em seu histórico.

---

### REQ-PRO-023 — Ficha de adoção

O sistema deve gerar uma ficha de adoção para animais de pequeno porte.

A ficha deve conter os dados necessários do animal, do adotante e da adoção e possuir versão adequada para impressão.

---

### REQ-PRO-024 — Avaliação e impedimento de adoção

O sistema deve permitir registrar entrevista ou avaliação para adoção quando essa etapa for exigida.

O registro deve conter, conforme aplicável:

- data;
- responsável;
- resultado;
- observações.

O sistema deve permitir registrar impedimentos formais de adoção definidos pela administração.

O sistema não deve criar automaticamente impedimentos com base exclusiva em histórico de protocolos, endereço, vínculos entre pessoas ou outros relacionamentos cadastrais.

---

### REQ-PRO-025 — Catálogo público de animais

O sistema deve disponibilizar um catálogo público dos animais cuja divulgação tenha sido autorizada.

O catálogo poderá apresentar:

- fotografia;
- espécie;
- raça;
- sexo;
- características;
- descrição;
- informações clínicas autorizadas;
situação de disponibilidade para adoção.

O catálogo terá finalidade informativa e não deverá iniciar ou concluir automaticamente um processo de adoção.

---

### REQ-PRO-026 — Fotografias de animais

O sistema deve permitir armazenar e consultar fotografias vinculadas ao cadastro do animal.

O sistema deve permitir identificar quais fotografias estão autorizadas para utilização no catálogo público.

As regras de armazenamento, capacidade, formato, tamanho, backup e retenção das fotografias serão definidas em Questões em aberto.

---

### REQ-PRO-027 — Estrutura de departamentos e setores

O sistema deve permitir manter a estrutura de departamentos e setores responsáveis pelos protocolos e registros de animais.

A estrutura inicial deve contemplar:

- Departamento de Fiscalização e Proteção Animal;
- Departamento de Controle e Defesa Animal;
- Canil e Gatil;
- Posto de Zootecnia.

A estrutura deve permitir a inclusão ou alteração de setores sem necessidade de alteração estrutural do sistema.

---

### REQ-PRO-028 — Integração com a Ouvidoria

O sistema deve permitir integração com o sistema de Ouvidoria utilizado pelo município, conforme o mecanismo técnico disponibilizado.

A integração deve permitir receber, conforme o fluxo aprovado, os dados necessários para criação ou atualização de protocolos.

Protocolos recebidos da Ouvidoria devem manter o identificador externo fornecido pela origem.

Falhas de integração devem ser registradas e não podem resultar em perda silenciosa dos dados.

---

### REQ-PRO-029 — Relatórios

O sistema deve permitir gerar relatórios dos dados de protocolos, animais, pessoas, entradas, saídas, adoções e demais registros que forem aprovados para a primeira entrega.

Cada relatório deve disponibilizar os filtros definidos para sua finalidade.

A relação definitiva de relatórios e filtros será estabelecida em Questões em aberto.

---

### REQ-PRO-030 — Cadastro padronizado de bairros

O sistema deve possuir cadastro centralizado de bairros utilizado nos protocolos, pessoas e registros de animais.

A manutenção do cadastro deve ser restrita a usuários autorizados.

Os registros devem utilizar o cadastro padronizado para evitar múltiplas grafias do mesmo bairro.

## Cenários de aceitação

```gherkin
Cenário: Registrar uma denúncia de maus-tratos
  Dado que um usuário autorizado informa os dados obrigatórios
  Quando registra um protocolo de denúncia de maus-tratos
  Então o sistema atribui um identificador único
  E encaminha inicialmente o protocolo ao Departamento de Fiscalização e Proteção Animal
  E registra a criação no histórico e na auditoria

Cenário: Consultar protocolos do mesmo endereço
  Dado que existem vários protocolos registrados para o mesmo endereço
  Quando um usuário autorizado consulta um deles
  Então o sistema apresenta os demais protocolos relacionados ao endereço
  E não cria automaticamente uma rota de atendimento

Cenário: Consultar o histórico de uma pessoa
  Dado que uma pessoa está vinculada a protocolos anteriores
  Quando um usuário autorizado consulta essa pessoa
  Então o sistema apresenta os protocolos relacionados
  E não aplica automaticamente uma conclusão ou impedimento com base apenas nos vínculos

Cenário: Tramitar um protocolo
  Dado que um protocolo está sob responsabilidade de um departamento
  Quando um usuário autorizado o transfere para outro departamento
  Então o sistema atualiza o responsável atual
  E registra origem, destino, motivo, usuário e data e hora no histórico

Cenário: Encerrar um protocolo
  Dado que um protocolo está aberto
  Quando um usuário autorizado informa um motivo e confirma o encerramento
  Então o protocolo passa a constar como encerrado
  E o encerramento permanece no histórico
  E o protocolo continua disponível nas consultas relacionadas

Cenário: Consultar uma alteração auditada
  Dado que um usuário alterou um dado do protocolo
  Quando a auditoria da alteração é consultada por um usuário autorizado
  Então ela informa o campo alterado, os valores anterior e novo, o responsável e a data e hora

Cenário: Trabalhar simultaneamente
  Dado que dois usuários autorizados acessam o módulo em computadores diferentes
  Quando um deles conclui uma alteração
  Então o outro pode consultar a informação atualizada sem receber uma cópia manual do banco de dados
```

## Questões em aberto

1. Qual é a diferença entre o código interno e o número do protocolo?
2. Quais campos são obrigatórios em cada categoria e quais validações devem ser aplicadas?
3. Quais são os estados do protocolo além de aberto e encerrado?
4. Qual é a lista oficial de motivos de encerramento? Quem pode mantê-la atualizada?
5. Quais perfis podem criar, alterar, tramitar, encerrar, imprimir e consultar protocolos de outros departamentos?
6. Protocolos podem ser corrigidos ou excluídos? Se podem, em quais condições e com qual preservação do histórico?
7. Como endereços devem ser normalizados para que protocolos do mesmo local sejam relacionados corretamente?
9. Quais relatórios de protocolos são realmente utilizados e quais filtros devem compor a primeira entrega?
10. Quais tabelas, períodos e campos do Microsoft Access devem ser importados? Como dados incompletos ou duplicados devem ser tratados?
11. O módulo precisa funcionar temporariamente sem conexão com a rede?
12. Por quanto tempo protocolos, dados pessoais e registros de auditoria devem ser mantidos?
13. “Acolhimento” e “recolhimento” representam o mesmo tipo de protocolo ou operações diferentes?
14. O microchip é obrigatório para todos os animais? Como deve ser tratado o animal que entra sem microchip e recebe um posteriormente?
15. O microchip pode ser substituído? Em caso positivo, os números anteriores devem permanecer no histórico?
16. Quais são as situações oficiais dos animais, especialmente para diferenciar disponível para adoção, adotado, em tratamento, indisponível, transferido e outras situações?
17. Quais dados e características clínicas dos animais podem ser divulgados publicamente no catálogo?
18. Quais filtros o catálogo público deverá oferecer?
19. O catálogo deve apresentar apenas animais disponíveis ou também animais adotados, transferidos ou em outras situações?
20. Após a adoção, existe possibilidade de devolução do animal? Como essa situação deverá ser registrada?
21. Quais situações podem impedir uma pessoa de adotar? Quem pode criar, alterar e retirar um impedimento?
22. O impedimento de adoção por maus-tratos depende de decisão administrativa, documento externo ou algum cadastro oficial?
23. O impedimento possui prazo de validade? Quais dados devem ser registrados para justificar e acompanhar esse impedimento?
24. Quais animais exigem entrevista de avaliação antes da adoção e quais são os possíveis resultados da entrevista?
25. Quem pode registrar ou alterar o resultado da entrevista de adoção?
26. A destinação de equídeos por decreto exige apenas o registro da referência do decreto ou deverá existir um fluxo específico? Quais informações do decreto devem ser armazenadas?
27. Quais são os modelos oficiais das fichas de entrada e adoção?
28. Quais documentos podem ou devem ser anexados aos cadastros de pessoas, animais, entradas, adoções e destinações?
29. Onde as fotografias deverão ser armazenadas? Existe infraestrutura ou serviço de armazenamento aprovado pelo município?
30. Há requisitos de quantidade, tamanho, formato, resolução, segurança, backup e disponibilidade para as fotografias?
31. Quais dados do Access representam protocolos, animais, pessoas, entradas, adoções e demais históricos?
32. Como identificar duplicidades de pessoas e animais durante a migração?
33. Como tratar registros históricos sem CPF, sem microchip, sem endereço ou com informações incompletas?
34. O histórico migrado deve manter a identificação de que seus dados foram provenientes do Access?
35. Quais funcionalidades existentes no Access são realmente utilizadas e quais podem ser descartadas?
36. A Ouvidoria possui API ou outro mecanismo oficial de integração?
37. A integração com a Ouvidoria será apenas de entrada ou também deverá enviar atualizações, tramitações e encerramentos?
38. Como devem ser tratadas duplicidades e falhas de comunicação com a Ouvidoria?
39. Existe necessidade de integração com outros sistemas municipais, como autenticação institucional, cadastro de munícipes ou armazenamento de arquivos?
40. O catálogo público exige algum tipo de autenticação? Caso não, existe alguma ação do cidadão que justifique criação de conta?
41. Quais conteúdos institucionais — contatos, horários, textos, critérios e informações do catálogo — precisam ser editáveis pela equipe sem intervenção técnica?
42. Com que frequência esses conteúdos são alterados e quem será responsável pela manutenção?
43. Qual é a quantidade aproximada de registros existentes no Access além dos aproximadamente 150 cães, 120 gatos e 30 equídeos?
44. Qual crescimento anual esperado para protocolos, animais, pessoas e fotografias?
45. Qual é a política municipal de retenção e eliminação de dados após adoção, transferência, falecimento ou outra destinação do animal?
46. As fotografias de animais adotados devem permanecer armazenadas internamente? Devem permanecer disponíveis publicamente?
47. Qual é a relação entre os módulos de Consultas e Castração e o módulo de protocolos?
48. Consultas e Castração fazem parte da primeira entrega ou serão módulos posteriores?
49. Quais informações de Consultas e Castração precisam compartilhar o cadastro de pessoas e animais?
50. Caso Consultas e Castração façam parte desta entrega, quais são seus fluxos, campos obrigatórios, perfis, relatórios e regras de negócio?

## Fora do escopo

- Cadastro e acompanhamento de processos administrativos.
- Roteirização automática de visitas por setor ou bairro.
- Retornos agendados para o dia.
- Envio de dados à Ouvidoria pelo fluxo existente no sistema antigo, sendo substituído pela nova integração a ser especificada.
- Prontuário clínico completo dos animais, incluindo gestão clínica que não tenha sido explicitamente aprovada.
- Consultas, cirurgias, tratamentos, vacinação, vermifugação e castrações, caso esses módulos não sejam aprovados como parte desta entrega.
- Gestão financeira, cobrança ou comercialização de animais.
- Elaboração, tramitação e publicação jurídica de decretos relativos à destinação de animais de grande porte; o sistema poderá apenas registrar a referência ao decreto quando essa funcionalidade for aprovada.
- Definição de políticas municipais de adoção, acolhimento, recolhimento, destinação ou impedimento; o sistema deverá implementar as regras oficialmente fornecidas pela administração.
- Roteirização automática de visitas ou definição automática de trajetos.
- Agendamento de visitas de cidadãos aos animais.
- Processo de adoção iniciado ou concluído pelo catálogo público.
- Inferência automática de culpa, maus-tratos ou incapacidade para adoção com base exclusivamente em históricos ou vínculos cadastrais.
- Relatórios ainda não validados pelos clientes.
- Exclusão física de registros históricos ou de auditoria.
- Aplicativo móvel nativo, caso não seja posteriormente aprovado.
- Funcionamento offline, caso não seja posteriormente aprovado.
- Integrações com sistemas municipais diferentes da Ouvidoria, salvo as que forem posteriormente especificadas e aprovadas.

## Origem

- [Apresentação do sistema atual](../Apresenta%C3%A7%C3%A3o%20Canil.pdf).
- Informações coletadas durante a apresentação inicial dos representantes do Canil Municipal.

As referências às perguntas e à reunião serão acrescentadas quando esses arquivos forem atualizados.
