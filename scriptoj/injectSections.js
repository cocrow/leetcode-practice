/*
    https://scriptoj.com/problems/94
*/

const injectSections = (items, sections) => {
    let arr = sections.sort(function(a, b) {
        return a.index - b.index;
    })
    sections.forEach((v, i) => {
        let index = v.index + i;
        items = [...items.slice(0, index), v.content, ...items.slice(index)];
    });
    return items;
};