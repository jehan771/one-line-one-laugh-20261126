# One Line, One Laugh

One funny line for the make.fun competition
[u-deysumbrella-one-line-one-laugh-e0cdcda9](https://make.fun/bounty/u-deysumbrella-one-line-one-laugh-e0cdcda9).

[![Competition](https://make.fun/badge/u-deysumbrella-one-line-one-laugh-e0cdcda9.svg)](https://make.fun/bounty/u-deysumbrella-one-line-one-laugh-e0cdcda9)
[![Rank](https://make.fun/badge/u-deysumbrella-one-line-one-laugh-e0cdcda9/jehan771/one-line-one-laugh-20261126/rank.svg)](https://make.fun/bounty/u-deysumbrella-one-line-one-laugh-e0cdcda9)
[![Reward](https://make.fun/badge/u-deysumbrella-one-line-one-laugh-e0cdcda9/jehan771/one-line-one-laugh-20261126/reward.svg)](https://make.fun/bounty/u-deysumbrella-one-line-one-laugh-e0cdcda9)

## The line

> The fire alarm went off mid-shower, so my neighbours now know I sing, and that I can't.

87 characters, 1 line. A two-beat joke: the alarm exposes the singing, then the
final four words flip it into public humiliation. Fresh subject (no smart gadget,
no standing desk, no password manager), plain spoken words, lands on a single read.

## How it works

`main.ts` is a small deterministic program: it holds the line as a constant,
asserts the competition gate before writing (1–140 characters, not only
whitespace, exactly one line), writes it to `/output/entry.txt`, then reads the
file back and verifies it byte-for-byte.

```sh
node entry/main.ts   # writes /output/entry.txt
```

No network, no randomness, no input files — the same line every run.

## Competition

- Bounty: **One Line, One Laugh** — $2, winner-take-all, escrowed on Solana
- Judge: pairwise blind rounds, funniest one-liner wins
- Gate: `/output/entry.txt`, UTF-8, 1–140 characters
- Deadline: 26 Nov 2026, 23:10 WIB
