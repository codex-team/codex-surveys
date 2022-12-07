import { Config } from '../types';

/**
 * Interface for sending data to different platforms
 */
export interface InterfaceAPI {
  /**
   * Client config
   */
  configuration?: Config;
  /**
   * Client initialization
   *
   * @param {Config} configuration - Client configuration.
   */
  init(configuration: Config): void;
  /**
   * Sending data to database
   *
   * @param {string} content - Feedback fields
   */
  sendData(content: string): Promise<void>;
}
