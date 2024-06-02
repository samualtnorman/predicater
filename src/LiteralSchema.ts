export const LiteralSchema = <T>(literal: T) => (value: unknown): value is T => value === literal
