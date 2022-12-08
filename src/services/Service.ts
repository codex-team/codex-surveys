/**
 * Interface for sending data to different platforms
 *
 * @template T - type of configuration
 */
export interface Service<T> {
  /**
   * Client config
   *
   * @param {T} configuration - Client configuration.
   */
  configuration?: T;
  /**
   * Sending data to database
   *
   * @param {string} content - Feedback fields
   */
  sendData(content: string): Promise<void>;
}
