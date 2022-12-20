import { CustomMath } from "../util/CustomMath";
import { MathSimpleOperationGenerator } from "../generators/MathSimpleOperationGenerator";
import { MathTrueFalseGenerator } from "../generators/MathTrueFalseGenerator";
import { IQuestion } from "./IQuestion";
import { SimpleOperationQuestion } from "./SimpleOperationQuestion";
import { TrueFalseQuestion } from "./TrueFalseQuestion";

export class QuestionGenerator {
  constructor() {}

  public generate(questionNumber: number): IQuestion[] {
    const generator = new MathTrueFalseGenerator()
    const simpleOperationGenerator = new MathSimpleOperationGenerator()

    let questions = []
    for (let i = 0; i < 10; i++) {
      // if (CustomMath.random(0,10) < 5) {
        questions.push(generator.generate())
      // } else {
      //   questions.push(simpleOperationGenerator.generate())
      // }
    }

    return questions
    // return [simpleOperationGenerator.generate(), generator.generate()]
    // return [new TrueFalseQuestion('Pregunta de prueba...')]
  }
}