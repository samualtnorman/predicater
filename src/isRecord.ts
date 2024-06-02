import type { Key } from "@samual/lib"

export const isRecord = (value: unknown): value is Record<Key, unknown> => Boolean(value) && typeof value == `object`
