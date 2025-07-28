class NotesManager {
  static #notes = [];
  create(data) {
    try {
      const note = {
        id:
          NotesManager.#notes.length === 0
            ? 1
            : NotesManager.#notes[NotesManager.#notes.length - 1].id + 1,
        type: data.type || "to do",
        text: data.text,
        date: data.date || new Date(),
      };
      if (!data.text) {
        throw new Error("Ingrese texto en la nota");
      } else {
        NotesManager.#notes.push(note);
        console.log("Nota creada");
      }
    } catch (error) {
      console.log(error);
    }
  }

  read() {
    try {
      if (NotesManager.#notes.length === 0) {
        console.log("No hay notas");
      } else {
        return NotesManager.#notes;
      }
    } catch (error) {
      console.log(error);
    }
  }

  readOne(id) {
    try {
      const one = NotesManager.#notes.find((note) => note.id === id);
      if (!one) {
        throw new Error("Nota no encontrada");
      } else {
        return one;
      }
    } catch (error) {
      console.log(error);
    }
  }

  destroy(id) {
    try {
      const notaEliminada = NotesManager.#notes.find(note => note.id === id);
      if (!notaEliminada) {
        throw new Error("Nota no encontrada");
      }
      NotesManager.#notes = NotesManager.#notes.filter(note => note.id !== id);
      console.log(`Nota eliminada:`, notaEliminada);
      return true;
    } catch (error) {
      console.log(error.message);
      return false;
    }
  }
}

const notes = new NotesManager();
//notes.create({ type: "done" });
console.log(notes.read()); // Returns the list of notes
notes.create({ text: "primnera nota" });
notes.create({ text: "segunda nota" });
notes.create({ text: "tercera nota" });
notes.create({ text: "cuarta nota" });
console.log(notes.readOne(3));
console.log(notes.readOne(6)); // Returns the list of notes
console.log(notes.destroy(3));
console.log(notes.read()); // Returns the list of notes
