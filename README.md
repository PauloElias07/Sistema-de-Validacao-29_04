🔎 Validar URL

Ferramenta em Node.js para extrair e validar links a partir de uma URL ou de um arquivo local, exibindo o status no terminal.

👤 Autor

Nome: Paulo Roberto Santos Santos Elias
RA: 2171392511011

🚀 Como usar (passo a passo)

1️⃣ Clone o repositório
git clone (https://github.com/PauloElias07/Sistema-de-Validacao-29_04)

2️⃣ Acesse a pasta do projeto
cd Projeto4_DWIII

3️⃣ Instale as dependências
npm install

4️⃣ Configure o projeto (IMPORTANTE)
No arquivo package.json, adicione:
"type": "module"

5️⃣ Execute o programa
✔️ Validar uma URL:
node cli.js https://google.com
✔️ Validar links de um arquivo:
node cli.js arquivo.txt

📄 Exemplo de arquivo
https://google.com
https://github.com
http://site-invalido.com

📊 Saída esperada
🔎 Resultado:

https://google.com
→ Site no ar e operante!
-------------------

http://site-invalido.com
→ Domínio inexistente ou erro de rede.
