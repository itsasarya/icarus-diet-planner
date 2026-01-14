const slotsText = document.getElementById("slots")
const extra_slots = document.querySelectorAll(".slots input[name='extra_slot']")

function updateSlots() {
    let slots = 3
    extra_slots.forEach(es => {
        if (es.checked) {
            slots += Number(es.value);
        }
    });
    slotsText.textContent = `Max slots: ${slots}`
}

extra_slots.forEach(es => {
    es.addEventListener("change", updateSlots)
})

updateSlots()
// buff filter

fetch("./data/buffs.json").then(res => res.json()).then(buffs => createBuffFilters(buffs));

function createBuffFilters(buffs) {
    const container = document.getElementById("filters");

    Object.entries(buffs).sort((a, b) => {
        const labelA = a[1].label.toLowerCase();
        const labelB = b[1].label.toLowerCase();
        return labelA.localeCompare(labelB);
    }).forEach(([id, buff]) => {

        const label = document.createElement("label");

        const checkbox = document.createElement("input")
        checkbox.type = "checkbox"
        checkbox.value = id

        const text = document.createTextNode(" " + buff.label)
        label.style.display = "block"

        label.appendChild(checkbox)
        label.appendChild(text)

        container.appendChild(label);
    })
}

//Foods

let ALL_FOODS = [];
let ACTIVE_BUFF_FILTERS = [];

fetch('./data/foods.json').then(res => res.json()).then(foods => {
    ALL_FOODS = foods;
    renderFoods(ALL_FOODS)
})

function renderFoods(foods) {
    const grid = document.getElementById("food-grid");
    grid.innerHTML = "";

    foods.forEach(food => {
        const card = document.createElement("div")
        card.className = "food-card"
        card.innerHTML = `
        <img src="./assets/foods/${food.image}" alt="${food.name}"/>
        <div class="food-name">${food.name}</div>
        `;

        grid.appendChild(card)
    })
}

document.getElementById("filters").addEventListener("change", e => {
    ACTIVE_BUFF_FILTERS = [...document.querySelectorAll(
        "#filters input:checked"
    )].map(cb => cb.value)

    applyFoodFilters();
})

function applyFoodFilters() {
    if (ACTIVE_BUFF_FILTERS.length === 0) {
        renderFoods(ALL_FOODS)
        return
    }

    const filtered = ALL_FOODS.filter(food => {
        const foodBuffIds = food.buffs.map(b => b.id)

        return ACTIVE_BUFF_FILTERS.every(buffId => foodBuffIds.includes(buffId))
    })
    renderFoods(filtered)
}