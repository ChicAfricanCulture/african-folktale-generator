document.addEventListener("DOMContentLoaded", () => {
  const holidayButtonsDiv = document.getElementById("holidayButtons");
  const generateBtn = document.getElementById("generateBtn");
  const remixBtn = document.getElementById("remixBtn");
  const readAloudBtn = document.getElementById("readAloudBtn");
  const shareBtn = document.getElementById("shareBtn");
  const regionSelect = document.getElementById("cultureSelect");
  const themeSelect = document.getElementById("themeSelect");
  const storyContainer = document.getElementById("storyContainer");

  let selectedHoliday = null;
  let lastStory = "";

  const holidayColors = {
    "Eid al-Fitr": "#d0f0e0",
    "Eid al-Adha": "#c2e2db",
    "Human Rights Day": "#fbe6c2",
    "Rosh Hashanah": "#e6d3f2",
    "Diwali": "#ffeacc",
    "Meskel": "#f6d1a7",
    "Christmas": "#d2efc1",
    "New Year's": "#e5f4f7",
    "Easter": "#fff7e5",
    "New Yam Festival": "#f3d8b6",
    "Boxing Day": "#d1e9e5"
  };

  holidays.forEach(h => {
    const btn = document.createElement("button");
    btn.textContent = h;
    btn.onclick = () => {
      selectedHoliday = h;
      document.body.style.backgroundColor = holidayColors[h] || "#f4e9dc";
      [...holidayButtonsDiv.children].forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
    };
    holidayButtonsDiv.appendChild(btn);
  });

  generateBtn.onclick = () => {
    const regionKey = regionSelect.value;
    const themeKey = themeSelect.value;

    if (!selectedHoliday || !regionKey || !themeKey) {
      alert("Please select a holiday, region, and theme.");
      return;
    }

    const story = generateStory(selectedHoliday, regionKey, themeKey);
    storyContainer.innerHTML = story;
    lastStory = story;
    remixBtn.disabled = false;
    readAloudBtn.disabled = false;
    shareBtn.disabled = false;
  };

  remixBtn.onclick = () => {
    const regionKey = regionSelect.value;
    const themeKey = themeSelect.value;

    const story = generateStory(selectedHoliday, regionKey, themeKey);
    storyContainer.innerHTML = story;
    lastStory = story;
  };

  readAloudBtn.onclick = () => {
    if (!lastStory) return;
    const utter = new SpeechSynthesisUtterance(lastStory.replace(/<[^>]+>/g, ""));
    speechSynthesis.speak(utter);
  };

  shareBtn.onclick = () => {
    navigator.clipboard.writeText(
      lastStory.replace(/<br>/g, "\n").replace(/<[^>]+>/g, "")
    ).then(() => {
      alert("Story copied to clipboard!");
    }).catch(err => {
      alert("Copy failed: " + err);
    });
  };
});

