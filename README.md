# drone-ui

## Configuration

Create a `.env.development.local` file with the drone server address (no trailing slash) and your drone user token:

```
VUE_APP_DRONE_SERVER=https://drone.company.com
VUE_APP_DRONE_TOKEN=f0af17449a83681de22db7ce16672f16
```

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Run your tests
```
npm run test
```

### Lints and fixes files
```
npm run lint
```

### Enable Base URL

1. Update vue.config.js

```
module.exports = {
  lintOnSave: false,
  productionSourceMap: false,
  outputDir: "dist/files",
  publicPath: "/drone/"
};
```

The `publicPath` will be your base URL for proxy.

2. Create .env.development

Add following content:

```
VUE_APP_DRONE_SERVER=http://127.0.0.1/drone
VUE_APP_DRONE_BASE=/drone
```

> Notice that you should not setenv VUE_APP_DRONE_XXXX when you run `npm run build`


