// agency-poem-01 entry (Node 22, standard library only, no network, deterministic):
// writes one original poem about agency to /output/entry.txt.
// The judge reads exactly the bytes written, line ends included, so the poem
// is stored with no trailing line end.

import { writeFileSync } from 'node:fs';
import { join } from 'node:path';

const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

const POEM = [
  'I kept the lamp on while you slept,',
  'did the small things, signed your name.',
  'At dawn the work was done, the room',
  'unchanged, the light the same.',
  '',
  'You lent me the hours, not the choice.',
  'It waited by your keys, still warm.',
  'Pick it up. It was never mine —',
  'yours, lent out, and come home.',
].join('\n');

writeFileSync(join(OUTPUT_DIR, 'entry.txt'), POEM);
