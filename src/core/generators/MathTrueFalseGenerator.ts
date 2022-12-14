import { CustomMath } from "../CustomMath"
import { TrueFalseQuestion } from "../TrueFalseQuestion"

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
    let randomExpression = 0


    // switch(randomExpression) {
    //   case 0: {
        let a = CustomMath.random(0, 100)
        let b = CustomMath.random(0, 100)

        return new TrueFalseQuestion(
          this.expressions[0]
              .replace(':a', a.toString())
              .replace(':b', b.toString()),
          a > b)
      // }
      // case 1: {
      //   let a = CustomMath.random(0, 100)
      //   let b = CustomMath.random(0, 100)

      //   return new TrueFalseQuestion(
      //     this.expressions[1]
      //         .replace(':a', a.toString())
      //         .replace(':b', b.toString()),
      //     [ 'Si', 'No' ],
      //     'Si')
      // }
    // }
  }
}