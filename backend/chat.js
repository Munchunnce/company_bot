import readline from 'node:readline/promises';
import Groq from "groq-sdk";
import { vectorStore } from './prepare.js';


const groq = new Groq({ apiKey: process.env.GROQ_API_KEY });

export async function chat(){
    const rl = readline.createInterface({ input: process.stdin, output: process.stdout });

    while(true){
        const question = await rl.question("You: ");


        if(question === 'bye'){
            break;
        }

        // retrieval
        const relevantChunks = await vectorStore.similaritySearch(question, 3);
        const context = relevantChunks.map(chunk => chunk.pageContent).join('\n\n');

        const SYSTEM_PROMPT = `You are an assistant for the question-answering taks. Use the following
        relevent pieces of retrieved context to the answer the question. You don't know the answer, say
        I don't know.`;

        const userQuery = `Question: ${question}
        Relevant context: ${context}
        Answer: `;
        const completion = await groq.chat.completions
    .create({
      messages: [
        {
            role: 'system',
            content: SYSTEM_PROMPT
        },
        {
          role: 'user',
          content: userQuery,
        },
      ],
      model: "llama-3 3-70b-versatile",
    });
    }

    rl.close();
};

chat();