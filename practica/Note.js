class NotesManager{
    static quantity = 0;
    static #notes = [];
    create(data){
        data.id = NotesManager.quantity === 0
        ? 1
        : NotesManager.#notes[NotesManager.#notes.length - 1].id + 1;
        NotesManager.quantity++;
        data.type ? data.type : "to do"
        data.date || new Date().toLocaleDateString();
        !data.text ? "ingrese un texto" : NotesManager.#notes.push(data);
    }
    read(){
        return NotesManager.#notes;
    }
}

const notes = new NotesManager();
notes.create({ text: "Comprar pan" });
console.log(notes.read());