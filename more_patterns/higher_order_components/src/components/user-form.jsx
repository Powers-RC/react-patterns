import { includeUpdateableResource } from "./include-updateable-resource";

export const UserInfoForm = includeUpdateableResource((
    {
        user,
        onChangeUser,
        onResetUser,
        onPostUser
    }
) => {
    const { age, name } = user || {};

    return user ? (
        <>
            <label>
                Name:
                <input
                    value={name}
                    onChange={(e) => onChangeUser({ name: e.target.value })}
                />
            </label>
            <label>
                Age:
                <input
                    type="number"
                    value={age}
                    onChange={(e) => onChangeUser({ age: e.target.value })}
                />
            </label>
            <button onClick={onResetUser}>Reset</button>
            <button onClick={onPostUser}>Save</button>
        </>) : (<h3>loading...</h3>)
},
    "/users/1",
    "user",
)