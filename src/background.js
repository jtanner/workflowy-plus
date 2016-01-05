/**
  * These commands should be in console.js and manifest.json
  */
const commands = {
  focusParent: (tabId) => chrome.tabs.sendMessage(tabId, {command: "focusParent"})
}

// listener for custom commands
chrome.commands.onCommand.addListener((command) => {
  if (typeof commands[command] === "function") {
    chrome.tabs.query({currentWindow: true, active : true}, (tabs) => {
      commands[command](tabs[0].id)
    })
  }
})
