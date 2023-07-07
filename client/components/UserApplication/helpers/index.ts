import { getExpValue, getProjValue, getTypeValue } from './getValues';
import {
	handleNameChange,
	handleSurnameChange,
	onHandleCityChange,
	onHandleEmailChange,
	onHandleLinkedChange,
	onHandlePhoneChange,
	onHandleStackChange,
} from './handleChange';
import {
	emailPlaceholder,
	experiencePlaceholder,
	lastnamePlaceholder,
	linkedInPlaceholder,
	namePlaceholder,
	phoneNumberFormat,
	stackPlaceholder,
} from './placeholders';
import {
	cityRegex,
	discordRegex,
	discordSecondRegex,
	emailRegex,
	linkedRegex,
	nameRegex,
	phoneNumberRegex,
} from './regex';
import { requiredField } from './requiredField';
import { useCustomIds } from './selectsId';
export {
	phoneNumberRegex,
	phoneNumberFormat,
	emailRegex,
	discordRegex,
	linkedRegex,
	getExpValue,
	getProjValue,
	getTypeValue,
	requiredField,
	handleNameChange,
	handleSurnameChange,
	onHandleCityChange,
	onHandleEmailChange,
	onHandleLinkedChange,
	onHandlePhoneChange,
	onHandleStackChange,
	useCustomIds,
	nameRegex,
	emailPlaceholder,
	discordSecondRegex,
	linkedInPlaceholder,
	cityRegex,
	experiencePlaceholder,
	namePlaceholder,
	lastnamePlaceholder,
	stackPlaceholder,
};
