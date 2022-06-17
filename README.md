# MapLibre GL JS map using React JS

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

Quick way to star a web map application with MapLibre GL JS using Create React App.

A simple fullscreen map application as an example on how to use MapTiler maps together with React and MapLibre GL JS for your own React app.

## Screenshot

![react maplibre template](/assets/react-maplibre-template.png "React Maplibre template")

<p align="right">(<a href="#top">back to top</a>)</p>

## Step-by-step tutorial - How to display a map in React JS using MapLibre GL JS

Documentation: [How to display a map in React JS using MapLibre GL JS](https://documentation.maptiler.com/hc/en-us/articles/4405444890897-how-to-display-maplibre-gl-js-map-using-react-js?utm_medium=referral&utm_source=github&utm_campaign=2022-05%20%7C%20js%20frameworks%20%7C%20react)

## Demo

Online demo: https://labs.maptiler.com/cra-template-maplibre-gl-js/

<p align="right">(<a href="#top">back to top</a>)</p>

## Build With

* [React.js](https://reactjs.org/)
* [MapLibre GL JS](https://maplibre.org/)
* [MapTiler](https://www.maptiler.com/)

## Getting Started

### Prerequisites

* npm
  ```sh
  npm install npm@latest -g
  ```

<p align="right">(<a href="#top">back to top</a>)</p>

### Create an app

To create a new react project run in your command-line:

```
  npx create-react-app my-react-map --template @maptiler/cra-template-maplibre-gl-js
```

Navigate to the newly created project folder **my-react-map**

```
  cd my-react-map
```

### API KEY

Rename or copy the `.env.example` file to `.env`

```
  cp .env.example .env
```

Open the `.env` file, :warning: you will need to replace **YOUR_MAPTILER_API_KEY** with your own MapTiler API key.

Your MapTiler account access key is on your MapTiler [Cloud](https://cloud.maptiler.com/account/keys/) account page. 

:information_source: If you don't have an API KEY you can create it for free at https://www.maptiler.com/cloud/

### Run

To start your local environment run: 

```
  npm start
``` 

You will find your app on address http://localhost:3000/.

Now you should see the app in your browser.

### Build

To build for production, run: 
```
  npm run build
``` 

### gh-pages

To deploy the app to the gh-pages branch, run:
```
  npm run deploy
```

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- LICENSE -->
## License

Distributed under the MIT License. See `LICENSE` for more information.

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- ACKNOWLEDGMENTS -->
## Acknowledgments

Instead of using or developing a custom map component you can use the [reac-map-gl component](http://visgl.github.io/react-map-gl/docs/get-started/get-started#using-with-a-mapbox-gl-fork)
