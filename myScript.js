console.log('JS-OK');

 const app = new Vue(
     {
         el: '#root',
         data: {
            loading: true,
            emails: []
         },


 
created(){
 //let elementHTML = document.getElementById('root')
const NUM_EMAILS = 10;
 let count = 0
for(let i = 0; i < NUM_EMAILS; i++){
    axios
        .get('https://flynn.boolean.careers/exercises/api/random/mail')
        .then((response) => {
            console.log(response)
            const { data, status } = response;
            count ++
            //elementHTML.innerHTML += `<li>${result}</li>`
            if (status === 200){
                this.emails.push(data.response)
                //console.log(this.emails)
                //this.loading = this.emails.length < 10
            }
            if (count === NUM_EMAILS) {
                this.loading = false
            }
        })
        // .catch() intercetta eventuali errori
        .catch((error) => {
            console.log('ERRORE', error)
        })
};
},
});
