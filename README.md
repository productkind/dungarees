# dungarees

TypeScript libraries published on npm under [`@dungarees`](https://www.npmjs.com/org/dungarees). Each package lives in its own folder under `src/`, and they all share one version, set in `config/version.json`. Every release is built and published from this repository by GitHub Actions, with npm provenance.

## Working on it

You need Node 26.

```bash
npm ci
npm run type-check
npx vitest run
npm run audit-dependencies
```

Before you change any code, read [CODING_RULES.md](CODING_RULES.md). Changes are test first: write or change the test, watch it fail, then make it pass.

## Contributing

Bug reports and questions are welcome in the issues. Pull requests are welcome too, but they work differently from most repositories:

1. Open your pull request from a fork, against `main`. The type check, the tests and the dependency audit run on it.
2. We develop dungarees inside a private monorepo, so we don't merge your pull request here. We import its commits into the monorepo instead, with you kept as the author, and close the pull request with a comment listing them.
3. In the monorepo, the commits also go through linting, formatting and the end-to-end suites. Once those pass, they arrive on `main` here.

`main` here only ever takes commits from the monorepo, so nothing is pushed to it directly.

`package-lock.json` is generated from the monorepo's lockfile, so leave it out of your pull request. If you add or change a dependency in a package's `package.json`, the import regenerates the lockfile for you. Formatting is fixed during the import as well.

## Licence

[MIT](LICENSE.md)
