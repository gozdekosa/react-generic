import useMe from "../hooks/useMe";
import ProfileForm from "../components/ProfileForm";

const ProfilePage = () => {
  const { user, loading } = useMe();

  if (loading) {
    return <p>Loading...</p>;
  }

  if (!user) {
    return <p>Kullanıcı bulunamadı</p>;
  }

  return (
    <div>
      <h1 className="text-xl font-bold">Profil Bilgileri</h1>

      <ProfileForm user={user} />
    </div>
  );
};

export default ProfilePage;