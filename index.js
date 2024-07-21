// task 1 
function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
 async function iterateWithAsyncAwait(arr) {
    for (const el of arr) {
      console.log(el);
      await delay(1000); 
    }
  }

//task 2
async function waitCall() {

   try{
        const response = await fetch('https://fakestoreapi.com/products/1');
        const responseData = await response.json();
        console.log(responseData);
         return responseData
    }catch(error)
    {
        console.error("Erreur lors de la récupération des données de l'API :", error.message);
    }  
}

// task 3
async function chainedAsyncFunctions() {
    try {
      await waitCall();
      await waitCall();
      await waitCall();
      console.log('all functions was executed');
    } catch (error) {
      console.error(error);
    }
  }

// task 4

async function api1() {
    return new Promise((resolve) => 
      setTimeout(() => {
        fetch('https://fakestoreapi.com/products/1')
          .then((data) => data.json())
          .then((data) => {
            console.log(data);
            resolve('Promise 1 resolved');
          })
          .catch((err) => {
            console.log(err);
            resolve('Promise 1 failed');
          });
      }, 2000)
    );
  }
  
  async function api2() {
    return new Promise((resolve) => 
      setTimeout(() => {
        fetch('https://fakestoreapi.com/products/2')
          .then((data) => data.json())
          .then((data) => {
            console.log(data);
            resolve('Promise 2 resolved');
          })
          .catch((err) => {
            console.log(err);
            resolve('Promise 2 failed');
          });
      }, 2000)
    );
  }
  
  async function api3() {
    return new Promise((resolve) => 
      setTimeout(() => {
        fetch('https://fakestoreapi.com/products/3')
          .then((data) => data.json())
          .then((data) => {
            console.log(data);
            resolve('Promise 3 resolved');
          })
          .catch((err) => {
            console.log(err);
            resolve('Promise 3 failed');
          });
      }, 2000)
    );
  }
  
//  Promise.all([api1(), api2(), api3()])
 //  .then((values) => {
  //  console.log(values);
  // })
   
// task 5
async function fetchFromURL(url) {
 
  try {
    const response = await fetch(url);
    return response.json()
  }
  catch (error) {
    console.log("fetch failed");
  }
}

async function parallelCalls(urls) {
  try {
    const fetchPromises = urls.map(url => fetchFromURL(url));
    const responses = await Promise.all(fetchPromises);
    console.log(responses);
  } catch (error) {
    console.error(error.message);
  }
}
const urls = [
    "https://jsonplaceholder.typicode.com/posts/1",
    "https://jsonplaceholder.typicode.com/posts/2",
    "https://jsonplaceholder.typicode.com/posts/3"
  ];
parallelCalls(urls);


  