import { useEffect, useRef, useState } from "react";

export function useReveal() {
    const ref = useRef(null);
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const element = ref.current;
        if (!element) return;

        function callback(entries) {
            if (entries[0].isIntersecting) {
                setVisible(true);
            }
        }

        const observer = new IntersectionObserver(callback, {
            threshold: 0.2,
        });

        observer.observe(element);

        return () => observer.disconnect();
    }, []);

    return { ref, visible };
}