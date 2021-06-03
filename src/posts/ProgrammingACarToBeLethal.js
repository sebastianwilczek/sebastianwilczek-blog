export const title = "Programming A Car To Be Lethal";

export const date = "XX.06.2021";

export const Preview = () => {
  return <p className="blogPreviewParagraph">TODO</p>;
};

export const Content = () => {
  return (
    <>
      <p className="paragraph">
        Introduction of how I came to the project, uni, how access to the CAN is
        possible, what my job was
      </p>
      <p className="paragraph">
        How devestating car attacks could be, what attack vectors there are
      </p>
      <p className="paragraph">
        Constraints and restrictions, why the tech is limited, where are the
        risks
      </p>
      <p className="paragraph">
        CAN, FlexRay, what they are, when they were introduced, how are they
        used, how secure are they by themselves
      </p>
      <p className="paragraph">
        Ways to exploit the busses, what effects could be caused, what attacks
        are possible, replay and DoS
      </p>
      <p className="paragraph">
        Security extensions and proposals, how many there are, small intro to
        how they work
      </p>
      <p className="paragraph">Experimental setup, ECUs, environment</p>
      <p className="paragraph">
        Results, measurements, risks (too small a hash), effect on brake time
        and availability
      </p>
      <p className="paragraph">
        Discussion availability vs integrity, ethical question, proposal for
        governmental regulation
      </p>
    </>
  );
};
