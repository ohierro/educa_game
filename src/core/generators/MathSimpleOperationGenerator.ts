import { CustomExpressions } from "../util/CustomExpressions";
import { CustomMath } from "../util/CustomMath";
import { SimpleOperationQuestion } from "../questions/SimpleOperationQuestion";

export class MathSimpleOperationGenerator {

  expressions = [
    `¿Cuanto es :a - :b?`,
    `¿Cuanto es :a + :b?`,
    `¿Cuanto es :a * :b?`,
  ]

  public generate(): SimpleOperationQuestion {
    let op = CustomMath.random(0, this.expressions.length)
    let operators = CustomMath.randomPair(0, 100, 20)
    let result = -1

    switch(op) {
      case 0:
        operators = CustomMath.randomPair(0, 100, 20)
        result = operators[0] - operators[1]
        break
      case 1:
        operators = CustomMath.randomPair(0, 100, 20)
        result = operators[0] + operators[1]
        break
      case 2:
        operators = CustomMath.randomPair(0, 10, 9)
        result = operators[0] * operators[1]
        break
    }

    console.log(`op ${op}: ${operators[0]}, ${operators[1]} = ${result}`);

    return new SimpleOperationQuestion(
        CustomExpressions.replace(this.expressions[op], { a: operators[0], b: operators[1] }),
        result)
  }
}