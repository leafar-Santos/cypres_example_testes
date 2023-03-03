/// <reference types="cypress" />


describe('Igualdade simples',()=>{

    it('Igualdade',()=>{
    const a = 1
    const b = 2;

    expect(a).equal(1)
    expect(a).to.be.equal(1)
    expect(a).not.to.equal(b)
    expect(a, 'Aqui é uma mensagem que pode ser passada para o usuário').equal(1)

    })

})

describe('Verdadeiro , falso , null',()=>{
    const a = true;
    const b = false;
    let c = null;
    let d;

    it('Verifica True',()=>{
        
        expect(a).to.be.true;
        expect(a).not.to.be.false;
    })

    it('Verifica False',()=>{
        
        expect(b).to.be.false;
        expect(b).not.to.be.true;
    })

    it('Verifica Null',()=>{
        expect(c).to.be.null;
    })

    it('Verifica Undefined',()=>{
        expect(d).to.be.undefined;
    })

})


