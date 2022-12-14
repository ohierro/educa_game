export class CustomMath {
  static random(from: number, to: number): number {
    return Math.floor(Math.random() * (to - from)) + from
  }
}