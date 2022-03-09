import Hero from '../components/hero/Hero'
import Layout from '../components/layout/Layout';
import Card from '../components/card/Card';
import SectionBreak from '../components/sectionbreak/SectionBreak'
import ContactForm from '../components/contactForm/contactForm';

function Home(){
  return (
    <Layout>
      <title>tabname idk</title>
      <Hero
        heading="home page"
        subHeading="idk i can think of any text for now"
        bgImage="/bongo-cat-transparent.gif"
        buttonText="Learn More"
      />
      <SectionBreak />
      <h2>Projects</h2>
      <div className="flex justify-space-evenly flex-wrap">
        <Card
          image="/project.jpeg"
          alt="a cool project"
          title="Cool Project"
          text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa sequi consequatur rem expedita ex voluptate id unde ea quibusdam quidem."
          buttonText="Learn More"
          buttonLink=""
        />
        <Card
          image="/project.jpeg"
          alt="a cool project"
          title="Cool Project"
          text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa sequi consequatur rem expedita ex voluptate id unde ea quibusdam quidem."
          buttonText="Learn More"
          buttonLink=""
        />
        <Card
          image="/project.jpeg"
          alt="a cool project"
          title="Cool Project"
          text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa sequi consequatur rem expedita ex voluptate id unde ea quibusdam quidem."
          buttonText="Learn More"
          buttonLink=""
        />
      </div>
      <ContactForm />
    </Layout>
  );
}

export default Home