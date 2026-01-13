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