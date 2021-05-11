import { useLayoutEffect } from 'react';

function useBodyScrollLock() {
    useLayoutEffect(() => {
        const originalOverflow = window.getComputedStyle(document.body).overflow;
        document.body.style.overflow = 'hidden';
        
        // cleanup() is the same as componentDidUnmount()
        // You can write this either way
        // return function cleanup() {
        return () => {
            document.body.style.overflow = originalOverflow;
        }
    }, []);
}

export { useBodyScrollLock };