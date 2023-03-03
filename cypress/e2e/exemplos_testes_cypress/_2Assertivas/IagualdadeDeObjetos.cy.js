/// <reference types="cypress" />

describe('Igualdade de Objetos',()=>{

    const obj = {
        a:1,
        b:2
    }

    const obj2 = {
     
    }


    it('Comparar objeto com ele mesmo',()=>{

        expect(obj).to.be.equal(obj)
        expect(obj).to.be.equals(obj)
        expect(obj).to.be.eq(obj)

    })

    it('Comparar objeto com outro',()=>{
        //O .deep olha as propriedades do objeto para saber se eles são iguais
        expect(obj).to.be.deep.equal({a:1, b:2})

        //Forma Abreviada
        expect(obj).eql({a:1, b:2})

    })

    it('Verificar se existe uma propredade dentro do objeto',()=>{
    
        expect(obj).include({a:1})

    })

    it('Verificando diretamente a propriedade',()=>{
    
        //Verificando se existe a propriedade
        expect(obj).to.have.property('b')

        //Verificando se existe a propriedade e o valor dela
        expect(obj).to.have.property('b',2)

    })

    it('Verificando o objeto está vazio',()=>{
    
        //Verificando se existe a propriedade
        expect(obj).to.have.property('b')
        expect(obj).not.to.have.property('c')

        //Verificando se existe a propriedade e o valor dela
        expect(obj).to.not.be.empty
        expect(obj2).to.be.empty

    })


})
