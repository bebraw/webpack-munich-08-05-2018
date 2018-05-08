# Webpack - The Good Parts

* [Slides](https://presentations.survivejs.com/webpack-the-good-parts/#/1)
* [Book](https://survivejs.com/webpack/)

## Schedule

* 09:00-11:00 - Workshop
* 11:00-12:00 - Freeform, check your webpack setup

## Goals

* Able to use webpack
* Move from Grunt to webpack - feature parity

## Examples

```javascript
import "foo"; // foo.jsx
```

**resolve.alias**

```javascript
const config = {
  resolve: {
    alias: {
      foo: path.join(__dirname, "foo/bar")
    }
  }
};
```

**resolve.extensions**

```javascript
const config = {
  resolve: {
    extensions: [".js", ".jsx", ".ts"]
  }
};
```

**resolve.modules**

```javascript
const config = {
  resolve: {
    modules: [
      path.join(__dirname, "my_modules"), // Better for perf
      "node_modules"
    ]
  }
};
```

### Plugins vs. loaders

**loader.js**

```javascript
module.exports = input => input + input;
```

**plugin.js**

A class that implements `apply` method.
