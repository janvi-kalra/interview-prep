### Boilerplate

1. Make sure node.js is installed. Check: `node -v` and `npm -v`
2. `npm init` to initialize your project. Check: creates `package.json`
3. Install Express & Body-parser. `npm i express body-parser`. Check: `package-lock.json` should have both packages listed and should have a `node_modules` folder.
   - Body parser is middleware that is essential in Express applications. Processes request bodies.
4. If you're pushing to git, `touch .gitignore` and add `node_modules/` on first line.
