# Boilerplate Steps (TO MEMORIZE)

1. Make sure node.js is installed. Check: `node -v` and `npm -v`
2. `npm init` to initialize your project. Check: creates `package.json`
3. Install Express & Body-parser. `npm i express body-parser nodemon`. Check: `package-lock.json` + `node_modules/` will have been generated, and `package.json` will have these deps listed.
   - Express a framework for developing REST apis in Node.js
   - Body parser is middleware that processes request bodies in Express apps (required)
   - Nodemon auto-restarts app when files change
4. If you're pushing to git, `touch .gitignore` and add `node_modules/` on first line.
5. Create `index.js`, core server will live here. Create the boilerplate:
   - Create the express app
   - Tell the app to use body parser
   - Define the data source (in memory or db)
   - Create roots
   - Initialize express app with a port
   - `node index.js` to start the server or `npx nodemon index.js` to start the server with nodemon
