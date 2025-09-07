const loadCategories = () => {
    fetch('https://openapi.programming-hero.com/api/categories')
        .then((res) => res.json())
        .then((json) => displayCategory(json.categories))
}

const displayCategory = (categories) => {
    const allCategories = document.getElementById('all-categories');
    allCategories.innerHTML = "";

    for (const category of categories) {
        const btnDiv = document.createElement('div');
        btnDiv.innerHTML = `
    <h3 class = "py-2 cursor-pointer">${category.category_name}</h3>
    `;

        allCategories.append(btnDiv);
    }
}

loadCategories();