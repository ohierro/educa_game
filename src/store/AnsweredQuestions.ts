import { IQuestion } from "../core/questions/IQuestion";

export class AnsweredQuestions implements IQuestion {
  answered: boolean = false
  okAnswered: boolean = false
  solution: string | number | boolean = 0

  constructor(private question: IQuestion) {
    // this.answered = false
    // this.okAnswered =
  }

  getType(): string {
    return this.question.getType()
  }
  getTitle(): string {
    return this.question.getTitle()
  }
  getOptions(): string[] {
    return this.question.getOptions()
  }
  resolve(option: string | number | boolean): boolean {
    return this.question.resolve(option)
  }

}