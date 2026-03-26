it('sem testes, ainda', () => {} )

/*simples*/

/*const getSomething = () => 18

const system = () => {
    console.log('init');
    const something = getSomething();
    console.log(`something is ${something}`);
    console.log('end');
}

system();*/

/* complexo*/

const getSomething = (callback) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(18);
        }, 1000);
    })
}

const system = () => {
    console.log('init');
    getSomething().then(some =>{
        console.log(`something is ${some}`);
    })
    console.log('end');
}

system();