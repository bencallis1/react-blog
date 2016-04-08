# React Blog

* You may want to take a moment to get your editor comfortable with JSX.
  * For Atom, `apm install react language-babel`.
  * For Sublime Text, search for `Babel` in Package Control.
  * For VS Code, `tsd install react-global` or `typings install --ambient react-global`
* Some JSX gotchas:
  * Don't try to comment your JSX.
  * Don't try `if` statements in your JSX.
  * All tags must be closed (including void tags like `hr` and `img`).
    * But, all tags can be _self_ closing (eg `<div />`), which is nice.
* There are some really nifty DevTools extensions for working with React:
  * [Show Me The React](https://chrome.google.com/webstore/detail/show-me-the-react/iaebolhfcmodobkanmaahdhnlplncbnd)
  * [Official React DevTools Extension](https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi)
  * [Official Tools Addon for Firefox](https://addons.mozilla.org/en-US/firefox/addon/react-devtools/)
* Some additional React resources:
  * [SurviveJS](https://survivejs.com/), a very in-depth beginner's guide to React
  * [React Tidbits](https://github.com/zacanger/react-tidbits): demos, boilerplates, and more links.

--------

## Day One

### Setting Up Our Project

Go ahead and check out your directory structure now. It should look something like this:
Folder structure as we know by now is really important. This is especially the case with REACT.
Good folder structure in REACT can help developers reason about their project a lot easier and faster.

```
app
  components
    Home
        Home.css
        Home.jsx
    Blog-intro-container
        Blog-image
            Blog-link
                Blog-link.css
                Blog-link.js
            Blog-image.css
            Blog-image.js
        Blog-meta
            Blog-meta.css
            Blog-meta.js
    Profile-container
        Image-block
            Image-block.css
            Image-block.js
        Profile
          Profile-container.css
          Profile-container.js

  config
    routes.js
  utils
    helpers.js
  App.js
public
  styles
    base
        fonts.css
        normalize.css
        reset.css
  bundle.js
  index.html
.gitignore
package.json
README.md
server.js
webpack.config.js
```
We're breaking out all our source into subdirectories by _component_. This is a common pattern in modern front-end
JS, and one that keep organization very logical and convenient as an app grows.

* You'll want to `npm init` right away.

### Smart/Container vs Dumb/Presentational Components

We'll be building two types of components.

* Smart (or Container) components:
  * Describe how things work
  * Fetch data and provide data
  * Call actions
* Dumb (or Presentational) components:
  * Describe how things look
  * Have no app dependencies
  * Receive only props (providing data and callbacks)
  * Rarely have state (just UI state)

We're using this convention because it makes our app easier to reason about, makes UI components
more reusable, and keeps most of our logic in the Smart components.

### State and Props

### Webpack

Webpack is a build tool primarily intended for front-end code.
There are other systems you can use to work with React, but it's worth taking the time to learn Webpack.

* For any project you'll need to `npm i -D webpack`. It's also worth installing `webpack-dev-server`.
* Both of those packages are useful to have globally as well, so `npm i -g webpack webpack-dev-server`.
* Webpack needs some loaders (like plugins). `npm i -D url-loader style-loader react-hot-loader file-loader css-loader babel-loader`.
* And we'll need some Babel extras so we can actually transpile our JSX/ES6 to code browsers understand.
  * `npm i -D babel-core babel-preset-es2017 babel-preset-react`.
* We may as well `npm i -D nodemon` to run our server as well, and then for our production dependencies:
* For our production dependencies:
  * `npm i -S axios react react-dom react-router body-parser cors express express-session cookie-parser lodash`

If you'd like to just get all of that out of the way at once:
`npm i -D webpack webpack-dev-server babel-core babel-preset-es2017 babel-preset react url-loader style-loader react-hot-loader file-loader css-loader babel-loader nodemon && npm i -S axios react react-dom react-router body-parser cors express express-session cookie-parser lodash && npm i -g webpack webpack-dev-server`

(Take a break, go get some coffee, this might take a minute or two.)

--------

Great! We have all the stuff we need to start writing an app in React.
Well, almost. Webpack takes some configuration. Unlike Gulp and Grunt, Webpack is highly specialised,
and uses a config file instead of a series of tasks to run.

* You'll want to `touch webpack.config.js` in your project root. The format looks something like this:

```javascript
module.exports = {
  entry   : {entry point or array of entry points}
, devtool : {options for devtool}
, output  : {
    filename : output filename
  , path     : output path
  }
, module : {
    loaders : [
      {array of loaders here}
    ]
  }
, plugins : [{array of plugins here}]
, resolve : {
    extensions : [array of file extensions to resolve]
  }
}
```

For the moment we'll just need to set a few options.

```javascript

module.exports = {
  entry: "./app/App.js",
  output: {
    filename: "public/bundle.js"
  },

  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel',
        query: {
          presets: ['react', 'es2015']
        }
      },
      {test: /\.css$/, loader: 'style!css', exclude: /node_modules/},
      {test: /\.png$/, loader: 'url', exclude: /node_modules/}
    ]
  }
};
```

Now, you should be able to run `webpack` without anything breaking!
Let's add a little bit to our `webpack.config.js` so we can use its magic.


### App (Entry Point)

* Our `App.js` will serve as the entry point for all of our code.
* You'll want to set this up to import everything else.

```javascript

import React from 'react';
import ReactDOM from 'react-dom';
import { Router, browserHistory  } from 'react-router';
import routes from './config/routes';

ReactDOM.render(
    <Router history={ browserHistory }>{routes}</Router>,
    document.getElementById('app')
)

```

* Note that we're targeting the element with an ID of `app`.
* Our entire React app will live inside that `div` in our `index.html`.

### Routing


* Routing in React is a really vast topic, and there are a _lot_ of different ways to go about it.
* For this project, we'll use `react-router`.
* Inside of `app/config/routes.js` we'll set up very basic routing, so that our `Home` component loads.
* You'll want to import React and your `Home` component, and then a few things from `react-router`.
* `import { Router, Route, IndexRoute,hashHistory } from 'react-router'`

* Below is an example of what your routes.js should look like

```javascript

import React from 'react';
import Home from '../components/Home/Home';
import  ProfileContainer from '../components/Profile-container/Profile-container';

import {Router, Route, IndexRoute, hashHistory} from 'react-router';

export default (
    <Router history={ hashHistory }>
          <Route path="/" component={Home}>
              <IndexRoute component={Home}></IndexRoute>
          </Route>
          <Route path="/profile/:userid" component={ProfileContainer}></Route>
    </Router>

);
```

### Home Component

Our home component will be responsible for managing the different states of our app.

* First, we need to set up our default state.
  * We usually do this with empty data that will be populated later.
  * The state will be passed down to all the children components.
  * You can think of Container components as smart components that are responsible for getting the state
    and then passing the state down to the children components.
  * We will then access the state being passed to our children component via props.
  * The children of a component are able to inherit the state via props.
* You'll need to import some modules.
  * First `import React from 'react'`
  * You could also go ahead and import the rest of the components you'll be building.
    * These should be a `PhotoGrid`, `Profile`, and `getPosts`.
    * Also import your styles (with a `require('./Home.css')`).
* Create a new component (`class Home extends React.Component`)
* Here is where we'll start out with that empty state. Your first few lines should look something like:

```javascript
constructor(props){
  super(props)
  this.state = {
    images : []
  , user   : {}
  , intro  : ''
  }
}
```
Down at the bottom, you'll want to set up your render function, and pass it `props`.

```javascript
render(props){
  return (
    <div className="main-home-controller">
    </div>
  )
}
```

* And then `export default Home`
* Since we have some (mostly empty) components already set up, you could go ahead and render these as well.

```javascript
<div className="main-home-controller">
  <Photogrid imageInfo={ this.state.images } />
  <Profile
    user={ this.state.user }
    intro={ this.state.intro }
  />
</div>
```

--------

## Day Two

### Lifecycle Hooks

--------

## Day Three

### Redux

### Axios