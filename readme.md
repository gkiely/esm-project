The goal of this project was to create a buildless application using web components that has JSDOC type checking.

- [Vite](https://vitejs.dev/) is used for the dev server and can be used to bundle, but is not necessary.
- [Preact](https://preactjs.com/) is used for the UI library.
- This code can be uploaded to a server and it will work without a build step or transpilation.

Created from:
https://github.com/esm-dev/esm.sh/discussions/774#discussioncomment-7795387

Example:
```sh
git clone git@github.com:gkiely/esm-project.git
npx http-server -p 8000 -o esm-project
```