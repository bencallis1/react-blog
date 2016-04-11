## React Blog Overview

### What are we building

* We will be building a REACT blog feed page and a profile page
* The following images are of the finished design. The black diamond for this project will be to match the designs.

<img src="http://i.imgur.com/oMwsnug.jpg" width="100%" height="100%"></img>


<img src="http://i.imgur.com/KV9PVdC.jpg" width="100%" height="100%"></img>

####

--------

## Step 1

### Setting Up Our Project

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

### Npm Install
* Run npm install to get all the dependencies we need


### Webpack

Webpack is a build tool primarily intended for front-end code.
There are other systems you can use to work with React, but it's worth taking the time to learn Webpack.

* The webpack.config.js file is already completed and looks like this

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

Now, you should be able to run `webpack` without anything breaking!


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



### Running the project

* As you are building the application you will need to be running webpack, http-server and nodemon
* Webpack is used to bundle your javascript
* nodemon is to run the server
* http-server is used so we can make api calls to our server and run the app on localhost

* Run webpack -w first, second run nodemon server.js and final run http-server

## Step 2) Creating Components


### Home Component

####

Our home component is the container component that holds our Blog-intro-container so let's se that up first.

* In the Home.js file import import React, and require('./Home.css') at the top of the file.
* We also should import the Blog-intro-container even though we havent set it up yet, so import BlogIntro from '../Blog-intro-container/Blog-intro-container';
* Using the ES6/es2015  class syntax create the Home component. Is looks like this:  class Home extends React.Component { }
* Make sure export default Home under your React.Component
* This component is going to be really simple, all we need to do is invoke the render method  render() and inside the render method return a div with className main-home-container. Inside the main-home-container include the
 <BlogIntro /> intro component

####

```javascript


import React from 'react';
import BlogIntro from '../Blog-intro-container/Blog-intro-container';
require('./Home.css');

class Home extends React.Component {

 Write your render method that returns the BlogIntro component

}


export default Home



```

####

```javascript


import React from 'react';
import BlogIntro from '../Blog-intro-container/Blog-intro-container';
require('./Home.css');

class Home extends React.Component {

    render(){
        return (
            <div className="main-home-container">
               <BlogIntro />
            </div>
        )
    }

}


export default Home



```


### Importing dependencies: Blog-intro-container Component

####

Our BlogIntroContainer component is the container component that holds our Blog-image component and our Blog-meta component so there is a lot going lets get to it!

* In the Blog-intro-container.js file import import React, and require('./Blog-intro-container.css') at the top of the file.
* Because this component is going to be doing a lot of the heavy lift we need to import a few more things
* Import usersBlogData from utils/helpers
* Now that we have our helper functions let import the components we need
* Import BlogImage from './Blog-image/Blog-image';
* Import BlogMeta from './Blog-meta/Blog-meta';
* Now that we have all our components and helpers we need lets create the BlogIntroContainer

####

```javascript


import React from 'react';
import {usersBlogData} from '../../utils/helpers'
import BlogImage from './Blog-image/Blog-image';
import BlogMeta from './Blog-meta/Blog-meta';

require('./Blog-intro-container.css');



```

### Creating the  BlogIntroContainer Component

####

* Using the ES6/es2015  class syntax create the BlogIntroContainer component. Is looks like this:  class BlogIntroContainer extends React.Component { }
* Make sure to export default BlogIntroContainer under your React.Component. This will make our component available to import in other modules "exactly like we are doing in the Home component"
* Inside the BlogIntroContainer React.Component at the top add a constructor method that takes props as a parameter

####

```
import React from 'react';
import {usersBlogData} from '../../utils/helpers'
import BlogImage from './Blog-image/Blog-image';
import BlogMeta from './Blog-meta/Blog-meta';

require('./Blog-intro-container.css');

class BlogIntroContainer extends React.Component {
    constructor method goes here

 }


export default BlogIntroContainer

```

####

```

import React from 'react';
import {usersBlogData} from '../../utils/helpers'
import BlogImage from './Blog-image/Blog-image';
import BlogMeta from './Blog-meta/Blog-meta';

require('./Blog-intro-container.css');

class BlogIntroContainer extends React.Component {
     constructor(props){}

 }


export default BlogIntroContainer

```

### Setting up the state BlogIntroContainer Component

####

* Directly under the constructor method add a super method that takes props as a parameter. We are passing props into super so we can have access to props inside our constructor using the this keyword
* Now we need to set up the default state of our component this is usually done with empty data. Under the super(props) set the state by creating a object on this.state.
* Inside the this.state object add a property called  usersBlogData with the value as a empty array


####


```

   import React from 'react';
   import {usersBlogData} from '../../utils/helpers'
   import BlogImage from './Blog-image/Blog-image';
   import BlogMeta from './Blog-meta/Blog-meta';

   require('./Blog-intro-container.css');

   class BlogIntroContainer extends React.Component {
         constructor(props){
              super method goes here

              set the default state using this.state
           }

    }


   export default BlogIntroContainer

```

####


```

import React from 'react';
import {usersBlogData} from '../../utils/helpers'
import BlogImage from './Blog-image/Blog-image';
import BlogMeta from './Blog-meta/Blog-meta';

require('./Blog-intro-container.css');

class BlogIntroContainer extends React.Component {
       constructor(props){
             super(props);
             this.state = {
                 usersBlogData: []

             }
         }
 }


export default BlogIntroContainer

```

### Life Cycle  BlogIntroContainer Component

####

* This information will be covered on day 2 so for now just copy and paste the code below under your constructor function


```
    componentDidMount(){
    this.init()
}

    init(){
        usersBlogData().then(function(data){
            this.setState({
                usersBlogData: data.data
            })
        }.bind(this));
    }


```


### Render Method BlogIntroContainer Component

####


* Create a render method that returns a div.
* As you can see in the image below we need to iterate over our usersBlogData so we can repeat our BlogImage and BlogMeta components for every item found in the  usersBlogData array
We can do this by using the javascript map method.

* Inside the newly created div create a map method that iterates over the userBlogData, add data parameter to the map method. This map method is going to return the BlogImage and BlogMeta components


``` map example

  render(){
        return (
            <div>
                {this.state.usersBlogData.map((data) => {
                    return (
                        <div key={data.id}>
                            <BlogMeta />
                            <BlogImage />
                        </div>
                    )
                })}

            </div>
        )
    }


```

<img src="http://i.imgur.com/N4dCaXv.jpg" width="100%" height="100%"></img>






### Passing data to the BlogMeta and BlogImage components

####


* On the BlogMeta component add an attribute called metaInfo that has a value of data
* On the BlogImage component add an attribute called blogInfo that has a value of data





```

  render(){
        return (
            <div>
                {this.state.usersBlogData.map((data) => {
                    return (
                        <div key={data.id}>
                            <BlogMeta metaInfo={data} />
                            <BlogImage blogInfo={data} />
                        </div>
                    )
                })}

            </div>
        )
    }


```



### Creating the BlogImage Component

####

* Inside the Blog-image.js file import REACT, BlogLink and require the css file
* This component is going to be a dumb component it isn't as complicated as the BlogIntroContainer component because it's only receiving data and displaying it
* Using the ES6/es2015 syntax create a function called BlogImage that takes {blogInfo} as a parameter and returns a div that wraps a image tag and the BlogLink component
* By default Export the component
* Add a propType object on the BlogImage component that has a property blogInfo with the value set to React.PropTypes.object.isRequired



####



```
  import React from 'react';
  import BlogLink from './Blog-link/Blog-link';
  require('./Blog-image.css');



  const function name = (blogInfo object) => {
      return (


      <div>
          <img/>

            BlogLink component
      </div>
      );
  };




  BlogImage.propTypes = {
      blogInfo: React.PropTypes.object.isRequired
  };



  export default BlogImage


```


####



### Passing data to img tag

####

* Set the value of the source attribute on the image element to {blogInfo.image}


####

```
 <img className="blog-intro-img" src={blogInfo.image} alt=""/>

```


### Passing data to BlogLink component

####

* On the BlogLink component add a attribute called blogInfo that has a value of {blogInfo}


####


```

 <BlogLink blogInfo={blogInfo} />


```




### Creating the BlogMeta Component

####

* Inside the Blog-meta.js file import REACT and require the css file
* This component is going to be a dumb component it isn't as complicated as the BlogIntroContainer component because it's only receiving data and displaying it
* Using the ES6/es2015 syntax create a function called BlogMeta that takes {metaInfo} as a parameter and returns a div.
8 Inside the newly created div you can start to display your data
* By default Export the component
* Add a propType object on the BlogMeta component that has a property metaInfo with the value set to React.PropTypes.object.isRequired


####



```

 import React from 'react';
 require('./Blog-meta.css');



 const BlogMeta = ({metaInfo}) => {
     return (
         <div>
             <div>
             <h2> display properties on the metaInfo object</h2>
             <p> display properties on the metaInfo object  </p>
             <h2>display properties on the metaInfo object</h2>
             </div>
         </div>
     );
 };

 BlogMeta.propTypes = {
     metaInfo: React.PropTypes.object.isRequired
 };



 export default BlogMeta


```


####




```

 import React from 'react';
 require('./Blog-meta.css');



 const BlogMeta = ({metaInfo}) => {
     return (
         <div>
             <div>
             <h2>{metaInfo.username}</h2>

             </div>
         </div>
     );
 };

 BlogMeta.propTypes = {
     metaInfo: React.PropTypes.object.isRequired
 };



 export default BlogMeta



```














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


### Lifecycle Hooks

--------

## Day Three

### Redux

### Axios