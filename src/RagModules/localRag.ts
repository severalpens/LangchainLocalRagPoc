import "cheerio";
import { pull } from "langchain/hub";
import { ChatPromptTemplate } from "@langchain/core/prompts";
import { RecursiveCharacterTextSplitter } from "langchain/text_splitter";
import { CheerioWebBaseLoader } from "@langchain/community/document_loaders/web/cheerio";
import { OllamaEmbeddings } from "@langchain/ollama";
import { MemoryVectorStore } from "langchain/vectorstores/memory";
import { ChatOllama } from "@langchain/ollama";
// import { RunnableSequence } from "@langchain/core/runnables";
import { StringOutputParser } from "@langchain/core/output_parsers";
import { PromptTemplate } from "@langchain/core/prompts";
import { createStuffDocumentsChain } from "langchain/chains/combine_documents";
const question = "What are the approaches to Task Decomposition?";
import {
  RunnablePassthrough,
  RunnableSequence,
} from "@langchain/core/runnables";
import { formatDocumentsAsString } from "langchain/util/document";

const  localRag = async () => {

  const loader = new CheerioWebBaseLoader(
    "https://lilianweng.github.io/posts/2023-06-23-agent/"
  );

  const docs = await loader.load();
  
  const textSplitter = new RecursiveCharacterTextSplitter({
    chunkSize: 500,
    chunkOverlap: 0,
  });

  const allSplits = await textSplitter.splitDocuments(docs);
  console.log(allSplits.length);

  const embeddings = new OllamaEmbeddings();

  const vectorStore = await MemoryVectorStore.fromDocuments(
  allSplits,
  embeddings
);

const question = "What are the approaches to Task Decomposition?";
const docs2 = await vectorStore.similaritySearch(question);
console.log(docs2.length);

};

export default localRag;
