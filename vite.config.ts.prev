import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";
import eslint from 'vite-plugin-eslint';

// @ts-ignore
export default defineConfig(({ _command, mode }) => {
  // @ts-ignore
  const env = loadEnv(mode, process.cwd(), "");

  return {
    plugins: [
      react(),
      // TODO Выпилить https://vite.dev/guide/features.html#transpile-only
      // Сказано что сборщик не задумывался как способ запуска линтера.
      // И плагин vite-plugin-eslint устарел и не поддерживается.
      // Нужно настраивать на уровне TSServer самой среды.
      // eslint({
      //  lintOnStart: true,
      //  cache: false,
      //  failOnError: false,      // не останавливает сборку при ошибках
      //  failOnWarning: false,    // не останавливает сборку при предупреждениях
      //  emitError: true,         // показывает ошибки
      //  emitWarning: true,       // показывает предупреждения
      //  include: ['src/**/*.{js,jsx,ts,tsx,css,scss,sass,less}']
      //})
    ],
    base: env.GITHUB_WORKSPACE
      ? `/${env.GITHUB_WORKSPACE.split("/").pop()}/`
      : env.CODESANDBOX_HOST
      ? "/"
      : "./",
    define: {
      "process.env.VITE_CODESANDBOX_HOST": JSON.stringify(env.CODESANDBOX_HOST),
      "process.env.VITE_GITHUB_WORKSPACE": JSON.stringify(env.GITHUB_WORKSPACE),
    },
  };
});
