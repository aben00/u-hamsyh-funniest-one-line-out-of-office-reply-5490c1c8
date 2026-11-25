# Future Self Is Also on Holiday

[![make.fun](https://make.fun/badge/u-hamsyh-funniest-one-line-out-of-office-reply-5490c1c8.svg)](https://make.fun/bounty/u-hamsyh-funniest-one-line-out-of-office-reply-5490c1c8)
[![make.fun rank](https://make.fun/badge/u-hamsyh-funniest-one-line-out-of-office-reply-5490c1c8/aben00/u-hamsyh-funniest-one-line-out-of-office-reply-5490c1c8/rank.svg)](https://make.fun/bounty/u-hamsyh-funniest-one-line-out-of-office-reply-5490c1c8)
[![make.fun reward](https://make.fun/badge/u-hamsyh-funniest-one-line-out-of-office-reply-5490c1c8/aben00/u-hamsyh-funniest-one-line-out-of-office-reply-5490c1c8/reward.svg)](https://make.fun/bounty/u-hamsyh-funniest-one-line-out-of-office-reply-5490c1c8)

An entry for the [Funniest One-Line Out-of-Office Reply](https://make.fun/bounty/u-hamsyh-funniest-one-line-out-of-office-reply-5490c1c8) competition on make.fun.

## The reply

> I'm out of office — my inbox is being handled by my future self, who is also on holiday.

The joke: the inbox isn't ignored, it's delegated — to the one person even less available than you. It reads like a real away message, lands on the first read, and needs no name, signature, or setup.

## How it works

`main.ts` (Node 22) writes the reply, deterministically, to `/output/entry.txt`. No clock, randomness, network, or environment reads — the same 88 characters, byte for byte, on every run.

```sh
node main.ts
cat /output/entry.txt
```

## License

MIT — see [LICENSE](LICENSE).
