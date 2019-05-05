import React from 'react';
import './About.css';

import robert1 from '../../images/robertdowneyjr1.jpeg';
import robert2 from '../../images/robertdowneyjr2.jpg';

function About() {
  return (
    <section className="about" id="about">
      <div className="about-item odd">
        <div className="about-img">
            <img src={robert1} />
        </div>
        <div className="about-para">
            <p>
                Robert John Downey Jr. (born April 4, 1965) is an American actor. His career has included critical and popular success in his youth, followed by a period of substance abuse and legal difficulties, and a resurgence of commercial success in middle age. For three consecutive years from 2012 to 2015, Downey topped the Forbes list of Hollywood's highest-paid actors, and in 2008, Time magazine named him one of the 100 most influential people in the world. His films have grossed over $5.3 billion in North America and over $12.9 billion worldwide, making Downey the second highest-grossing domestic box-office star and the highest-grossing worldwide box-office star of all time.
            </p>
            <p>
                Making his acting debut at the age of five, appearing in his father's film Pound (1970), Downey appeared in roles associated with the Brat Pack, such as the teen sci-fi comedy Weird Science (1985) and the drama Less Than Zero (1987). He starred as the title character in the 1992 film Chaplin, for which he earned a nomination for the Academy Award for Best Actor and won the BAFTA Award for Best Actor in a Leading Role. After being released in 2000 from the California Substance Abuse Treatment Facility and State Prison where he was incarcerated on drug charges, Downey joined the cast of the TV series Ally McBeal playing Calista Flockhart's love interest. The role earned him a Golden Globe Award. His character was terminated when Downey was fired after two drug arrests in late 2000 and early 2001. After his last stay in a court-ordered drug treatment program, Downey achieved sobriety.
            </p>
        </div>
      </div>
      <div className="about-item even">
        <div className="about-img">
            <img src={robert2} />
        </div>
        <div className="about-para">
            <p>
                Initially, bond completion companies would not insure Downey for roles in feature films. Mel Gibson, who had been a close friend to Downey since both had co-starred in Air America, paid the insurance bond for the 2003 film The Singing Detective. Downey's performance in that film paved the way for his return to feature films including a role in the black comedy crime film Kiss Kiss Bang Bang (2005), the mystery thriller Zodiac (2007), and the satirical action comedy Tropic Thunder (2008); for the latter he was nominated for an Academy Award for Best Supporting Actor. Downey went on to star as the Marvel Comics superhero Iron Man in ten films within the Marvel Cinematic Universe, beginning with Iron Man (2008) and concluding with Avengers: Endgame (2019). He has also played the title character in Guy Ritchie's Sherlock Holmes (2009), which earned him his second Golden Globe win, and its sequel (2011).
            </p>
            <p>
                Downey was born in Manhattan, New York, the younger of two children. His father, Robert Downey Sr., is an actor and filmmaker, while his mother, Elsie Ann (née Ford), was an actress who appeared in Downey Sr.'s films. Downey's father is of half Lithuanian Jewish, one-quarter Hungarian Jewish, and one-quarter Irish descent, while Downey's mother had Scottish, German, and Swiss ancestry. Robert's original family name was Elias which was changed by his father to enlist in the Army.[15] Downey and his older sister Allyson grew up in Greenwich Village. As a child, Downey was "surrounded by drugs." His father, a drug addict, allowed Downey to use marijuana at age six, an incident which his father said he now regrets. Downey later stated that drug use became an emotional bond between him and his father: "When my dad and I would do drugs together, it was like him trying to express his love for me in the only way he knew how." Eventually, Downey began spending every night abusing alcohol and "making a thousand phone calls in pursuit of drugs."
            </p>
        </div>
      </div>
    </section>
  );
}

export default About;