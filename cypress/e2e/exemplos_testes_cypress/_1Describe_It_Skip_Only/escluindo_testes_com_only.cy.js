/// <reference types="cypress" />

//Excluindo testes com .skip


//it.only  executa apenas um testes dentro do arquivo

('Scopo de um teste - Teste externo', ()=>{

})


describe.skip('Grupo de testes ', ()=>{
    

it('Primeiro Teste', ()=>{

})


it('Segundo Teste', ()=>{

})


it('Terceiro Teste', ()=>{

})

describe('Grupo 1 interno ', ()=>{

  ('Teste 1 interno', ()=>{

    })
    

})

describe('Grupo 2 interno ', ()=>{

    it('Teste 3 interno', ()=>{

    })

})

describe('Grupo 3 interno ', ()=>{

    it('Teste 3 interno', ()=>{

    })

})


})






describe('Segundo Grupo de testes ', ()=>{
    

    it.skip('Primeiro Teste', ()=>{
    
    })
    
    
    it('Segundo Teste', ()=>{
    
    })
    
    
    it('Terceiro Teste', ()=>{
    
    })
    
    describe('Grupo 1 interno ', ()=>{
    
      it('Teste 1 interno', ()=>{
    
        })
        
    
    })
    
    describe.skip('Grupo 2 interno ', ()=>{
    
        it('Teste 3 interno', ()=>{
    
        })
    
    })
    
    describe('Grupo 3 interno ', ()=>{
    
        it('Teste 3 interno', ()=>{
    
        })
    
    })
    
    
    })
    


