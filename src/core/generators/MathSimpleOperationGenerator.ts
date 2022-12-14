import { CustomMath } from "../CustomMath";
import { SimpleOperationQuestion } from "../SimpleOperationQuestion";

export class MathSimpleOperationGenerator {

  expressions = [
    `Cuanto es :a - :b?`,
    `Cuanto es :a + :b?`,
    `Cuanto es :a * :b?`,
  ]

  public generate(): SimpleOperationQuestion {
    let a = CustomMath.random(1, 100)
    let b = CustomMath.random(1, 100)

    if (a < b) {
      // swap
      let c = a
      a = b
      b = c
    }

    return new SimpleOperationQuestion( this.expressions[0]
                                          .replace(':a', a.toString())
                                          .replace(':b', b.toString()), a - b)
  }
}