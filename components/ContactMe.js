export default function ContactMe() {
  return (
    <>
      <h1>Reach out to me!</h1>

      <div className="reach-out-card-right col-md-4">
        <img className="profile-photo" src="/assets/profile-photo/photo-me.png" alt="Profile" />
      </div>

      <div className="reach-out-card-left col-md-8">
        <p className="blog-subtitle">DISCUSS A PROJECT OR JUST WANT TO SAY HI? MY INBOX IS OPEN FOR ALL.</p>
        <h4>"Software Developer | Still Finding 💭 "</h4>
        <p>
          I currently work for a company as a frontend developer on ecommerce projects and I'm following 3 courses on
          udemy: React native, Nextjs framework, nodejs.
        </p>
        <svg viewBox="-0.5 -2 20 19" version="1.1" width="22" height="16" aria-hidden="true" stroke="currentColor">
          <path
            fillRule="evenodd"
            d="M6 0C2.69 0 0 2.5 0 5.5 0 10.02 6 16 6 16s6-5.98 6-10.5C12 2.5 9.31 0 6 0zm0 14.55C4.14 12.52 1 8.44 1 5.5 1 3.02 3.25 1 6 1c1.34 0 2.61.48 3.56 1.36.92.86 1.44 1.97 1.44 3.14 0 2.94-3.14 7.02-5 9.05zM8 5.5c0 1.11-.89 2-2 2-1.11 0-2-.89-2-2 0-1.11.89-2 2-2 1.11 0 2 .89 2 2z"
          ></path>
        </svg>
        Bologna, Italy

        <div className="social-media-div col-sm-12">
          <a className="social-media-icons" href="https://github.com/jojoCan94" target="_blank" rel="noopener noreferrer">
            <img src="/assets/svg/github.png" alt="github" />
          </a>
          <a
            className="social-media-icons"
            href="https://www.linkedin.com/in/jonathancannizzaro/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="/assets/svg/linkedin.png" alt="linkedin" />
          </a>

          <a className="social-media-icons" href="mailto:jojo.can.94@gmail.com" target="_blank" rel="noopener noreferrer">
            <img src="/assets/svg/email.png" alt="mail" />
          </a>
        </div>
      </div>
    </>
  );
}
