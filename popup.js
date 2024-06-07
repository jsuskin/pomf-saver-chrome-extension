document.getElementById("save-url").addEventListener("click", async () => {
  const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
  if (tab.url.includes("pomf2.lain.la")) {
    saveUrlToFirebase(tab.url);
  } else {
    alert("This is not a valid Pomf2 URL.");
  }
});

async function saveUrlToFirebase(url) {
  const response = await fetch("https://your-nextjs-app-url/api/save-url", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ url }),
  });
  const data = await response.json();
  console.log("URL saved to Firebase:", data);
}
