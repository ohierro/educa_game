import { IQuestion } from "../questions/IQuestion";
import { IGenerator } from "./IGenerator";
import { MathSimpleOperationGenerator } from "./MathSimpleOperationGenerator";

export class MathListGenerator implements IGenerator {
  expressions = [
    `¿Cuanto es :a - :b?`,
    `¿Cuanto es :a + :b?`,
    `¿Cuanto es :a * :b?`,
  ]


  generate(count: number): IQuestion[] {
    const simpleOperator = new MathSimpleOperationGenerator()

    let generatedQuestion = simpleOperator.generate()

    throw new Error("Method not implemented.");
  }
}