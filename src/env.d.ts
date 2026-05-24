/// <reference path="../.astro/types.d.ts" />
/// <reference types="astro/client" />

interface ImportMetaEnv {
  readonly PUBLIC_INTRANET_PASSWORD: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
