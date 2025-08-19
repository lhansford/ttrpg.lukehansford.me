import { rm, cp, stat } from 'fs/promises';
import path from 'path';
import { styleText } from 'util';

import { CAMPAIGNS, CONTENT_TYPES } from '../src/constants.ts';

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
  for (const type of CONTENT_TYPES) {
    const srcContentDir = `${srcDir}/${type}`;
    const srcContentDirExists = await stat(srcContentDir).catch(() => false);
    if (!srcContentDirExists) {
      console.error(`Campaign does not have required directories: ${srcContentDir}`);
      return;
    }
    await cp(srcContentDir, `./src/data/${campaignSlug}/${type}`, { recursive: true });
  }

  console.log(`Moving assets for ${campaignSlug}...`);
  await cp(`${srcDir}/_files`, `./public/_files`, {
    recursive: true,
  });

  console.log(styleText('green', `Sync of ${campaignSlug} complete.`));
}

console.log('Clearing static files...');
await rm('./public/_files', { recursive: true, force: true });

for (const campaign of CAMPAIGNS) {
  await syncNotes(campaign.id, path.join(process.env.HOME!, campaign.srcDir));
}
