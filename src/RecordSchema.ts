import type { Key } from "@samual/lib"
import type { Predicate } from "."
import { isRecord } from "./isRecord"

export const RecordSchema = <T>(predicate: Predicate<T>) => (value: unknown): value is Record<Key, T> =>
	isRecord(value) && Object.getOwnPropertyNames(value).every((name: Key) => predicate(value[name]))
