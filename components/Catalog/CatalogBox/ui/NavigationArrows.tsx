import Image from 'next/image';
import arrowIcon from '@/ui-kit/Other/arrow.svg';
import s from '../CatalogBox.module.scss';
import clsx from 'clsx';

interface NavigationButtonProps {
  onClick: () => void;
  isHidden: boolean;
}

export function PrevButton({ onClick, isHidden }: NavigationButtonProps) {
  return (
    <div className={clsx(s.button, s.prevButton, isHidden && s.transparent)} onClick={onClick}>
      <Image src={arrowIcon} alt="arrow" />
    </div>
  );
}

export function NextButton({ onClick, isHidden }: NavigationButtonProps) {
  return (
    <div className={clsx(s.button, s.nextButton, isHidden && s.transparent)} onClick={onClick}>
      <Image src={arrowIcon} alt="arrow" />
    </div>
  );
}
