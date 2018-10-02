Goes along with:

- https://bit.ly/ndcmn-react-ts
- https://bit.ly/mdc-react-ts-2018

## Notes on Module Resolution

Due to [this issue](https://github.com/Microsoft/TypeScript/issues/10649) we cannot reasonably use the shared folder alias because it doesn't truly recurse upwards to search for components.

Instead, we've settled on just using absolute paths like `~/screens/app/screens/game/shared/Component`