export const title = "Deepfakes: A Cycle Downward";

export const date = "23.05.2021";

export const Preview = () => {
  return (
    <p className="blogPreviewParagraph">
      Deepfakes have entered the public consciousness quite a while ago.
      However, the existence of face-replacing technology itself may carry a
      weight of legal and ethical issues that could only show in the near or far
      future. This is the short story of how we attempted to tell real and fake
      apart... and how we may have messed up.
    </p>
  );
};

export const Content = () => {
  return (
    <>
      <p className="paragraph">
        In July 2020, I published my Master's thesis. Well, <i>"published"</i>{" "}
        may be a strong word here, because, in the end, the paper itself was not
        shared anywhere. The reason as to why is that it may do more harm than
        good. What was it about? Deepfakes. The hilarious act of taking
        someone's face and plastering it over the face of another person (in a
        video, of course, anything else is the territory of B-list horror
        movies).
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
        Jordan Peele. Of course, in this video, it is easy to guess that Barack
        Obama has better things to do than insult other politicians. However,
        the sheer existence of Deepfakes poses one large issue: What if, at one
        point, these fakes become so advanced that they are indistinguishable
        from the real thing?
      </p>
      <p className="paragraph">
        The issue of Deepfakes has gathered more attention in recent years. The
        application of the technology is pretty widespread, anything from
        hilarious videos to send to your friends to actively spreading
        misinformation by putting words into the mouth of famous people. And, of
        course, the Internet always finds more ways to apply tech, which lead to
        my all-time favorite citation I have (and probably will) ever put into a
        research paper:{" "}
        <a href="https://www.vice.com/en/article/bjye8a/reddit-fake-porn-app-daisy-ridley">
          We Are Truly Fucked: Everyone Is Making AI-Generated Fake Porn Now
        </a>
      </p>
      <p className="paragraph">
        I had this problem in mind when I wrote the Master's thesis I teased at
        the beginning. The goal was to find some methodology that would be able
        to differentiate between a real video and a Deepfake. My research
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
        <b>Generative Adversarial Networks</b> (GANs). This may be a fancy term,
        but in essence, it is the following: You take two artificial
        intelligences (who hate each other), place them on a playground, and you
        tell them to play nice. Sounds like a recipe for disaster, but in this
        case, it creates eerie videos of celebrities.
      </p>
      <p className="paragraph">
        For now, let's follow this analogy of the two AIs, and in good computer
        science fashion, let's call them Alice and Bob. Alice is the creative
        kid of the family. She spends her whole day drawing pictures of her
        friends (the number of digital crayons she must go through must be
        staggering). So we have Alice drawing pictures of someone. Every time
        she finishes a picture, she gets excited and runs up to her big AI
        brother Bob, to show him right away.
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
        back at it and draws another picture. And another. And one more. And
        another 300.000. She is very determined. And one day, Bob takes one of
        these pictures and says{" "}
        <i>"Yeah, I like this one, let's pin it on the fridge."</i> And what
        does Alice do in excitement? She draws another picture.
      </p>
      <p className="paragraph">
        If you replace <i>"picture"</i> with <i>"video frame"</i> and{" "}
        <i>"friend"</i> with <i>"source"</i>, you are halfway to how Deepfakes
        are made. Alice and Bob, the two dysfunctional AI kids, are more
        commonly known as <i>"generator"</i> and <i>"discriminator"</i>. In
        other words, you have the generator creating video frames that it
        assumes may look like the face of the Deepfake target, and you have a
        discriminator, which attempts to tell the originals and generated frames
        apart. Every time the discriminator says no, the generator shifts around
        for just a little bit, up until it gets it right. By pitting these two
        machine learning algorithms against each other, you create a continuous
        cycle of improvement.
      </p>
      <p className="paragraph">
        Now, if you paid close attention, you may already see the problem
        surfacing. If Deepfakes are created by a constant, infinite cycle of
        self-criticism, what happens if you find a way to accurately separate
        the real from the fake? In theory, if there were such a methodology, Bob
        could take this approach and criticize Alice's pictures so hard until
        she creates near-indistinguishable forgeries. I suppose that would make
        him the Bob Ross of Deepfakes.
      </p>
      <p className="paragraph">
        In other words, if you find a way to uncover a video to be a Deepfake,
        you actively improve the quality of future Deepfakes. The discriminator
        throws out the ones that do not pass a given threshold, and eventually,
        after some time has passed, any video frame created by the generator
        will not be noticed by any known detection methods. As mentioned, every
        time the discriminator tells the generator that the video looks fake,
        the generator slightly shifts its input, at random. Through sheer law of
        probability, it will eventually start creating video frames that do not
        suffer from any noticeable flaws.
      </p>
      <p className="paragraph">
        Theoretically, if you follow this line of thought, Deepfakes would
        become indistinguishable for both humans and artificial intelligence. At
        some point, they would be as good as the real thing. The results could
        potentially be devastating. The original goal of our research was to
        find a forensic way to find Deepfakes, for purposes such as court cases.
        Imagine that any sort of video evidence in a court of law could be
        disputed on the count that it may be a Deepfake. The same holds in the
        context of journalism: Can anything be reported on if its authenticity
        can not be proven?
      </p>
      <p className="paragraph">
        How did we solve this problem? Well... we did not. We eventually decided
        that it would be for the better to not publish our results at all.
        Nonetheless, as mentioned, just by continuing to run GANs, they improve
        themselves eventually. Even if our results are not published, the
        problem persists. In our paper, we instead proposed a different
        approach: information provenance.
      </p>
      <p className="paragraph">
        Provenance is a term that originally comes from the world of art and
        literature. The Mona Lisa was drawn by Leonardo da Vinci, exchanged
        quite a lot of hands, and eventually ended up in the Louvre. The chain
        of ownership, including any modification, damage, or restoration, is
        known as provenance. The same concept could be applied to digital media.
        There is a source, such as a camera, that creates the media, and then it
        is modified in various ways to reach the state that is presented
        together with its provenance. Plenty of ways to sign media objects,
        owners, and modification history already exist, attempts such as the{" "}
        <a href="https://arxiv.org/pdf/2001.07886.pdf">
          AMP project by Microsoft
        </a>{" "}
        aim to introduce large-scale provenance systems to digital media.
      </p>
      <p className="paragraph">
        So, all problems solved? Unlikely. As one might expect, introducing
        provenance to digital media opens a completely new can of problematic
        worms. Think of the following example: A person working for a big
        corporation finds out that the company is involved in large-scale tax
        fraud. They take some photos, publish them on the Internet and become a
        whistleblower. If provenance was part of all distributed media,
        anonymity would be compromised, if not completely removed. Any
        distribution of information would be traceable, and all owners,
        modifiers, and distributors of media are known right away. Furthermore,
        what about media that does not have provenance information? For example,
        remember the George Floyd video footage that caused the{" "}
        <i>"Black Lives Matter"</i> protests. If only media with provenance
        information would be trusted by the public or legal entities, the
        discussions around such events would become even more complex, if not
        altogether critical.
      </p>
      <p className="paragraph">
        However, I would not expect all of us to fall into a Deepfake-induced
        panic now. Funny videos of Barack Obama and other entertainment- and
        research-focused projects are currently the largest known applications
        of the technology. The potential remains though, and I would imagine
        that the issues around them evolve with Deepfakes and similar
        approaches. For now, perhaps it is not a bad idea to kick back and watch
        digital evolution in progress. After all, I doubt we considered stopping
        the development of the butter knife just because you could use it to
        stab someone. In that regard, stay sharp.
      </p>
    </>
  );
};
