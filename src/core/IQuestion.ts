export interface IQuestion {
  getTitle(): string
  getOptions(): string[]
  resolve(): boolean
}