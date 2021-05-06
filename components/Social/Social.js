import Image from 'next/image';

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
    <section className='social'>
      <h2>Where you can find me:</h2>
      <ul className='social__items'>
        {socialLinks.map((item) => (
          <li key={item.key} className='social__item'>
            <a
              href={item.url}
              title={item.description}
              className='social__link'
            >
              <Image src={item.icon} width='48' height='48' />
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
};
export default Social;
