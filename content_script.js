var pattern;
var replacement;

const words = {
  "Fisco": "lol",
  "loro": "their",
    "tempo": "time",
    "se": "if",
    "volontà": "will",
    "come": "how",
    "detto": "said",
    "un": "an",
    "ogni": "each",
    "dire": "tell",
    "fa": "does",
    "fisso": "set",
    "tre": "three",
    "desiderare": "desire",
}


// Select all text nodes on the webpage
var textNodes = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT, null, false);

// Iterate through each text node
while (textNodes.nextNode()) {
    console.log("hey")
    var node = textNodes.currentNode;
    for (var word in words) {
      pattern =  new RegExp(`\\b${word}\\b`)
      var replacement =  "<<<<<<<<<<<<<<< " + words[word] +  ">>>>>>>>>>>>>>"
      node.textContent = node.textContent.replace(pattern, replacement)
    }
}

