/**
 * Map OpenCode session IDs to claude-mem session IDs
 */

const DEBUG = process.env.CLAUDE_MEM_OPENCODE_DEBUG === 'true'

export class SessionMapper {
  private mapping: Map<string, number> = new Map()

  /**
   * Map OpenCode session ID to claude-mem session ID
   */
  mapOpenCodeToClaudeMem(openCodeSessionId: string, claudeMemSessionId: number): void {
    this.mapping.set(openCodeSessionId, claudeMemSessionId)
    if (DEBUG) {
      console.log(`[SESSION_MAPPER] Mapped ${openCodeSessionId} → ${claudeMemSessionId}`)
    }
  }

  /**
   * Get claude-mem session ID for OpenCode session
   */
  getClaudeMemSessionId(openCodeSessionId: string): number | undefined {
    return this.mapping.get(openCodeSessionId)
  }

  /**
   * Get OpenCode session ID for claude-mem session
   */
  getOpenCodeSessionId(claudeMemSessionId: number): string | undefined {
    for (const [openCodeId, claudeMemId] of this.mapping.entries()) {
      if (claudeMemId === claudeMemSessionId) {
        return openCodeId
      }
    }
    return undefined
  }

  /**
   * Remove session mapping
   */
  unmapSession(openCodeSessionId: string): void {
    this.mapping.delete(openCodeSessionId)
    if (DEBUG) {
      console.log(`[SESSION_MAPPER] Unmapped ${openCodeSessionId}`)
    }
  }

  /**
   * Get all mappings
   */
  getAllMappings(): Map<string, number> {
    return new Map(this.mapping)
  }

  /**
   * Check if session is mapped
   */
  hasSession(openCodeSessionId: string): boolean {
    return this.mapping.has(openCodeSessionId)
  }

  /**
   * Get number of mappings
   */
  size(): number {
    return this.mapping.size
  }

  /**
   * Clear all mappings
   */
  clear(): void {
    this.mapping.clear()
    if (DEBUG) {
      console.log('[SESSION_MAPPER] Cleared all mappings')
    }
  }
}
