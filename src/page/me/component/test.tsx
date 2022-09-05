import React, { useState, useTransition } from 'react';

function Test() {
  const [isPending, startTransition] = useTransition();
  const [count, setCount] = useState(0);

  function handleClick() {
    startTransition(() => {
      setCount((c) => c + 1);
    });
  }

  return (
    <div>
      {isPending && <div>spinner</div>}
      <button type="button" onClick={handleClick}>
        click
        {count}
      </button>
    </div>
  );
}

export default Test;
