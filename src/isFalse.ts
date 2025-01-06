import type { Predicate } from "."
import { LiteralSchema } from "./LiteralSchema"

export const isFalse: Predicate<false> = LiteralSchema(false)
