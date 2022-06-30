# Refactoring

You've been asked to refactor the function `deterministicPartitionKey` in [`dpk.js`](dpk.js) to make it easier to read and understand without changing its functionality. For this task, you should:

1. Write unit tests to cover the existing functionality and ensure that your refactor doesn't break it. We typically use `jest`, but if you have another library you prefer, feel free to use it.
2. Refactor the function to be as "clean" and "readable" as possible. There are many valid ways to define those words - use your own personal definitions, but be prepared to defend them. Note that we do like to use the latest JS language features when applicable.
3. Write up a brief (~1 paragraph) explanation of why you made the choices you did and why specifically your version is more "readable" than the original.

You will be graded on the exhaustiveness and quality of your unit tests, the depth of your refactor, and the level of insight into your thought process provided by the written explanation.

## Your Explanation Here
I simplified the fuction which was before
- if no event I immideately return TRIVIAL_PARTITION_KEY (no sense to read code farher and confuse the develiopers)
- I added createHash function because it's used twice
- Then I try get partition key if it's exist, if no I get hash of teh whole event object (this condition was simplified)
- If partition key is not a string then I stringify it
- The last condition I left, it's clear and easy
