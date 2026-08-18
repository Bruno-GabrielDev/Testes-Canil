import z from 'zod'

const Bairros = {
    centro:'Centro',
    vila_Nery:"Vila Nery",
    vila_Prado:"Vila Prado",
    jardim_sao_carlos:"Jardim São Carlos",
    cidade_aracy:"Cidade Aracy",
    vila_marcelino:"Vila Marcelino",
    jardim_cruzeiro_do_sul:"Jardim Cruzeiro do Sul",
    vila_isabel:"Vila Isabel",
    santa_felicia:"Santa Felícia",
    jardim_hikare:"Jardim Hikare"
} as const;

const Atividade = {
    1:"DENUNCIA NAO PROCEDE",
    2:"DENUNCIA COM ENDEREÇO INCOMPLETO OU NAO ENCONTRADO",
    3:"DENUNCIADO ORIENTADO",
    4:"TERMO DE COMPARECIMENTO ENVIADO",
    5:"RECOLHIMENTO POR ABANDONO OU MAUS TRATOS",
    6:"SUGESTAO DE CASTRACAO (VIA AUTORIZACAO)",
    7:"DENUNCIADO NOTIFICADO",
    8:"ARQUIVADO"
} as const;

const protocolo = z.object({
    numero: z.number(),
    descricao: z.string().min(1, "descrição não pode estar vazia").max(100, "descrição está muito longa").trim().toLowerCase(), 
    solicitante: z.string().min(1, "solicitante ou estabelecimneto não pode estar vazio").max(100, "o nome do solicitante ou estabelecimento está muito longo").trim().toLowerCase(),
    telefone: z.string().min(11, "o numero deve ser no formato ddd-numero podendo ser fixo ou celular ").max(12, "o numero deve ser no formato ddd-numero podendo ser fixo ou celular" ).optional(),
    local: z.string().min(1, "local não pode estar vazio").max(100, "local está muito longo").trim().toLowerCase(), 
    bairro: z.enum(Bairros),
    orgaoAtendimento: z.string().min(1, "orgão não pode ser vazio").max(50, "nome do orgão está muito longo").trim().toLowerCase(),
    meio: z.string().min(1, "meio de atendimento não pode ser vazio").max(50, "meio de atendimento está muito longo").trim().toLowerCase(),
    //isso deve virar um enum pois meios de atendimento são limitados
    processoVinculado: z.number(),
    //isso deve virar um enum que carrega os processos
    encerrado: z.boolean(),
    atividade: z.enum(Atividade)
})



