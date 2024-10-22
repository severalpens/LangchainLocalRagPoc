install node.js and npm on you machine

install ollama and related models (all-minilm,llama3.1)
 

Navigate to the project subdirectory (eg C:/path/to/project/Checks/OllamaChecksJS) in a shell and run the following commands to install the required dependencies:

```bash
npm i -g nodemon
npm i -g ts-node
npm install
```
create a .env file in the root directory and add the following:

```bash
PORT=3000
OPENAI_API_KEY=YOUR_KEY
```

To start the server, run the following command:

```bash
npm run dev
```

References
https://js.langchain.com/docs/tutorials/local_rag

