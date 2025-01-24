const routine = [
  { time: "06:00", activity: "Wake Up: Hydrate, stretch, and enjoy mindfulness." },
  { time: "06:30", activity: "Healthy Breakfast: Enjoy a balanced meal." },
  { time: "07:00", activity: "Physical Activity: Exercise to boost endorphins." },
  { time: "08:00", activity: "Shower & Dress: Refresh yourself for the day." },
  { time: "08:30", activity: "Focused Tasks: Start challenging tasks." },
  { time: "10:30", activity: "Short Break: Step outside or enjoy a snack." },
  { time: "11:00", activity: "Work/Study: Focus on moderate tasks." },
  { time: "12:00", activity: "Lunch: Eat a balanced, nutritious meal." },
  { time: "12:30", activity: "Relaxation: Take a nap or read." },
  { time: "13:00", activity: "Collaborative Work: Focus on teamwork or meetings." },
  { time: "15:00", activity: "Movement Break: Stretch or take a brief walk." },
  { time: "15:30", activity: "Work/Study: Wrap up or focus on lighter tasks." },
  { time: "17:00", activity: "Plan Tomorrow: Review and prepare for the next day." },
  { time: "18:00", activity: "Evening Exercise: Engage in light activity." },
  { time: "19:00", activity: "Dinner: Eat a light, nutrient-rich meal." },
  { time: "20:00", activity: "Unwind Time: Engage in hobbies or reading." },
  { time: "21:00", activity: "Family/Social: Connect with loved ones." },
  { time: "21:30", activity: "Night Routine: Practice calming rituals." },
  { time: "22:00", activity: "Sleep: Aim for 7-9 hours of sleep." },
];

function updateClock() {
  const now = new Date();
  let hours = now.getHours();
  const minutes = now.getMinutes();
  const seconds = now.getSeconds();

  // Determine AM or PM
  const ampm = hours >= 12 ? "PM" : "AM";

  // Convert to 12-hour format
  hours = hours % 12;
  hours = hours ? hours : 12; // If hours is 0, set to 12

  // Format time with 2 digits for hours, minutes, and seconds
  const currentTime = 
    String(hours).padStart(2, "0") + ":" + 
    String(minutes).padStart(2, "0") + ":" + 
    String(seconds).padStart(2, "0") + " " + ampm;

  document.getElementById("time").innerText = currentTime;

  // Update activity logic remains the same
  const currentTimeInMinutes = now.getHours() * 60 + minutes;
  const activity = routine.find((item, index) => {
    const activityTime = item.time.split(":");
    const activityTimeInMinutes = parseInt(activityTime[0]) * 60 + parseInt(activityTime[1]);

    const nextActivityTime = routine[index + 1] 
      ? routine[index + 1].time.split(":") 
      : ["24", "00"];
    const nextActivityTimeInMinutes = parseInt(nextActivityTime[0]) * 60 + parseInt(nextActivityTime[1]);

    return currentTimeInMinutes >= activityTimeInMinutes && currentTimeInMinutes < nextActivityTimeInMinutes;
  });

  document.getElementById("activity").innerText = activity ? activity.activity : "Sleeping: Recharge for tomorrow.";
}

// Update the clock every second
setInterval(updateClock, 1000);
updateClock();