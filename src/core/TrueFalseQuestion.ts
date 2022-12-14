import { IQuestion } from "./IQuestion";

export class TrueFalseQuestion implements IQuestion {
  title: string
  options: string[]

  constructor(title: string) {
    this.title = title
    this.options = ['uno', 'dos', 'tres']
  }

  getTitle(): string {
    return this.title
  }
  getOptions(): string[] {
    return ['true', 'false']
  }
  resolve(): boolean {
    throw new Error("Method not implemented.");
  }

}