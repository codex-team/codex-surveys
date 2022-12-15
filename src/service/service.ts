/**
 * Interface for sending data to different platforms
 */
export interface Service {
  /**
   * Sending data to database
   *
   * @param {string} content - Feedback fields
   */
  send(content: string): Promise<void>;
}
