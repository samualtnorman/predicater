export const isFunction = <TArgs extends any[] = any[]>(value: unknown): value is (...args: TArgs) =>
	unknown => typeof value == `function`
