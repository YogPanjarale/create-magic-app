import React from 'react';
import { Template, Zombi, mergePrompts } from 'zombi';
import { createScaffold } from 'core/utils/scaffold-helpers';
import { NpmClientPrompt, SecretApiKeyPrompt } from 'scaffolds/prompts';

type ExpressApiData = NpmClientPrompt.Data & SecretApiKeyPrompt.Data;

export default createScaffold<ExpressApiData>(
  (props) => (
    <Zombi {...props} prompts={mergePrompts(SecretApiKeyPrompt.questions, NpmClientPrompt.questions)}>
      <Template source="./" />
    </Zombi>
  ),

  {
    shortDescription: 'Express APIs',
    installDependenciesCommand: NpmClientPrompt.getInstallCommand,
    startCommand: NpmClientPrompt.getStartCommand('start'),
    flags: {
      ...NpmClientPrompt.flags,
      ...SecretApiKeyPrompt.flags,
    },
  },
);
