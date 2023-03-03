/// <reference types="cypress" />

describe('Igualdade de Arrays',()=>{

    const arr = [1,2,3]

    it('Validar atributos do arry',()=>{

       expect(arr).to.have.members([1,2,3])

    })

    
})
