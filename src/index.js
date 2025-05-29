// @ts-check

/** @typedef {import('./index.d.ts').PrettierConfig} PrettierConfig */
/** @typedef {import('./index.d.ts').Options} Options */

/**
 * Create a prettier config using the provided options
 * @param {Options} [options]
 * @returns {PrettierConfig}
 */
export function createConfig({ astro, plugins, svelte, tailwindcss, ...options } = {}) {
  /** @type {PrettierConfig & { plugins: any[], overrides: any[] }} */
  const config = {
    overrides: [],
    plugins: plugins ?? [],
    printWidth: 120,
    singleQuote: true,
    trailingComma: 'none',
    ...options
  };
  if (astro) {
    config.plugins.push('prettier-plugin-astro');
    config.overrides.push({ files: '*.astro', options: { parser: 'astro' } });
  }
  if (svelte) {
    config.plugins.push('prettier-plugin-svelte');
    config.overrides.push({ files: '*.svelte', options: { parser: 'svelte' } });
  }
  if (tailwindcss) {
    config.plugins.push('prettier-plugin-tailwindcss');
  }
  return config;
}

export default createConfig();
