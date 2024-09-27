javascript
// script.js
document.addEventListener('DOMContentLoaded', loadNotes);

function loadNotes() {
    const notesList = document.getElementById('notesList');
    notesList.innerHTML = ''; // Limpia la lista antes de cargar

    // Obtener las notas del localStorage
    const notes = JSON.parse(localStorage.getItem('notes')) || [];

    // Agregar cada nota a la lista
    notes.forEach((note, index) => {
        const li = document.createElement('li');
        li.textContent = note;

        // Botón para eliminar la nota
        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Eliminar';
        deleteButton.style.marginLeft = '10px';
        deleteButton.addEventListener('click', function() {
            deleteNote(index);
        });

        li.appendChild(deleteButton);
        notesList.appendChild(li);
    });
}

function deleteNote(index) {
    // Obtener las notas del localStorage
    const notes = JSON.parse(localStorage.getItem('notes')) || [];
    
    // Eliminar la nota
    notes.splice(index, 1);
    
    // Guardar las notas actualizadas en el localStorage
    localStorage.setItem('notes', JSON.stringify(notes));
    
    // Recargar las notas en la lista
    loadNotes();
}
