const App = {
    data() {
        return {
            counter: 0,
            titleCounter: 'Counter',
            titleNotes: 'List of notes',
            placeholderString: 'Type here',
            inputValue: '',
            notes: ['Note 1', 'Note 2'],
            title: 'Second part: Directives',
            myHtml: '<h1>Main title</h1>',
            person: {
                firstName: 'Vyacheslav',
                lastName: 'Denisenko',
                age: 30
            },
            items: [1, 2]
        }
    },
    methods: {
        inputChangeHandler(event) {
            this.inputValue = event.target.value
        },
        addNewNote() {
            if (this.inputValue.length !== 0) {
                this.notes.push(this.inputValue)
                this.inputValue = ''
            }
        },
        toUpperCase(item) {
            return item.toUpperCase()
        },
        removeNote(index) {
            this.notes.splice(index, 1)
        },
        addItem() {
            this.items.unshift(this.$refs.myInput.value)
            this.$refs.myInput.value = ''
            console.log(this.$refs.myInput.value);
        },
        removeItem(i) {
            this.items.splice(i, 1)
        },
        log(item) {
            console.log(item);
        }
    },
    computed: {
        doubleCountComputed() {
            return this.notes.length * 2
        },
        evenItems() {
            return this.items.filter(i => i % 2 === 0)
        }
    },
    watch: {
        inputValue(value) {
            if (value.length > 20) {
                this.inputValue = ''
            }
            console.log('input value changed', value);
        }
    }
}

Vue.createApp(App).mount('#app')
