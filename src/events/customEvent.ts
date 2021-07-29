import { EmittedEvent } from '@typing/events/customEvents';

/**
 * Emit a custom event
 *
 * @description use prefixed:kebab-case format
 * @example emitEvent('scope:event-name', { key: 'value }, document)
 */
export function emitEvent ({ type, elem = document, detail = null } : EmittedEvent): boolean {
  if (!type) {
    return false;
  }

  // Dispatch the event
  return elem.dispatchEvent(
    new CustomEvent(type, {
      bubbles: true,
      cancelable: true,
      detail
    })
  );
}
