/**
 * Implemention plan
 * Stage: 1
 * 1. Load the document -pdf, text---> Completed
 * 2. Chunk the document ---> completed
 * 3. Generate vector embeddings ----> completed
 * 4. Store the vector embeddings - vector database ----> completed
 * 
 * Stage: 2
 * 1. Setup LLM
 * 2. Add retrieval step
 * 3. Pass input + relevant information to LLM
 * 4. Congrates
 */


import { indexTheDocument } from "./prepare";

const filePath = './cg-internal-docs.pdf';

indexTheDocument(filePath);