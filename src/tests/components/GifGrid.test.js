import React from 'react';
import { shallow } from "enzyme";
import GifGrid from '../../components/GifGrid';
import { useFetchGifs } from '../../hooks/useFetchGifs';
jest.mock('../../hooks/useFetchGifs');


describe('Pruebas en <GifGrid />', () => {

    const category = 'Han Solo';

    test('Debe de mostrar el componente correctamente', () => {
       
        useFetchGifs.mockReturnValue({
            data: [],
            loading: true
        });

        const wrapper = shallow(<GifGrid category={category} />);
        expect(wrapper).toMatchSnapshot();

    });
    
    test('Debe de mostrar items cuando se cargan imagenes con useFetchGifs', () => {
       
        const gifs = [{
            id: 'ABC',
            title: 'Han Solo',
            url: 'https://localhost/imagen.jpg'
        },{
            id: '123',
            title: 'Han Solo',
            url: 'https://localhost/imagen.jpg'
        }]

        useFetchGifs.mockReturnValue({
            data: gifs,
            loading: false
        });

        const wrapper = shallow(<GifGrid category={category} />);

        // expect(wrapper).toMatchSnapshot();
        expect(wrapper.find('p').exists()).toBe(false);
        expect(wrapper.find('GifGridItem').length).toBe(gifs.length);

    });    
    
});
