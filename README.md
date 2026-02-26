# 🤖 Projeto IA - Organizador de Tarefas Inteligente

Este é um projeto Fullstack que utiliza a API do **Google Gemini 3** para processar linguagem natural e organizar listas de tarefas automaticamente. 

O sistema permite que o usuário digite frases informais e a inteligência artificial extraia o título da tarefa e o prazo de entrega de forma estruturada.

---

## 📸 Demonstração do Projeto

Abaixo você pode ver a interface do sistema processando uma entrada e salvando na lista de tarefas:

![Interface do App](./screenshots/index.jpeg)

---

## 🚀 Funcionalidades

* **Processamento de Linguagem Natural**: Utiliza o modelo `gemini-3-flash-preview` para entender as intenções do usuário.
* **Extração de Dados**: Transforma frases como "estudar java amanhã" em um objeto JSON estruturado com tarefa e data.
* **Persistência Local**: Salva as tarefas confirmadas no `localStorage` do navegador, mantendo os dados mesmo após atualizar a página.
* **Gestão de Tarefas**: Permite visualizar a lista de afazeres e limpar o histórico completo.

---

## 🛠️ Tecnologias Utilizadas

### Backend
* **Node.js**: Ambiente de execução.
* **Express**: Framework para o servidor web e rotas da API.
* **Dotenv**: Gerenciamento de variáveis de ambiente e segurança da API Key.

### IA
* **Google Gemini API**: Motor de inteligência artificial generativa.

### Frontend
* **HTML5 / CSS3**: Estrutura e estilização da interface.
* **JavaScript Vanilla**: Lógica de comunicação com o backend e manipulação do DOM.

---

## 📂 Estrutura de Pastas

O projeto foi organizado para manter o código-fonte separado das evidências visuais:

* `projeto_ia/`: Contém todo o código do servidor Node.js e arquivos web.
* `screenshots/`: Armazena as imagens de demonstração do funcionamento do app.

---

## 🔧 Como Rodar o Projeto

1. Clone o repositório.
2. Acesse a pasta `projeto_ia/`.
3. Instale as dependências:
   ```bash
   npm install
