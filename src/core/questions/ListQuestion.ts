import { IQuestion } from "./IQuestion";

export class ListQuestion implements IQuestion {
  title: string
  options: string[]
  correctAnswer: string

  constructor(title: string, options: string[], correctAnswer: string) {
    this.title = title
    this.options = options
    this.correctAnswer = correctAnswer
  }

  getType(): string {
    return 'List'
  }
  getTitle(): string {
    return this.title
  }
  getOptions(): string[] {
    return this.options
  }
  resolve(option: string | number | boolean): boolean {
    return option === this.correctAnswer
  }
}