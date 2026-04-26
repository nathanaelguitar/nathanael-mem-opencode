/**
 * Map OpenCode session IDs to claude-mem session IDs
 */
const DEBUG = process.env.CLAUDE_MEM_OPENCODE_DEBUG === 'true';
export class SessionMapper {
    mapping = new Map();
    /**
     * Map OpenCode session ID to claude-mem session ID
     */
    mapOpenCodeToClaudeMem(openCodeSessionId, claudeMemSessionId) {
        this.mapping.set(openCodeSessionId, claudeMemSessionId);
        if (DEBUG) {
            console.log(`[SESSION_MAPPER] Mapped ${openCodeSessionId} → ${claudeMemSessionId}`);
        }
    }
    /**
     * Get claude-mem session ID for OpenCode session
     */
    getClaudeMemSessionId(openCodeSessionId) {
        return this.mapping.get(openCodeSessionId);
    }
    /**
     * Get OpenCode session ID for claude-mem session
     */
    getOpenCodeSessionId(claudeMemSessionId) {
        for (const [openCodeId, claudeMemId] of this.mapping.entries()) {
            if (claudeMemId === claudeMemSessionId) {
                return openCodeId;
            }
        }
        return undefined;
    }
    /**
     * Remove session mapping
     */
    unmapSession(openCodeSessionId) {
        this.mapping.delete(openCodeSessionId);
        if (DEBUG) {
            console.log(`[SESSION_MAPPER] Unmapped ${openCodeSessionId}`);
        }
    }
    /**
     * Get all mappings
     */
    getAllMappings() {
        return new Map(this.mapping);
    }
    /**
     * Check if session is mapped
     */
    hasSession(openCodeSessionId) {
        return this.mapping.has(openCodeSessionId);
    }
    /**
     * Get number of mappings
     */
    size() {
        return this.mapping.size;
    }
    /**
     * Clear all mappings
     */
    clear() {
        this.mapping.clear();
        if (DEBUG) {
            console.log('[SESSION_MAPPER] Cleared all mappings');
        }
    }
}
//# sourceMappingURL=session-mapper.js.map