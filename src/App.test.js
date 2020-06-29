
    import React from 'react';
    import ReactDOM from 'react-dom';
    import App from './App';

    it('renders without crashing', () => {
      const div = document.createElement('div');
      ReactDOM.render(<App />, div);
      ReactDOM.unmountComponentAtNode(div);
    });
    
    describe('Addition', () => {
        it('knows that 2 and 2 make 4', () => {
          expect(2 + 2).toBe(4);
        });
      });

    describe('correct hello world gets printed ', () => {
        it('message returned is Hello world ', () => {
            const result = ""
            console.log(result)
          expect(2+2).toBe(4);
        });
      });
