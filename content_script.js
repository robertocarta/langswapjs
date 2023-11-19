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
    "content" : ["contenuto"],
    "marito" : ["husband"]
}

var knownWords = []

console.log("START");

// n words
// wordSource
// function wordPairs(nWords, wordSource, knownWords) {
//   // return words.values.filter( vals => { knownWords.filter( w => vals.includes(w) ) } )
//   var cleanWords = {}
//   for ( var key in wordSource  ) {
//     var translations = wordsSource[key] 
//     for (var word in translations) {
//       if (knownWords.includes(word)) {
//         continue
//       }
//       cleanWords[key] = translations
//     }
//   }
//   return cleanWords
// }

function wordPairs(wordsNative, knownWords) {
  var learnWords = {}
  for (const [key, value] of Object.entries(wordsNative)) {
      if (knownWords.some(word => value.includes(word))) {
        continue}
      learnWords[key] = value  
}
  return learnWords
}


// Select all text nodes on the webpage
//var textNodes = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT, null, false);

// Iterate through each text node
// while (textNodes.nextNode()) {
//     console.log("hey")
//     var node = textNodes.currentNode;
//     for (var word in wordPairs(words, knownWords)) {
//       pattern =  new RegExp(`\\b${word}\\b`)
//       var replacement =  words[word][0]
//       node.textContent = node.textContent.replace(pattern, replacement)
//     }
// }

var allParagraphs = document.getElementsByTagName("p");
for (var i = 0;i < allParagraphs.length; i++){
  for (var word in wordPairs(words, knownWords)) {
    console.log("in word loop")
    pattern =  new RegExp(`\\b${word}\\b`)
    var replacement = `"<mark>${words[word][0]}</mark>"`
    allParagraphs[i].innerHTML.replace(pattern, replacement)
}
}

