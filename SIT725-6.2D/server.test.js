const request = require('supertest');
const express = require('express');
const app = require('./server'); // Modify if your server file exports app

describe('Calculator API', () => {

  test('adds two numbers', async () => {
    const res = await request(app).get('/add?no1=5&no2=3');
    expect(res.body.result).toBe(8);
  });

  test('subtracts two numbers', async () => {
    const res = await request(app).get('/subtract?no1=10&no2=4');
    expect(res.body.result).toBe(6);
  });

  test('multiplies two numbers', async () => {
    const res = await request(app).get('/multiply?no1=7&no2=6');
    expect(res.body.result).toBe(42);
  });

  test('divides two numbers', async () => {
    const res = await request(app).get('/divide?no1=20&no2=4');
    expect(res.body.result).toBe(5);
  });

  test('handles division by zero', async () => {
    const res = await request(app).get('/divide?no1=10&no2=0');
    expect(res.body.error).toBe('Error: Division by zero');
  });

});
