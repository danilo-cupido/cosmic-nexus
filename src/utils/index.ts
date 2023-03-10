export const formattedDate = (date: string) => {
	const adjustedDate = new Date(date);
	const options: Intl.DateTimeFormatOptions = {
		day: 'numeric',
		month: 'short',
		year: 'numeric',
	};
	return adjustedDate.toLocaleDateString('en-GB', options);
};
