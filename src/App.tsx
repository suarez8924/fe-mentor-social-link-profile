import styles from './App.module.scss';
import SocialLinkProfile from './components/social-link-profile/SocialLinkProfile';
import AvatarJessica from './assets/images/avatar-jessica.jpeg';

const USER = {
  avatar: { url: AvatarJessica, alt: 'Avatar of Jessica Randall' },
  fullName: 'Jessica Randall',
  location: 'London, United Kingdom',
  intro: 'Front-end developer and avid reader.',
  socialLinks: [
    { title: 'GitHub', url: 'https://www.google.com' },
    { title: 'Frontend Mentor', url: 'https://www.google.com' },
    { title: 'LinkedIn', url: 'https://www.google.com' },
    { title: 'Twitter', url: 'https://www.google.com' },
    { title: 'Instagram', url: 'https://www.google.com' },
  ],
};

function App() {
  return (
    <main className={styles.main}>
      <SocialLinkProfile user={USER} />
    </main>
  );
}

export default App;
