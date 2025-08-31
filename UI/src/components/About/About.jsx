import "./About.css";

function About() {
  return (
    <div className="page-wrapper">
      <main>
        <div className="text">
          <h1 className="our-story">Our Story</h1>
          <p className="p1">
            Back in 2019, a team of educators and wellness enthusiasts launched
            Healthy Lifestyle to turn balanced living into simple, daily habits.
            Our goal is to guide you through small, consistent steps—like meal
            swaps, movement prompts, and sleep routines—to build lasting health
            and celebrate every victory.
          </p>
          <h1>Our Goal</h1>
          <p>
            Our mission is to guide you toward a sustainable, joyful
            lifestyle—one small step at a time. We believe that real change
            happens through consistent, manageable habits, not drastic
            overhauls. That’s why our app focuses on bite-sized challenges,
            personalized progress tracking, and positive reinforcement rather
            than guilt trips. Whether you’re swapping soda for sparkling water
            or aiming for your first 5K, we’re here to celebrate every victory,
            big or small. By blending expert insights with smart notifications
            and a supportive community, we want to help you build—and stick
            with—habits that last a lifetime.
          </p>
        </div>
        <img
          className="about-image"
          src="https://bing.com/th/id/BCO.8b9b6f04-fa85-4b5c-b52f-5c12710a54a1.png"
          alt="about me page"
        />
      </main>
      <div className="bottom-container">
        <div className="text ">
          <h2>What We Do</h2>
          <ul>
            <li>Encourage Daily Movment </li>
            <li>Promote Healthy Eating</li>
            <li>Support Intermittent Fasting</li>
            <li>Educate Impact of Added Sugar</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
export default About;
