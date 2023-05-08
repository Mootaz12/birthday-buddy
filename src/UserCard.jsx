/* eslint-disable react/prop-types */
export default function UserCard({ user }) {
  return (
    <div className="user-card">
      <img
        src={user.picture.medium}
        alt={`${user.name.first} ${user.name.last}`}
      />
      <div className="user-information">
        <h2 className="user-name"> {`${user.name.first} ${user.name.last}`}</h2>
        <span className="user-age">{user.dob.age} years</span>
      </div>
    </div>
  );
}
