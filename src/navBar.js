

export default function createNav(){

    // All items we'd like to add
    const navItems = [
        {href: '#home', text: 'Home'},
        {href: '#author', text: 'Author'},
        {href: '#contact', text: 'Contact'},
        {href: 'https:\/\/www.troubador.co.uk\/bookshop\/history-politics-society\/a-brutish-colony\/', text: 'BUY'},
        
    ];

    // A few variables for use later
    var navList = document.createElement('ul'), 
        navItem, navLink;

    navList.classList.add('menu');
    navList.setAttribute('id', 'menu');

    // Cycle over each nav item
    for (var i = 0; i < navItems.length; i++) {
        // Create a fresh list item, and anchor
        navItem = document.createElement('li');
        navLink = document.createElement('a');

        // Set properties on anchor
        navLink.href = navItems[i].href;
        navLink.innerHTML = navItems[i].text;
        navItem.classList.add('menu-item');
        navLink.classList.add('menu-link');
        // Add anchor to list item, and list item to list
        navItem.appendChild(navLink);
        navList.appendChild(navItem);
    }

    // Set first list item as current
    navList.children[0].children[0].className += ' active';
    navList.children[3].children[0].className += ' buy';
   

    
    return navList;
};