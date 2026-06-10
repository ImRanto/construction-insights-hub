import { useRef, useEffect } from 'react';
import { motion, useInView } from 'framer-motion';

export function useCounter() {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });
  
  return {
    ref,
    inView,
    animate: (to: number, suffix = "") => {
      const [val, setVal] = useState(0);
      
      useEffect(() => {
        if (!inView) return;
        const controls = animate(0, to, { 
          duration: 2, 
          ease: "easeOut", 
          onUpdate: (v) => setVal(Math.floor(v)) 
        });
        return () => controls.stop();
      }, [inView, to]);
      
      return { val: val.toLocaleString("fr-FR") + suffix };
    }
  };
}