Digital Store - Front-end
Aplicação web de e-commerce desenvolvida em React e Vite, integrada à API RESTful da Digital Store para exibição de vitrine, busca textual, filtragem por categorias e visualização detalhada de produtos.

Tecnologias Utilizadas
React

Vite

React Router DOM

CSS3 com variáveis globais (index.css)

Fetch API nativa

Estrutura do Projeto
src/components/: componentes reutilizáveis de interface (Header, Footer, ProductCard, ProductListing, ProductOptions, Gallery, Section e Logo).

src/pages/: páginas principais da aplicação (HomePage, ProductListingPage, ProductViewPage e Layout).

src/services/api.js: camada de comunicação HTTP responsável por consumir os endpoints de categorias, produtos e autenticação do Back-end.

Funcionalidades
Vitrine Inicial (/): exibe os produtos em destaque carregados diretamente do banco de dados.

Catálogo e Filtros (/products): permite buscar produtos pela barra de pesquisa do cabeçalho, filtrar por múltiplas categorias simultaneamente e ordenar resultados por menor ou maior preço.

Detalhes do Produto (/product/:id): apresenta galeria interativa com miniaturas, descrição completa, preços original e promocional, além de seletores dinâmicos de tamanho e cor.

Pré-requisitos
Node.js (v18 ou superior)

Servidor Back-end (digital-store-backend) em execução na porta 3000

Instalação e Execução
Instale as dependências do projeto:

npm install

Confirme se a URL base em src/services/api.js aponta para o servidor local:

const API_BASE_URL = 'http://localhost:3000/v1';

Inicie o servidor de desenvolvimento:

npm run dev

Acesse no navegador o endereço exibido no terminal (por padrão, http://localhost:5173).