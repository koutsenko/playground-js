import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig(({ command, mode }) => {
  const env = loadEnv(mode, process.cwd(), "");

  return {
    plugins: [react()],
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
