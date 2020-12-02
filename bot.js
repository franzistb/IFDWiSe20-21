window.addEventListener("load", function () {
	document.querySelector('.vui-go').addEventListener("click", function () {

		var artyom = new Artyom();
		artyom.addCommands([
			{
				indexes: ["hallo!", "hallo!"],
				action: function () {
					document.getElementById('in').innerHTML ="Guten Morgen! Was kann ich für dich heute tun?";
					artyom.say("Guten Morgen! Was kann ich für dich heute tun?");
				}
			},

			{
				indexes: ["was gibt es Neues?", "was gibt es Neues"],
				action: function () {
					document.getElementById('in').innerHTML ="Was möchtest du zuerst wissen? Mails, Stundenplan, Wetter oder Essen";
					artyom.say("Was möchtest du zuerst wissen? Mails, Stundenplan, Wetter oder Essen");
				}
			},
			{
				indexes: ["bitte meine Mails", "bitte meine Mails"],
				action: function () {
					document.getElementById('in').innerHTML ="Du hast 5 neue Mails bekommen";
					artyom.say("Du hast 5 neue Mails bekommen");
				}
			},
			{
				indexes: ["wie sieht mein Stundenplan am Montag aus", "wie sieht mein Stundenplan am Montag aus"],
				action: function () {
					document.getElementById('in').innerHTML ="Du hast zuerst Informatik. Danach Gesamtwirtschaft und danach Markteing";
					artyom.say("Du hast zuerst Informatik. Danach Gesamtwirtschaft und danach Markteing");
				}
			},
			{
				indexes: ["was gibt es heute zum essen", "was gibt es heute zum essen"],
				action: function () {
					document.getElementById('in').innerHTML ="Nach einem Blick in den Kühlschrank würde ich dir einen Gemüseauflauf im Ofen empfehlen. Du hast noch reichlich Gemüse, dass du verwenden musst";
					artyom.say("Nach einem Blick in den Kühlschrank würde ich dir einen Gemüseauflauf im Ofen empfehlen. Du hast noch reichlich Gemüse, dass du verwenden musst");
				}
			},
			{
				indexes: ["wie wird das Wetter in Furtwangen", "wie wird das Wetter in Furtwangen"],
				action: function () {
					document.getElementById('in').innerHTML ="Das Wetter in Furtwangen wird morgen bewölkt sein mit 10 Grad";
					artyom.say("Das Wetter in Furtwangen wird morgen bewölkt sein mit 10 Grad");
				}
			},
			{
				indexes: ["gibt es weitere Infos zur Uni?", "gibt es weitere Infos zur Uni?"],
				action: function (i) {
					document.getElementById('in').innerHTML ="Info 1: Deine Abgabe für Interface Design ist in drei Tagen fällig. Info 2: Nächste Woche fällt die Vorlesung in Streaming Anwendungen aus";
					artyom.say("Info 1: Deine Abgabe für Interface Design ist in drei Tagen fällig. Info 2: Nächste Woche fällt die Vorlesung in Streaming Anwendungen aus");
				}
			},
			{
				indexes: ["danke für deine Hilfe"],
				action: function (i) {
					artyom.fatality();
				}
			},
		]);
		function startContinuousArtyom() {
			artyom.fatality();
				artyom.initialize({
					lang: "de-DE",
					continuous: true,
					listen: true,
					interimResults: true,
					debug: true
				}).then(function () {
					console.log("Ready!");
				});
		}
		startContinuousArtyom();
	});
});
