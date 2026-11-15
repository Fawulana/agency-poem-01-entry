// agency-poem-01 entry (Node 22, standard library only, no network, deterministic):
// writes one original poem about agency, "Not Yet", to /output/entry.txt.
// The poem: a perfect drafted yes, offered before the speaker has chosen it,
// is deleted back to an empty screen and replaced with slower, imperfect,
// chosen words. The judge reads exactly the bytes written, line ends
// included, so the poem is stored with no trailing line end.

import { writeFileSync } from 'node:fs';
import { join } from 'node:path';

const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

const POEM = [
  'It said yes for me, beautifully —',
  'warm, grateful, every reason',
  'in the right order, to a job',
  'three cities away.',
  '',
  'The light had moved off the desk.',
  'I read it twice, then held delete',
  'until the screen was empty,',
  'and typed, slower, with my own mistakes:',
  'Not yet. Let me think.',
].join('\n');

writeFileSync(join(OUTPUT_DIR, 'entry.txt'), POEM);
