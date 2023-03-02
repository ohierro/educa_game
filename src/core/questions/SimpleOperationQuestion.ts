import { IQuestion } from "./IQuestion";

export class SimpleOperationQuestion implements IQuestion {
  constructor(private title: string,
              private members: Number[],
              private operators: String[],
              private solution: number) {
  }

  getType(): string {
    return 'SimpleOperation'
  }
  getTitle(): string {
    return this.title
  }
  getMembers(): Number[] {
    return this.members
  }
  getOperators(): String[] {
    return this.operators
  }
  getOptions(): string[] {
    throw new Error("Method not implemented.");
  }
  resolve(option: string | number | boolean): boolean {
    return option === this.solution
  }

}