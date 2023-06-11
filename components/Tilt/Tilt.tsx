import { ReactNode, useEffect, useRef } from 'react';
import VanillaTilt from 'vanilla-tilt';

interface iTilt {
  children: ReactNode;
  options?: any;
  className?: string;
}

function Tilt({ children, options, ...rest }: iTilt) {
  const tilt = useRef<any>(null);

  useEffect(() => {
    VanillaTilt.init(tilt.current, {
      speed: 500,
      max: 20,
      ...options,
    });
  }, [options]);

  return (
    <div ref={tilt} {...rest}>
      {children}
    </div>
  );
}

export default Tilt;
