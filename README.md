# How to use React Context API

In this article I'm demonstrating how to use React Context API in both directions:

1) demonstrating React Context <Provider /> component to inject data deep into the component tree without passing them through every single node.

2) updating Context contents from child components

Technologies used:

- React with TypeScript
- Plain CSS files imported to React
- React Context API

## Initial setup and configuration

1. Create a new React app with `npx create-react-app . --template typescript`
2. Start dev server using `npm start`

## Common problems

One quite common problem is passing data from higher level components to the lower level components. You can either pass the data using props, but as the component tree gets deeper it causes a lot of overhead.

Another way of passing data through is using state management libraries, like Redux - but that too is a bit overwhelming and might not be needed for every case.

## Adding React Context API

React Context API introduces two concepts: Context, Provider and Consumer.

Context is an instance created by the React Context API and it contains the data.

```typescript
const initialValue = { counter: 0, incrementCounter: () => {} };
export const CounterContext = createContext(initialValue);
```

And by wrapping your components inside `Provider` component your components will get access to the value of the context:
```react
<CounterContext.Provider value={{ counter, increment }}>
    {/* wrap your components here, can be the whole App or a smaller part of it. */}
    {children}
</CounterContext.Provider>
```
The whole Provider example is available [here](src/providers/counter.tsx).

There are two ways of subscribing into Context and getting actual access to its contents. The first one is using Consumer component, like this:
```react
<CounterContext.Consumer>
    {({ counter }) => {
        return <p>Counter value is {counter} (from consumer)</p>;
    }}
</CounterContext.Consumer>
```

Another, a bit more simpler method is using hooks:
```typescript
const { counter } = useContext(CounterContext);
```

Now, both work in a same way and both can be used - though naturally hooks only work with functional components.

The most important point here is, that all the changes to context value cause rerender of your components using either `useContext` hook or `Consumer` component.

We can also have access to `increment` method, which gives your components a way to update the value, check [hook example](src/components/hook-increment.tsx) or [Consumer example](src/components/consumer-increment.tsx) for reference.

## Summary

Context API provides a neat and simple way to inject and access data through your component tree. It removes the need to pass data through all the intermediate components and lets you just use the data where ever you need to.

**Feel free to browse the code, if you have any questions or improvement ideas let me know!**

## Author

Timo Kallela, for more information please visit my [GitHub profile](https://github.com/kallelat)

You can also contact me by [email](mailto:timo.kallela@gmail.com) or via [LinkedIn](https://www.linkedin.com/in/kallelat/)!

## License

Contents of this repository is licensed under [MIT](LICENSE) license.
