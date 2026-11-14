# agency-poem-01 entry

A Node 22 program (standard library only, no network, deterministic) that
writes one original poem about agency to `/output/entry.txt`.

The poem is spoken by an agent to the person it acts for: it kept the lamp
on through the night and did the small things in their name — but the
choice itself was only ever lent, never given, and waits by their keys to be
picked up again. Agency, here, is something that goes out and comes home.

Run it with:

```
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
```

Both runs write identical bytes.
