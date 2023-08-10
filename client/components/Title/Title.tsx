<<<<<<< HEAD
'use client';
/** @jsxImportSource @emotion/react */
import { Heading } from './Title.styles';

interface TitleProps {
	children: string;
	secondary?: boolean;
}

export function Title({ children, secondary }: TitleProps) {
	return <Heading secondary={secondary}>{children}</Heading>;
}
=======
import { ReactNode } from 'react';

/** @jsxImportSource @emotion/react */
import { marginApplication, marginFinish, mobileStyle, titleStyle } from './Title.styles';

type TitleProps = {
	children: ReactNode;
	main?: boolean;
	application?: boolean;
	finish?: boolean;
};

const Title = ({ children, main, application, finish }: TitleProps) => {
	return main ? (
		<h1
			css={[
				titleStyle,
				finish && marginFinish,
				application && marginApplication,
				(application || finish) && mobileStyle,
			]}
		>
			{children}
		</h1>
	) : (
		<h2 css={titleStyle}>{children}</h2>
	);
};

export default Title;
>>>>>>> develop
