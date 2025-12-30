
               //MY SEARCH BOX FUNCTIONALITY
const searchInput = document.getElementById('searchInput');
const searchButton = document.getElementById('searchButton');
const suggestions = document.getElementById('suggestions');
const searchResults = document.getElementById('searchResults');
const searchableItems = Array.from(document.querySelectorAll('h1, h3, p, a, td')); 
searchInput.addEventListener('input', function() {
    const query = searchInput.value.toLowerCase();
    suggestions.innerHTML = ''; 

    if(query.length === 0) return;

    const matches = searchableItems.filter(item => item.textContent.toLowerCase().includes(query));
    
    matches.slice(0, 5).forEach(match => {
        const div = document.createElement('div');
        div.textContent = match.textContent;
        div.style.padding = '5px';
        div.style.cursor = 'pointer';
        div.addEventListener('click', () => {
            searchInput.value = match.textContent;
            suggestions.innerHTML = '';
        });
        suggestions.appendChild(div);
    });
});
searchButton.addEventListener('click', function() {
    const query = searchInput.value.toLowerCase();
    searchResults.innerHTML = ''; 
    const matches = searchableItems.filter(item => item.textContent.toLowerCase().includes(query));

    if(matches.length === 0){
        searchResults.textContent = 'No match found!';
        searchResults.style.color = 'red';
        searchResults.style.textAlign = 'center';
        return;
    }
    matches.forEach(item => {
        const div = document.createElement('div');
        div.textContent = item.textContent;
        div.style.margin = '5px';
        div.style.padding = '5px';
        div.style.border = '1px solid #ccc';
        div.style.backgroundColor = '#f0f0f0';
        searchResults.appendChild(div);
    });
});
