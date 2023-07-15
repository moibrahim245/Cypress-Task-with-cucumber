
export const generateRandomEmail = () => {
	const base = 'automation_qa_web_testing';
	const host = '@gmail.com';
	const id = Math.random().toString(16).slice(2);
	const email = base + id + host;
	return email;
};

export const generateRandomPhoneNumber = () => {
	const prefixes = ['010', '011', '012', '015'];
	const prefix = prefixes[Math.floor(Math.random() * prefixes.length)];
	let number = '';
  
	for (let i = 0; i < 8; i++) {
		number += Math.floor(Math.random() * 10);
	}
  
	return prefix + number;
};