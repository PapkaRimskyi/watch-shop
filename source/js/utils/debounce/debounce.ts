export default function debounce(f: () => void, ms: number): () => void {
  let debounceStatus = false;
  let timerID: NodeJS.Timeout;

  return () => {
    if (debounceStatus) {
      clearTimeout(timerID);
    }
    if (!debounceStatus) {
      debounceStatus = true;
    }
    timerID = setTimeout(() => {
      debounceStatus = false;
      f();
    }, ms);
  };
}
