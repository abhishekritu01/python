

// const API_URL = 'https://jsonplaceholder.typicode.com/posts/1';

// async function fetchData() {
//     // fetch returns a promise      fetch()=>Response.json()=> json data
//     // const response = await fetch(API_URL);
//     // const data = await response.json();
//     // console.log(data);

//     fetch(API_URL)
//         .then(response => response.json())
//         .then(data => console.log(data))
//         .catch(err => console.error(err));

// }

// fetchData(); 






// -------------------- part 2 




const API_URL = 'https://jsonplaceholder.typicode.com/posts/1';

async function fetchData() {
    
    try {
        const response = await fetch(API_URL);  // fetch always returns a promise
        console.log(response);
        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.error(error);
    }

    // fetch(API_URL)
    //     .then(response => response.json())
    //     .then(data => console.log(data))
    //     .catch(err => console.error(err));

}

fetchData();




// ---------------------- part 3

// const API_URL = 'https://jsonplaceholder.typicode.com/posts/1';


// async function fetchData() {
//     const response = await fetch(API_URL);   // returns a promise
//     const data = await response.json();
//     console.log(data);
// }

// fetchData().catch(err => console.error(err,"Error occured"));