export const LiteralSchema = <const T>(literal: T) => (value: unknown): value is T => value === literal
