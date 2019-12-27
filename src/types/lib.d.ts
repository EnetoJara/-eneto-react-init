/// <reference types="node" />

declare namespace NodeJS {
    interface ProcessEnv {
        readonly NODE_ENV: 'development' | 'production' | 'test';
        readonly PUBLIC_URL: string;
    }

    interface HotOpts {
        accept: (path: string, callback: ()=>void)=> void;
    }

    interface Module {
        hot: HotOpts;
    }
  }
