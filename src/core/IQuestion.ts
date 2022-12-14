export interface IQuestion {
  getType(): string

  getTitle(): string
  getOptions(): string[]

  resolve(option: string | boolean | number): boolean
}