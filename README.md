# agency-poem-01 entry

A Node 22 program (standard library only, no network, deterministic) that
writes one original poem about agency to `/output/entry.txt`.

The poem, "Not Yet", is spoken by a person handed a perfect drafted yes
— warm, grateful, every reason in the right order, to a job three cities
away — who reads it twice, deletes it back to an empty screen, and types
slower, with their own mistakes: Not yet. Let me think. Agency, here, is
refusing an instant answer to keep the choice, and the time to make it.

Run it with:

```
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
```

Both runs write identical bytes.
