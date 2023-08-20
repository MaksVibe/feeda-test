'use client';
/** @jsxImportSource @emotion/react */
import { useState } from 'react';

import { IconSprite, IconType } from '../IconSprite/IconSprite';
import { IconBtn, PopUpBtnAccept, PopUpBtnCancel, PrimaryBtn, TextBtn } from './Button.styles';

type ButtonProps = {
  isDisabled?: boolean;
  func: (event: React.MouseEvent<HTMLButtonElement>) => void;
  btnType?: 'button' | 'submit' | 'reset';
  variant: 'primary' | 'text' | 'icon' | 'accept' | 'cancel';
  icon?: IconType | null;
  title?: string;
};

export const Button = ({ isDisabled, func, variant, title, icon = null, btnType = 'button' }: ButtonProps) => {
  const [isPressed, setIsPressed] = useState(false);

  const onClickHandler = (event: React.MouseEvent<HTMLButtonElement>) => {
    func(event);
  };

  const btnVariants = {
    primary: PrimaryBtn,
    text: TextBtn,
    icon: IconBtn,
    accept: PopUpBtnAccept,
    cancel: PopUpBtnCancel,
  };

  const ButtonComponent = btnVariants[variant] || PrimaryBtn;

  return (
    <ButtonComponent
      onClick={onClickHandler}
      onMouseDown={() => setIsPressed(true)}
      onMouseUp={() => setIsPressed(false)}
      disabled={isDisabled || false}
      isPressed={isPressed}
      type={btnType}
      title={title}
    >
      {icon && <IconSprite icon={icon} />}
      {title}
    </ButtonComponent>
  );
};
