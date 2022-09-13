import useAuth from '../hooks/useAuth';

function Docs() {
  const { logout } = useAuth();
  return (
    <div>
      docs
      <div onClick={logout}>logout</div>
    </div>
  );
}

export default Docs;
