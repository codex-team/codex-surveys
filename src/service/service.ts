/**
 * Interface for sending data to different platforms
 */
export interface Service {
  /**
   * Sending data to database
   *
   * @param {string} content - Feedback fields
   */
  send(content: Record<string, string>): Promise<void>;
}
