// Function to replace text in text nodes
function replaceText(node) {
    if (node.nodeType === Node.TEXT_NODE) {
        node.textContent = node.textContent.replace(/onderwijsloket/gi, '💕 Onderwijskroket 💕');
    } else {
        node.childNodes.forEach(replaceText);
    }
}

// Initial replacement
replaceText(document.body);

// Create a MutationObserver to handle dynamically loaded content
const observer = new MutationObserver((mutations) => {
    mutations.forEach((mutation) => {
        mutation.addedNodes.forEach((node) => {
            if (node.nodeType === Node.ELEMENT_NODE) {
                replaceText(node);
            }
        });
    });
});

// Start observing the document with the configured parameters
observer.observe(document.body, {
    childList: true,
    subtree: true
});