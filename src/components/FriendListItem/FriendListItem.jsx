import css from './FriendListItem.module.css';
import clsx from 'clsx';

export const FriendListItem = ({ friend: { avatar, name, isOnline } }) => {
  const statusClass = clsx(css.status, isOnline ? css.green : css.red);
  return (
    <div className={css.container}>
      <img src={avatar} alt='Avatar' width='150' />
      <p className={css.name}>{name}</p>
      <p className={statusClass}>{isOnline ? 'Online' : 'Offline'}</p>
    </div>
  );
};
