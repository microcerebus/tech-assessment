import type { CodegenConfig } from '@graphql-codegen/cli'
// @ts-ignore
import { loadEnvConfig } from '@next/env'

loadEnvConfig(process.cwd())

const hasuraAdminSecret = process.env['HASURA_ADMIN_SECRET'] ?? ''

const config: CodegenConfig = {
  schema: [
    {
      'http://localhost:8080/v1/graphql': {
        headers: {
          'x-hasura-admin-secret': hasuraAdminSecret,
        },
      },
    },
  ],
  documents: ['src/**/*.tsx'],
  ignoreNoDocuments: true,
  generates: {
    './src/graphql/': {
      preset: 'client',
      config: {
        documentMode: 'string',
      },
    },
    './schema.graphql': {
      plugins: ['schema-ast'],
      config: {
        includeDirectives: true,
      },
    },
  },
}

export default config
