# Don't Let Code Coverage Drive Development

Code coverage is a concept software developers use to track how much of our code we are testing. Its purpose
is to serve as a proxy for how "good" our testing is. Our assumption is that if we have high code coverage, chances
are our code is well-tested and therefore safe to deploy to production. However, this is a dangerous assumption to make.
If we assign higher value to code coverage than we do to the actual tests we write, the quality of our tests will
decline.

## Why We Test

Before diving deeper into how we use code coverage, we should ask ourselves why we write tests in the first place.
We write tests because we want to achieve and maintain high code quality (that is, code that _works_). Our
code quality needs are:

1. We need to prove that our code works now
2. We need something to notify us when we break something later

Does code coverage help us meet either of these needs? For our first need, high code coverage could be an
indicator that our code works, but it certainly doesn't prove it directly. For our second need, a code coverage tool
itself cannot indicate when changing one thing breaks another; that's the job of the tests. So do we need code coverage
to meet our code quality needs? Hm...

## Code Coverage Thresholds

I don't think _tracking_ code coverage over time is necessarily a bad thing, but problems arise when code coverage
_thresholds_ are enforced.

### Problem #1: Setting the thresholds

Generally there four types of coverage: branches, statements, lines, and functions. What percentage of each of these
should be executed in our tests?

For functions, I would say for each function you write, there should be some test
that calls it. If a function is complex, write multiple test cases for it in isolation. If a function is simple
and only returns one thing, you probably don't need a separate test for it, but it should be getting called _somewhere_,
perhaps in another function you are testing. So functions should have a threshold of 100%.

As for branches, statements, and lines, what's the magic percentage that everyone agrees is sufficient? The answer:
there isn't one. Setting values for these thresholds is completely arbitrary and can have no objective or logical
reasoning behind it. Usually, people just pick a number and say "yeah, that seems pretty high, so we'll go with that".

### Problem #2: Lack of trust

To me, code coverage thresholds are a good-faith effort made by experienced developers and managers to force everyone to
write good tests (even though, in reality, all this does is train developers to get _really good_ at meeting the code
coverage thresholds). But the premise here is that if we didn't have these thresholds, that developers can't be trusted
to write quality, well-tested code.

I think the lack of trust is the larger issue. We should put automation in place to _help_ developers avoid common
mistakes, but we can't fully automate high code quality or clean code. I think a better alternative to blindly
enforcing code coverage could be to pair program more and gradually instill good development practices in everyone.

### Problem #3: Encouraging bad behavior

Software developers are smart. If you block them from getting work done, they will do anything they
can to unblock themselves. That includes "gaming the system" by doing the minimum work required to meet code coverage
thresholds. As a consequence, developers get _worse_ at writing good tests.

Let's take an example where we want to write a complex function that returns an output given multiple inputs:

* If I'm doing test-driven development, I am forced to start by thinking about key use cases for this function.
  If I pass these inputs, I expect this to happen. If I pass those inputs, I expect that to happen. And so on.
  So I write each test and immediately make each one pass. Once I have covered all the use cases I know are important,
  and all my tests pass, I know I am done, and I know that my code works. I don't need to change my tests or my code
  until I need to change or add a use case.

* If I have code coverage thresholds to meet, my development cycle looks much different. If I try to do test-driven
  development, I go through the same steps, but by the end I might not have met a coverage threshold. Maybe I didn't
  write a test for each level in a long optional chain because that's uninteresting, so my branch coverage is "too low".
  But I'm already done by definition. I shouldn't need to write any more tests or code once I have proved all the
  important use cases work properly. But I am now forced to write tests explicitly to satisfy the code coverage
  threshold,
  instead of writing tests to drive value for a user. If we look at it from a user's perspective, satisfying code
  coverage
  when doing TDD adds no value whatsoever.

So given that outcome, why would I practice test-driven development if I know I will have to bow down to the coverage
tool later? I am far more incentivized to write an untested, crude solution first and then do the minimum work
required to meet coverage thresholds. The tests that result from this workflow have the potential to be frighteningly
valueless, since there is no guarantee I am using meaningful assertions or testing interesting use cases. But hey,
at least I know my code is being executed...

## The Right Way

Here are some strategies I believe can more effectively help us accomplish our testing goals:

* Continuously refactor code to remove redundancy.
    * If you must use a code coverage tool, see if you can minimize the
      amount of code it analyzes. The more code you have, the more you will be forced to "cover".
      If a branch of logic can't actually happen, don't account for it. Use strongly-typed languages to your advantage!

* Encourage test-driven development, not coverage-driven development.
    * Putting more emphasis on valuable, meaningful
      tests help us release with more confidence that our system is working properly, no matter what a code coverage
      report
      might say.

* Enforce a test-first "rule" during the development process.
    * If you're doing asynchronous pull request reviews,
      insist on reviewing the tests first before the code is written. This would align everyone's expectations of how
      the code should be working, and if too few tests have been written. If you're doing synchronous pair programming,
      play [ping pong](https://openpracticelibrary.com/practice/ping-pong-programming/#:~:text=What%20Is%20Ping%2DPong%20Programming,of%20Pair%20Programming%20and%20TDD.)
      .

If writing tests feels like a chore, that could mean your tests are worthless. The next time you find yourself
writing tests, rely on test-driven development to make it interesting and valuable!
