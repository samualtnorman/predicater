import type { Predicate } from "."

export const LazySchema = <T>(getter: () => Predicate<T>) => (value: unknown): value is T => getter()(value)
