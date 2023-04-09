export default function UserProfileHobbiesCard({ userDetail }) {
  const renderIcon = (codePoint) => {
    const icon = String.fromCodePoint(parseInt(codePoint.substring(2), 16));
    return <span dangerouslySetInnerHTML={{ __html: icon }} />;
  };
  return (
    <div className="card__profile">
      <div className="icon">{renderIcon(userDetail.icon)}</div>
      <h6 className="name">{userDetail.hobby}</h6>
    </div>
  );
}
