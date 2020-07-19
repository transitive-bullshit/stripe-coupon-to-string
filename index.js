'use strict'

module.exports = (coupon) => {
  if (!coupon.valid) {
    return 'invalid coupon'
  }

  let suffix = ''
  switch (coupon.duration) {
    case 'forever':
      suffix = 'forever'
      break
    case 'repeating': {
      const months = coupon.duration_in_months
      if (months < 1) {
        return 'invalid coupon'
      } else if (months === 1) {
        suffix = 'for the first month'
      } else {
        suffix = `for the first ${coupon.duration_in_months} months`
      }
      break
    }
    case 'once':
      suffix = 'once'
      break
  }

  const prefix = coupon.percent_off
    ? `${coupon.percent_off}% off`
    : `$${(coupon.amount_off / 100).toFixed(2)} off`

  return `${prefix} ${suffix}`
}
