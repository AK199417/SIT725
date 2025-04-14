const chai = require("chai");
const expect = chai.expect;
const request = require("request");

const baseUrl = "http://localhost:3000";

describe("Calculator API using request", () => {

  it("should return 200 OK for homepage", (done) => {
    request(baseUrl, (error, response, body) => {
      expect(response.statusCode).to.equal(200);
      done();
    });
  });

  it("should add two numbers", (done) => {
    request.get(`${baseUrl}/add?no1=10&no2=5`, (error, response, body) => {
      const result = JSON.parse(body).result;
      expect(result).to.equal(15);
      done();
    });
  });

  it("should subtract two numbers", (done) => {
    request.get(`${baseUrl}/subtract?no1=12&no2=7`, (error, response, body) => {
      const result = JSON.parse(body).result;
      expect(result).to.equal(5);
      done();
    });
  });

  it("should multiply two numbers", (done) => {
    request.get(`${baseUrl}/multiply?no1=4&no2=3`, (error, response, body) => {
      const result = JSON.parse(body).result;
      expect(result).to.equal(12);
      done();
    });
  });

  it("should divide two numbers", (done) => {
    request.get(`${baseUrl}/divide?no1=20&no2=5`, (error, response, body) => {
      const result = JSON.parse(body).result;
      expect(result).to.equal(4);
      done();
    });
  });

  it("should return error for division by zero", (done) => {
    request.get(`${baseUrl}/divide?no1=10&no2=0`, (error, response, body) => {
      const result = JSON.parse(body).error;
      expect(result).to.equal("Error: Division by zero");
      done();
    });
  });

});
