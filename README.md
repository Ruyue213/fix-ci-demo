# fix-ci live demo

A real end-to-end run of [fix-ci](https://github.com/Ruyue213/fix-ci): a deliberately broken repository, a red CI run, and the minimal fix that made it green again.

## The red → green story

| Stage | Evidence |
|---|---|
| Broken commit | [`cf9a998`](https://github.com/Ruyue213/fix-ci-demo/commit/cf9a998) — `applyDiscount(100, 20)` returns `-1900` instead of `80` |
| Failed CI run | [Run 43849925446](https://github.com/Ruyue213/fix-ci-demo/actions/runs/43849925446) — failed at `Run tests` with `AssertionError: -1900 !== 80` |
| Diagnosis | fix-ci fetched and filtered the logs, classified a `test` failure, reproduced it locally, and found `percent` treated as a fraction |
| Minimal fix | [`a3abad3`](https://github.com/Ruyue213/fix-ci-demo/commit/a3abad3) — one line in `math.js`: `price * (1 - percent / 100)`, no test changes |
| Green CI run | [Run 43850108007](https://github.com/Ruyue213/fix-ci-demo/actions/runs/43850108007) — success |

## Try it yourself

1. Install fix-ci into your agent host:

   ```bash
   git clone https://github.com/Ruyue213/fix-ci.git
   cp -R fix-ci ~/.claude/skills/fix-ci   # or your host's skills directory
   ```

2. Copy a broken fixture from [fix-ci/demo/fixtures](https://github.com/Ruyue213/fix-ci/tree/main/demo/fixtures) into a scratch repo — five failure classes are ready to reproduce.

3. Ask your agent: “CI 挂了，帮我看看”.

This repository started life as [`02-failing-test`](https://github.com/Ruyue213/fix-ci/tree/main/demo/fixtures/02-failing-test).
