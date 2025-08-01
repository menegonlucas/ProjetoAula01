# Aula01 - Recursos Avançados para Desenvolvimento de Software

## Criação de API e Documentação

Neste projeto, criaremos e documentaremos uma API RESTful utilizando o **Swagger**. O Swagger é uma ferramenta poderosa que permite descrever a estrutura da API de forma clara, interativa e acessível para desenvolvedores e stakeholders.

---

## Capacidades Técnicas

1. Definir a sequência das atividades para desenvolvimento dos componentes, de acordo com os requisitos do sistema.
2. Definir a infraestrutura física a ser utilizada no desenvolvimento dos componentes.
3. Projetar os componentes do sistema considerando as plataformas computacionais.
4. Definir os softwares a serem utilizados no desenvolvimento do sistema.
5. Definir as dependências de software considerando os componentes do sistema, para a sua implantação.
6. Elaborar documentação técnica do sistema.
7. Implementar as funcionalidades de acordo com os requisitos definidos.

## Capacidades Socioemocionais

1. Demonstrar autogestão.
2. Demonstrar pensamento analítico.

## Conhecimentos

- **Qualidade de software**
  - Definição
  - Ferramentas
  - Processos de trabalho
- **Metodologia de gerenciamento de projeto**
  - Escopo
  - Recursos

---

## Demonstração

Para demonstrar a criação de uma API com Swagger, será desenvolvido um exemplo simples de uma API com controle de acessos e produtos.

### Endpoints da API

- `/api/login`: Endpoint para autenticação de usuários.

- `/api/usuarios`: Endpoint para gerenciamento de acessos.
  - `GET`: Listar todos os acessos.
  - `POST`: Criar um novo acesso.
  - `PUT`: Atualizar um acesso existente.
  - `DELETE`: Excluir um acesso.

- `/api/produtos`: Endpoint para gerenciamento de produtos.
  - `GET`: Listar todos os produtos.
  - `POST`: Criar um novo produto.
  - `PUT`: Atualizar um produto existente.
  - `DELETE`: Excluir um produto.

- `/api/pedidos`: Endpoint para gerenciamento de pedidos.
  - `GET`: Listar todos os pedidos.
  - `POST`: Criar um novo pedido.
  - `PUT`: Atualizar um pedido existente.
  - `DELETE`: Excluir um pedido.

---

## UML - Diagrama de Classes

O projeto segue o modelo de Diagrama de Classes (DC) para representar a estrutura da API. O diagrama inclui as classes **Usuario**, **Produto** e **Pedido**, com seus respectivos atributos e métodos.

---

## Tecnologias Utilizadas

- **Node.js**: Ambiente de execução JavaScript.
- **Prisma**: ORM para manipulação do banco de dados.
- **MySQL**: Banco de dados relacional.
- **Swagger**: Documentação e testes interativos da API.

