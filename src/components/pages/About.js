import "./About.css";

function About() {
  return (
    <div className="about-box">
      <h1 className="about-title">About</h1>
      <p>
        Welcome to Code Friends, the social networking site for developers! Our
        mission is to connect developers from around the world and help them
        build lasting relationships based on their shared interests and
        experiences. Here's how to use the website:
      </p>
      <p>
        By clicking on the "Create Post" link in the navigation bar, you can
        immediately jump in and create your own post, by providing a title,
        image and description of your choice. The post will also be marked with
        your name and the date it was created. Once you confirm the details with
        the submit button (you will receive a final confirmation message before
        being returned to the home page), you will immediately be taken to the
        home page where the new post will appear at the top of the screen.
      </p>
      <p>
        We have taken extra care to make the site as user-friendly as possible.
        In the "Home" page you will be able view all the posts. By clicking on a
        post, you will immediately be taken to a more detailed version, where
        you can read the full description and comments, as well as give the post
        a thumbs up if the content appeals to you.
      </p>
      <p>
        Other users will be able to comment on the post, which will be marked
        with the name of the author and date of creation. The new comment will
        appear at the top of the list.
      </p>
      <p>
        You can easily return to the home page by clicking the cross at the top
        right of the post title. If you are not a fan of the content you can
        permanently delete it with the delete button (you will receive a warning
        message in case you are not 100% sure). Comments can also be deleted in
        the same way.
      </p>
      <p>
        While we do intend on implementing authentication elements to the
        website, including the ability to log in and out, as well as a separate
        section for your own profile, we hope you enjoy the site in its current
        form!
      </p>
    </div>
  );
}

export default About;
