import { render, screen } from "@testing-library/react";
import GifItem from "../../src/components/GifItem";

describe("Test for GifItem", () => {

    const title = 'Saitama';
    const url = 'https://one-punch.com/saitama.jpg'

    test('Should be match with the snapshot', () => {

        const { container } = render(<GifItem title={title} url={url} />)
        expect(container).toMatchSnapshot()

    });

    test('should show the image with the url and ALT', () => { 

        render(<GifItem title={title} url={url} />);
        // expect( screen.getByRole('img').src).toBe(url)
        const {src, alt} = screen.getByRole('img');
        expect(src).toBe(url);
        expect(alt).toBe(title);
     });

     test('Should show component title', () => {

        render(<GifItem title={title} url={url} />);
        expect(screen.getByText(title)).toBeTruthy();
        
     })
})