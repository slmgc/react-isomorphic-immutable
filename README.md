React-Isomorphic-Immutable
==========================

An isomorphic example with React 0.14, React Router 1.0, Browserify, ES6 classes
/ ES7 async / await, mixins, decorators, PureRenderMixin, CSS live reloading,
server-side rendering with data prefetching and immutable state with Baobab. It
has a simple JSON REST API using LokiJS as a database, so you could play with it
without much fuss. The database could be changed to a more production-ready one,
like MongoDB, pretty easily.

### Usage

```
npm start
```

Just it. It installs all requirements automagically and runs a development
server at [localhost:8080](http://localhost:8080). It also populates a simple
JS-based database with a single user. To sign in use:

```
email: john.doe@example.com
password: 123
```

### Main Dependencies

* [React 0.14](https://github.com/facebook/react)
* [React Router 1.0](https://github.com/rackt/react-router)
* [Browserify](https://github.com/substack/node-browserify)
* [Baobab](https://github.com/Yomguithereal/baobab)
* [Stylus](https://github.com/stylus/stylus)
* [Express](https://github.com/strongloop/express)
* [LokiJS](https://github.com/techfort/LokiJS)

### Missing Features

I'm constantly adding more features from my real-life production projects, but
there could be many missing features. I would be glad to get some feedback from
you and I'm always open to feature requests :3