import type { Predicate } from "."

export const ArraySchema = <T>(predicate: Predicate<T>) => (value: unknown): value is T[] =>
	Array.isArray(value) && value.every(value => predicate(value))
