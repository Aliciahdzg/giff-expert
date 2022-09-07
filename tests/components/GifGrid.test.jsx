import { render, screen} from "@testing-library/react";
import GifGrid from "../../src/components/GifGrid";
import useFetchGifs from '../../src/hooks/useFetchGifs';

jest.mock('../../src/hooks/useFetchGifs');

describe('Test in <GifGrid/>', () => { 
    const category = 'One Punch';

    test('should show initial loading', () => { 

        useFetchGifs.mockReturnValue({
            images: [],
            isLoading: true
        });

        render( <GifGrid category={category} /> );
        expect(screen.getByText('Cargando...'));
        expect(screen.getByText(category));
    });

    test('should show items when the images are loaded with useFetchGifs', () => { 

        const gifs = [
            {
                id: 'ABC',
                title: 'dragon',
                url: 'https://localhost/dragon.jpg'
            },
            {
                id: '123',
                title: 'goku',
                url: 'https://localhost/goku.jpg'
            }
        ]
        
        useFetchGifs.mockReturnValue({
            images: gifs,
            isLoading: false
        });
        
        render( <GifGrid category={category} /> );
        expect(screen.getAllByRole('img').length).toBe(2);

    })
 })