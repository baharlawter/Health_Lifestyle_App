import "./About.css";

function About() {
  return (
    <div className="page-wrapper">
      <main>
        <div className="text">
          <h1 className="our-story">Our Story</h1>
          <p className="p1">
            <p className="p1">
              Hi, I'm Bahar Lawter! I always have been a health-conscious person
              who loves reading new researched papers and blogs about health. I
              enjoy living a healthy lifestyle and practice intermittent fasting
              as a part of my wellness journey. As someone passionate about
              health and technology, I decided to build a new app called Healthy
              Lifestyle App. This app has great features including a blogs page
              where you can read the latest health research, purchase
              recommended books straight from the website, and use an AI
              assistant where you can enter a prompt, and get fast answers to
              your health-curious questions. You can also leave comments on
              posts to build a supportive community.
            </p>
          </p>
          <h1>Our Goal</h1>
          <p>
            My mission is to guide you toward a sustainable and joyful lifestyle
            one small step at a time. I believe that real change happens through
            consistency, and constantly educating yourself. Whether you're
            quitting your sugar, or training intermmittent fasting, I'm here to
            celebrate every victory, big or small. By blending expert insights
            with AI assistance, and a supportive community, I want to help you
            build—and stick with—habits that last a lifetime.
          </p>
        </div>
        <img
          className="about-image"
          src="https://images.unsplash.com/photo-1702234844718-5f4f77a93baa?q=80&w=2344&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="about me page"
        />
      </main>
    </div>
  );
}
export default About;
