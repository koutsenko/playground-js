import "./Hotkeys.css";

import React, { useEffect, useState } from "react";

// TODO https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent/code/code_values
const keyCodes = {
  LEFT: 37,
  UP: 38,
  RIGHT: 39,
  DOWN: 40,
  DEL: 46,
  BACKSP: 8
};

const combos = {
  c: "C-c",
  v: "C-v",
  z: "C-z",
  y: "C-y"
};

const keys = {
  [keyCodes.LEFT]: "Left",
  [keyCodes.UP]: "Up",
  [keyCodes.DOWN]: "Down",
  [keyCodes.RIGHT]: "Right",
  [keyCodes.DEL]: "DEL",
  [keyCodes.BACKSP]: "BACKSPACE"
};

const Hotkeys = () => {
  const [eventFired, setEventFired] = useState(false);
  const [pressed, setPressed] = useState(null);

  const triggerChange = event => setEventFired(event);

  const handleHotkeys = event => {
    const keyCode = event.which;
    const charCode = String.fromCharCode(keyCode).toLowerCase();
    const result =
      event.ctrlKey || event.metaKey ? combos[charCode] : keys[keyCode];

    setPressed(result);
  };

  useEffect(() => {
    window.addEventListener("keydown", triggerChange, true);

    return () => window.removeEventListener("keydown", triggerChange, true);
  }, []);

  useEffect(() => {
    if (!eventFired) {
      return;
    }

    handleHotkeys(eventFired);
    setEventFired(false);
  }, [eventFired]);

  return (
    <>
      <span className="known">
        <p>
          <u>Known keys</u>:{" "}
          {[...Object.values(keys), ...Object.values(combos)].join(", ")}
        </p>
        <p>
          <u>Combo detection</u>: event.ctrlKey || event.metaKey
        </p>
        <p>
          <u>Platforms</u>:
        </p>
        <p>- PC keyboard, Linux, Chrome: working with Ctrl and Win keys</p>
        <p>- PC keyboard, Windows, Chrome: working only with Ctrl key</p>
        <p>
          - Apple kbrd, MacOS, Chrome or Safari: both Ctrl and Command keys
          works. DEL doesn't exists
        </p>
        <p>
          <u>Press known key</u>: {pressed}
        </p>
      </span>
      <br />
    </>
  );
};

export default Hotkeys;
