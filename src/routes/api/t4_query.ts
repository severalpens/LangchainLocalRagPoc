import express, { Request, Response, NextFunction } from 'express';
import localRag from '../../RagModules/localRag';
import Singleton from '../../classes/Singleton';

const router = express.Router();

export default (singletonInstance: Singleton) => {

router.post('/', async (req: Request, res: Response, next: NextFunction) => {
  const question = "What are the approaches to Task Decomposition?";
  const docs = await singletonInstance.vectorStore.similaritySearch(question);
  console.log(docs.length);
  res.json(singletonInstance.name);
});

return router;
};

