export type PrettierConfig = {
  overrides?: any[];
} & import('prettier').Options;

export type Options = {
  astro?: boolean;
  svelte?: boolean;
  tailwindcss?: boolean;
};

export function createConfig(options?: Options): PrettierConfig;
