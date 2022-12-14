import { IQuestion } from "./IQuestion";

export class SimpleOperationQuestion implements IQuestion {
  title: string
  solution: number

  constructor(title: string, solution: number) {
    this.title = title
    this.solution = solution
  }

  getType(): string {
    return 'SimpleOperation'
  }

  getTitle(): string {
    return this.title
  }
  getOptions(): string[] {
    throw new Error("Method not implemented.");
  }
  resolve(option: string | number | boolean): boolean {
    return option === this.solution
  }

}