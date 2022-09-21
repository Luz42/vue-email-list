console.log('JS-OK');

const app = new Vue(
    {
        el: '#root',
        data: {

        },
    },
)

axios
    .get('https://flynn.boolean.careers/exercises/api/random/mail')
    .then(function(response) {
        const result = response.data.response;
        console.log(result)
    }
    )