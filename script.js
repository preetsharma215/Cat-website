const messages = [
  "I made this little website just for you 🐱",
  "Because tumhari smile mere din ka best part hai",
  "Tum simple ho, sweet ho, aur special ho",
  "Har message me thoda sa main hoon",
  "Aur har word me thoda sa tum ❤️",
  "Bas itna hi kehna tha...",
  "Tum mere liye bohot important ho 🐱💖"
];

let index = 0;

function nextMessage() {
  if (index < messages.length) {
    document.getElementById("message").innerText = messages[index];
    index++;
  }
}
