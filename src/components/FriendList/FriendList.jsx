import { FriendListItem } from '../FriendListItem/FriendListItem';
import css from './FriendList.module.css';
import clsx from 'clsx';

export const FriendList = ({ friends }) => {
  return (
    <ul className={css.list}>
      {friends.map(friend => {
        return (
          <li key={friend.id}>
            <FriendListItem friend={friend} />
          </li>
        );
      })}
    </ul>
  );
};
