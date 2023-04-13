# API_REST

## Endpoints

### Cidades

METODOS (privado)    | ENDPOINTS        | DESCRIÇÃO                                                    |
-------------------- | -----------------| ------------------------------------------------------------ |
GET                  | /cidades         | Busca uma lista de cidades, com paginação e filtro por nome  |
POST                 | /cidades         | Cria uma nova cidade                                         |
GET                  | /cidades/:id     | Busca apenas uma cidade pelo seu id                          |
PUT                  | /cidades/:id     | Atualiza uma cidade pelo id                                  |
DELETE               | /cidades/:id     | Apaga uma cidade pelo id                                     |

### Pessoas

METODOS (privado)    | ENDPOINTS        | DESCRIÇÃO                                                    |
-------------------- | -----------------| ------------------------------------------------------------ |
GET                  | /pessoas         | Busca uma lista de pessoas, com paginação e filtro por nome  |
POST                 | /pessoas         | Cria uma nova pessoa                                         |
GET                  | /pessoas/:id     | Busca apenas uma pessoa pelo seu id                          |
PUT                  | /pessoas/:id     | Atualiza uma pessoa pelo id                                  |
DELETE               | /pessoas/:id     | Apaga uma pessoa pelo id                                     |

### Login

METODOS (privado)    | ENDPOINTS        | DESCRIÇÃO                                                                                  |
-------------------- | -----------------| -------------------------------------------------------------------------------------------|
POST                 | /entrar          | Permite um usuario existente no sistema gerar um token para acessar os endpoints privados  |
POST                 | /cadastrar       | Cria um novo usuario                                                                       |
