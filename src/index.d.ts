export type PrettierConfig = {
  overrides?: any[];
} & import('prettier').Options;

export type Options = {
  astro?: boolean;
  customPlugins?: string[];
  svelte?: boolean;
  tailwindcss?: boolean;
};

export function createConfig(options?: Options): PrettierConfig;
