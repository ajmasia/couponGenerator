import { getHighestNumOf, padNumber } from '../../../utils'

export default {
  secuential: (initValue: number, digits: number, amount: number): string[] => {
    const maxNumber = getHighestNumOf(digits)

    if (initValue > maxNumber - amount + 1) {
      return ['Error: Initial value It is higher than allowed']
    }

    const result: string[] = Array.from(Array(amount), (x, index) => {
      const num: number = index + initValue

      return padNumber(num.toString(), digits)
    })

    return result
  },
}
