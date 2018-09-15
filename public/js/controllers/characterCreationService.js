app.service('$characterService', function () {

    const characters = [
        {
            type: 'Shamadji Teca',
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
            type: 'Shamadji Roht',
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
            type: 'Urugar',
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
            type: 'Human',
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
            type: 'Vampire',
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
            type: 'Black Chotgor',
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
            type: 'Red Chotgor',
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
            type: 'Gargoyle',
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
            type: 'Grepter',
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
        getAllCharacters() {
            return characters;
        },
        getOneCharacter(value) {
            return characters.find((character) => character.type === value);
        }
    };
});