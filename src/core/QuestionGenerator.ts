import { MathSimpleOperationGenerator } from "./generators/MathSimpleOperationGenerator";
import { MathTrueFalseGenerator } from "./generators/MathTrueFalseGenerator";
import { IQuestion } from "./IQuestion";
import { SimpleOperationQuestion } from "./SimpleOperationQuestion";
import { TrueFalseQuestion } from "./TrueFalseQuestion";

export class QuestionGenerator {
  constructor() {}

  public generate(questionNumber: number): IQuestion[] {
    const generator = new MathTrueFalseGenerator()
    const simpleOperationGenerator = new MathSimpleOperationGenerator()
    return [simpleOperationGenerator.generate(), generator.generate()]
    // return [new TrueFalseQuestion('Pregunta de prueba...')]
  }
}