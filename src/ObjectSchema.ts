import type { Key } from "@samual/lib"
import { Predicate, PredicateType } from "."
import { isRecord } from "./isRecord"

export const ObjectSchema = <T extends Record<Key, Predicate<any>>>(schema: T) =>
	(value: unknown): value is { [K in keyof T]: PredicateType<T[K]> } =>
		isRecord(value) && Object.getOwnPropertyNames(schema).every((name: Key) => schema[name]!(value[name]))
