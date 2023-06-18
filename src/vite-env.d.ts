/// <reference types="vite/client" />

interface ImportMetaEnv {
    VITE_GOOGLE_OIDC_CLIENTID: string
    VITE_GOOGLE_OIDC_SECRET: string
}

interface ImportMeta {
    readonly env: ImportMetaEnv
}