//this lodes on dynamic page /search/XYZ

function ProfilePage({ params }: { params: { userId: string } }) {

  console.log(params.userId);
  // we should be able to load such data
  // to the dinamic URL present

  return <h1>Profile Page of {params.userId}</h1>;
}

export default ProfilePage;
