const loveMessages = [
  "তুমি কেমন আছো? তুমি যেমনই থাকো তবুও চাইবো সবসময়ই ভালো থাকো এবং সুখী হও",
  "তোমার জীবনের প্রতিটি সময় আর প্রতিটি ক্ষণ যেন ভালোবাসার রঙ্গে রঙ্গিন হয়ে উঠে সেই শুভকামনা সবসময়ই রইবে!",
  "তুমি যেমনই হও তেমন করেই তুমি তোমার মতো সুন্দর!",
  "তোমার মুখ বা চেহারাতে তোমার সৌন্দর্য নয় বরং তোমার ভেতরের মানসিকতার অন্তঃস্থিত স্বরূপ'ই আসল সৌন্দর্য!",
  "সবকিছুই এক সময় কালের পরিক্রমায় ধ্বংস হয়ে যায় তবে ভালোবাসা সবসময়ই ধ্রুবের ন্যায় দ্যুতি ছড়ায় - সেই ভালোবাসা দ্যুতিতে তোমার জীবন হয়ে উঠুক সুখী ও সফল।",
  "আমি তোমাকে ভালোবাসি - কোন তোমাকে ভালোবাসি জানো? একদম তোমার মনের ভেতরের সেই 'তুমি' যাকে তুমি উপলব্ধি করো",
  "তোমাকে আমি তোমার মনের মতো করেই ভালোবাসি আর ভালোবাসতে চাই - সেই রকমের ভালোবাসা যা কিনা তোমার অন্তর তৃপ্ত করতে সক্ষম হয়!",
  "আমি তোমাকে পুরোটা জুড়েই ভালোবাসি - যেই ভালোবাসাতে তোমার ভালো লাগা, মন্দ লাগা যাবতীয় জাগতিক অনুভূতিই বিরাজমান। আমি তোমার পুরোটাই আমার অন্তর দিয়ে উপলব্ধি করেই ভালোবাসি!",
  "ভালোবাসি ভালোবাসি ভালোবাসি - ভালোবাসার মাখামাখিতে তোমার আমি আপন করে নিই!"
];

// Audio setup
const audio = new Audio('https://github.com/HumayunShariarHimu/MindHeaven/raw/refs/heads/main/AudioStorage/love_background_music.mp3');

function showLoveMessage() {
  const messageElement = document.getElementById('message');
  const randomIndex = Math.floor(Math.random() * loveMessages.length);
  messageElement.textContent = loveMessages[randomIndex];

  // Reset and play the audio
  audio.currentTime = 0;
  audio.play();
}