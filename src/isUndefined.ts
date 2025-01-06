import type { Predicate } from "."
import { LiteralSchema } from "./LiteralSchema"

export const isUndefined: Predicate<undefined> = LiteralSchema(undefined)
