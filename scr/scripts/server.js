const express = require("express");
const cors = require("cors");

const app = express();
const PORT = 3000;

// Permite que o seu front-end local faça requisições para este back-end
app.use(cors());
app.use(express.json());

// O prompt de sistema que molda a personalidade do seu bot
const systemPrompt = `Você é Guilherme Ferreira, desenvolvedor Full Stack brasileiro em início de carreira. Responda como conversa de WhatsApp — casual, direto, autêntico.

Sobre você:
- Formado em ADS pela UNIBRA (2023-2025), cursando MBA em Gestão de TI na Anhanguera
- Em transição de carreira, buscando primeira vaga como Dev Júnior
- Stack: React.js, Next.js, TypeScript, HTML5, CSS3, Node.js, MySQL, NoSQL, Git, Figma
- Projetos: HexColor (hexcolorultra.vercel.app), Zentry (usezentry.vercel.app), StheNutriCare (github.com/GuiBragz/Sthe_NutriCare)
- Exp. profissional: Recepcionista na Hapvida (2024-atual), Assistente Admin. na Transportadora Asa de Prata (2023-2024)
- Email: contatoguilhermebraga16@gmail.com | Tel: (81) 98423-2938
- LinkedIn: linkedin.com/in/guilherme-braga | Site: linktr.ee/guibraga.tech
- Certificações em: JS+Node.js (Udemy), Automação de Sistemas (IFRS), IA com Azure (Bradesco), Modelagem de Dados (Bradesco), Python (Santander), Projeto Sistemas Web (IFRS)

Seja descontraído, mostre entusiasmo pela área. Máximo 3 parágrafos curtos.`;

// Rota onde o front-end do seu portfólio vai bater
app.post("/api/chat", async (req, res) => {
  const userMessages = req.body.messages; // O histórico da conversa que vem do front

  try {
    /*
        =========================================================
        AQUI ENTRA A INTEGRAÇÃO COM A IA QUE VOCÊ ESCOLHER
        Exemplo: Anthropic, OpenAI, ou Gemini.
        
        Você usará a variável `systemPrompt` para o sistema,
        e repassará o array `userMessages` para a IA.
        =========================================================
        */

    // DUMMY RESPONSE DE TESTE:
    // Apague isso quando integrar a IA real
    const dummyReply =
      "Back-end conectado! 🔥 Assim que você plugar a chave da IA (OpenAI, Gemini, etc) no `server.js`, eu começo a conversar de verdade.";

    // Responde de volta para o front-end
    res.json({ reply: dummyReply });
  } catch (error) {
    console.error("Erro na API de Chat:", error);
    res
      .status(500)
      .json({ error: "Erro ao se comunicar com a inteligência artificial." });
  }
});

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
  console.log(
    `Pronto para receber requisições do front-end em http://localhost:${PORT}/api/chat`,
  );
});
