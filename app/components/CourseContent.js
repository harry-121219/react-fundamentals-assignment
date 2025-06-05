"use client";
import { useState } from "react";

export default function CourseContent() {
  const [showComponent, setShowComponent] = useState(false);
  const [showProps, setShowProps] = useState(false);
  const [showState, setShowState] = useState(false);
  const [showConditional, setShowConditional] = useState(false);

  return (
    <div className="card">
      <h2>REACT APPLICATION</h2>

      <section>
        <h3>1. Components</h3>
        <p>
          Components are reusable pieces of UI in React. They help break down
          complex interfaces into manageable parts.
        </p>
        <button onClick={() => setShowComponent(!showComponent)}>
          {showComponent ? "Hide" : "Show"} Example
        </button>
        {showComponent && (
          <div className="example">
            <p>Component shown</p>
          </div>
        )}
      </section>

      <section>
        <h3>2. Props</h3>
        <p>
          Props are how you pass data from one component to another in React.
        </p>
        <button onClick={() => setShowProps(!showProps)}>
          {showProps ? "Hide" : "Show"} Example
        </button>
        {showProps && (
          <div className="example">
            <Greeting name="User" />
          </div>
        )}
      </section>

      <section>
        <h3>3. State</h3>
        <p>
          State is data managed within a component. Updating state causes the
          component to re-render.
        </p>
        <button onClick={() => setShowState(!showState)}>
          {showState ? "Hide" : "Show"} Example
        </button>
        {showState && <Counter />}
      </section>

      <section>
        <h3>4. Conditional Rendering</h3>
        <p>
          Conditional rendering lets you show or hide elements based on state or
          conditions.
        </p>
        <button onClick={() => setShowConditional(!showConditional)}>
          {showConditional ? "Hide" : "Show"} Example
        </button>
        {showConditional && <ToggleMessage />}
      </section>
    </div>
  );
}

// Helper Components
function Greeting({ name }) {
  return <p>Hello, {name}! This is passed via props.</p>;
}

function Counter() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>+</button>
      <button
        onClick={() => setCount(count - 1)}
        style={{ marginLeft: "10px" }}
      >
        -
      </button>
    </div>
  );
}

function ToggleMessage() {
  const [show, setShow] = useState(true);
  return (
    <div>
      <button onClick={() => setShow(!show)}>
        {show ? "Hide Message" : "Show Message"}
      </button>
      {show && <p>This message is shown conditionally!</p>}
    </div>
  );
}
