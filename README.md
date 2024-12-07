# JavaScript Loose Comparison Pitfalls with NaN and +/- 0

This repository demonstrates an uncommon JavaScript bug related to loose comparison (==) and its behavior with NaN (Not a Number) and positive/negative zero.

## The Bug
The core issue lies in how JavaScript handles NaN and the distinction between +0 and -0 during loose comparisons.  The provided `foo` function intends to compare two values for equality. However, due to how loose comparison operates, certain inputs will yield unexpected results:

* `NaN == NaN` evaluates to `false`.  NaN is never equal to itself, even using loose comparison.
* `0 == -0` evaluates to `true`.  JavaScript treats +0 and -0 as equal during loose comparisons.

These inconsistencies can lead to subtle and difficult-to-debug errors in applications where these values might unexpectedly appear.