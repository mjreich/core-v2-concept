# Nxus Core Concept

## Running

```
> npm start
```

## Event Namespacing

Rather than have all events on the global namespace (app object), now you can set module level events using the `get` method on Application.

```
app.get('router').emit() // Do something on router
```

**Note**: This is not a ref to the specific singleton, just a special dispatcher class that application manages.  For example, to dispatch a router event, the Router module would do something like:

```
class Router {
  constructor(app) {
    app.get('router').emit('routing!')
  }
}
```

Module classes also implement the `gather` pattern below.

## Patterns

### Events

1. `on(event).then(cb)`: On an event, do something.

2. `emit(event).with(args)`: Emit an event, with a set of args

### Gather values

1. `send(name).with(args)`: Send a specific value, with option args.

2a. `gather(name).each(iterator).then(cb)`: Get all gathered values, iterate over each, then perform a final callback 

2b. `gather(name).all().then(cb)`: Get all gathered values, get all values as an array, then perform a final callback 

## Files

### index.js

Shows the basic API of the new app/module promise pattern.

### Application

The main class, though in this version doesn't do much.

### Module

The module-level dispatcher, includes the gather pattern.

### Dispatcher

Low-level dispatcher class, inherited by both Module and Application.
