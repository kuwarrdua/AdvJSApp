console.clear();
// const sayHi = name => console.log(`Hello, ${name}`);
// sayHi('Kuwar');
// sayHi('Jannat');
// sayHi('Neev');

// setTimeout(sayHi, 2500, 'Kuwar');
// setTimeout(sayHi, 2000, 'KuwarJannat');
// setTimeout(sayHi, 1500, 'MyLife');
// sayHi('Ludhiana');

// const greeting = name => console.log(`Hello, ${name}`);
// const hurray = (name,callback) => {
//     console.log(`Goodbye!, ${name}`);
//     callback(name);
// }

// hurray('Kuwar',greeting);

(async () => {
    setTimeout(() => console.log('Hello Dave'), 2000);
  
    await new Promise((resolve) => {
      setTimeout(() => {
        console.log('Hello Sandra');
        return resolve();
      }, 3000);
    });
  
    await new Promise((resolve) => {
      setTimeout(() => {
        console.log('Hello Gagandeep');
        return resolve();
      }, 1000);
    }); 
  
    console.log('Hello Jamal');
  })();

