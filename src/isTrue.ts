import type { Predicate } from "."
import { LiteralSchema } from "./LiteralSchema"

export const isTrue: Predicate<true> = LiteralSchema(true)
