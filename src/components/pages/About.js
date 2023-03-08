import "./About.css";

function About() {
  return (
    <div className="about-box">
      <h1 className="about-title">About</h1>
      <p>
        Welcome to Code Friends, the social networking site designed exclusively
        for developers! Our mission is to facilitate connections between
        developers from around the globe, fostering enduring relationships based
        on shared interests and experiences. Here's a quick guide on how to
        utilize our website:
      </p>
      <p>
        To create a post, simply click on the "Create Post" link located in the
        navigation bar. From there, you can customize your post by providing a
        title, image, and description. Your name and the creation date will be
        marked on the post. Once you hit the submit button, you will receive a
        final confirmation message before being redirected to the homepage. Your
        new post will appear at the top of the screen.
      </p>
      <p>
        We have made the website as user-friendly as possible. On the "Home"
        page, you can browse all posts created by other users. By clicking on a
        post, you can view the full description, comments, and give it a thumbs
        up if you find the content appealing.
      </p>
      <p>
        Other users can comment on your post, which will be marked with their
        name and the creation date. New comments will appear at the top of the
        list.
      </p>
      <p>
        You can easily return to the homepage by clicking the "X" button located
        at the top right of the post title. If you no longer want your post to
        be available, you can delete it permanently with the delete button (be
        aware that a warning message will pop up if you are not completely
        sure). Comments can also be deleted in the same way.
      </p>
      <p>
        While we are planning to add authentication features, such as the
        ability to log in and out and a separate section for your profile, we
        hope you enjoy our website in its current form!
      </p>
    </div>
  );
}

export default About;
