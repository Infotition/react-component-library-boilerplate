/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-ignore

declare module '*.scss' {
  interface IClassNames {
    [className: string]: string;
  }
  const classNames: IClassNames;
  export = classNames;
}
