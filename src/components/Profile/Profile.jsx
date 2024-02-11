import css from './Profile.module.css';

export const Profile = ({
  name,
  tag,
  location,
  image,
  stats: { followers, views, likes },
}) => {
  return (
    <div className={css.containerProfile}>
      <div>
        <img src={image} alt='User avatar' className={css.avatarImg} />
        <p className={css.userName}>{name}</p>
        <p className={css.userTag}>@{tag}</p>
        <p className={css.userLocation}>{location}</p>
      </div>

      <ul className={css.list}>
        <li className={css.item}>
          <span className={css.titleStats}>Followers</span>
          <span className={css.stats}>{followers}</span>
        </li>
        <li className={css.item}>
          <span className={css.titleStats}>Views</span>
          <span className={css.stats}>{views}</span>
        </li>
        <li className={css.item}>
          <span className={css.titleStats}>Likes</span>
          <span className={css.stats}>{likes}</span>
        </li>
      </ul>
    </div>
  );
};
