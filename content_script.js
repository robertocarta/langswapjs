var pattern;
var replacement;

const words = {
  "Fisco": ["lol"],
  "loro": ["their"],
    "tempo": ["time"],
    "se": ["if"],
    "volontà": ["will"],
    "come": ["how"],
    "detto": ["said"],
    "un": ["an"],
    "ogni": ["each"],
    "dire": ["tell"],
    "fa": ["does"],
    "fisso": ["set"],
    "tre": ["three"],
    "desiderare": ["desire"],
}

var knownWords = []

// n words
// wordSource
function wordPairs(nWords, wordSource, knownWords) {
  // return words.values.filter( vals => { knownWords.filter( w => vals.includes(w) ) } )
  var cleanWords = {}
  for ( var key in words  ) {
    var translations = words[key]
    for (var word in translations) {
      if (knownWords.includes(word)) {
        continue
      }
      cleanWords[key] = translations
    }
  }
  return cleanWords
}


// Select all text nodes on the webpage
var textNodes = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT, null, false);

// Iterate through each text node
while (textNodes.nextNode()) {
    console.log("hey")
    var node = textNodes.currentNode;
    for (var word in wordPairs()) {
      pattern =  new RegExp(`\\b${word}\\b`)
      var replacement =  "<<<<<<<<<<<<<<< " + words[word][0] +  ">>>>>>>>>>>>>>"
      node.textContent = node.textContent.replace(pattern, replacement)
    }
}

