import { ClaudeMemIntegration } from './integration/index.js'

const DEBUG = process.env.CLAUDE_MEM_OPENCODE_DEBUG === 'true'

export default async function plugin(input: {
  client: any
  project: any
  directory: string
  worktree: string
  serverUrl: URL
  $: any
}) {
  if (DEBUG) {
    console.log('[CLAUDE_MEM_OPENCODE] Plugin loaded')
  }

  const integration = new ClaudeMemIntegration()

  try {
    await integration.initialize()
    if (DEBUG) {
      console.log('[CLAUDE_MEM_OPENCODE] ✅ Integration initialized')
    }
  } catch (error) {
    console.error('[CLAUDE_MEM_OPENCODE] ❌ Initialization failed:', error)
  }

  return {
    event: async ({ event }: { event: any }) => {
      // Event handling done internally by EventListeners
    }
  }
}
