export type Diff<T extends string, U extends string> = ({ [P in T]: P } &
  { [P in U]: never } & { [x: string]: never })[T];

export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;

/**
 * Recursive partial type helper
 */
export type RecursivePartial<T> = {
  [P in keyof T]?: T[P] extends Array<infer U>
    ? Array<RecursivePartial<U>>
    : T[P] extends object ? RecursivePartial<T[P]> : T[P]
};
export type MockAction<TAction extends (...args: any[]) => any> = jest.Mock<ReturnType<TAction>>