export class CustomMath {
  /**
   * Generates a random number like [:from, to): `:from` inclusive to `:to` *exclusive*.
   * @param from 
   * @param to 
   */
  static random(from: number, to: number): number {
    return Math.floor(Math.random() * (to - from)) + from
  }

  static randomPair(from: number, to: number, distance: number = -1): number[] {
    if (distance === -1) {
      return [
        this.random(from, to),
        this.random(from, to)
      ]
    }

    let a = this.random(from, to)
    let b = 0
    do {
      b = a + this.random(0, distance)
    } while (b > to)

    return [b, a]
  }

  static randomBoolean(): boolean {
    return Math.random() >= 0.5
  }
}