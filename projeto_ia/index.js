require('dotenv').config();
const express = require('express');
const app = express();
const path = require('path');

app.use(express.json());

// Rota para abrir a página inicial
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

// Rota que processa a frase com a IA e devolve JSON
app.post('/perguntar', async (req, res) => {
    const { pergunta } = req.body;
    const chave = process.env.GEMINI_API_KEY;
    const modelo = "gemini-3-flash-preview"; 
    const url = `https://generativelanguage.googleapis.com/v1beta/models/${modelo}:generateContent?key=${chave}`;

    const instrucao = `Atue como um organizador de tarefas. 
    Extraia o título da tarefa e a data de entrega da frase do usuário.
    Responda APENAS em formato JSON puro, exatamente assim: 
    {"tarefa": "titulo da tarefa", "data": "data extraída"}.
    Frase do usuário: `;

    try {
        const resposta = await fetch(url, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ 
                contents: [{ parts: [{ text: instrucao + pergunta }] }] 
            })
        });
        
        const resultado = await resposta.json();
        
        // Verifica se a IA respondeu corretamente antes de enviar
        if (resultado.candidates && resultado.candidates[0].content) {
            res.json({ resposta: resultado.candidates[0].content.parts[0].text });
        } else {
            res.json({ resposta: '{"tarefa": "Erro", "data": "Tente novamente"}' });
        }
    } catch (e) {
        res.status(500).json({ erro: e.message });
    }
});

// A linha que faltava para o servidor não desligar:
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`\n🚀 SERVIDOR ONLINE!`);
    console.log(`🔗 Acesse aqui: http://localhost:${PORT}`);
    console.log(`💡 Para desligar: Aperte Ctrl + C no terminal\n`);
});