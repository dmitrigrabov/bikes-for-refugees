function getTitle(document) {
  var elements = document.getElementsByTagName("title")[0].innerHTML;
  return elements;
};

function getNumberOfBikes(document) {
  var bikeNumber = document.getElementById("donation-count-alert").textContent;
  var num = Number(bikeNumber);
  return num;
};

function getAllButtonText(document) {
  var str = '';
  var myArr = [];
  for (i = 0; i < document.getElementsByClassName("btn").length; i++) {
    var btnClass = document.getElementsByClassName("btn")[i].textContent;  // 3 elements
    str = btnClass.trim();
    myArr.push(str);
  };
  return myArr;
};

function getNavLinksText( document ){
  // get the text content of all 'A' tags inside element with id 'navbarSupportedContent'
  // reuturn as an array of strings
}

function addDashesToLinks( document ){
  // surround the text in navigation bar links with '-'
  // no return needed
  var links = document.querySelectorAll('.nav-link');
  links.forEach(function(item){
    item.textContent = '-' + item.textContent + '-';
  });
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
