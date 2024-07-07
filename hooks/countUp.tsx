import { useCallback, useEffect, useRef, useState } from "react";

// easeOutExpo function gradually decreases the animation's speed, making the count-up visually appealing
const easeOutExpo = (t: number) => {
    return t === 1 ? 1 : 1 - Math.pow(2, -10 * t);
};

const useScrollTriggeredCountUp = (
    ref: React.RefObject<HTMLElement>,
    end: number,
    duration = 2000
) => {
    const [count, setCount] = useState(0);
    const isCounting = useRef(false);
    const frameRate = 1000 / 60;
    const totalFrames = Math.round(duration / frameRate);

    const handleScroll = useCallback(
        (entries: IntersectionObserverEntry[]) => {
            const [entry] = entries;
            if (entry.isIntersecting && !isCounting.current) {
                isCounting.current = true;
                let frame = 0;

                // use setInterval to increment a frame counter
                // and calculate the current count based on the easing function
                const counter = setInterval(() => {
                    frame++;
                    const progress = easeOutExpo(frame / totalFrames);
                    setCount(Math.round(end * progress));

                    if (frame === totalFrames) {
                        // Cleanup and reset
                        clearInterval(counter);
                        isCounting.current = false;
                    }
                }, frameRate);
            } else {
                isCounting.current = false;
                setCount(0);
            }
        },
        [end, frameRate, totalFrames]
    );

    useEffect(() => {
        // IntersectionObserver is API to detect when the element enters the viewport
        const observer = new IntersectionObserver(handleScroll, {
            threshold: 0.7,
        });
        const currentRef = ref.current;

        if (currentRef) {
            observer.observe(currentRef);
        }

        return () => {
            if (currentRef) {
                observer.unobserve(currentRef);
            }
        };
    }, [handleScroll, ref]);

    return count;
};

export default useScrollTriggeredCountUp;
