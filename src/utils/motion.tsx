import React, { useEffect, useRef } from 'react';

interface MotionProps {
  initial?: {
    opacity?: number;
    y?: number;
    x?: number;
    scale?: number;
  };
  animate?: {
    opacity?: number;
    y?: number;
    x?: number;
    scale?: number;
  };
  transition?: {
    duration?: number;
    delay?: number;
  };
  className?: string;
  children: React.ReactNode;
}

export const motion: React.FC<MotionProps> = ({ 
  initial, 
  animate, 
  transition, 
  className, 
  children 
}) => {
  const ref = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const element = ref.current;
    if (!element) return;
    
    if (initial) {
      const { opacity, y, x, scale } = initial;
      if (opacity !== undefined) element.style.opacity = opacity.toString();
      if (y !== undefined) element.style.transform = `translateY(${y}px)`;
      if (x !== undefined) element.style.transform = `translateX(${x}px)`;
      if (scale !== undefined) element.style.transform = `scale(${scale})`;
    }
    
    const timeoutId = setTimeout(() => {
      if (animate) {
        element.style.transition = `all ${transition?.duration || 0.3}s ease-in-out`;
        
        const { opacity, y, x, scale } = animate;
        if (opacity !== undefined) element.style.opacity = opacity.toString();
        if (y !== undefined) element.style.transform = `translateY(${y}px)`;
        if (x !== undefined) element.style.transform = `translateX(${x}px)`;
        if (scale !== undefined) element.style.transform = `scale(${scale})`;
      }
    }, (transition?.delay || 0) * 1000);
    
    return () => clearTimeout(timeoutId);
  }, [initial, animate, transition]);
  
  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
};