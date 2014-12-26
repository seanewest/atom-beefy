## Atom-Beefy
*Run the beefy browserify development server and open up an atom-shell browser window at it's url.*

#### Install
First install [atom-shell](https://github.com/atom/atom-shell) (go to the **downloads** section). This allows you to run browser-side javascript on your desktop.

Then install atom-beefy:
```
npm install -g seanewest/atom-beefy
```

#### Usage
```
atom-beefy entry.js [width] [height]
```
*Your JS will be placed inside a style tag in a generated html file with just a body. It will then be rendered in it's own window.*
