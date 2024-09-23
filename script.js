document.addEventListener('DOMContentLoaded', () => {
    const searchInput = document.getElementById('search-input');
    const searchButton = document.getElementById('search-button');
    const clearHistoryButton = document.getElementById('clear-history-button');
    const searchHistoryList = document.getElementById('search-history');


    let searchHistory = JSON.parse(localStorage.getItem('searchHistory')) || [];

    
    const displaySearchHistory = () => {
        searchHistoryList.innerHTML = '';
        searchHistory.forEach(term => {
            const li = document.createElement('li');
            li.textContent = term;
            searchHistoryList.appendChild(li);
        });
    };

    
    const addSearchTerm = (term) => {
        searchHistory.push(term);
        localStorage.setItem('searchHistory', JSON.stringify(searchHistory));
        displaySearchHistory();
    };

    
    const clearSearchHistory = () => {
        searchHistory = [];
        localStorage.setItem('searchHistory', JSON.stringify(searchHistory));
        displaySearchHistory();
    };

    
    searchButton.addEventListener('click', () => {
        const searchTerm = searchInput.value.trim();
        if (searchTerm) {
            addSearchTerm(searchTerm);
            searchInput.value = '';
        }
    });

    clearHistoryButton.addEventListener('click', clearSearchHistory);

    
    displaySearchHistory();
});
