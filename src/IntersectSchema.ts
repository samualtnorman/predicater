import type { UnionToIntersection } from "@samual/lib"
import type { Predicate, PredicateType } from "."

export const IntersectSchema = <T extends Predicate<any>>(predicates: T[]) =>
	(value: unknown): value is UnionToIntersection<PredicateType<T>> =>
		predicates.every(predicate => predicate(value))
