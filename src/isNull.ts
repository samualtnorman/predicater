import type { Predicate } from "."
import { LiteralSchema } from "./LiteralSchema"

export const isNull: Predicate<null> = LiteralSchema(null)
