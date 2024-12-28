// BigInt allows working with numbers larger than Number.MAX_SAFE_INTEGER
// The '_' in numbers helps with readability and is ignored by JavaScript

// Example of a large bank balance that exceeds normal Number limits
const tomsBankBalanceGBP = BigInt(9_007_199_254_740_991_345)

// Verify that the type is indeed 'bigint'
console.log(typeof (tomsBankBalanceGBP))