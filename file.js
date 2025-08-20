// Given an array of user objects, write a function that groups them by 'role'.

const users = [
  {
    name: "gabriel",
    role: "Front End",
  },
  { name: "raul", role: "FF" },
];

const groupByRole = () => {
  users.filter((user) => {
    user.role == "Front End";
  });
};

groupByRole();

// Analyze this code and explain the issue: `for (var i = 0; i < 5; i++) { setTimeout(() => console.log(i), 1000); }`

for (var i = 0; i < 5; i++) {
  setTimeout(() => console.log(i), 1000);
}

//Fetch and display data with loading and error states.
const [data, setData] = useState();
axios.get("/test").then((res) => {
  if (!res.data) {
    throw new Error("no data");
  }
  setData(res.data);
});

//What's wrong with this? : ;

useEffect(() => fetchData(), []);

//Create a custom hook that toggles a boolean value.
const [isToggle, setIsToggle] = useState(false);

setIsToggle(true);
setIsToggle(!isToggle);


//Write a basic GraphQL query that retrieves a list of users and their posts.
query Users {
    users,
    posts
}
const {data, loading, error} = useQuery(Users)

//You have a Redux reducer that is mutating the state directly, causing bugs. Identify the problem and fix the reducer:
function cartReducer(state = { items: [] }, action) {
  switch(action.type) {
    case 'ADD_ITEM':
      return action.payload
    default:
      return state;
  }

}