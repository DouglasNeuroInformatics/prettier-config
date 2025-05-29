export type PrettierConfig = import('prettier').Config;

export type Options = {
  astro?: boolean;
  svelte?: boolean;
  tailwindcss?: boolean;
} & import('prettier').Options;

export function createConfig(options?: Options): PrettierConfig;
