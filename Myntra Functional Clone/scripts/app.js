let bagItems;

onLoad();


function onLoad() {

    bagItems = JSON.parse(localStorage.getItem('bagItem')) || [];

    displayBagIcon();
    displayItemsOnHomePages();
    // localStorage.clear();
}

function displayItemsOnHomePages() {
    let itemsContainerElements = document.querySelector(".items-container");
    if(!itemsContainerElements){
        return ;
    }
    let innerHTML = '';
    items.forEach(item => {
        innerHTML += ` <div class="item-container">
        <img class="item-image" src="${item.image}" alt="item image" />
        <div class="rating">${item.rating.stars} ⭐| ${item.rating.count}</div>
        <div class="company-name">${item.company}</div>
        <div class="item-name">${item.item_name}</div>
        <div class="price">
          <span class="current-price">Rs ${item.current_price}</span>
          <span class="original-price">Rs ${item.original_price}</span>
          <span class="discount"></span>${item.discount_percentage}% OFF</span>
        </div>
        <button class="btn-add-bag"> Add to Bag</button>
        </div>`;

    });
    itemsContainerElements.innerHTML = innerHTML;


    let addToBagButtons = document.querySelectorAll('.btn-add-bag');
    addToBagButtons.forEach((button, index) => {
        button.addEventListener('click', () => {
            let itemId = items[index].id;
            bagItems.push(itemId);
            displayBagIcon();
            localStorage.setItem('bagItem', JSON.stringify(bagItems));
        });
    });


}


function displayBagIcon() {
    let bagItemCountElement = document.querySelector('.bag-item-count');
    if (bagItems.length == 0) {
        bagItemCountElement.style.visibility = 'hidden';
    }
    else {
        bagItemCountElement.style.visibility = 'visible';
        bagItemCountElement.innerText = bagItems.length;
    }
}


