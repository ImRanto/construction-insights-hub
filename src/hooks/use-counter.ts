import { useState, useEffect } from 'react';

export function useCounter(to: number, suffix = "") {
  const [val, setVal] = useState(0);
  
  useEffect(() => {
    let startTime: number;
    const duration = 2000;
    
    const updateCounter = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      setVal(Math.floor(progress * to));
      
      if (progress < 1) {
        requestAnimationFrame(updateCounter);
      }
    };
    
    requestAnimationFrame(updateCounter);
  }, [to]);
  
  return val.toLocaleString("fr-FR") + suffix;
}