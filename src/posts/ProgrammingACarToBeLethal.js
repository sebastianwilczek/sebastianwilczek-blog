export const title = "Programming A Car To Be Lethal";

export const date = "19.06.2021";

export const Preview = () => {
  return (
    <p className="blogPreviewParagraph">
      Cars connected to the Internet and each other are being a more present
      topic in our lives. Given the rise of self-driving cars and similar
      features that require interconnectivity, this comes as no surprise.
      However, one should perhaps take a second to see if cars are prepared to
      be connected, and what could happen if they are not.
    </p>
  );
};

export const Content = () => {
  return (
    <>
      <p className="paragraph">
        If I were to ask you what you would consider to be a dangerous form of
        transportation, you would likely be able to come up with various (and
        hilarious) answers: Skydiving, rolling down a hill in an inflatable
        ball, strapping yourself to a home-made rocket on a mission to reach
        Mars. And while all of those certainly are in some way dangerous, one of
        the most lethal forms of human transport is right outside your door, and
        the keys to it are in your pocket: Cars.
      </p>
      <p className="paragraph">
        <a href="https://www.who.int/news-room/fact-sheets/detail/road-traffic-injuries">
          According to the World Health Organization
        </a>
        , about 1.35 million people die each year due to traffic crashes. A
        staggering number. Most of these are related to human failure. However,
        another part is the failure of the machine that takes you from A to B.
        At the beginning of 2020, it was my job to see what kind of havoc you
        can cause by hacking a car.
      </p>
      <p className="paragraph">
        At the end of 2019, my University program was approached by a consultant
        of a large UK accounting corporation. This consultant worked for the
        security division of said corporation, and just a few months prior, he
        published a paper on how one could get access to the CAN bus of a car.
        In other words, he found a way into the central communication of a
        moving vehicle. Now that there was a way in, the next question was just
        how much damage could be caused once you are "inside" the car. This
        question was brought to my University and eventually landed in my hands.
      </p>
      <p className="paragraph">
        Let's take a bit of a broader look at the topic: Cars are becoming more
        interconnected to both each other as well as the Internet overall.{" "}
        <a href="https://www.consumerwatchdog.org/sites/default/files/2019-07/KILL%20SWITCH%20%207-29-19.pdf">
          Consumer Watchdog published a report
        </a>{" "}
        that if one could receive access to the server connecting just one model
        year of a car brand, manipulating them to be malfunctioning, one could
        expect about 3.000 fatalities. That number is roughly the same number of
        deaths as the 9/11 attacks.
      </p>
      <p className="paragraph">
        Going even further, one could imagine that cars that are interconnected
        with each other could actively "infect" each other, like a literal
        virus. Certainly, at the moment, this may be more the realm of
        science-fiction than science-fact, but the possibility appears less
        distant as it was a few years ago. The point I am trying to make here is
        that security issues in automotive vehicles are not to be taken lightly.
      </p>
      <p className="paragraph">
        You can probably imagine why this is only becoming an issue now that
        cars are starting to become more connected. The technology built into
        cars was never designed with security in mind. Automotive vehicles used
        to be autonomous vehicles. Connecting these vehicles to other systems is
        essentially just opening the door to an infrastructure that is not
        prepared for the potential issues that come with interconnectivity.
      </p>
      <p className="paragraph">
        Cars are, in essence, a chassis packed full of microcontrollers, also
        known as Electronic Control Units (ECUs). Each is responsible for one
        part of the car's functionality, everything from the brakes over the
        window controls to the entertainment systems. In 1986, Bosch introduced
        the Controller Area Network (CAN) protocol, and the hardware running it,
        the CAN bus, with it.
      </p>
      <p className="paragraph">
        The CAN bus is essentially just an open broadcast system. Every ECU can
        listen to all messages and every ECU can send them at a rate that is
        limited by the bandwidth of the CAN bus. Given that this bandwidth is
        rather limited, multiple automotive companies banded together to create
        FlexRay, a similar protocol, which offers a larger bandwidth. However,
        at the time of writing, CAN busses are still the most widely used
        communication method within cars on the market.
      </p>
      <p className="paragraph">
        You likely can already see various problems presenting themselves. The
        CAN bus is open by design, no encryption or signature is being
        transmitted. Furthermore, every ECU can send at their own volition,
        without being checked for rate limits or authorization. Similarly,
        FlexRay also offers no such securities.
      </p>
      <p className="paragraph">
        The ECUs themselves are also a limiting factor. After all, they are
        microcontrollers, offering only as much processing power as required for
        the tasks they perform. Computationally expensive tasks such as
        cryptography only have limited resources to work with. And even if they
        were able to perform such expensive tasks, there is still only limited
        bandwidth available. Cryptographic signatures would need to be
        transmitted along with the actual information. Perhaps in some systems,
        some delays are acceptable. However, if you are pressing down on your
        brakes, you would want your brakes to engage right away, not after
        several seconds.
      </p>
      <p className="paragraph">
        Given these restrictions, plenty of attack vectors are possible. The
        bluntest would be a form of denial of service attack: The CAN bus is
        open for all ECUs to send. If one ECU is compromised, it could send
        messages to the bus at a high rate, drowning out all other legitimate
        messages. In this case, your brakes would not even know that they should
        engage, perhaps because another ECU is constantly blurting out the
        message to turn your headlights on and off.
      </p>
      <p className="paragraph">
        This brings us directly into the next attack vector: all messages are
        out in the open, and all messages have some effect on at least one other
        ECU. If one performs a replay attack, as in simply repeating a message
        that was previously sent, it can be assumed that the same effect occurs
        again. To go with the analogy of hitting your brakes, this would mean
        that your brakes might suddenly engage while you are driving at 200 km/h
        on the highway.
      </p>
      <p className="paragraph">
        So how does one prevent an ECU from going rogue, even after it has been
        compromised? There are plenty of proposed security extensions for the
        CAN protocol, while there are no extensions in published literature for
        FlexRay. Most of the extensions for CAN are similar. Each requires
        either a preshared key or a new ECU that provides such a key. The
        sending and receiving ECUs then perform signature computations that are
        sent along with the message payload. In the research we conducted, we
        took a closer look at two proposed extensions, one using 8 bits and the
        other using 24 bits reserved for a signature hash. Given that a CAN
        message has only 64 bits to begin with, these hashes take a large part
        of the available bandwidth.
      </p>
      <p className="paragraph">
        In our experiments, we did find that these signatures do prevent replay
        attacks. However, they are by far not enough. Having 24 bits allocated
        for a signature severely impacts the bandwidth of the CAN bus and may
        provide to be too little room for transmitting the information that is
        required. We also found that we could beat the version with 8 bits
        through an exhaustive search attack. We sent out up to 256 messages, at
        which point we covered all the possible hashes, engaging the "brakes"
        (or an LED light, in the case of our experiment).
      </p>
      <p className="paragraph">
        Does that mean that all is well if you do not have to send large amounts
        of information? Well, far from it. Introducing cryptography makes the
        system even more susceptible to denial of service attacks. Also, we
        considered how long it takes the ECUs to compute signatures during
        normal usage. Without cryptography, it took our experiment ECUs 224
        microseconds on average to send and react to a message. With the
        implemented extension this average increased to 45.924 microseconds. If
        you consider a car driving at 100 km/h, this is an added brake distance
        that increased from 6,2 millimeters... to 1,28 meters. Such a distance
        could be the deciding factor between life and death in a car crash.
      </p>
      <p className="paragraph">
        This blog post only scratches on the surface of security issues in
        automotive vehicles. There are plenty of other attack vectors and
        solutions to consider: server-side attacks, ECU updating, key sharing,
        etc. It almost seems that we are connecting cars to networks before we
        are even aware of what must be secured before. In its present state, CAN
        busses are not secured if any ECU connected to them is ever compromised.
        More research into securing automotive networks is needed, on all
        fronts, both internally within the car as well as externally,
        interfacing with other systems. For the time being, I am not worrying
        that someone is taking over my car while I am sitting within it. On the
        other hand, I would be only partially surprised to ever see it happen in
        the field.
      </p>
    </>
  );
};
