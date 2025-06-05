'use client';
import { useState } from 'react';

export default function ToggleMessage() {
  const [show, setShow] = useState(false);

  return (
    <div className="card">
      <h2>Toggle Message</h2>
      <button onClick={() => setShow(!show)}>
        {show ? 'Hide' : 'Show'} Message
      </button>
      {show && <p>This is a conditional message!</p>}
    </div>
  );
}
