import express, { Request, Response, NextFunction } from 'express';
import Singleton from '../../classes/Singleton';
import { CheerioWebBaseLoader } from "@langchain/community/document_loaders/web/cheerio";
import { RecursiveCharacterTextSplitter } from "langchain/text_splitter";

const router = express.Router();

export default (singletonInstance: Singleton) => {

router.get('/', async (req: Request, res: Response, next: NextFunction) => {

  const textSplitter = new RecursiveCharacterTextSplitter({
    chunkSize: 500,
    chunkOverlap: 0,
  });

  singletonInstance.allSplits = await textSplitter.splitDocuments(singletonInstance.docs);
  res.send('respond with a resource');

});


return router;

};

