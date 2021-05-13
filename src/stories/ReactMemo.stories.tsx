import React, {useState} from "react";

export default {
		title: "Example/React.memo"
}

const NewMessagesCounterSecret = (props: any) => {
		console.log('NewMessagesCounter rendered')

		return (
				<div>{props.count}</div>
		)
}

const UsersSecret = (props: { users: Array<string> }) => {
		console.log('Users rendered')

		return (
				<div>{props.users.map((u, i) => <div key={i}>{u}</div>)}</div>
		)
}

const Users = React.memo(UsersSecret)
const NewMessagesCounter = React.memo(NewMessagesCounterSecret)

export const Example = () => {
		console.log('Example rendered')
		const [counter, setCounter] = useState(0)
		const [users, setUsers] = useState(["Dima", "Valera", "Artem"])

		const addUser = () => {
				setUsers([...users, 'Sveta' + new Date().getTime()])
		}

		return (
				<>
						<button onClick={() => setCounter(counter + 1)}>+</button>
						<button onClick={addUser}>add user</button>
						<NewMessagesCounter count={counter}/>
						<Users users={users}/>
				</>
		)
}