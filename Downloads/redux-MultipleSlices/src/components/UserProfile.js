import classes from "./UserProfile.module.css";
// if isAuthentifacted, show userprofile
const UserProfile = () => {
  return (
    <main className={classes.profile}>
      <h2>My User Profile</h2>
    </main>
  );
};

export default UserProfile;
