console.log('Welcome !!');

const cobraBtn = document.getElementsByClassName('cobra');
var numCobra = cobraBtn.length;

for (var i = 0; i < numCobra; i++) {
    cobraBtn[i].addEventListener('click', cobraTheme, false);
}

function cobraTheme() {
    var cssId = 'myCss';
    if (!document.getElementById(cssId)) {
        var head = document.getElementsByTagName('head')[0];
        var link = document.createElement('link');
        link.id = cssId;
        link.rel = 'stylesheet';
        link.type = 'text/css';
        link.href = './CSS/cobraext.css';
        link.media = 'all';
        head.appendChild(link);
    }
};

const pythonBtn = document.getElementsByClassName('python');
var numPython = pythonBtn.length;

for (var i = 0; i < numPython; i++) {
    pythonBtn[i].addEventListener('click', pythonTheme, false);
}

function pythonTheme() {
    var cssIdPython = 'myCssPython';
    if (!document.getElementById(cssIdPython)) {
        var head = document.getElementsByTagName('head')[0];
        var link = document.createElement('link');
        link.id = cssIdPython;
        link.rel = 'stylesheet';
        link.type = 'text/css';
        link.href = './CSS/pythonext.css';
        link.media = 'all';
        head.appendChild(link);
    }
};

const noneBtn = document.getElementsByClassName('none');
var numNone = noneBtn.length;

for (var i = 0; i < numNone; i++) {
    noneBtn[i].addEventListener('click', noneTheme, false);
}

function noneTheme() {
    var cssIdNone = 'myCssNone';
    if (!document.getElementById(cssIdNone)) {
        var head = document.getElementsByTagName('head')[0];
        var link = document.createElement('link');
        link.id = cssIdNone;
        link.rel = 'stylesheet';
        link.type = 'text/css';
        link.href = './CSS/style.css';
        link.media = 'all';
        head.appendChild(link);
    }

    window.location.reload();
};