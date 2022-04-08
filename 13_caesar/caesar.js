const caesar = function (message, adj) {
	const upper = 'abcdefghijklmnopqrstuvwxyz'.toUpperCase().split('');
	const lower = 'abcdefghijklmnopqrstuvwxyz'.split('');
	const upperKey = 'abcdefghijklmnopqrstuvwxyz'.toUpperCase().split('');
	const lowerKey = 'abcdefghijklmnopqrstuvwxyz'.split('');

	if (adj > 0) {
		for (i = 0; i < adj; i++) {
			temp = upperKey.shift();
			upperKey.push(temp);
			temp2 = lowerKey.shift();
			lowerKey.push(temp2);
		}
	} else if (adj < 0) {
		adj = -adj;
		for (i = 0; i < adj; i++) {
			temp = upperKey.pop();
			upperKey.unshift(temp);
			temp2 = lowerKey.pop();
			lowerKey.unshift(temp2);
		}
	}

	const newString = [];
	const len = message.length;
	for (let i = 0; i < len; i++) {
		if (message[i] === ' ' || message[i] === '!' || message[i] === ',') {
			newString.push(message[i]);
		} else if (message[i] === message[i].toUpperCase()) {
			const index2 = upper.indexOf(message[i]);
			newString.push(upperKey[index2]);
		} else if (message[i] === message[i].toLowerCase()) {
			const index = lower.indexOf(message[i]);
			newString.push(lowerKey[index]);
		}
	}

	const newMessage = newString.join('');
	console.log(newMessage);
	return newMessage;
};

// Do not edit below this line
module.exports = caesar;
