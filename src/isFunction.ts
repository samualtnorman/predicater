export const isFunction = (value: unknown): value is (...args: any[]) => unknown => typeof value == `function`
