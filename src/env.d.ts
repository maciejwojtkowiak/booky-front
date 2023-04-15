// eslint-disable-next-line @typescript-eslint/triple-slash-reference
/// <reference types="vite/client" />
interface ImportMetaEnv {
  readonly ENVIRONMENT: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
