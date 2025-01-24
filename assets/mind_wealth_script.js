const quotes = [
  "ধনী হতে হলে প্রথমে ধনী মানসিকতা গড়ে তুলুন।",
  "আপনার আর্থিক সাফল্য শুরু হয় আত্মবিশ্বাস থেকে।",
  "যে অভ্যাস গড়ে তুলবেন, সেটাই আপনার ভবিষ্যৎ তৈরি করবে।",
  "আজকের ছোট পদক্ষেপই আগামীকালের বড় সাফল্য।",
  "নিজেকে সফল হিসেবে ভাবুন, সফলতা আপনার পিছু নেবে।",
  "আপনার মানসিকতা বদলালে আপনার জীবন বদলাবে।",
  "অর্থ সঞ্চয় এবং বিনিয়োগ করার অভ্যাসই ভবিষ্যতে সফলতা এনে দেয়।",
  "সবচেয়ে ধনী মানুষরাও ছোট পদক্ষেপ থেকে শুরু করেছিল।",
  "নিজেকে উন্নত করার জন্য প্রতিদিন ১% ভালো করার চেষ্টা করুন।",
  "যে সময় আপনি হারান, তা ফেরত আসে না। সময়কে কাজে লাগান।",
  "আপনার শক্তি কোথায় ব্যয় হচ্ছে, সেটাই আপনার সাফল্যের নির্ধারক।",
  "স্বপ্ন দেখা শুরু করুন, তবে কাজ করে সেই স্বপ্ন পূরণ করুন।",
  "নিজের প্রতি বিশ্বাস রাখুন; অর্থনৈতিক সফলতা আপনার পথেই আসবে।",
  "সফল মানুষেরা সমস্যায় দমে না গিয়ে সমাধান খোঁজে।",
  "আপনার আয় থেকে কম ব্যয় করুন এবং বেশি সঞ্চয় করুন।",
  "অর্থ সঞ্চয় করা মানে নিজেকে ভবিষ্যতের জন্য প্রস্তুত করা।",
  "নিজেকে একজন ধনী ব্যক্তি হিসেবে ভাবা শুরু করুন।",
  "অর্থ শুধু একটি মাধ্যম; আপনার লক্ষ্য হওয়া উচিত মানসিক শান্তি।",
  "ছোট ছোট পরিবর্তনগুলো সময়ের সাথে বড় ফলাফল আনে।",
  "সফলতা মানে ধৈর্য, অধ্যবসায়, এবং আত্মবিশ্বাস।",
  "অর্থ নিয়ে ভীত হওয়া নয়, বরং বুদ্ধিমানের মতো তা পরিচালনা করুন।",
  "কাজে ফোকাস করুন, সাফল্য ধীরে ধীরে আপনার কাছে আসবে।",
  "ব্যর্থতাকে শেখার একটি ধাপ হিসেবে গ্রহণ করুন।",
  "আপনার লক্ষ্যগুলোকে ছোট অংশে ভাগ করুন এবং শুরু করুন।",
  "অর্থনৈতিক স্বাধীনতার প্রথম পদক্ষেপ হলো সঞ্চয়।"
];


function generateQuote() {
  const quote = quotes[Math.floor(Math.random() * quotes.length)];
  document.getElementById('daily-quote').innerText = quote;
}

const habitForm = document.getElementById('habit-form');
const habitList = document.getElementById('habit-list');

habitForm.addEventListener('submit', function (e) {
  e.preventDefault();
  const habitInput = document.getElementById('habit-input');
  const habitText = habitInput.value.trim();

  if (habitText) {
    const li = document.createElement('li');
    li.textContent = habitText;
    habitList.appendChild(li);
    habitInput.value = '';
  }
});


function saveReflection() {
  const reflectionInput = document.getElementById('reflection-input');
  const reflection = reflectionInput.value.trim();

  if (reflection) {
    alert("আজকের দিনে আপনি যতোটা সঞ্চয় করেছেন সেটা Mark করা হলো " + reflection);
    reflectionInput.value = '';
  } else {
    alert("অনুগ্রহ করে লিখুন");
  }
}