import type { Plugin } from "@opencode-ai/plugin";

const VERIFY_COMMANDS = [
  "npm run lint",
  "npm run typecheck",
  "npm run build",
  "npx vitest run",
  "npx oxfmt --check .",
  "npx cspell lint .",
];

let timer: ReturnType<typeof setTimeout> | undefined;

export default (async ({ $ }) => {
  const run = async () => {
    timer = undefined;
    for (const command of VERIFY_COMMANDS) {
      await $`${command}`.quiet();
    }
  };

  return {
    "tool.execute.after": async (input) => {
      if (input.tool !== "edit" && input.tool !== "write") return;

      if (timer) clearTimeout(timer);
      timer = setTimeout(run, 1500);
    },
  };
}) satisfies Plugin;