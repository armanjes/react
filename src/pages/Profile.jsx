import { useParams } from "react-router-dom";

const Profile = () => {
  let { id } = useParams();
  return <div>Profile {id}</div>;
};
export default Profile;

/**
 * useParams is a hook available in react-router-dom.
 * Use it for dynamic routing like profile page, single product detail page etc.
 */
