import { useRouter } from 'next/router';
import React from 'react';
import ToolTip from '../Tooltip/ToolTip';
import s from '@/components/Product/CardSlider/CardSlider.module.scss';
import Image from 'next/image';
import arrowIcon from '@/ui-kit/Other/arrow.svg';
import clsx from 'clsx';

interface BackButtonProps {
  isOnlyDesktop?: boolean;
}

function BackButton({ isOnlyDesktop }: BackButtonProps) {
  const router = useRouter();
  return (
    <div className={clsx(s.backButton, isOnlyDesktop && s.isOnlyDesktop)} onClick={() => router.back()}>
      <ToolTip title="Назад">
        <div className={s.iconBox}>
          <Image src={arrowIcon} alt="arrow" />
        </div>
      </ToolTip>
    </div>
  );
}

export default BackButton;
