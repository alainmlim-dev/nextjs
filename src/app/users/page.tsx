export default async function Page() {

    const data = await fetch('http://localhost:3000/api/users')
    const users = await data.json()

    return (
        <>
            {users ?
                <ul>
                    {users.map((u: any) => (
                        <li key={u.id}>{u.name}</li>
                    ))}
                </ul>
                :
                <p>Loading...</p>
            }
        </>
    )
}