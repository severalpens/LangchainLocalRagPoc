import express, { Request, Response, NextFunction } from 'express';
import Singleton from '../../classes/Singleton';
import { CheerioWebBaseLoader } from "@langchain/community/document_loaders/web/cheerio";
import { RecursiveCharacterTextSplitter } from "langchain/text_splitter";
import { OllamaEmbeddings } from "@langchain/ollama";
import { MemoryVectorStore } from "langchain/vectorstores/memory";


const router = express.Router();

export default (singletonInstance: Singleton) => {

router.get('/', async (req: Request, res: Response, next: NextFunction) => {

  const embeddings = new OllamaEmbeddings();

  singletonInstance.vectorStore = await MemoryVectorStore.fromDocuments(
    singletonInstance.allSplits,
    embeddings
);


});


return router;

};

