import type { JsonValue } from "@samual/lib"
import type { Predicate } from "."
import { ArraySchema } from "./ArraySchema"
import { LazySchema } from "./LazySchema"
import { RecordSchema } from "./RecordSchema"
import { UnionSchema } from "./UnionSchema"
import { isBoolean } from "./isBoolean"
import { isNull } from "./isNull"
import { isNumber } from "./isNumber"
import { isString } from "./isString"

export const isJsonValue: Predicate<JsonValue> = UnionSchema([
	isNull,
	isBoolean,
	isNumber,
	isString,
	ArraySchema(LazySchema(() => isJsonValue)),
	RecordSchema(LazySchema(() => isJsonValue))
])
