import { getGifs } from "../../helpers/getGifs";


describe('Pruebas con getGifs Fetch', () => {
   
    test('Debe de traer 10 elementos', async() => {
       
        const gifs = await getGifs('Wanda Vision');
        
        expect(gifs.length).toBe(10);

    });
    
    test('No debe de traer ningun elemento', async() => {
       
        const gifs = await getGifs('');
        
        expect(gifs.length).toBe(0);

    });

});
