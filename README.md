# Scalable & Maintainable Apps with React and TypeScript Sample

Goes along with:

- https://bit.ly/ndcmn-react-ts
- https://bit.ly/mdc-react-ts-2018

## Notes on Testing

I use the `RecursivePartial<T>` helper a lot to write tests for Redux. It allows you to mock out state partially while still maintaining type safety.

See example in `src/screens/app/screens/game/state/reducers/__tests__/details.ts`

## Notes on Module Resolution

Due to [this issue](https://github.com/Microsoft/TypeScript/issues/10649) we cannot reasonably use the shared folder alias because it doesn't truly recurse upwards to search for components.

Instead, we've settled on just using absolute paths like `~/screens/app/screens/game/shared/Component`