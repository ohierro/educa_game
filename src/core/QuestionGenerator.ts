import { IQuestion } from "./IQuestion";
import { TrueFalseQuestion } from "./TrueFalseQuestion";

export class QuestionGenerator {
  constructor() {}

  public generate(questionNumber: number): IQuestion[] {
    return [new TrueFalseQuestion('Pregunta de prueba...')]
  }
}