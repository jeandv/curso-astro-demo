import { useState } from 'preact/hooks';

export function Counter() {
  const [counter, setCounter] = useState(0);

  return (
    <div class='flex items-center justify-center my-5 mx-auto'>
      <span class='text-yellow-300 text-xl mr-4'>{counter}</span>
      <button
        class='border px-4 py-2 text-xl text-white'
        onClick={() => setCounter((counter) => counter + 1)}
      >
        +
      </button>
      <button
        class='border px-4 py-2 text-xl text-white'
        onClick={() => setCounter((counter) => counter - 1)}
      >
        -
      </button>
    </div>
  );
}
