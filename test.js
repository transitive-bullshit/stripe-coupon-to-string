'use strict'

const test = require('ava')
const stripeCouponToString = require('.')

const fixtures = [
  {
    id: '25_5OFF',
    object: 'coupon',
    amount_off: null,
    created: 1595185912,
    currency: 'usd',
    duration: 'repeating',
    duration_in_months: 3,
    livemode: false,
    max_redemptions: null,
    metadata: {},
    name: '25.5% off for 3 months',
    percent_off: 25.5,
    redeem_by: null,
    times_redeemed: 0,
    valid: true
  },
  {
    id: '25_OFF',
    object: 'coupon',
    amount_off: null,
    created: 1595185912,
    currency: 'usd',
    duration: 'repeating',
    duration_in_months: 1,
    livemode: false,
    max_redemptions: null,
    metadata: {},
    name: '25% off once',
    percent_off: 25,
    redeem_by: null,
    times_redeemed: 0,
    valid: true
  },
  {
    id: '25_OFF',
    object: 'coupon',
    amount_off: null,
    created: 1595185912,
    currency: 'usd',
    duration: 'repeating',
    duration_in_months: 1,
    livemode: false,
    max_redemptions: null,
    metadata: {},
    name: 'invalid',
    percent_off: 25,
    redeem_by: null,
    times_redeemed: 0,
    valid: false
  },
  {
    id: 'foobar',
    object: 'coupon',
    amount_off: null,
    created: 1595185912,
    currency: 'usd',
    duration: 'forever',
    livemode: false,
    max_redemptions: null,
    metadata: {},
    name: '50% off forever',
    percent_off: 50,
    redeem_by: null,
    times_redeemed: 0,
    valid: true
  },
  {
    id: 'foobar',
    object: 'coupon',
    amount_off: 1000,
    created: 1595185912,
    currency: 'usd',
    duration: 'once',
    livemode: false,
    max_redemptions: null,
    metadata: {},
    name: '$10 off once',
    percent_off: null,
    redeem_by: null,
    times_redeemed: 0,
    valid: true
  }
]

for (const fixture of fixtures) {
  test(fixture.name, async (t) => {
    const s = stripeCouponToString(fixture)
    console.log(s, fixture)
    t.truthy(s)
    t.snapshot(s)
  })
}
