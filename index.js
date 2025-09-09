// Get 🌴All Plants
// https://openapi.programming-hero.com/api/plants
// Get 🌴All categories
// https://openapi.programming-hero.com/api/categories
// Get 🌴plants by categories
// https://openapi.programming-hero.com/api/category/${id}
// https://openapi.programming-hero.com/api/category/1
// Get 🌴Plants Detail
// https://openapi.programming-hero.com/api/plant/${id}
// https://openapi.programming-hero.com/api/plant/1


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

const showSpinner = () => {
    document.getElementById('loading-spinner').classList.remove('hidden');
}

const hideSpinner = () => {
    document.getElementById('loading-spinner').classList.add('hidden');
}

const loadPlants = () => {
    showSpinner()
    fetch('https://openapi.programming-hero.com/api/plants')
        .then((res) => res.json())
        .then((json) => {
            displayPlants(json.plants);
            hideSpinner();
        })
}

const loadPlantsByCategory = (categoryId) => {
    showSpinner();
    fetch(`https://openapi.programming-hero.com/api/category/${categoryId}`)
        .then(res => res.json())
        .then(json => {
            displayPlants(json.plants)
            hideSpinner()
        })
}


// right side
let cart = [];
const cartDiv = document.querySelector('.right-head .right-main');


const displayPlants = (plants) => {
    const allPlants = document.getElementById('all-plants');
    allPlants.innerHTML = '';

    for (const plant of plants) {
        const btnDiv = document.createElement('div');
        btnDiv.innerHTML = `
            <div class="card bg-base-100 w-full shadow-sm min-h-[430px]">
                <figure>
                    <img class="min-w-full md:min-w-[250px] h-full md:h-[170px]" src="${plant.image}" alt="${plant.name}" />
                </figure>
                <div class="card-body">
                    <h2 class="card-title text-sm font-semibold cursor-pointer" data-id="${plant.id}">${plant.name}</h2>
                    <p class="text-xs">${plant.description}</p>
                    <div class="flex justify-between items-center">
                        <div class="bg-[#DCFCE7] p-2 rounded-full text-[10px]">${plant.category}</div>
                        <div class='text-[12px]'>৳${plant.price}</div>
                    </div>
                    <div class="card-actions justify-end">
                        <button class="btn bg-[#15803D] rounded-full text-white text-[12px] font-medium w-full add-to-cart" data-id="${plant.id}"
                        data-name="${plant.name}"
                        data-price="${plant.price}"
                        >Add to Cart</button>
                    </div>
                </div>
            </div>
        `;
        allPlants.append(btnDiv);

        const plantNameEl = btnDiv.querySelector('h2');
        plantNameEl.addEventListener('click', () => {
            const id = plantNameEl.getAttribute('data-id');
            showPlantDetail(id);
        });

        const addBtn = btnDiv.querySelector('.add-to-cart');
        addBtn.addEventListener('click', () => {
            const name = addBtn.getAttribute('data-name')
            const price = parseFloat(addBtn.getAttribute('data-price'))

            alert(`${plant.name} has been added to the cart`);

            cart.push({ name, price })
            updateCart();
        });
    }
}

const updateCart = () => {
    if (!cartDiv) return;

    let cartHTML = `<h2 class = "card-title">Your Cart</h2>`;
    let total = 0;

    cart.forEach((item, index) => {
        cartHTML += `
        <div class="flex justify-between items-center bg-[#F0FDF4] p-2 rounded mb-2">
                                <div>
                                    <h1>${item.name}</h1>
                                    <p>৳${item.price}</p>
                                </div>
                                <button class="cursor-pointer text-red-500 remove-item" data-index="${index}">❌</button>
                            </div>
        `;
        total += item.price;
    })
    cartHTML += `<hr class="my-2"><p><strong>Total: ৳${total}</strong></p>`;
    cartDiv.innerHTML = cartHTML;

    const removeBtns = cartDiv.querySelectorAll('.remove-item');
    removeBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const index = btn.getAttribute('data-index');
            cart.splice(index, 1)
            updateCart()
        })
    })
}

loadCategories();
loadPlants();

// Modal
const plantModal = document.getElementById('plantModal');
const modalContent = document.getElementById('modalContent');
const closeModal = document.getElementById('closeModal');

closeModal.addEventListener('click', () => {
    plantModal.classList.add('hidden');
});

const showPlantDetail = (id) => {
    fetch(`https://openapi.programming-hero.com/api/plant/${id}`)
        .then(res => res.json())
        .then(json => {
            const plant = json.plants;
            modalContent.innerHTML = `
                <h2 class="text-lg font-bold mb-2">${plant.name}</h2>
                <img class="w-full h-[200px] object-cover mb-2" src="${plant.image}" alt="${plant.name}" />
                <p class="mb-2"><strong>Category:</strong> ${plant.category}</p>
                <p class="mb-2"><strong>Price:</strong> ৳${plant.price}</p>
                <p class="mb-2"><strong>Description:</strong> ${plant.description}</p>
            `;
            plantModal.classList.remove('hidden');
        });
}