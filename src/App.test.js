const sum = require('./sum');


    describe('Addition', () => {
        it('knows that 2 and 2 make 4', () => {
          expect(2 + 2).toBe(4);
        });
      });

    describe('correct hello world gets printed ', () => {
        it('message returned is Hello world ', () => {
          expect(2+2).toBe(4);
        });
      });
    
      test('adds 1 + 2 to equal 3', () => {
        expect(sum(1, 2)).toBe(3);
      });
    
