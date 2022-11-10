const UserDetails = ({ user }) => {
    return (
        <div className="workout-details">
            <h2>{user.username}</h2>
            <h2>{user.password}</h2>
            <h2>{user.createdAt}</h2>
        </div>
    )
}

export default UserDetails