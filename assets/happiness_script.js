const quotes = [
  "আপনার জীবনে যা কিছু ঘটছে, তা সব কিছু আপনার উপকারের জন্যই।",
  "আপনার আনন্দ অন্যদের আনন্দে পরিবর্তিত হতে পারে।",
  "সুখের পথ সবসময় সহজ নয়, তবে আপনি যা শিখবেন তা অমূল্য।",
  "প্রতিটি দিন নতুন একটি শুরু।",
  "সুখ কোনো গন্তব্য নয়, এটি একটি যাত্রা।",
  "ছোট ছোট জিনিসে আনন্দ খুঁজে নিন।",
  "আপনার হাসি অন্য কারো জন্য সুখের কারণ হতে পারে।",
  "সুখ সবসময় আপনার আশেপাশে, শুধু খুঁজে বের করুন।",
  "জীবন উপভোগ করুন, কারণ এটি একবারই আসে।",
  "যে মন কৃতজ্ঞ, সে সবসময় সুখী।",
  "নিজের মধ্যে সুখ খুঁজুন, বাইরের জগতে নয়।",
  "জীবনের প্রতিটি মুহূর্ত একটি আশীর্বাদ।",
  "আনন্দ সৃষ্টিতে নিজেকে জড়িত রাখুন।",
  "আপনার ইতিবাচক চিন্তা আপনার সুখ বাড়িয়ে তুলবে।",
  "আপনি যেমন ভাববেন, তেমনই আপনার জীবন হবে।"
];

const quoteElement = document.getElementById("quote");
const newQuoteButton = document.getElementById("new-quote");
const gratitudeInput = document.getElementById("gratitude-input");

newQuoteButton.addEventListener("click", () => {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  quoteElement.textContent = quotes[randomIndex];
});

document.getElementById("save-gratitude").addEventListener("click", () => {
  const gratitudeText = gratitudeInput.value.trim();
  if (gratitudeText) {
    alert("আপনার অনুভূতি মার্ক করা হয়েছে!");
    gratitudeInput.value = ''; // Clear the input field after saving
  } else {
    alert("অনুগ্রহ করে আপনার মনের অনুভূতি লিখুন...");
  }
});