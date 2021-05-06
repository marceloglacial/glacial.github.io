const Skills = (props) => {
  const skills = [
    {
      id: 1,
      title: 'Front-end Developer / Web Designer',
    },
  ];

  return (
    <section className='skills'>
      <ul>
        {skills.map((skill) => (
          <li key={skill.id}>{skill.title}</li>
        ))}
      </ul>
    </section>
  );
};
export default Skills;
