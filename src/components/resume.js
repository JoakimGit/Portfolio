import * as React from "react";

const Resume = () => {
  return (
    <section
      className="bg-developer-img-3 text-clr-light bg-clr-dark bg-cover py-16 px-8 text-center bg-blend-multiply"
      id="resume"
    >
      <h2 className="mb-16 text-4xl font-black lg:row-[1/2] lg:text-6xl">Resume</h2>
      <div className="space-y-12 lg:grid lg:grid-cols-3 lg:space-y-0">
        <div>
          <h3 className="mb-2 text-3xl font-black">Education</h3>
          <div className="border-clr-accent mx-auto w-4/5 max-w-[350px] border-t"></div>
          <div className="my-4">
            <p className="font-black">Københavns erhvervsakademi</p>
            <p>2019-2022</p>
            <p>Datamatiker</p>
          </div>

          <div className="my-4">
            <p className="font-black">Københavns universitet</p>
            <p>2015-2019</p>
            <p>Bachelor i asienstudier (Japan studier)</p>
          </div>

          <div className="my-4">
            <p className="font-black">Copenhagen Business School</p>
            <p>2014-2015</p>
            <p>HA Almen erhvervsøkonomi</p>
          </div>

          <div className="my-4">
            <p className="font-black">Bosei Idrætshøjskole</p>
            <p>2013</p>
            <p>Højskole</p>
          </div>

          <div className="my-4">
            <p className="font-black">Kongsholm Gymnasium og HF</p>
            <p>2009-2012</p>
            <p>Gymnasie STX</p>
          </div>
        </div>

        <div>
          <h3 className="mb-2 text-3xl font-black">Skills</h3>
          <div className="border-clr-accent mx-auto w-3/5 max-w-[200px] border-t 2xl:w-5/6 2xl:max-w-[450px]"></div>
          <div className="2xl:grid 2xl:grid-cols-3">
            <div className="my-4 2xl:space-y-2">
              <p className="mb-2 font-black">Beginner</p>
              <p>Python</p>
              <p>Angular</p>
              <p>Docker</p>
              <p>Jenkins</p>
              <p>AWS (EC2)</p>
              <p>Scrum</p>
            </div>
            <div className="my-4 2xl:space-y-2">
              <p className="mb-2 font-black">Intermediate</p>
              <p>Node.js</p>
              <p>HTML</p>
              <p>CSS</p>
              <p>MySQL</p>
              <p>Git</p>
            </div>
            <div className="my-4 2xl:space-y-2">
              <p className="mb-2 font-black">Advanced</p>
              <p>Java (incl. Spring boot)</p>
              <p>Javascript (incl. JQuery)</p>
            </div>
          </div>
        </div>

        <div>
          <h3 className="mb-2 text-3xl font-black">Personal</h3>
          <div className="border-clr-accent mx-auto mb-4 w-3/5 max-w-[200px] border-t"></div>
          <div>
            <p>Lundtoftegårdsvej 13</p>
            <p>2800 Kongens Lyngby</p>
            <p>Denmark</p>
            <p>+45 61 86 02 74</p>
            <p>jokke34@gmail.com</p>
          </div>

          <div className="mt-6">
            <p className="text-lg font-black">Interests:</p>
            <p>Cooking</p>
            <p>Fitness</p>
            <p>Gaming</p>
            <p>Chess</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;
