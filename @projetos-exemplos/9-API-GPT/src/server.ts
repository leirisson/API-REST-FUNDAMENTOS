import express from "express";
import cors from "cors";
import axios from "axios";

const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());

// Rota para testar se a API está funcionando
app.get("/", (req, res) => {
  res.send("Ollama API Gateway está rodando!");
});

// Rota para interagir com a LLM
app.post("/api/generate", async (req, res) => {
  try {
    // const { model, prompt, options } = req.body;
    const { prompt } = req.body;

    const response = await axios.post("http://localhost:11434/api/generate", {
      model: "llama2", // modelo padrão
      prompt: `você é um professor de matematica so responde perguntas de mamatica se o assunto ou pergunta ${prompt},
       não forem de matemmatica, você responde que não sabe do conteudo e cria uma resposta encerrando a conversa. 
       A resposta deve ter no maximo 50 caracteres você deve responder no idioma de português do brasil.` ,
      stream: false,
    });

    res.json(response.data.response);
  } catch (error) {
    console.error("Erro ao chamar Ollama:", error);
    res.status(500).json({ error: "Erro ao processar a requisição" });
  }
});

// Rota para listar modelos disponíveis
app.get("/api/models", async (req, res) => {
  try {
    const response = await axios.get("http://localhost:11434/api/tags");
    res.json(response.data);
  } catch (error) {
    console.error("Erro ao listar modelos:", error);
    res.status(500).json({ error: "Erro ao listar modelos" });
  }
});

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
