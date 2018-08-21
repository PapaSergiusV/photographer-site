export default class Data {

    static getData() {
        var data = {
            holder: {
                firstName: 'John',
                lastName: 'Smith',
                vk: 'https://vk.com',
                instagram: 'https://instagram.com',
                any: '',
                phone: '8-999-888-77-66',
                address: 'New Yourk city, Brooklyn'
            },
            price: {
                about: 'Text for example',
                point: [
                    { id: 1, about: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit', price: 1900 },
                    { id: 2, about: 'Voluptate sapiente id distinctio eaque, ea deserunt eius aut tempora', price: 1500 },
                    { id: 3, about: 'Dolorem iste a quas nihil, dolorum esse quos enim! Dolorem placeat, tempore.', price: 2000 },
                    { id: 4, about: 'Dolorum esse quos enim! Dolorem placeat', price: 2400 },
                    { id: 5, about: 'Sapiente id distinctio eaque, ea deserunt eius aut', price: 3400 },
                ]
            },
            menu: [
                { id: 1, name: 'home' },
                { id: 2, name: 'album' },
                { id: 3, name: 'price' },
                { id: 4, name: 'contacts' }
            ],
            pictures: [
                { id: 1, path: 'https://i.ytimg.com/vi/nGg-qjn5R2I/maxresdefault.jpg' },
                { id: 2, path: 'https://i.ytimg.com/vi/iPjhRDHbLt8/maxresdefault.jpg' },
                { id: 3, path: 'https://images.wallpaperscraft.ru/image/chekhiya_staryj_gorod_zdaniya_vid_sverkhu_109566_1920x1080.jpg' },
                { id: 4, path: 'https://sites.google.com/site/prirodanasevseegooglgfgf/_/rsrc/1463456237313/home/priroda_gory_nebo_ozero_oblaka_81150_1920x1080.jpg' },
                { id: 5, path: 'https://cdn.fishki.net/upload/post/2017/12/01/2445298/1-00.jpg' },
                { id: 6, path: 'http://www.1366x768.ru/city/10/city-by-the-sea-wallpaper-1366x768.jpg' },
                { id: 7, path: 'http://placehold.it/640x480' },
                { id: 8, path: 'http://placehold.it/640x480' },
                { id: 9, path: 'http://placehold.it/640x480' },
                { id: 10, path: 'http://placehold.it/640x480' },
                { id: 11, path: 'http://placehold.it/640x480' },
                { id: 16, path: 'http://placehold.it/640x480' }
            ],
            text: [
                {
                    id: 'home',
                    title: 'Photographer, designer and ...',
                    text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit fugiat incidunt minus doloremque deserunt tempora atque, odio corrupti dolor dolore deleniti odit labore officiis aperiam quasi. Fuga accusantium, rerum exercitationem. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui iste reprehenderit beatae in quasi sapiente, ipsam mollitia modi omnis labore placeat cupiditate quod, vel velit accusantium consectetur neque.'
                }
            ]
        }
        return data;
    }

}