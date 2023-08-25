var joke = document.querySelector('.joke');
var jokeBtn = document.querySelector('.btn');

/*
    The Fetch() method returns a promise - FULFILLED OR REJECTED
    Then we need to call the then() method where we get the response of the fetch method 
    response.json() is done to convert the html file to an json object
    , then we can access the data from there
*/ 


/* 
        METHOD OF ONLY Fetch API :
*/
function generateJoke () {

    // create header object
    const setHeader = {

        // headers is mandatory
        headers : {
            Accept : "application/json"
        }
    }

    // 
    // 
    fetch('https://icanhazdadjoke.com/' , setHeader)
    .then((response) => {
        return response.json(); // convert it to json file
    })
    .then((res) => {
        joke.innerHTML = ` " ${res.joke} " `; // .joke is the object attribute
        console.log(res);
    })
    .catch((error) =>{
        console.log(error);
    })
}

/*
    MEthod of ASYNC AWAIT
*/

async function generateJoke () {

    try {
        const setHeader = {
            headers : {
                Accept : 'application/json'
            }
        }
        const res = await fetch('https://icanhazdadjoke.com/' , setHeader); // await = wait till get data
        const data = await res.json(); // wait till data is converted to json file
        joke.innerHTML = data.joke;
    }catch(err) {
        console.log(err);
    }
}

jokeBtn.addEventListener('click' , generateJoke);
generateJoke(); // so that we get a joke on reload