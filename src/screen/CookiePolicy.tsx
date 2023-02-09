import React from "react";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  pageHeading: {
    fontSize: "48px",
    color: "#012653",
  },
  pageSubHeading: {
    fontSize: "24px",
    color: "#012653",
  },
}));

const CookiePolicy = () => {
  const classes = useStyles();

  return (
    <div
      className="content-body-div"
      style={{ display: "block", padding: "50px 150px" }}
    >
      <p className={classes.pageHeading}>Cookie Policy</p>
      <p>
        This Cookie Policy explains what are cookies, types of cookies, how the
        cookies are categorized and an identifiable individual’s (“your”) rights
        to control Techsophy’s (“our”, “Techsophy”) use of them.
      </p>

      <span className={classes.pageSubHeading}>What are Cookies</span>
      <p>
        A cookie is a piece of information that webserver sends to an
        identifiable individual’s (“your”) computer (browser file) when a
        website is accessed. It contains information about your visit to
        Techsophy’s (“our”, “Techsophy”) web page, as well as any other
        information you have volunteered for. It helps to provide additional
        functionality to the site and analyse site usage more accurately.
        Cookies can gather information about your website usage or enable the
        website to recognize you as an existing customer when you return to our
        website at a later date.
      </p>

      <span className={classes.pageSubHeading}>Types of Cookies</span>
      <p>
        Here's a list of the main types of cookies we use, and what we use them
        for.
      </p>

      <span className={classes.pageSubHeading}>1a. Session cookie:</span>
      <p>
        Session cookies remains as long as a browsing session is active and are
        intended to avoid user inconvenience during browsing. These cookies
        allow websites to link the actions of a user during a browser session
        and expire at the end of the browsing session. Session cookies also
        assist the user in navigating the website, and allow the user to access
        secure parts of the webpage when logged in.
      </p>

      <span className={classes.pageSubHeading}>1b. Persistent Cookie:</span>
      <p>
        Persistent cookies are stored on a user’s device even after termination
        of a browsing session. It helps in recalling the preferences or actions
        of the user. Persistent cookies are used for a variety of purposes such
        as retaining the visitor’s language and regional preference(s) at the
        end of each browsing session. It is also used to carry out a behavioral
        analysis in order to enhance user experience and convenience, also to
        provide targeted and relevant content to visitors.
      </p>

      <span className={classes.pageSubHeading}>1c. Third Party Cookies:</span>
      <p>
        Third-party cookies are cookies that are set by a website other than the
        current active site. These cookies are generated if the website has some
        content of a third party site or if a user clicks on the Third party
        links provided by the current active website or if the user uses their
        third party website’s credentials to log In to the current active
        website.
      </p>
      <p>
        For detailed information on Privacy and Cookie Policy of Third party
        organization, please look into the respective policies at their official
        sites.
      </p>

      <span className={classes.pageSubHeading}>2. Cookie Category</span>
      <p>
        Cookies are categorized into below based on their purpose and
        functionality under Cookie Settings in cookie banner
      </p>

      <span className={classes.pageSubHeading}>
        2a. Strictly Necessary Cookies:
      </span>
      <p>
        These cookies are necessary for the website to function and cannot be
        switched off in our systems. They are usually only set in response to
        actions made by you which amount to a request for services, such as
        setting your privacy preferences, logging in or filling in forms. You
        can set your browser to block or alert you about these cookies, but then
        some parts of the site will not work. These cookies do not store any
        personally identifiable information.
      </p>

      <span className={classes.pageSubHeading}>2b. Targeting Cookies:</span>
      <p>
        These cookies may be set through our site by our advertising partners.
        They may be used by those companies to build a profile of your interests
        and show you relevant adverts on other sites. They do not directly store
        personal information but, are based on uniquely identifying your browser
        and internet device. If you do not allow these cookies, you will
        experience less targeted advertising.
      </p>

      <span className={classes.pageSubHeading}>2c. Performance Cookies:</span>
      <p>
        These cookies allow us to count visits and traffic sources, so we can
        measure and improve the performance of our site. They help us know which
        pages are the most and least popular and see how visitors move around
        the site. All information these cookies collect is aggregated and
        therefore anonymous. If you do not allow these cookies, we will not know
        when you have visited our site.
      </p>

      <span className={classes.pageSubHeading}>Your Choices and Rights</span>
      <p>
        There are ways you can control and manage cookies on your device. Please
        remember that any setting changed by you will apply to all websites you
        visit unless you choose to block cookies from any particular site.
      </p>
      <p>
        You will have below controls on cookies generated by our site through
        Cookie Settings as below:
        <br />
        Opt-In/ Opt-Out for some cookies categories. View list of cookies
        generated by the website under each category. Access the website even if
        you Opt-Out of all cookies.
      </p>
      <p>
        Thus, you can control your cookie choices using above or system/browser
        settings as below:
        <br />
        See what cookies you've got and delete them on an individual basis.
        Block third party cookies Block cookies from particular site Block all
        cookies from being set Delete all cookies when you close your browser
      </p>

      <span className={classes.pageSubHeading}>
        Updates to this Cookie Policy
      </span>
      <p>
        This Cookie Policy may be updated periodically. We will encourage you to
        check for changes to this Cookie Policy occasionally on some occasions,
        we may also actively advise you of specific data handling activities or
        significant changes to this Cookie Policy, as required by the applicable
        law.
      </p>

      <span className={classes.pageSubHeading}>Contact us</span>
      <p>
        If you have any question about this Cookies Policy or wish to contact us
        for any reason in relation to our personal data processing, please
        contact us at :{" "}
        <a href="mailto:legal@techsophy.com" className="mail-link">
          legal@techsophy.com
        </a>
      </p>
    </div>
  );
};

export default CookiePolicy;
