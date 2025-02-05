import { components } from 'react-select';

export const DropdownIndicator = (props: React.ComponentProps<typeof components.DropdownIndicator>) => {
  return (
    <components.DropdownIndicator {...props}>
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M5.94451 9.20954C6.16016 8.95794 6.53894 8.9288 6.79053 9.14446L12.0001 13.6098L17.2096 9.14446C17.4612 8.9288 17.84 8.95794 18.0556 9.20954C18.2713 9.46113 18.2421 9.83991 17.9905 10.0556L12.3905 14.8556C12.1658 15.0482 11.8343 15.0482 11.6096 14.8556L6.00958 10.0556C5.75799 9.83991 5.72885 9.46113 5.94451 9.20954Z"
          fill="currentColor"
        />
      </svg>
    </components.DropdownIndicator>
  );
};
