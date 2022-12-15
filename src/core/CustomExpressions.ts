export class CustomExpressions {
  static replace(expression: string, options: any): string {
    let copy = expression
    let keys = Object.keys(options)
    keys.forEach(key => copy = copy.replaceAll(`:${key}`, options[key]))

    return copy
  }
}