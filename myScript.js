console.log('JS-OK');

// const app = new Vue(
//     {
//         el: '#root',
//         data: {

//         },
//     },
// )
let elementHTML = document.getElementById('root')

for(let i = 0; i < 10; i++){
    axios
        .get('https://flynn.boolean.careers/exercises/api/random/mail')
        .then(function(response) {

            const result = response.data.response;
            console.log(result)
            elementHTML.innerHTML += `<li>${result}</li>`
            
        }
    )
};
