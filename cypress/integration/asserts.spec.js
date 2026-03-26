/// reference types="cypress" />

it('equalidade..', () => {
    const a = 1;
    expect(a).equal(1);
    // essa linha é mostrando erro expect(a, 'deveria ser 1').equal(2);
    expect(a).to.be.equal(1);
    expect('a').not.to.be.equal('b');
})

it('verdadeiro ou falso..', () => {
    const a = true;
    const b = null;
    let c;

    expect(a).to.be.true;
    expect(true).to.be.true;
    expect(b).to.be.null;
    expect(a).to.be.not.null;
    expect(c).to.be.undefined;
})

it('objetos..', () => {
    const obj = {
        a: 1,
        b: 2
    };

    expect(obj).equal(obj);
    expect(obj).equals(obj);
    //forma curta do comando de cima
    expect(obj).eq(obj);

    expect(obj).to.be.deep.equal({ a: 1, b: 2 });
    //forma curta do comando de cima
    expect(obj).eql({ a: 1, b: 2 });

    //se o objeto for grande, posso verificar apenas um pedaço dele, usando include
    expect(obj).include({ a: 1 });
    //se não existisse, daria erro
    //expect(obj).include({ c: 3 });

    //posso ir direto na propriedade do objeto
    expect(obj).to.have.property('a');

    //verificar se o objeto não está vazio
    expect(obj).to.not.be.empty;
    expect({}).to.be.empty;
})

it('arrays..', () => {
    const arr = [1, 2, 3];

    //aqui diz: espero que o array tenha os membros 1, 2 e 3
    expect(arr).to.have.members([1, 2, 3]);
    //quero verificar se tem 1 e 3
    expect(arr).to.include.members([1, 3]);
    //verificar se o array não está vazio
    expect(arr).to.not.be.empty;
    expect([]).to.be.empty;
})

it('tipos..', () => {
    const num = 1;
    const str = 'string';

    expect(num).to.be.a('number');
    expect(str).to.be.a('string');
    expect({}).to.be.an('object');
    expect([]).to.be.an('array');
})

it('strings..', () => {
    const str = 'String de teste';

    expect(str).to.be.equal('String de teste');
    //verificar se o tamanho da string é 15
    expect(str).to.have.lengthOf(15);
    //pegar só um trecho da string
    expect(str).to.contains('de');
    //verificar ejax
    expect(str).to.match(/de/);
    //verificar se a string começa com String
    expect(str).to.match(/^String/);
    //verificar se a string termina com teste
    expect(str).to.match(/teste$/);
    //tamanho que estou esperando
    expect(str).to.match(/^.{15}$/);
    //verificar se existe apenas letras
    expect(str).to.match(/^[A-Za-z\s]+$/);
    //verificar se não contem números
    expect(str).to.not.match(/\d/);
})

it('números..', () => {
    const num = 10;
    const floatNumber = 5.5;

    //verificar se o número é igual a 10
    expect(num).to.be.equal(10);
    //verificar se o número é maior que 5
    expect(num).to.be.above(5);
    //verificar se o número é menor que 20
    expect(num).to.be.below(20);
    //verificar se o número flutuante é igual a 5.5
    expect(floatNumber).to.be.equal(5.5);
    //espero que o floatNumber seja próximo de 5.5 com uma margem de erro de 0.1
    expect(floatNumber).to.be.closeTo(5.5 , 0.1);
    //metodo above tambem funciona para números flutuantes
    expect(floatNumber).to.be.above(5);
})