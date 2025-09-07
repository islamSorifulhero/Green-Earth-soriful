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


const loadPlants = () => {
    fetch('https://openapi.programming-hero.com/api/plants')
        .then((res) => res.json())
        .then((json) => displayPlants(json.plants))
}
const displayPlants = (plants) => {
    const allPlants = document.getElementById('all-plants');
    // allPlants.innerHTML = '';

    for (const plant of plants) {
        const btnDiv = document.createElement('div');
        btnDiv.innerHTML = `
        
        <div class="card bg-base-100 w-full shadow-sm">
                        <figure>
                            <img class = "min-w-[250px] h-[170px] justify-center items-center" src="${plant.image}"
                                alt="Shoes" />
                        </figure>
                        <div class="card-body">
                            <h2 class="card-title text-[10px] font-semibold">${plant.name}</h2>
                            <p class="text-[8px]">${plant.description}
                            </p>
                            <div class="flex justify-between items-center">
                                <div class = "bg-[#DCFCE7] p-2 rounded-full text-[10px]">${plant.category}</div>
                                <div class = 'text-[12px]'>$${plant.price}</div>
                            </div>
                            <div class="card-actions justify-end">
                                <button
                                    class="btn bg-[#15803D] rounded-full text-white text-[12px] font-medium w-full">Add to Cart</button>
                            </div>
                        </div>
                    </div>
        
        `;

        allPlants.append(btnDiv)
    }
}
loadPlants()