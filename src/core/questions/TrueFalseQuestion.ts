import { IQuestion } from "./IQuestion";

export class TrueFalseQuestion implements IQuestion {
  title: string
  options: string[]
  correctAnswer: boolean

  constructor(title: string, correctAnswer: boolean) {
    this.title = title
    this.options = [ 'Sí', 'No' ]
    this.correctAnswer = correctAnswer
  }

  getType(): string {
    return 'TrueFalse'
  }

  getTitle(): string {
    return this.title
  }
  getOptions(): string[] {
    return this.options
  }
  resolve(option: boolean): boolean {
    return option === this.correctAnswer
  }

}