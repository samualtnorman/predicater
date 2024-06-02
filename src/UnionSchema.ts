import type { Predicate, PredicateType } from "."

export const UnionSchema = <T extends Predicate<any>>(predicates: T[]) =>
	(value: unknown): value is PredicateType<T> => predicates.some(predicate => predicate(value))
