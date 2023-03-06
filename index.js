Vue.createApp({

    data() {

        return {

            // add here
            words: [],
            emptyMessage: null,

        }

    },

    methods: {

        // add here
        ShowIt(input) {
            this.words = []
            this.words.length = 0
            if(input != null)
            {
            this.emptyMessage = null
            this.words.push(input)
            input = input.toUpperCase()
            this.words.push(input)
            input = input.toLowerCase()
            this.words.push(input)
            input = input.charAt(0).toUpperCase() + input.slice(1);
            this.words.push(input)

            input = input.toLowerCase()
            input =input.slice(0, input.length - 1) + input.charAt(input.length - 1).toUpperCase()
            this.words.push(input)


            input = input.toLowerCase()
            var reversed = ""
            for (var i = input.length - 1; i >= 0; i--) {
                reversed += input[i];
            }
            this.words.push(reversed)
            input == null;
            
        }
           else this.emptyMessage = "You need to type a word"
        if(words == [])this.emptyMessage = "You need to type a word"
            


        }

    }

}).mount("#app")