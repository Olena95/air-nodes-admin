import { RefObject, useEffect } from "react";

type Event = MouseEvent | TouchEvent;

const useOnClickOutside = <T extends HTMLElement = HTMLElement>(
    reference: RefObject<T>,
    callback: (event: Event) => void
) => {
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (
                reference.current &&
                !reference.current.contains(event.target as Node)
            ) {
                callback(event);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [reference, callback]);
};

export default useOnClickOutside;
