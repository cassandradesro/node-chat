'use strict';

console.log('Node API Chat');

//user types, preses send, message appears
//user types, preses send, send message to server, message appears
//user types, preses send, get message from the field, send message to server, message appears
//user types, preses send, get message from the field, send message to server, get message list from server, message appears


var sendMessage = function sendMessage() {
	var field = document.querySelector('input[name="new-message"]');
	var username = document.querySelector('input[name="new-username"]');

	if (field.value && username.value) {
		console.log('send to server:', field.value);

		axios //172.31.16.162
		.post("http://localhost:1337/message", {
			text: field.value,
			username: username.value

		}).then(function (res) {
			console.log("success", res);
			field.value = ""; // we put it in here so it ony happens upon successful submission
			console.log("server responded", res);
			showMessagesOnDOM(res.data);
		}).catch(function (error) {
			console.log("error", error);
		});
	}
};

setInterval(sendMessage, 8000);

var showMessagesOnDOM = function showMessagesOnDOM(messages) {
	console.log("gonna show messages:", messages);

	var messagesUL = document.querySelector("ul.messages");
	messagesUL.innerHTML = "";

	// while(messagesUL.children.length){
	// 	messagesUL.removeChild( messagesUL.children[0])
	// }

	messages.forEach(function (message) {
		var newMessage = document.createElement("li");
		var timestamp = document.createElement("a");
		var username = document.createElement("div");

		timestamp.innerHTML = message.timestamp;
		newMessage.innerHTML = message.text;
		username.innerHTML = message.username;

		timestamp.appendChild(username);
		newMessage.appendChild(timestamp);
		messagesUL.appendChild(newMessage);
	});
};

document.querySelector('.send').addEventListener('click', sendMessage);
// document.querySelector('.username').addEventListener('click', postUsername);
//# sourceMappingURL=main.js.map
