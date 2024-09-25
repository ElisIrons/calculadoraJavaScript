# Calculadora Visual

Este é um projeto desenvolvido como parte do **curso Desenvolvimento Web** na Udemy, utilizando conhecimentos adquiridos no curso de **Crie um site simples usando HTML, CSS e JavaScript** da **Fundação Bradesco | Escola Virtual**.

A calculadora visual permite que os usuários realizem operações matemáticas básicas de forma intuitiva e estilizada, utilizando **HTML**, **CSS**, **Bootstrap** e **JavaScript**.

## Funcionalidades

- Realiza operações matemáticas básicas: adição, subtração, multiplicação e divisão.
- Possui um layout responsivo e moderno, utilizando **Bootstrap** para estilização.
- Permite a troca de tema entre claro e escuro.
- Mostra o resultado das operações em tempo real.

## Tecnologias Utilizadas

- **HTML5** para a estrutura da calculadora.
- **CSS3** e **Bootstrap** para estilização do layout.
- **JavaScript** para a lógica da calculadora.

## Acesso à Calculadora

Você pode acessar e usar a **Calculadora Visual** diretamente clicando no link abaixo:

👉 [Acessar Calculadora Visual](https://elisirons.github.io/calculadoraJavaScript/)

## Testes Automatizados

Este projeto possui testes automatizados implementados com **Playwright** para garantir o funcionamento correto da aplicação.

### Detalhes dos Testes

- Os testes simulam interações com a calculadora, como realizar operações matemáticas e verificar se os resultados estão corretos.
- Inclui testes de verificação do tema claro e escuro.

### Estrutura dos Testes

Os testes estão localizados na pasta `testes/` e consistem em um arquivo:

- `teste.spec.js`: Testes automatizados com **Playwright**.

### Ferramentas Utilizadas

- **Playwright**: Para automação de testes com suporte a múltiplos navegadores.

### Como Executar os Testes

#### Requisitos

- Node.js instalado.

#### Passos

1. Clone o repositório:

   ```bash
   git clone https://github.com/elisirons/calculadoraJavaScript.git
   ```

2. Navegue até o diretório do projeto:

   ```bash
   cd calculadoraJavaScript
   ```

3. Instale as dependências do projeto:

   ```bash
   npm install
   ```

4. Execute os testes automatizados:

   Para rodar todos os testes de uma vez, utilize o comando:

   ```bash
   npm test
   ```






