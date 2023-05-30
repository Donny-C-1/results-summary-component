"use strict"

fetch('./data.json')
.then(x => x.json())
.then(y => displayResults(y));

function displayResults(results) {
    let total = 0;
    const avgElement = document.getElementsByClassName('average')[0].getElementsByTagName('span')[0];
    const itemContainer = document.getElementsByClassName('item-cont')[0];
    
    for (let r of results) {
        const item = document.getElementById('item-template').content.children[0].cloneNode(true);
        const icon = item.getElementsByTagName('img')[0];

        item.classList.add(r.category.toLowerCase());
        item.getElementsByClassName('category')[0].textContent = r.category;
        item.getElementsByClassName('score')[0].getElementsByTagName('span')[0].textContent = r.score;
        icon.src += `icon-${r.category.toLowerCase()}.svg`;
        icon.alt = r.category + '-icon';
        total += r.score;

        itemContainer.appendChild(item);
    }

    avgElement.textContent = Math.round(total / results.length);
}