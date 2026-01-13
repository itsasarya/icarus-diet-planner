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
        console.log(id, buff)

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