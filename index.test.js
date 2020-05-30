const { suma } = require("./index");


test('Deberia retornar 3', ()=> {
    const sum = suma(1,2)
    expect(sum).toBe(3)
})