const app = Vue.createApp({
    data() {
        return {
            notes: [],
            newNoteTitle: '',
            newNoteBody: '',
            buttonTitle: 'Add note body'
        }
    },
    methods: {
        addNote() {
            this.notes.push({
                title: this.newNoteTitle.toUpperCase(),
                body: this.newNoteBody
            });
            this.newNoteTitle = this.newNoteBody = '';
        },
        removeNote(index) {
            this.notes.splice(index, 1);
        },
        changeButtonTitle() {
            if (this.newNoteBody) {
                this.buttonTitle = 'Create new note';
            } else {
                this.buttonTitle = 'Add note body';
            }
        }
    }
}).mount("#notes");