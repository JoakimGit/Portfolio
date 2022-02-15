import * as React from "react";
import { StaticImage } from "gatsby-plugin-image";

const About = () => {
  return (
    <section
      className="my-0 mx-auto max-w-[1000px] py-20 px-8 lg:grid lg:grid-cols-[1fr_200px] lg:gap-x-8"
      id="about"
    >
      <h2 className="text-4xl font-black lg:row-[1/2] lg:text-6xl">Who I am</h2>
      <p className="bg-clr-accent h-fit py-4 px-4 font-mono text-xl lg:relative lg:-left-6 lg:col-span-full lg:row-[2/3] lg:w-[calc(100%+4rem)] lg:pr-[calc(200px+4rem)] lg:pl-6 lg:text-2xl">
        Software developer based in Lyngby
      </p>
      <div className="my-6 space-y-4 lg:row-start-3 lg:my-2">
        <p>
          I am 28 years old and I just finished my degree in computer science at KEA. I am well versed in both
          front-end as well as back-end technologies. I enjoy coding and always welcome the opportunity to
          learn new languages or frameworks. Although I am familiar with both ends of the stack, I have
          recently been doing mostly front-end related activities with CSS, HTML and a JavaScript framework of
          choice, often paired with a back-end in NodeJS + Express.
        </p>
        <p>
          In my free time I enjoy playing Path of Exile if I'm gaming, reading comics, playing online chess,
          and watching livestreams on twitch.tv. I've also recently started going to the gym in an attempt to
          get into better shape.
        </p>
        <p>
          I used to study japanese at Copenhagen University and even spent one semester abroad living in
          Japan. Towards the end of that degree, I took an elective in programming and ended up liking it so
          much it convinced me to change studies, which lead to me enrolling in the datamatiker programme at
          KEA.
        </p>
      </div>
      <StaticImage
        className="shadow-lg shadow-black/30 lg:col-start-2 lg:row-start-1 lg:row-end-4 "
        src="../images/Joakim-2.jpg"
        alt="Picture of me"
      />
    </section>
  );
};

export default About;
