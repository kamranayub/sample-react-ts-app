# Scalable & Maintainable Apps with React and TypeScript Sample

Sample [create-react-app-typescript](https://github.com/wmonk/create-react-app-typescript) using TypeScript and React to showcase some patterns and practices I use when developing apps.

Goes along with:

- https://bit.ly/ndcmn-react-ts-video (NDC MN 2018 video) - [slides](https://bit.ly/ndcmn-react-ts)
- https://bit.ly/react-ts-mdc2018 (MDC 2018)

## Notes on Testing

I use the `RecursivePartial<T>` helper a lot to write tests for Redux. It allows you to mock out state partially while still maintaining type safety.

See example in `src/screens/app/screens/game/state/reducers/__tests__/details.ts`

## Notes on Module Resolution

Due to [this issue](https://github.com/Microsoft/TypeScript/issues/10649) we cannot reasonably use the shared folder alias because it doesn't truly recurse upwards to search for components.

Instead, we've settled on just using absolute paths like `~/screens/app/screens/game/shared/Component`

## TODO

- [ ] Add TOC of patterns/tips referenced in slides
- [ ] Add back `moduleNameMapper` to package.json `jest` config once fixed in react-scripts-ts@4.x:
  - ```
    "jest": {
      "moduleNameMapper": {
        "^~/(.*)": "<rootDir>/src/$1"
      }
    }
    ```
- [ ] Show typing of `React.Component.defaultProps` and how that works
- [ ] Better async dispatch typing/boilerplate
- [ ] Show CSS-in-JS example (maybe with emotion)
