import { rm, cp, stat } from 'fs/promises';
import path from 'path';
import { styleText } from 'util';

import { CAMPAIGNS } from '../src/constants.ts';

const IGNORED_DIRS = ['.obisidian', '_templates'];

async function syncNotes(campaignSlug: string, srcDir: string) {
  console.log(`Syncing notes for campaign: ${campaignSlug}`);
  const destDirExists = await stat(`./src/pages/${campaignSlug}`).catch(() => false);
  const srcDirExists = await stat(srcDir).catch(() => false);
  if (!srcDirExists) {
    console.error(`Source directory does not exist: ${srcDir}`);
    return;
  }
  if (destDirExists) {
    console.log(`Removing old notes...`);
    await rm(`./src/data/${campaignSlug}`, { recursive: true, force: true });
  }
  console.log(`Copying new notes...`);
  await cp(srcDir, `./src/data/${campaignSlug}`, { recursive: true });
  for (const dir of IGNORED_DIRS) {
    await rm(`./src/data/${campaignSlug}/${dir}`, {
      recursive: true,
      force: true,
    });
  }

  console.log(`Moving assets for ${campaignSlug}...`);
  await cp(`./src/data/${campaignSlug}/_files`, `./public/_files`, {
    recursive: true,
  });
  await rm(`./src/data/${campaignSlug}/_files`, {
    recursive: true,
    force: true,
  });

  console.log(styleText('green', `Sync of ${campaignSlug} complete.`));
}

console.log('Clearing static files...');
await rm('./public/_files', { recursive: true, force: true });

for (const campaign of CAMPAIGNS) {
  await syncNotes(campaign.id, path.join(process.env.HOME!, campaign.srcDir));
}
