import { useState } from 'https://esm.sh/preact/hooks';
import register from 'https://esm.sh/preact-custom-element';
import { html } from 'https://esm.sh/htm/preact';

const Counter = () => {
  const [count, setCount] = useState(0);

  return html`
    <div style="display: flex; gap: .5rem">
      <button type="button" onClick=${() => setCount(count - 1)}>
        Decrement
      </button>
      <button type="button" onClick=${() => setCount(count + 1)}>
        Increment
      </button>
      <div id="count">${count}</div>
    </div>
  `;
};

register(Counter, 'hello-world', [], { shadow: true });
