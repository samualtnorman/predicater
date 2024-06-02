export type Predicate<T> = (value: any) => value is T
export type PredicateType<T> = T extends (value: any) => value is infer U ? U : never
