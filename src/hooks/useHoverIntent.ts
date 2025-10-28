import { useEffect, useRef, useState } from 'react';

interface UseHoverIntentOptions {
  enterDelay?: number;
  leaveDelay?: number;
}

export function useHoverIntent(options: UseHoverIntentOptions = {}) {
  const { enterDelay = 160, leaveDelay = 240 } = options;
  const [isHovered, setIsHovered] = useState(false);
  const enterTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const leaveTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  const onMouseEnter = () => {
    if (leaveTimeoutRef.current) {
      clearTimeout(leaveTimeoutRef.current);
      leaveTimeoutRef.current = null;
    }
    enterTimeoutRef.current = setTimeout(() => {
      setIsHovered(true);
    }, enterDelay);
  };

  const onMouseLeave = () => {
    if (enterTimeoutRef.current) {
      clearTimeout(enterTimeoutRef.current);
      enterTimeoutRef.current = null;
    }
    leaveTimeoutRef.current = setTimeout(() => {
      setIsHovered(false);
    }, leaveDelay);
  };

  useEffect(() => {
    return () => {
      if (enterTimeoutRef.current) clearTimeout(enterTimeoutRef.current);
      if (leaveTimeoutRef.current) clearTimeout(leaveTimeoutRef.current);
    };
  }, []);

  return { isHovered, onMouseEnter, onMouseLeave };
}

