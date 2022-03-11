import { hideBin } from 'yargs/helpers';
import yargs from 'yargs/yargs';

import { logger } from './logger';
import { yargsOptions } from './yargsOptions';

import { sync } from './index';

export async function cli(args: string[]): Promise<void> {
  const argv = await yargs(hideBin(args))
    .options(yargsOptions)
    .middleware((argv) => {
      logger.level = argv.verbose ? 'verbose' : 'info';
    }).argv;
  await sync(argv);
}
