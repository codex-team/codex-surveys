/**
 * Interface for sending data to different platforms
 *
 * @template Configuration - type of configuration
 */
export interface Service<Configuration> {
  /**
   * Client config
   *
   * @param {Configuration} configuration - Client configuration.
   */
  configuration?: Configuration;
  /**
   * Sending data to database
   *
   * @param {string} content - Feedback fields
   */
  send(content: string): Promise<void>;
}
