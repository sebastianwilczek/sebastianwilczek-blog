import menuApiResponse from "./img/menu-api-response.png";
import menuImage from "./img/menu-sorted-by-protein.png";
import menuApiLink from "./img/menu-api-link.png";

export const title = "Hacking Calories";

export const date = "11.10.2021";

export const Preview = () => {
  return (
    <p className="blogPreviewParagraph">
      All I really wanted to do was sort the food I order online by calories or
      amount of protein. This little idea made me go down the rabbit hole of
      messing with the API of my food delivery app of choice. Hey, someone has
      got to do it, I suppose.
    </p>
  );
};

export const Content = () => {
  return (
    <>
      <p className="paragraph">
        I am not entirely sure how it came to be, but over the last two years, I
        developed an interest in working out and healthy life. Of course, that
        requires three essential pillars: training, nutrition, and rest. There
        is, however, one crucial problem: I am extremely lazy.
      </p>
      <p className="paragraph">
        So how does that affect each requirement? Let's start with the easiest
        one in this regard: rest. Being lazy is, in many ways, also required to
        rest. Not exactly a problem in this regard. You might then think that
        the problem I have might be in training. Surprisingly, that was not my
        problem either. I turn up my headphones to the average volume of an
        industrial drill, consume enough caffeine to kill a horse, and get
        started. By way of elimination, you can tell that my issue is nutrition.
      </p>
      <p className="paragraph">
        On a technical level, healthy nutrition is not all that complicated. Eat
        more calories than you need if you want to gain weight, eat less when
        you want to lose it, and make sure that you consume enough protein for
        muscle growth. Practically all foods are marked with nutritional values,
        and mathematically, you can combine all your meals and make a plan to
        have the perfect values. And that... is effort.
      </p>
      <p className="paragraph">
        Every day of every week, you would have to consider what meals to
        prepare, what groceries to buy, what you still have in the fridge, and
        considering that I would still like to spend some of my time doing
        literally anything else, I opted for a different solution.
      </p>
      <p className="paragraph">
        In recent years, a myriad of food delivery options became available for
        us (praise the Internet). One of such approaches is represented by
        various apps and services that offer you a menu to choose from every
        week, and all the groceries are delivered right to your doorstep. The
        preparation is left to your capable hands, and so is the consumption,
        obviously.
      </p>
      <p className="paragraph">
        Hence, I signed up for one such service, which I will leave unnamed due
        to what I am about to detail. I am fairly certain they would not be
        happy with my mischief. In my defense, I did it for the sake of my
        health and sanity. But first things first: I signed up for the
        aforementioned service and got all my food for the week delivered
        straight to my mouth. This worked well. For a time.
      </p>
      <p className="paragraph">
        Eventually, I realized that every week, I spent an absurdly large time
        deciding what meals should be in my next delivery. The menu usually
        consisted of roughly 30 different meals, of which I always picked three.
        All options looked fairly delicious, and the price does not change based
        on your choices. Still, it took me way longer than it should. This may
        just be a few minutes, but it bothered me enough that I felt the itching
        need to optimize.
      </p>
      <p className="paragraph">
        The main issue here was that the menu was shown to you in the app of the
        service, with a lovely picture of the prepared meal, and all the
        ingredients shown to you right away when you press on the entry in the
        menu. Guess what you have to do to see the nutritional information? You
        have to open the menu, open the meal, scroll past the ingredients and
        preparation instructions, expand the nutrition information section, take
        a note of the number of calories and protein, and compare them later.
        You have to do this for every meal, every week.
      </p>
      <p className="paragraph">
        But hey, I did not get degrees in software engineering and network
        engineering for nothing. And if the app is not giving me the option to
        sort by protein, who else will but myself? So let us take a look at what
        can be done to resolve my little calorie problem.
      </p>
      <p className="paragraph">
        My first idea was to analyze the network traffic going to and from my
        phone when I open the menu in the app. However, it would seem that Apple
        does not particularly enjoy when you dig around the traffic of an
        iPhone, so attempting to do so would be rather unpleasant. As usual, the
        solution can be a whole lot simpler: The menu is also available on the
        web, without logging in, for everyone to see.
      </p>
      <p className="paragraph">
        Cool, this should be easy. Those were my thoughts looking up the menu
        online until I looked at the network traffic. When you open the link to
        look at the menu, the server that is being called returns an HTML
        document that already contains all the information visible. My first
        instinct was to parse the HTML to find the nutritional values. As usual,
        that also proved fruitless once I realized that the menu itself does not
        even show you the nutrition properties. What kind of online meal service
        does not provide you with this information?
      </p>
      <p className="paragraph">
        It was only by coincidence that I still found a way to get the
        information I wanted. The menu provided arrows to the left and right,
        redirecting to the menu of the previous and next week. Of course, I
        expected another HTML response. Strangely enough, interacting with the
        page in this way triggers a completely different request, one that
        returns all information about all meals of the week. From the request, I
        was able to construct this link (which is heavily redacted for the sake
        of not name-dropping the service I was messing with):
      </p>
      <div className="nonBorderedContainer">
        <img src={menuApiLink} alt="Menu API Link" width="100%" />
      </div>
      <p className="paragraph">
        This, in turn, would get me this result (redacted for readability):
      </p>
      <div className="nonBorderedContainer">
        <img src={menuApiResponse} alt="Menu API Response" width="70%" />
      </div>
      <p className="paragraph">
        Awesome, and we get this result for all meals of the week. Even better,
        the request was sent with a bearer token, which does not seem to have
        been renewed over the last two weeks. All I needed to do from here was
        to query this information from a web application, which I have built in
        React, sort it by the amount of protein, and display it in a nicely
        presented list for me to choose the top ones. Even the image URL was
        included in the response, so I could include it in my personal menu. The
        result looked just like this:
      </p>
      <div className="nonBorderedContainer">
        <img
          src={menuImage}
          alt="Menu sorted by amount of protein"
          width="50%"
        />
      </div>
      <p className="paragraph">
        Amazing, now it just takes me a few seconds to pick the most
        nutritionally valuable meals each week. Looking back at it, that was
        work just to satisfy my appetite and curiosity. If you are, by any
        chance, a developer of the service this blog is totally not referring
        to, please do us both a favor and implement sorting by nutrition. Bon
        appétit.
      </p>
    </>
  );
};
