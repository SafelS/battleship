//const test = require('node:test');
const Ship = require('./ship');

test('new ship has right length', ()=>{
    const ship = new Ship(3);
    expect(ship.length).toBe(3);
})

test('new ship has no hits', ()=>{
    const ship = new Ship(3);
    expect(ship.hitcounter).toBe(0);
})

test('hits get count', ()=>{
    const ship = new Ship(3);
    ship.hit();
    expect(ship.hitcounter).toBe(1);
})

test('hitcounter doesnt exceed ship length',()=>{
    const ship = new Ship(1);
    ship.hit();
    ship.hit();
    expect(ship.hitcounter).toBe(1);
})

test('if hitcounter >= length of ship, isSunk() returns true', ()=>{
    const ship = new Ship(1);
    ship.hit();
    expect(ship.isSunk()).toBe(true);
})

test('if hitcounter < length of ship, isSunk() returns false', ()=>{
    const ship = new Ship(3);
    ship.hit();
    expect(ship.isSunk()).toBe(false);
})