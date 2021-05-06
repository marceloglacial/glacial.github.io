import Image from 'next/image';
import styles from './Social.module.scss';

const Social = (props) => {
  const socialLinks = [
    {
      id: 1,
      title: 'Linkedin',
      description: 'Professioal Profile',
      url: 'https://www.linkedin.com/in/glacial/',
      icon: '/images/social-linkedin.png',
    },
    {
      id: 2,
      title: 'GitHub',
      description: 'Web Developer and Front-end Projects',
      url: 'https://github.com/marceloglacial',
      icon: '/images/social-github.png',
    },
    {
      id: 3,
      title: 'Behance',
      description: 'Design Projects',
      url: 'https://www.behance.net/marceloglacial',
      icon: '/images/social-behance.png',
    },
  ];

  return (
    <section className={styles.social}>
      <h2>Where you can find me:</h2>
      <ul className={styles.socialItems}>
        {socialLinks.map((item) => (
          <li key={item.id} className={styles.socialItem}>
            <a
              href={item.url}
              title={item.description}
              className={styles.socialIcon}
            >
              <Image
                src={item.icon}
                alt={`${item.title} icon`}
                width='48'
                height='48'
              />
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
};
export default Social;
