/// <reference types="vite/client" />
interface ImportMetaEnv {
    readonly CLIENT_ID: string
  }
  
  interface ImportMeta {
    readonly env: ImportMetaEnv
  }