import moment from 'moment'

const tasks = [{
   id: '1',
   name: "Task 1",
   completed: false,
   completedAt: null,
   createdAt: moment().subtract(1, 'day').valueOf(),
   deadline: moment().add(2, 'days').valueOf(),
   isPriority: false,
   comments: []
},
{
   id: '2',
   name: "Task 2",
   completed: false,
   completedAt: null,
   createdAt: moment().subtract(3, 'days').valueOf(),
   deadline: moment().add(4, 'days').valueOf(),
   isPriority: true,
   comments: [{
      beingEdited: false,
      createdAt: 1562845281035,
      id: "f612c3a5-4ae8-4c86-9a2b-513e2a0fed99",
      text: "test comment"
   }]
},
{
   id: '3',
   name: "Task 3",
   completed: false,
   completedAt: null,
   createdAt: moment().subtract(2, 'days').valueOf(),
   deadline: moment().add(1, 'day').valueOf(),
   isPriority: false,
   comments: []
},
]

export default tasks