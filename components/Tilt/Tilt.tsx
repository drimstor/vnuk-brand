import { ReactNode, useEffect, useRef } from 'react';
import VanillaTilt from 'vanilla-tilt';

interface iTilt {
  children: ReactNode;
  className?: string;
}

function Tilt({ children, ...rest }: iTilt) {
  const tilt = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (tilt.current) {
      VanillaTilt.init(tilt.current, {
        speed: 500,
        max: 20,
      });
    }
  }, []);

  return (
    <div ref={tilt} {...rest}>
      {children}
    </div>
  );
}

export default Tilt;
