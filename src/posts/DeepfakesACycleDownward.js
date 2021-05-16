export const title = "Deepfakes: A Cycle Downward";

export const date = "XX.05.2021";

export const Preview = () => {
  return <p className="blogPreviewParagraph"></p>;
};

export const Content = () => {
  return (
    <>
      <p className="paragraph">
        In July 2020, I published my Master thesis. Well, "published" may be a
        strong word here, because in the end, the paper itself was not shared
        anywhere. The reason as to why is that it may do more harm than good.
        What was it about? Deepfakes. The hilarious act of taking someones face
        and plastering it over the face of another person (in a video, of
        course, anything else is the territory of B-list horror movies).
      </p>
      <p className="paragraph">
        Before I get into why I am keeping the results of my thesis under wraps,
        let's take a brief excourse into Deepfakes and how they are produced. If
        you are not yet familiar with Deepfakes, I would like you to watch{" "}
        <a href="https://www.youtube.com/watch?v=cQ54GDm1eL0">
          this YouTube video of former president Barack Obama
        </a>
        . As you may notice, among other things he says{" "}
        <i>"President Trump is a total and complete dipshit."</i> Politics
        aside, you can probably guess that Obama never really said that line.
      </p>
      <p className="paragraph">
        What you are seeing here are Deepfakes at work: Taking a target's face
        as source material, and mapping that information on someone
        impersonating said target, with a little help provided by artificial
        intelligence. In the case above, the impersonator was American actor
        Jordan Peele. Of course, in this video it is easy to guess that Barack
        Obama has better things to do than insult other politicians. However,
        the sheer existence of Deepfakes pose one large issue: What if, at one
        point, these fakes become so advanced that they are indestinguishable of
        the real thing?
      </p>
      <p className="paragraph">
        The issue of Deepfakes has gathered more attention in recent years. The
        application of the technology is pretty widespread, anything between
        hilarious videos to send to your friends to actively spreading
        misinformation by putting words into the mouth of famous people. And, of
        course, the Internet always finds more ways to apply tech, which lead to
        my all-time favourite citation I have (and probably will) ever put into
        a research paper:{" "}
        <a href="https://www.vice.com/en/article/bjye8a/reddit-fake-porn-app-daisy-ridley">
          We Are Truly Fucked: Everyone Is Making AI-Generated Fake Porn Now
        </a>
      </p>
      <p className="paragraph">
        I had this problem in mind when I wrote the Master thesis I teased at
        the beginning. The goal was to find some methodology that would be able
        to differantiate between a real video and a Deepfake. My research
        partner Catherine and I tried multiple different approaches, with
        varying degrees of success. No matter the results though, we chose not
        to publish any of them. We agreed, together with the Netherlands
        Forensic Institute (NFI), that it would be for the better to keep these
        results to ourselves. Therefore, I will not mention any of these results
        here. But I can explain the problem, which is equally fascinating. To do
        so, let's detail how a Deepfake is generated in the first place.
      </p>
      <p className="paragraph">
        Deepfakes, in most cases, are created by making use of{" "}
        <b>Generative Adversarial Networks</b> (GANs). This may be a really
        fancy term, but in essence, it is the following: You take two artificial
        intelligences (who hate each other), place them on a playground, and you
        tell them to play nice. Sounds like a recipe for disaster, but in this
        case, it creates eerie videos of celebrities.
      </p>
      <p className="paragraph">
        For now, let's follow this analogy of the two AIs, and in good computer
        science fashion, let's call them Alice and Bob. Alice is the really
        creative kid of the family. She spends her whole day drawing pictures of
        her friends (the amount of digital crayons she must go through must be
        staggering). So we have Alice drawing pictures of someone. Every time
        she finishes a picture, she gets really excited and runs up to her big
        AI brother Bob, to show him right away.
      </p>
      <p className="paragraph">
        Bob, who is not the nicest guy to have around, takes the picture Alice
        drew, takes a real good look at it, takes another good look at the
        friend that the picture is (supposedly) of... and then he proceeds to
        tear the picture to shreds, throws it on the ground and tells Alice to
        do it again, but properly this time.
      </p>
      <p className="paragraph">
        Alice (after running to her bedroom and slamming the door) gets right
        back at it, and draws another picture. And another. And one more. And
        another 300.000. She is very determined. And one day, Bob takes one of
        these pictures and says{" "}
        <i>"Yeah, I like this one, let's pin it on the fridge."</i> And what
        does Alice do in excitement? She draws another picture.
      </p>
      <p className="paragraph">
        If you replace "picture" with "video frame" and "friend" with "source",
        you are halfway to how Deepfakes are made. Alice and Bob, the two
        dysfunctional AI kids, are more commonly know as <i>"generator"</i> and{" "}
        <i>"discriminator"</i>. In other words, you have the generator creating
        video frames that it assumes may look like the face of the Deepfake
        target, and you have a discriminator, which attempts to tell the
        originals and generated frames apart. Every time the discriminator says
        no, the generator shifts around for just a little bit, up until it gets
        it right. By pitting these two machine learning algorithms against each
        other, you create a continuous cycle of improvement.
      </p>
      <p className="paragraph">
        Now, if you paid close attention, you may already see the problem
        surfacing. If Deepfakes are created by a constant, infinite cycle of
        self-criticism, what happens if you find a way to accurately separate
        the real from the fake? In theory, if there were such a methodology, Bob
        could take this approach and critisize Alice's pictures so hard until
        she creates near-indistinguishable forgeries. I suppose that would make
        him the Bob Ross of Deepfakes.
      </p>
    </>
  );
};
