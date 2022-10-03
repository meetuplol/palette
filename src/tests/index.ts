import { MeetUpColorsHex, TailwindAdapter } from '..';

const randomColor = () => {
	const colors = Object.values(MeetUpColorsHex);
	return colors[Math.floor(Math.random() * colors.length)];
};

const chat: {
	username: string;
	message: string;
}[] = [];

const names = ['Tristan', 'Vivaan', 'Kaidan', 'Sean', 'Ryan', 'Cheeze2000'];

for (let i = 0; i < 10; i++) {
	chat.push({
		username: names[Math.floor(Math.random() * names.length)],
		message: `I love the color ${randomColor()}!`
	});
}

// stupid gimmick
// console.log('👨‍🚀 Reddit  | r/colors  v |  | 🔎 (r/colors) Search Reddit |');
// console.log("⏫ What's your favorite color?");
// console.log('⏬');
// console.log(`${chat.length} comments`);

chat.forEach(({ username, message }) => {
	console.log(`${username}: ${message}`);
});

console.log('JSON Rep', TailwindAdapter);
