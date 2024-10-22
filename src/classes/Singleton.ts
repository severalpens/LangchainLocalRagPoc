class Singleton {
    private static instance: Singleton;
    docs: any;
    allSplits: any;
    vectorStore: any;
    name = "Singleton Instance";
  
    private constructor() {
      // private constructor to prevent instantiation
    }
  
    public static getInstance(): Singleton {
      if (!Singleton.instance) {
        Singleton.instance = new Singleton();
      }
      return Singleton.instance;
    }
  
    // Add any methods or properties needed
  
  }
  
  export default Singleton;