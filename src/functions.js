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

function getNavLinksText(document) {
  var str = '';
  var myArr = [];
  var element = document.getElementById("navbarSupportedContent");
  for (i = 0; i < element.getElementsByTagName("a").length; i++) {
    var tags = element.getElementsByTagName("a")[i].textContent;
    str = tags.trim();
    myArr.push(str);
  };
  return myArr;
}

function addDashesToLinks(document) {
  var links = document.querySelectorAll('.nav-link');
  links.forEach(function (item) {
    item.textContent = '-' + item.textContent + '-';
  });
}

function italicTitles(document) {
  var tags = document.querySelectorAll('.article-title a');
  tags.forEach(function (item) {
    item.innerHTML = "<i>" + item.textContent + "</i>";
  });
}

function greenLinks(document) {
  var links = document.querySelectorAll('.article-read-more a');
  links.forEach(function (item) {
    item.style.color = "green";
  });
}

function addLink(document) {
  var li = document.createElement("li");
  li.classList = 'nav-item';
  var link = document.createElement("a");
  link.classList = 'nav-link';
  link.innerHTML = "Code Your Future";
  link.setAttribute("href", "https://codeyourfuture.io/");
  li.appendChild(link);
  var parent = document.getElementsByClassName("nav-item");
  parent[parent.length - 1].appendChild(li);
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
