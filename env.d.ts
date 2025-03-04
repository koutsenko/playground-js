/// <reference types="vite/client" />

declare const process: {
  env: {
    NODE_ENV: string;
    [key: string]: string | undefined;
  };
  cwd(): string;
}; 