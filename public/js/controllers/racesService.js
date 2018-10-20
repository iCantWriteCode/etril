app.service('$racesService', function () {

    const races = [
        {
            race: 'Shamadji Teca',
            img: '/images/character-creation/classes/1. Shamadji_Teca_template.png',
            vitality: 1,
            power: 3,
            mobility: 2,
            teamwork: 5,
            description: ` Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut doloremque officia corporis eligendi enim
            mollitia similique id? Inv  entore a cupiditate id illo aperiam perferendis, libero dolore dolorum
            perspiciatis sed facilis.`
        },
        {
            race: 'Shamadji Roht',
            img: '/images/character-creation/classes/2. Shamadji_Roht_Template.png',
            vitality: 1,
            power: 3,
            mobility: 2,
            teamwork: 5,
            description: ` Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut doloremque officia corporis eligendi enim
            mollitia similique id? Inv  entore a cupiditate id illo aperiam perferendis, libero dolore dolorum
            perspiciatis sed facilis.`,
        },
        {
            race: 'Urugar',
            img: '/images/character-creation/classes/3. Urugar_Template.png',
            vitality: 1,
            power: 3,
            mobility: 2,
            teamwork: 5,
            description: ` Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut doloremque officia corporis eligendi enim
            mollitia similique id? Inv  entore a cupiditate id illo aperiam perferendis, libero dolore dolorum
            perspiciatis sed facilis.`
        },
        {
            race: 'Human',
            img: '/images/character-creation/classes/4. Human_template.png',
            vitality: 1,
            power: 3,
            mobility: 2,
            teamwork: 5,
            description: ` Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut doloremque officia corporis eligendi enim
            mollitia similique id? Inv  entore a cupiditate id illo aperiam perferendis, libero dolore dolorum
            perspiciatis sed facilis.`
        },
        {
            race: 'Vampire',
            img: '/images/character-creation/classes/6.Vampire_template.png',
            vitality: 1,
            power: 3,
            mobility: 2,
            teamwork: 5,
            description: ` Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut doloremque officia corporis eligendi enim
            mollitia similique id? Inv  entore a cupiditate id illo aperiam perferendis, libero dolore dolorum
            perspiciatis sed facilis.`
        },
        {
            race: 'Black Chotgor',
            img: '/images/character-creation/classes/8. chotgor_black_templete.png',
            vitality: 1,
            power: 3,
            mobility: 2,
            teamwork: 5,
            description: ` Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut doloremque officia corporis eligendi enim
            mollitia similique id? Inv  entore a cupiditate id illo aperiam perferendis, libero dolore dolorum
            perspiciatis sed facilis.`
        },
        {
            race: 'Red Chotgor',
            img: '/images/character-creation/classes/7. chotgor_red_template.png',
            vitality: 1,
            power: 3,
            mobility: 2,
            teamwork: 5,
            description: ` Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut doloremque officia corporis eligendi enim
            mollitia similique id? Inv  entore a cupiditate id illo aperiam perferendis, libero dolore dolorum
            perspiciatis sed facilis.`
        },
        {
            race: 'Gargoyle',
            img: '/images/character-creation/classes/5. Gargoyle_template.png',
            vitality: 1,
            power: 3,
            mobility: 2,
            teamwork: 5,
            description: ` Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut doloremque officia corporis eligendi enim
            mollitia similique id? Inv  entore a cupiditate id illo aperiam perferendis, libero dolore dolorum
            perspiciatis sed facilis.`
        },
        {
            race: 'Grepter',
            img: '/images/character-creation/classes/9.Grepter_template.png',
            vitality: 1,
            power: 3,
            mobility: 2,
            teamwork: 5,
            description: ` Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut doloremque officia corporis eligendi enim
            mollitia similique id? Inv  entore a cupiditate id illo aperiam perferendis, libero dolore dolorum
            perspiciatis sed facilis.`
        }
    ]

    return {
        getAllRaces() {
            return races;
        },
        getOneRace(value) {
            return races.find((races) => races.race === value);
        }
    };
});