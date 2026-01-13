// src/Yoton/components/Typewriter.jsx
import { useEffect, useState } from "react";

export default function Typewriter() {
  const words = ["SURSA Core", "SURSA Network", "SURSA for Humanity"];
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [reverse, setReverse] = useState(false);

  useEffect(() => {
    if (index === words.length) return;

    if (subIndex === words[index].length + 1 && !reverse) {
      const t = setTimeout(() => setReverse(true), 1200);
      return () => clearTimeout(t);
    }

    if (subIndex === 0 && reverse) {
      setReverse(false);
      setIndex((prev) => (prev + 1) % words.length);
      return;
    }

    const timeout = setTimeout(
      () => setSubIndex((prev) => prev + (reverse ? -1 : 1)),
      reverse ? 35 : 55
    );

    return () => clearTimeout(timeout);
  }, [subIndex, index, reverse, words]);

  return (
    <span className="typewriter">{words[index].substring(0, subIndex)}</span>
  );
}