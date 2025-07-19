# my-typescript-lib

A starter TypeScript library project configured for publishing to **GitHub Packages** as an npm module.

---

## \ud83d\udcc1 File Tree

```text
my-typescript-lib/
├── package.json              # Project metadata and npm configuration
├── tsconfig.json             # TypeScript configuration
├── src/
│   └── index.ts              # Main source file
├── dist/                     # Compiled JavaScript output (generated)
├── .npmrc                    # GitHub registry configuration
├── .gitignore                # Standard Git ignore
├── README.md                 # Project overview and usage
├── LICENSE                   # Open-source license (MIT recommended)
├── jest.config.js            # Unit test configuration (optional)
├── tests/
│   └── index.test.ts         # Example unit test
├── CITATION.cff            # Citation metadata
```

---

## \ud83d\udce6 package.json

```json
{
  "name": "@DiogoRibeiro7/my-typescript-lib",
  "version": "0.1.0",
  "description": "Reusable TypeScript helpers published to GitHub Packages.",
  "main": "dist/index.js",
  "types": "dist/index.d.ts",
  "scripts": {
    "build": "tsc",
    "test": "jest",
    "prepare": "npm run build"
  },
  "repository": {
    "type": "git",
    "url": "https://github.com/DiogoRibeiro7/my-typescript-lib.git"
  },
  "author": "Diogo Ribeiro <dfr@esmad.ipp.pt>",
  "license": "MIT",
  "publishConfig": {
    "registry": "https://npm.pkg.github.com/"
  },
  "devDependencies": {
    "typescript": "^5.3.0",
    "jest": "^29.0.0",
    "ts-jest": "^29.0.0",
    "@types/jest": "^29.0.0"
  }
}
```

---

## \ud83d\udd27 tsconfig.json

```json
{
  "compilerOptions": {
    "target": "ES6",
    "module": "CommonJS",
    "declaration": true,
    "outDir": "dist",
    "strict": true,
    "esModuleInterop": true
  },
  "include": ["src"],
  "exclude": ["node_modules", "tests"]
}
```

---

## \ud83d\udd10 .npmrc

```text
@DiogoRibeiro7:registry=https://npm.pkg.github.com
//npm.pkg.github.com/:_authToken=${GITHUB_TOKEN}
```

Add a GitHub personal access token to your environment as `GITHUB_TOKEN`.

---

## \ud83d\ude80 Publishing to GitHub Packages

1. **Login to npm** (GitHub Packages):

   ```bash
   npm login --registry=https://npm.pkg.github.com
   ```

2. **Build the package**:

   ```bash
   npm run build
   ```

3. **Publish**:

   ```bash
   npm publish
   ```

Ensure you are using a scoped name (`@DiogoRibeiro7/packagename`) and the GitHub repository exists.

---

## \u2705 Usage

Install via GitHub:

```bash
npm install @DiogoRibeiro7/my-typescript-lib
```

Import in TypeScript:

```ts
import { hello } from '@DiogoRibeiro7/my-typescript-lib';
hello();
```

---

## \ud83e\uddea Example src/index.ts

```ts
export function hello(): void {
  console.log('Hello from my-typescript-lib');
}
```

## \ud83e\uddea Example tests/index.test.ts

```ts
import { hello } from '../src';

test('prints hello', () => {
  console.log = jest.fn();
  hello();
  expect(console.log).toHaveBeenCalledWith('Hello from my-typescript-lib');
});
```

---

## \ud83d\udcc4 LICENSE (MIT Example)

```
MIT License

Copyright (c) 2025 Diogo Ribeiro

Permission is hereby granted, free of charge...
```

---

## \ud83d\udccc Summary

This project is configured for:

* TypeScript development
* Unit testing with Jest
* Publishing to GitHub Packages (npm registry)

To release new versions, update the version field in `package.json` and re-run `npm publish`.

## Citation

If you use this project, please cite it using the information in `CITATION.cff`.

