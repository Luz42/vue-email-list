console.log('JS-OK');

 const app = new Vue(
     {
         el: '#root',
         data: {
            emails: []
         },


 
created(){
 //let elementHTML = document.getElementById('root')

for(let i = 0; i < 10; i++){
    axios
        .get('https://flynn.boolean.careers/exercises/api/random/mail')
        .then((response) => {

            const { data, status } = response;
            //elementHTML.innerHTML += `<li>${result}</li>`
            if (status === 200){
            this.emails.push(data.response)
            console.log(this.emails)
            }
        }
    )
};
},
});
