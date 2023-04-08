/// <reference types="vite/client" />
interface ImportMetaEnv {
    readonly ENVIRONMENT: string
  }
  
  interface ImportMeta {
    readonly env: ImportMetaEnv
  }