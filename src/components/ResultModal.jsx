import { useImperativeHandle, useRef } from "react";
import { createPortal } from "react-dom";

export default function ResultModal({
  ref,
  RemainingTime,
  timeTarget,
  onReset,
}) {
  const dialog = useRef();

  const userLost = RemainingTime <= 0;
  const formattedTimeRemaining = (RemainingTime / 1000).toFixed(2);
  const score = Math.round((1 - RemainingTime / (timeTarget * 1000)) * 100);

  useImperativeHandle(ref, () => {
    return {
      open() {
        dialog.current.showModal();
      },
    };
  });

  return createPortal(
    <dialog className="result-modal" ref={dialog}>
      {userLost && <h2>You Lost</h2>}
      {!userLost && <h2>Your score is: {score}!</h2>}
      <p>
        The targe time was <strong>{timeTarget}</strong> seconds!
      </p>
      <p>
        You stopped the timer with{" "}
        <strong>{formattedTimeRemaining} seconds left.</strong>
      </p>
      <form method="dialog" onSubmit={onReset} onClose={onReset}>
        <button>Close</button>
      </form>
    </dialog>,
    document.getElementById('modal')
  );
}
