import { IQuestion } from "../questions/IQuestion";

export interface IGenerator {
  generate(count: number): IQuestion[]
}