# Nxus Core Concept

## Running

```
> npm start
```

## Patterns

### Events

1. `on(event).then(cb)`: On an event, do something.

2. `emit(event).with(args)`: Emit an event, with a set of args

### Gather values

1. `send(name).with(args)`: Send a specific value, with option args.

2a. `gather(name).each(cb).then(cb)`: Get all gathered values, iterate over each, then perform a final callback 

2b. `gather(name).all(cb).then(cb)`: Get all gathered values, get all values as an array, then perform a final callback 

## Files

### index.js

Shows the basic API of the new app/module promise pattern.

### Application

The main class, though in this version doesn't do much.

### Module

The module-level dispatcher, includes the gather pattern.

### Dispatcher

Low-level dispatcher class, inherited by both Module and Application.
