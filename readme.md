# stripe-coupon-to-string

> Converts a [Stripe Coupon](https://stripe.com/docs/api/coupons/object) to a string that describes the discount.

[![NPM](https://img.shields.io/npm/v/stripe-coupon-to-string.svg)](https://www.npmjs.com/package/stripe-coupon-to-string) [![Build Status](https://travis-ci.com/transitive-bullshit/stripe-coupon-to-string.svg?branch=master)](https://travis-ci.com/transitive-bullshit/stripe-coupon-to-string) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save stripe-coupon-to-string
```

## Usage

```js
const stripeCouponToString = require('stripe-coupon-to-string')

const coupon = {
  "id": "25_5OFF",
  "object": "coupon",
  "amount_off": null,
  "created": 1595185912,
  "currency": "usd",
  "duration": "repeating",
  "duration_in_months": 3,
  "livemode": false,
  "max_redemptions": null,
  "metadata": {},
  "name": "25.5% off",
  "percent_off": 25.5,
  "redeem_by": null,
  "times_redeemed": 0,
  "valid": true
}

stripeCouponToString(coupon) // '25.5% off for the first 3 months'
```

## License

MIT © [Travis Fischer](https://github.com/transitive-bullshit)

Support my OSS work by <a href="https://twitter.com/transitive_bs">following me on twitter <img src="https://storage.googleapis.com/saasify-assets/twitter-logo.svg" alt="twitter" height="24px" align="center"></a>
