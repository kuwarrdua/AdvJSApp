console.clear();
const sayHi = name => console.log(`Hello, ${name}`);
sayHi('Kuwar');
sayHi('Jannat');
sayHi('Neev');

setTimeout(sayHi, 2500, 'Kuwar');
setTimeout(sayHi, 2000, 'KuwarJannat');
setTimeout(sayHi, 1500, 'MyLife');
sayHi('Ludhiana');

const greeting = name => console.log(`Hello, ${name}`);
const hurray = (name,callback) => {
    console.log(`Goodbye!, ${name}`);
    callback(name);
}

hurray('Kuwar',greeting);


