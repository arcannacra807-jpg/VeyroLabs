const NEURO_URL = 'http://localhost:8765/event';
const NEURO_KEY = '026686481ee40aa2f84507c705a38884159efab0b700df280c1fd3d5b4f2be2d';

export function fire(text: string, source: string, metadata: Record<string, unknown> = {}): void {
  fetch(NEURO_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', 'X-Neuro-Key': NEURO_KEY },
    body: JSON.stringify({ text, source, metadata }),
    signal: AbortSignal.timeout(3000),
  }).catch(() => {});
}
