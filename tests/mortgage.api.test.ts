import request from 'supertest';
import app from '../src/app';

describe('POST /mortgage-quote', () => {
  it('should calculate the monthly repayment for a standard loan', () => {
    const requestBody = {
      loanAmount: 500000,
      annualInterestRate: 6.5,
      termYears: 30,
      type: 'Standard',
      offsetAmount: 0,
      addons: []
    };

    return request(app)
      .post('/mortgage-quote')
      .send(requestBody)
      .expect(200)
      .then(response => {
        expect(response.body.monthlyRepayment).toBeCloseTo(3160.34); // Example value, will fail initially
      });
  });

  it('should calculate the monthly repayment with add-ons', () => {
    const requestBody = {
      loanAmount: 500000,
      annualInterestRate: 6.5,
      termYears: 30,
      type: 'Standard',
      offsetAmount: 0,
      addons: [
        'Insurance',
        'ExtraRepayment:100'
      ]
    };

    return request(app)
      .post('/mortgage-quote')
      .send(requestBody)
      .expect(200)
      .then(response => {
        // 3160.34 (base) + 50 (insurance) + 100 (extra) = 3310.34
        expect(response.body.monthlyRepayment).toBeCloseTo(3310.34);
      });
  });

  // Add more tests for InterestOnly and Offset loans
});