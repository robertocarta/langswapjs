
const nlp = require("it-compromise")

var pattern;
var replacement;


const ROLES = {
  "verb": "v",
  "noun": "n",
}


// VERBS only infinite

const wordMaps = [
  { "source": "germania", "role": ROLES.noun, "dests": ["germany"] },
  { "source": "loro", "role": ROLES.noun, "dests": ["they"] },
  { "source": "tempo", "role": ROLES.noun, "dests": ["time"] },
  { "source": "se", "role": ROLES.noun, "dests": ["if"] },
  { "source": "volontà", "role": ROLES.noun, "dests": ["will"] },
  { "source": "come", "role": ROLES.noun, "dests": ["how"] },
  { "source": "dire", "role": ROLES.verb, "dests": ["say", "tell"] },
  { "source": "un", "role": ROLES.noun, "dests": ["an"] },
  { "source": "ogni", "role": ROLES.noun, "dests": ["each"] },
  { "source": "fa", "role": ROLES.verb, "dests": ["does"] },
  { "source": "fisso", "role": ROLES.verb, "dests": ["set"] },
  { "source": "tre", "role": ROLES.noun, "dests": ["three"] },
  { "source": "desiderare", "role": ROLES.verb, "dests": ["desire"] },
  { "source": "content", "role": ROLES.noun, "dests": ["contenuto"] },
  { "source": "marito", "role": ROLES.noun, "dests": ["husband"] }
]

var knownMaps = [
  { "source": "tre", "role": ROLES.noun, "dests": ["three"] },
]




function activeMaps(wordMaps, knownMaps) {
  const _isKnown = (wMap, kMap) => (wMap.source == kMap.source && wMap.role === kMap.role)
  const notKnown = wMap => !knownMaps.some( kMap => _isKnown(wMap, kMap) )
  return wordMaps.filter(notKnown)
}


var allParagraphs = document.getElementsByTagName("p");
allParagraphs.forEach( el => {
  activeMaps(wordMaps, knownMaps).forEach( ({source, dests}) => {
    pattern =  new RegExp(`\\b${source}\\b`)
    var replacement = `<mark>${dests[0]}</mark>`
    el.innerHTML = el.innerHTML.replace(pattern, replacement)
  })
})

