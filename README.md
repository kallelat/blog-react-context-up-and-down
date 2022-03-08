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
const context = React.createContext(initialValue);
```
TBD: idea of provider and hooks

TBD: add provider

TBD: add hooks

TBD: add callback

## Summary

TBD

**Feel free to browse the code, if you have any questions or improvement ideas let me know!**

## Author

Timo Kallela, for more information please visit my [GitHub profile](https://github.com/kallelat)

You can also contact me by [email](mailto:timo.kallela@gmail.com) or via [LinkedIn](https://www.linkedin.com/in/kallelat/)!

## License

Contents of this repository is licensed under [MIT](LICENSE) license.
