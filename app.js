const App = {
    data() {
        return {
            counter: 0,
            titleCounter: 'Counter',
            titleNotes: 'List of notes',
            placeholderString: 'Type here',
            inputValue: '',
            notes: [
                'Note 1',
                'Lorem ipsum dolor sit s nostrud  Lorem ipsum dolor sit s nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
                'Note 3',
                'Note 4',
                // 'Note 5 Lorem ipsum dolor sit s nostrud exercitation ullamco laboris '
            ],
            title: 'Second part: Directives',
            myHtml: '<h1>Main title</h1>',
            person: {
                firstName: 'Vyacheslav',
                lastName: 'Denisenko',
                age: 30
            },
            items: [1, 2],
            barBaseState: ''
        }
    },
    mounted() {
        const display = document.querySelector(".display")
        const clone = document.querySelector(".display-clone")
        console.log('xxxxxxxxxxxxxxxxxxxxx Значение display: ' + display.clientHeight)
        // clone.style.height = display.clientHeight + "px"
        console.log('xxxxxxxxxxxxxxxxxxxxx Значение clone: ' + clone.clientHeight)
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
        },
        setContent(name) {
            this.barBaseState = name
        },
        cancel() {
            this.inputValue = 'Esc was called'
            console.log("result:", this.inputValue);
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
