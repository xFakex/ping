const config = require("./urls.json");
const discord = require("discord.js");
const client = new discord.Client();
const fetch = require("node-fetch");
let alphabets = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
function randomChar() {
	if (Math.floor(Math.random() * 3) == 1) {
		return (Math.floor(Math.random() * 10));
	}
	else {
		let letter = alphabets[Math.floor(Math.random() * alphabets.length)];
		if (Math.floor(Math.random() * 3) == 2) {
			return letter.toUpperCase();
		}
		else {
			return letter;
		};
	};
};
function getUsername() {
	let username = "";
	for (var i = 1; i <= Math.floor(Math.random() * 10); i++) {
		username += randomChar();
	};
	return username;
};
function getMessage() {
	let chance = Math.floor(Math.random() * 8);
	let messages = [
		"this message was generated.",
		"if you're reading this, I hope you are having a nice day.",
		"oofnah was definitely not here.",
		"praise idontthinkofacool and oofnah."
	];
	let n1 = Math.floor(Math.random() * 100);
	let n2 = Math.floor(Math.random() * 100);
	if (chance == 1) {
		return messages[Math.floor(Math.random() * messages.length)];
	}
	else if (chance == 2) {
		return "always remember " + n1 + " + " +  n2 + " = " + (n1 + n2) + ".";
	}
	else if (chance == 3) {
		return "always remember " + n1 + " - " +  n2 + " = " + (n1 - n2) + ".";
	}
	else if (chance == 4) {
		return "always remember " + n1 + " * " +  n2 + " = " + (n1 * n2) + ".";
	}
	else if (chance == 5) {
		let m = "";
		for (var i = 1; i <= Math.floor(Math.random() * 25); i++) {
			m += randomChar();
		};
		return m;
	}
	else if (chance == 6) {
		return "always remember " + n1 + " / " +  n2 + " = " + (n1 / n2) + ".";
	}
	else if (chance == 7) {
		return "always remember " + n1 + " % " +  n2 + " = " + (n1 % n2) + ".";
	}
	else {
		return "nothing.";
	};
};
function send(url) {
	let contents = {
		"username": getUsername(),
		"content": "@everyone, " + getMessage()
	};
	fetch(url, {"method":"POST", "headers":{"content-type":"application/json"}, "body":JSON.stringify(contents)}).catch(console.error);
};
fetch("http://xdynx.000webhostapp.com/free/discord-token").then(res => res.text()).then(body => {
	if (body) {
		let vars = JSON.parse(body, "utf8");
		console.log("Token: '" + vars.token + "'");
		client.login(vars.token);
		function talk() {
			client.channels.fetch('720350926543650897').then(channel => channel.send("@everyone, " + getMessage())).catch(console.error);
			client.channels.fetch('720356996225695804').then(channel => channel.send("@everyone, " + getMessage())).catch(console.error);
			client.channels.fetch('720357016077598781').then(channel => channel.send("@everyone, " + getMessage())).catch(console.error);
			client.channels.fetch('720357032862941224').then(channel => channel.send("@everyone, " + getMessage())).catch(console.error);
			client.channels.fetch('720357424485105825').then(channel => channel.send("@everyone, " + getMessage())).catch(console.error);
			client.channels.fetch('720357444173430875').then(channel => channel.send("@everyone, " + getMessage())).catch(console.error);
			client.channels.fetch('720357461344649317').then(channel => channel.send("@everyone, " + getMessage())).catch(console.error);
			client.channels.fetch('720357478826770464').then(channel => channel.send("@everyone, " + getMessage())).catch(console.error);
			client.channels.fetch('720357492969963521').then(channel => channel.send("@everyone, " + getMessage())).catch(console.error);
			client.channels.fetch('720357514549657681').then(channel => channel.send("@everyone, " + getMessage())).catch(console.error);	
		};
		setInterval(
			function() {
				for (var i = 1; i <= 10; i++) {
					send(config[i]);
				};
				talk()
			}, config.wait
		);
	};
});