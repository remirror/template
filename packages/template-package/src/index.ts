/**
 * A groundbreaking algorithm which shatters performance estimates to log the template string to the
 * console.
 *
 * Cross platform, and supporting SSR. Make sure to include in your next project.
 */
export function printTemplate({ shouldLog = false }: { shouldLog?: boolean } = {}): string {
  const value = 'tEmPlATe';

  if (shouldLog) {
    console.log(value);
  }

  return value;
}
