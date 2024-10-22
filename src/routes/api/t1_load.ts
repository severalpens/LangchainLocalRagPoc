import express, { Request, Response, NextFunction } from 'express';
import Singleton from '../../classes/Singleton';
import { CheerioWebBaseLoader } from "@langchain/community/document_loaders/web/cheerio";

const router = express.Router();

export default (singletonInstance: Singleton) => {

router.get('/', async (req: Request, res: Response, next: NextFunction) => {

  const loader = new CheerioWebBaseLoader(
    "https://lilianweng.github.io/posts/2023-06-23-agent/"
  );

  singletonInstance.docs = await loader.load();

  res.send('respond with a resource');
});

return router;

};

