function getTitle(document) {
  var elements = document.getElementsByTagName("title")[0].innerHTML;
  return elements;
};

function getNumberOfBikes(document) {
  var bikeNumber = document.getElementById("donation-count-alert").textContent;
  var num = Number(bikeNumber);
  return num;
};

function getAllButtonText( document ) {
  // get the text inside all tags with class 'btn' and return as an array of strings
  
  // https://developer.mozilla.org/en-US/docs/Web/API/HTMLCollection
  // also you may want to convert the HTMLCollection to an array
};

function getNavLinksText( document ){
  // get the text content of all 'A' tags inside element with id 'navbarSupportedContent'
  // reuturn as an array of strings
}

function addDashesToLinks( document ){
  // surround the text in navigation bar links with '-'
  // no return needed
}

function italicTitles( document ){
  // convert links in 'Upcoming Events' section to italic using `<i>` tag
  // no return needed
}

function greenLinks( document ){
  // make `Learn more` links green
  // no return needed
}

function addLink( document ){
  // Using `createElement` etc. create a new navbar item link 'Code Your Future' which links to
  // `https://codeyourfuture.io/`. It should have same structure as the other links
  // no return needed
}

module.exports = {
  getTitle,
  getNumberOfBikes,
  getAllButtonText,
  getNavLinksText,
  addDashesToLinks,
  italicTitles,
  greenLinks,
  addLink
};
