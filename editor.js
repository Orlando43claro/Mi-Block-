
// editor.js
document.getElementById('saveButton').addEventListener('click', saveNote);

function saveNote() {
    const noteInput = document.getElementById('noteInput');
    const noteText = noteInput.value.trim();

    if (noteText === '') {
        alert('Por favor, escribe una nota.');
        return;
    }

    // Obtener notas existentes
    const notes = JSON.parse(localStorage.getItem('notes')) || [];
    // Agregar la nueva nota
    notes.push(noteText);
    // Guardar las notas actualizadas
    localStorage.setItem('notes', JSON.stringify(notes));

    // Limpiar el campo de entrada
    noteInput.value = '';
    alert('Nota guardada con éxito!');
}
