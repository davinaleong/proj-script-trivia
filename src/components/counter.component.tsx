import { useState } from 'react'

export const CounterComponent = () => {
  const [count, setCount] = useState(0)

  return (
    <div>
      <button type="button" onClick={() => setCount((c) => c + 1)}>
        Count {count}
      </button>
    </div>
  )
}
