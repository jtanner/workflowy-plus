/**
  * These commands should be in background.js and manifest.json
  */
const commands = {
  focusParent: () => {
    let parent = getOpenParent()
    parent && parent.find('.content')[0].focus()
  },

  openFirstLinkInNotes: () => {
    let firstLink = $(document.activeElement).closest('.project').find('.notes').find('a')
    firstLink[0] && firstLink[0].click()
  },
}

function getOpenParent() {
  let parent = $(document.activeElement).closest('.project').parent('.children').parent('.project')
  if (isParentNode(parent)) return parent
}

function isParentNode(n) {
  // "parent" in this case is a node that is not showing
  return (n.hasClass("open") || n.hasClass("selected")) && !n.hasClass("parent")
}

/* ---------------------------------------------------- */

// listen for commands
chrome.runtime.onMessage.addListener(
  (request, sender, sendResponse) => {
    if (typeof commands[request.command] === "function") {
      commands[request.command]()
    }
  }
)
