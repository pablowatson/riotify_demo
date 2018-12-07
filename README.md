# Simple demo for the riotify issue

There are 2 node projects. main and dep.

The main project requires dep and references it in the package.json via `file:../dep` i.e.
The dep project was installed in the main project via `npm install -S ../dep`. Both the main project
and the dep project require riot.

The main project contains the `<app>` tag, which contains the nested `<test>` tag from the dep 
project.

The JS bundle for the main project is created using the `build.js` script via 
`node build.js > bundle.js`.

You can view the resulting app by loading the index.html in a browser. 
