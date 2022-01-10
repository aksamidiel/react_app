

let state = {

    profilePage: {
        posts: [   // данные, которые потом будем с бэка подтягивать
            { id: 1, message: 'first post', likesCount: 12 },
            { id: 2, message: 'second post', likesCount: 10 },
            { id: 3, message: 'third post', likesCount: 9 },
            { id: 4, message: 'fourth post', likesCount: 3 },
            { id: 5, message: 'fifth post', likesCount: 18 },
            { id: 6, message: 'six post', likesCount: 20 },
        ]

    },

    dialogsPage: {
        messages: [
            { id: 1, message: 'Hi' },
            { id: 2, message: 'Hello' },
            { id: 3, message: 'Somebody' },
            { id: 4, message: 'Something' },
            { id: 5, message: 'how do you do?' },
            { id: 6, message: 'This is a nice job' },
        ],
        dialogs: [
            { id: 1, name: 'Dimych' },
            { id: 2, name: 'Andrey' },
            { id: 3, name: 'Sveta' },
            { id: 4, name: 'Igor' },
            { id: 5, name: 'Sasha' },
            { id: 6, name: 'Alexey' },
        ]
    },
    newsPage:{},
    settingsPage:{},
    friendsPage: {
        friends:[
            {name: 'Dimych'},
            {name: 'Andrey'},
            {name: 'Sveta'},
            {name: 'Igor'},
            {name: 'Sasha'},
            {name: 'Alexey'},
        ]
    }


}
    

export default state