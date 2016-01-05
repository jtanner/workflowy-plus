/**
  * These commands should be in background.js and manifest.json
  */
const commands = {
  focusParent: () => {
    let parent = getOpenParent()
    if (!parent) return
    focusContentNode(parent)
  }
}

function getOpenParent() {
  //                                 .name      .project   .children  .project
  let parent = document.activeElement.parentNode.parentNode.parentNode.parentNode
  if (isParentNode(parent)) return parent
}

function isParentNode(n) {
  // "parent" in this case is a node that is not showing
  return (n.className.includes("open") || n.className.includes("selected")) && !n.className.includes("parent")
}

function focusContentNode(n) {
  let content = n.getElementsByClassName('content')[0]
  content.focus()
}

// listen for commands
chrome.runtime.onMessage.addListener(
  (request, sender, sendResponse) => {
    if (typeof commands[request.command] === "function") {
      commands[request.command]()
    }
  }
)
