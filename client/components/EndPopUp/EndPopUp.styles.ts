import styled from '@emotion/styled';
import { theme } from 'styles/theme';
const { colors, fonts, media } = theme;

export const Section = styled.section`
	position: fixed;
	left: 50%;
	top: 50%;
	transform: translate(-50%, -50%);
	text-align: center;
	width: 100%;
	max-width: 335px;
	margin: 0 auto;
	padding: 24px;
	border-radius: 16px;
	border: 1px solid ${colors.disabledBtnBg};
	@media screen and (${media.tablet}) {
		max-width: 466px;
		font-size: ${fonts.display.fontSize.mobile}px;
		line-height: ${fonts.display.lineHeight.mobile};
	}
	@media screen and (${media.desktop}) {
		max-width: 596px;
		font-size: ${fonts.display.fontSize.tablet}px;
		line-height: ${fonts.display.lineHeight.tablet};
	}
`;

export const Title = styled.h1`
	color: ${colors.mainTitle};
	margin-bottom: 32px;
	font-weight: ${fonts.headline.fontWeight.tablet};
	font-size: ${fonts.headline.fontSize.desktop}px;
	line-height: ${fonts.headline.lineHeight.desktop};
	@media screen and (${media.tablet}) {
		margin-bottom: 24px;
		font-size: ${fonts.display.fontSize.mobile}px;
		line-height: ${fonts.display.lineHeight.mobile};
	}
	@media screen and (${media.desktop}) {
		margin-bottom: 32px;
		font-size: ${fonts.display.fontSize.tablet}px;
		line-height: ${fonts.display.lineHeight.tablet};
	}
`;

export const Desc = styled.p`
	color: ${colors.mainTitle};
	margin-bottom: 32px;
	font-weight: ${fonts.title.fontWeight.tablet};
	font-size: ${fonts.title.fontSize.tablet}px;
	line-height: ${fonts.title.lineHeight};
	@media screen and (${media.tablet}) {
		margin-bottom: 24px;
	}
	@media screen and (${media.desktop}) {
		margin: 0 auto 32px;
	}
`;

export const Link = styled.a`
	color: ${colors.secondaryAccent};
	text-decoration: underline;
`;

export const Reminder = styled.h2`
	color: ${colors.mainTitle};
	font-weight: ${fonts.title.fontWeight.tablet};
	font-size: ${fonts.title.fontSize.tablet}px;
	line-height: ${fonts.title.lineHeight};
	letter-spacing: ${fonts.title.letterSpacing.tablet}px;
	@media screen and (${media.tablet}) {
		font-weight: ${fonts.title.fontWeight.desktop};
		font-size: ${fonts.title.fontSize.desktop}px;
	}
	@media screen and (${media.desktop}) {
		font-size: ${fonts.headline.fontSize.tablet}px;
		line-height: ${fonts.headline.lineHeight.tablet};
		font-weight: ${fonts.headline.fontWeight.tablet};
		margin: 0 auto;
	}
`;

export const Span = styled.span`
	color: ${colors.secondaryAccent};
`;

export const Img = styled.img`
	display: inline-block;
	vertical-align: text-bottom;
	width: 16px;
	height: 16px;
	@media screen and (${media.tablet}) {
		width: 24px;
		height: 24px;
	}
	@media screen and (${media.desktop}) {
		width: 32px;
		height: 32px;
	}
`;
