// Drag and drop
const dropItems = document.getElementById('drop-items')

new Sortable(dropItems, {
    animation: 350,
    chosenClass: 'sortable-choson',
    dragClass: 'sortable-drag',
})