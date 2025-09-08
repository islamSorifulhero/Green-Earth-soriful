const allCategories = document.getElementById('all-categories');


const loadCategories = () => {
    fetch('https://openapi.programming-hero.com/api/categories')
        .then(res => res.json())
        .then(json => displayCategory(json.categories))
}

const displayCategory = (categories) => {
    const allCategories = document.getElementById('all-categories');
    allCategories.innerHTML = "";

    let activeCategoryId = null;

    for (const category of categories) {
        const btnDiv = document.createElement('div');
        btnDiv.innerHTML = `
            <h3 class="py-2 cursor-pointer hover:bg-green-200 rounded-lg px-2">${category.category_name}</h3>
        `;

        btnDiv.addEventListener('click', () => {

            activeCategoryId = category.id;

            const allBtns = allCategories.querySelectorAll('h3');
            allBtns.forEach(btn => btn.classList.remove('bg-green-800', 'text-white'))

            btnDiv.querySelector('h3').classList.add('bg-green-800', 'text-white')


            loadPlantsByCategory(category.id);
        });

        allCategories.append(btnDiv);
    }
}

const loadPlants = () => {
    fetch('https://openapi.programming-hero.com/api/plants')
        .then(res => res.json())
        .then(json => displayPlants(json.plants))
}

const loadPlantsByCategory = (categoryId) => {
    fetch(`https://openapi.programming-hero.com/api/category/${categoryId}`)
        .then(res => res.json())
        .then(json => displayPlants(json.plants))
}

const displayPlants = (plants) => {
    const allPlants = document.getElementById('all-plants');
    allPlants.innerHTML = '';

    for (const plant of plants) {
        const btnDiv = document.createElement('div');
        btnDiv.innerHTML = `
            <div class="card bg-base-100 w-full shadow-sm">
                <figure>
                    <img class="min-w-[250px] h-[170px]" src="${plant.image}" alt="${plant.name}" />
                </figure>
                <div class="card-body">
                    <h2 class="card-title text-[10px] font-semibold">${plant.name}</h2>
                    <p class="text-[8px]">${plant.description}</p>
                    <div class="flex justify-between items-center">
                        <div class="bg-[#DCFCE7] p-2 rounded-full text-[10px]">${plant.category}</div>
                        <div class='text-[12px]'>৳${plant.price}</div>
                    </div>
                    <div class="card-actions justify-end">
                        <button class="btn bg-[#15803D] rounded-full text-white text-[12px] font-medium w-full">Add to Cart</button>
                    </div>
                </div>
            </div>
        `;
        allPlants.append(btnDiv);
    }
}

loadCategories();
loadPlants();
