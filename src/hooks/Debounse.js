import { useState, useEffect } from "react";

function useDebounce(value, delay = 250) {
    const [debounced, setDebounced] = useState(value);
    useEffect(() => {
        const handler = setTimeout(() => setDebounced(value), delay);
        return () => { clearTimeout(handler);
      }},
      [value, delay] // Only re-call effect if value or delay changes
    );
    return debounced;
  }

export default useDebounce