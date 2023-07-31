'use client';
/** @jsxImportSource @emotion/react */
import { ReactNode, useState } from 'react';
import { PrimaryBtn, TextBtn } from './Button.styles';
import FoldUpIcon from '../../../../public/exit.svg';

type ButtonProps = {
  children?: ReactNode | string;
  isDisabled?: boolean;
  func?: () => void;
  btnType?: 'button' | 'submit';
  variant: 'primary' | 'text';
  icon?: 'exit' | 'add' | null;
};

export const Button = ({ children, isDisabled, func, variant, icon = null, btnType = 'button' }: ButtonProps) => {
  const [isPressed, setIsPressed] = useState(false);

  const onClickHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (func) func();
  };

  const ButtonComponent = variant === 'text' ? TextBtn : PrimaryBtn;

  return (
    <ButtonComponent
      onClick={onClickHandler}
      onMouseDown={() => setIsPressed(true)}
      onMouseUp={() => setIsPressed(false)}
      disabled={isDisabled || false}
      isPressed={isPressed}
      type={btnType}
    >
      {icon && <IconSvg icon={icon} />}
      {children}
    </ButtonComponent>
  );
};

const IconSvg = ({ icon }: { icon: 'exit' | 'add' }) => {
  switch (icon) {
    case 'exit':
      return (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M14.3562 3.40039C13.2621 3.40037 12.3802 3.40036 11.6867 3.49361C10.9666 3.59042 10.3603 3.79754 9.87875 4.27907C9.45881 4.69902 9.24662 5.21507 9.13523 5.82147C9.027 6.41072 9.00629 7.13183 9.00147 7.99705C8.99963 8.32842 9.26676 8.59854 9.59812 8.60038C9.92949 8.60223 10.1996 8.3351 10.2015 8.00373C10.2063 7.12893 10.229 6.50887 10.3155 6.03827C10.3988 5.58482 10.5325 5.32236 10.7273 5.1276C10.9487 4.90619 11.2596 4.76183 11.8466 4.68291C12.4509 4.60167 13.2517 4.60039 14.4001 4.60039H15.2001C16.3484 4.60039 17.1493 4.60167 17.7536 4.68291C18.3406 4.76183 18.6515 4.90619 18.8729 5.1276C19.0943 5.34901 19.2386 5.65987 19.3176 6.24689C19.3988 6.85117 19.4001 7.65206 19.4001 8.80039V15.2004C19.4001 16.3487 19.3988 17.1496 19.3176 17.7539C19.2386 18.3409 19.0943 18.6518 18.8729 18.8732C18.6515 19.0946 18.3406 19.239 17.7536 19.3179C17.1493 19.3991 16.3484 19.4004 15.2001 19.4004H14.4001C13.2517 19.4004 12.4509 19.3991 11.8466 19.3179C11.2596 19.239 10.9487 19.0946 10.7273 18.8732C10.5325 18.6784 10.3988 18.416 10.3155 17.9625C10.229 17.4919 10.2063 16.8719 10.2015 15.9971C10.1996 15.6657 9.92949 15.3986 9.59812 15.4004C9.26676 15.4022 8.99963 15.6724 9.00147 16.0037C9.00629 16.869 9.027 17.5901 9.13523 18.1793C9.24662 18.7857 9.45881 19.3018 9.87875 19.7217C10.3603 20.2032 10.9666 20.4104 11.6867 20.5072C12.3802 20.6004 13.2621 20.6004 14.3562 20.6004H15.244C16.338 20.6004 17.2199 20.6004 17.9135 20.5072C18.6336 20.4104 19.2399 20.2032 19.7214 19.7217C20.2029 19.2402 20.41 18.6339 20.5069 17.9138C20.6001 17.2202 20.6001 16.3384 20.6001 15.2443V8.7565C20.6001 7.66242 20.6001 6.78057 20.5069 6.08699C20.41 5.3669 20.2029 4.7606 19.7214 4.27907C19.2399 3.79754 18.6336 3.59042 17.9135 3.49361C17.2199 3.40036 16.3381 3.40037 15.244 3.40039H14.3562Z"
            fill="currentColor"
          />
          <path
            d="M14.3999 11.4004C14.7313 11.4004 14.9999 11.669 14.9999 12.0004C14.9999 12.3318 14.7313 12.6004 14.3999 12.6004H5.62186L7.19038 13.9448C7.44197 14.1605 7.47111 14.5393 7.25546 14.7909C7.0398 15.0425 6.66102 15.0716 6.40943 14.8559L3.60943 12.4559C3.47644 12.342 3.3999 12.1755 3.3999 12.0004C3.3999 11.8252 3.47644 11.6588 3.60943 11.5448L6.40943 9.14484C6.66102 8.92918 7.0398 8.95832 7.25546 9.20992C7.47111 9.46151 7.44197 9.84029 7.19038 10.0559L5.62186 11.4004H14.3999Z"
            fill="currentColor"
          />
        </svg>
      );
    case 'add':
      return (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g id="Icons">
            <path id="Vector" d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z" fill="currentColor" />
          </g>
        </svg>
      );
    default:
      return null;
  }
};
