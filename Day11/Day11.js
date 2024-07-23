//Activity 1:
//Task1:
const resolvePromise = new Promise((resolve) => {
    setTimeout(() => {
        resolve('Message after every 2-seconds');

    } , 2000)
})
resolvePromise.then((message) =>{
    console.log(message);
})
//Task2:
const rejectPromise = new Promise(( reject) => {
    setTimeout(() => {
        reject(new Error('Message rejected!'));

    } , 2000)
})
rejectPromise.then((messageResolve) => {
    console.log(messageResolve)
})
rejectPromise.catch((error) => {
    console.log(error.messageResolve);
})

//Activity 2:
//Task3:
new Promise((resolve) => {
    setTimeout(() => {
      
      resolve(console.log("fetching data from server1"));
    }, 1000);
  })
    .then(() => {
      return new Promise((resolve) => {
        setTimeout(() => {
          console.log("fetching data from server2");
          resolve();
        }, 1000);
      });
    })
    .then(() => {
      return new Promise((resolve) => {
        setTimeout(() => {
          console.log("fetching data from server3");
          resolve();
        }, 1000);
      });
      
    })
    .then(() => {
        return new Promise((resolve) => {
          setTimeout(() => {
            console.log("fetching data from server4");
            resolve();
          }, 1000);
        });
        
      })
      .then(() => {
        return new Promise((resolve) => {
          setTimeout(() => {
            console.log("fetching data from server5");
            resolve();
          }, 1000);
        });
        
      })
      .then(() => {
        return new Promise((resolve) => {
          setTimeout(() => {
            console.log("fetching data from server6");
            resolve();
          }, 1000);
        });
        
      })
      .then(() => {
        return new Promise((resolve) => {
          setTimeout(() => {
            console.log("fetching data from server7");
            resolve();
          }, 1000);
        });
      })
    .catch((error) => {
      console.error(error);
    });
//Activity 3:
//Task 4:
let promiseToResolve = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('Message to resolve task4');
    }, 2000)
})
async function resolveTheValue(){
    
        const value = await promiseToResolve;
        console.log(value)
};

resolveTheValue();
//Task5:
let rejectPromiseValue = new Promise((resolve, reject) => {
    setTimeout(() => {
        reject('Value to be rejected!');
    } ,1000)
})
async function rejectFunc(){
    try{
        let rejValue = await rejectPromiseValue;
        console.log(rejValue);
    }catch(error){
        console.log(error);
    }
}
//Activity 4:
//Task 6:

const apiUrl = 'https://api.github.com/users/hiteshchoudhary';

fetch(apiUrl)
    .then(response => {
        if (!response.ok) {
            throw new Error('error fetching ' + response.statusText);
        }
        return response.json(); 
    })
    .then(data => {
        console.log(data); 
    })
    .catch(error => {
        console.error('Problem with the fetch data:', error);
    });

//Task 7:
async function fetchData () {
    const apiUrl = 'https://api.github.com/users/hiteshchoudhary';
    try{
        const result = await fetch(apiUrl);
        if (!result.ok) {
            throw new Error('error fetching ' + result.statusText);
        }
        const data = await result.json();
        console.log(data);
    }catch(error){
        console.error("error")
    }
}
fetchData();

//Activity 5:
//Task 8:
function fetchData(apiUrl) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(`Data from ${apiUrl}`);
        },1000); 
    });
}

const promise1 = fetchData('data1 fetching');
const promise2 = fetchData('data2 fetching..');
const promise3 = fetchData('data3 fetching...');

Promise.all([promise1, promise2, promise3])
    .then((values) => {
        console.log('All promises resolved:', values);
    })
    .catch((error) => {
        console.error('One of the promises rejected:', error);
    });

//Task 9:
Promise.race([promise1, promise2, promise3])
  .then((aValue) => {
    console.log("Promise Resolve ", aValue);
  })
  .catch((error) => {
    console.error('promise rejected:', error);
});
    
