<!-- PROJECT LOGO -->
<div align="center">
  <a href="https://github.com/DouglasNeuroInformatics/prettier-config">
    <img src="https://raw.githubusercontent.com/DouglasNeuroInformatics/prettier-config/main/.github/assets/dnp-utility-logo.png" alt="Logo" width="100" >
  </a>
  <h3 align="center">@douglasneuroinformatics/prettier-config</h3>
  <p align="center">
    Prettier configuration for DNP projects
  </p>
</div>

<!-- PROJECT SHIELDS -->
<div align="center">

![license](https://img.shields.io/github/license/DouglasNeuroInformatics/prettier-config)
![version](https://img.shields.io/github/package-json/v/DouglasNeuroInformatics/prettier-config)

</div>
<hr />

## Install

```shell
pnpm add -D @douglasneuroinformatics/prettier-config prettier
```

## Usage

### Default Settings

**package.json**

```json
{
  "prettier": "@douglasneuroinformatics/prettier-config"
}
```

### Customized Settings

**prettier.config.js**

```javascript
import { createConfig } from '@douglasneuroinformatics/prettier-config';

export default createConfig({
  astro: false, // requires prettier-plugin-astro
  svelte: false, // requires prettier-plugin-svelte
  tailwindcss: false // requires prettier-plugin-tailwindcss
});
```

## Git Hook (Optional)

**.husky/pre-commit**

```sh
#!/bin/sh

pnpm exec prettier-pre-commit
```
