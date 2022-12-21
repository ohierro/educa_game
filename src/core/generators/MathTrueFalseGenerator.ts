import { CustomMath } from "../util/CustomMath"
import { TrueFalseQuestion } from "../questions/TrueFalseQuestion"

export class MathTrueFalseGenerator {
  // expressions = {
  //   greaterThan: {
  //     title: `:a es mayor que :b?`
  //   },
  //   lessThan: {
  //     title: `:a es menor que :b?`
  //   },
  //   addOperation: {
  //     title: `:a más :b es igual a :c`
  //   },
  //   mulOperation: {
  //     title: `:a por :b es igual a :c`
  //   }
  // }

  expressions = [
      `:a es mayor que :b?`,
      `:a es menor que :b?`,
      `:a más :b es igual a :c`,
      `:a por :b es igual a :c`
  ]

  public generate(): TrueFalseQuestion {
    // let randomExpression = Math.floor(Math.random() * this.expressions.length)
    let randomExpression = CustomMath.random(0, 4)
    console.log(`generated ${randomExpression}`);

    switch(randomExpression) {
      case 0: {
        let a = CustomMath.random(0, 100)
        let b = CustomMath.random(0, 100)

        return new TrueFalseQuestion(
          this.expressions[0]
              .replace(':a', a.toString())
              .replace(':b', b.toString()),
          a > b)
      }
      case 1: {
        let a = CustomMath.random(0, 100)
        let b = CustomMath.random(0, 100)

        return new TrueFalseQuestion(
          this.expressions[1]
              .replace(':a', a.toString())
              .replace(':b', b.toString()),
          a < b)
      }
      case 2: {
        let [a, b] =  CustomMath.randomPair(0, 100, 20)

        if (CustomMath.randomBoolean()) {
          return new TrueFalseQuestion(
            this.expressions[2]
                .replace(':a', a.toString())
                .replace(':b', b.toString())
                .replace(':c', (a + b).toString()),
            true)
        } else {
          let diff = CustomMath.random(1, 10)
          return new TrueFalseQuestion(
            this.expressions[3]
                .replace(':a', a.toString())
                .replace(':b', b.toString())
                .replace(':c', (a + b + diff).toString()),
            false)
        }
      }
      case 3: {
        let [a, b] =  CustomMath.randomPair(0, 10, 9)

        if (CustomMath.randomBoolean()) {
          return new TrueFalseQuestion(
            this.expressions[3]
                .replace(':a', a.toString())
                .replace(':b', b.toString())
                .replace(':c', (a * b).toString()),
            true)
        } else {
          let diff = CustomMath.random(1, 10)
          return new TrueFalseQuestion(
            this.expressions[0]
                .replace(':a', a.toString())
                .replace(':b', b.toString())
                .replace(':c', (a * b + diff).toString()),
            false)
        }
      }
      default:
        throw new Error('undefined question type')
    }
  }
}