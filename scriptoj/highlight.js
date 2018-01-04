/*
 * https://scriptoj.com/problems/86
 *  const yourName = 'ScriptOJ'
 *  const myName = 'Jerry'
 *  document.body.innerHTML = highlight`Hello, ${yourName}. I am ${myName}.`
*/

const highlight = function(templateData) {
    let s = templateData[0];
    for (let i = 1;i < arguments.length; i++) {
        let tempInRed = `<span style='color:red'>${arguments[i]}</span>${templateData[i]}`;
        s += tempInRed;
    }
    return s;
};

const highlightArrow = (templateData, ...inData) => {
    let s = '';
    for (let i = 0;i < inData.length;i++) {
        let tempInRed = `${templateData[i]}<span style='color:red'>${inData[i]}</span>`;
        s += tempInRed;
    }
    if (templateData.length > 1) {
        s += templateData[templateData.length - 1];
    }
    return s;
};

const highlightReduce = (templateData, ...inData) => {
    return templateData.reduce((str, cur, i) => {
        console.log(str);
        return `${str}${cur}${inData[i] ? `<span class="highlight">${inData[i]}</span>` : ''}`;
    }, '');
};
