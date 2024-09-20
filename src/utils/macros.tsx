export const isEmailValid = (email) => {
	const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
	return emailPattern.test(email);
};

export const isPasswordValid = (password) => {
	return password.length >= 6;
};

export const isNicknameValid = (nickname) => {
	return nickname.length <= 30;
};
