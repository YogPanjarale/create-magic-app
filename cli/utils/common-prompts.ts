/* eslint-disable @typescript-eslint/no-namespace */

import { Questions } from 'zombi';

/**
 * Types and questions related to Magic public API key selection.
 */
export namespace PublicApiKeyPrompt {
  export type Data = {
    publicApiKey: 'npm' | 'yarn';
  };

  export const questions: Questions<Data> = {
    type: 'input',
    name: 'publicApiKey',
    message: 'Enter your Magic public API key:',
  };

  export const docs: Record<keyof Data, string> = {
    publicApiKey: 'The Magic public API key for your app.',
  };
}

/**
 * Types and questions related to NPM client selection for JS-based projects.
 */
export namespace NpmClientPrompt {
  export type Data = {
    npmClient: 'npm' | 'yarn';
  };

  export const questions: Questions<Data> = {
    type: 'select',
    name: 'npmClient',
    message: 'Choose an NPM client:',
    choices: ['npm', 'yarn'],
  };

  export const docs: Record<keyof Data, string> = {
    npmClient: 'The NPM client of your choice. (one of: npm, yarn)',
  };

  export function getInstallCommand(data: Data) {
    return data.npmClient === 'npm' ? 'npm install' : 'yarn install';
  }

  export function getStartCommand(data: Data) {
    return data.npmClient === 'npm' ? 'npm start' : 'yarn start';
  }
}