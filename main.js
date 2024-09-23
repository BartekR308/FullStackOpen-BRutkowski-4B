let noteCount = 0;

document.getElementById('note-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Zapobiega domyślnej akcji formularza

    var noteInput = document.getElementById('note-input').value;

    if (noteInput.trim() === '') {
        return; 
    }

    noteCount++;

    var noteItem = document.createElement('div');
    noteItem.className = 'note-item';

    var noteNumber = document.createElement('div');
    noteNumber.className = 'note-item-number';
    noteNumber.innerText = noteCount;

    noteItem.appendChild(noteNumber);
    noteItem.appendChild(document.createTextNode(noteInput));

    document.getElementById('notes-list').appendChild(noteItem);

    document.getElementById('note-input').value = '';
});
