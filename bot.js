window.addEventListener("load", function () {
	document.querySelector('.vui-go').addEventListener("click", function () {

		var artyom = new Artyom();
		artyom.addCommands([
			{
				indexes: ["guten morgen haki", "guten Morgen harki"],
				action: function () {
					document.getElementById('in').innerHTML ="Guten Morgen Marcel, was kann ich für dich tun?";
					artyom.say("Guten Morgen Marcel, was kann ich für dich tun?");
				}
			},

			{
				indexes: ["haki bitte checke meinen HFU Webmail Account", "Haki bitte checke meine HFU Webmail Account"],
				action: function () {
					document.getElementById('in').innerHTML ="Du hast 4 neue Nachrichten. Möchtest du, dass ich sie vorlese?";
					artyom.say("Du hast 4 neue Nachrichten. Möchtest du, dass ich sie vorlese?");
				}
			},
			{
				indexes: ["bitte lese mir nur die Absender vor", "bitte lese mir nur die Abstände vor"],
				action: function () {
					document.getElementById('in').innerHTML ="Die Abesnder sind: HFU Sekretariat, Xing News, Felix.";
					artyom.say("Die Absender sind: HFU Sekretariat, Xing News, Felix");
				}
			},
			{
				indexes: ["okay danke Haki bitte lese mir die Email vom Hfu sekretariat vor", "okay danke Hacki bitte lese mir die E-Mail vom HFU sekretariat vor"],
				action: function () {
					document.getElementById('in').innerHTML ="Aber klar doch! Hier die Nachricht. Versendet am 01.12.2020. Betreff: xy. Nachricht: xy";
					artyom.say("Aber klar doch! Hier die Nachricht. Versendet am 01.12.2020. Betreff: xy. Nachricht: xy");
				}
			},
			{
				indexes: ["welche Vorlesungen habe ich heute", "welche Vorlesung habe ich heute"],
				action: function () {
					document.getElementById('in').innerHTML ="Für den Donnerstag den 08.11.2020 hast du folgende Vorlesungen: 8:45-9:30 Uhr Streaminganwendungen";
					artyom.say("Für den Donnerstag den 08.11.2020 hast du folgende Vorlesungen: 8:45-9:30 Uhr Streaminganwendungen");
				}
			},
			{
				indexes: ["super danke welche abgaben muss ich für diese Fächer diese Woche fertig machen"],
				action: function () {
					document.getElementById('in').innerHTML ="Folgende Abgaben müssen bis zum 15.11 abgegeben sein: Streaminganwendungen Aufgabe 3, Interface Design: Aufhabe 4";
					artyom.say("Folgende Abgaben müssen bis zum 15.11 abgegeben sein: Streaminganwendungen Aufgabe 3, Interface Design: Aufhabe 4");
				}
			},
			{
				indexes: ["wo finde ich die Aufgabenstellung für die Abgabe in Streaminganwendungen", "wo finde ich die Aufgabenstellung für die Abgabe in stream mir Anwendungen", "wo finde ich die Aufgabenstellung für die Abgabe in Streaming Anwendungen"],
				action: function (i) {
					document.getElementById('in').innerHTML ="Die Aufgabenstellung findest du in FELIX im Ordner Streaminganwendungen. Soll ich dir diese Aufgabe vorlesen Marcel?";
					artyom.say("Die Aufgabenstellung findest du in FELIX im Ordner Streaminganwendungen. Soll ich dir diese Aufgabe vorlesen Marcel?");
				}
			},
			{
				indexes: ["danke haki ich werd in FELIX nachschauen!"],
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
