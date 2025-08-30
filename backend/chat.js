import readline from 'node:readline/promises';
import Groq from "groq-sdk";


const groq = new Groq({ apiKey: process.env.GROQ_API_KEY });

export async function chat(){
    const rl = readline.createInterface({ input: process.stdin, output: process.stdout });

    while(true){
        const question = await rl.question("You: ");


        if(question === 'bye'){
            break;
        }
    }
    // const completion = await groq.chat.completions
    // .create({
    //   messages: [
    //     {
    //       role: 'user',
    //       content: 'Explain the importance of fast language models',
    //     },
    //   ],
    //   model: "llama-3 3-70b-versatile",
    // });

    rl.close();
};

chat();