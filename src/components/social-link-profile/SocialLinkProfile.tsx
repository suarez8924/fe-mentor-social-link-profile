import styles from './SocialLinkProfile.module.scss';

import { User } from '../../types';

interface SocialLinkProfileProps {
  user: User;
}

const getKey = (text: string) => {
  return text.toLowerCase().split(' ').join('-');
};

const SocialLinkProfile = ({ user }: SocialLinkProfileProps) => {
  const { avatarUrl, fullName, location, intro, socialLinks } = user;

  return (
    <div className={styles.socialLinkProfile}>
      <picture className={styles.avatar}>
        <img src={avatarUrl} alt="" />
      </picture>
      <h1 className={styles.fullName}>{fullName}</h1>
      <p className={styles.location}>{location}</p>
      <q className={styles.intro}>{intro}</q>
      <ul className={styles.socialMediaList}>
        {socialLinks.map((socialLink, index) => (
          <li key={`${getKey(socialLink.title)}-${index}`}>
            <a className={styles.link} href={socialLink.url} target="_blank">
              {socialLink.title}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SocialLinkProfile;
