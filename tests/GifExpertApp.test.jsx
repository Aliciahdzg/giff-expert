import { render } from '@testing-library/react';
import GifExpertApp from '../src/GifExpertApp';

describe('Test en <GifExpertApp/>', () => { 

    test('should component match with the snapshot', () => { 

        const { container } = render(<GifExpertApp/>);
        
        expect(container).toMatchSnapshot();
     });

     test('should category dont repeat it', () => { 
        const categories = ['one punch', 'goku']

        render(<GifExpertApp/>);

        const input = screen.getByRole('textbox');

      })
 })