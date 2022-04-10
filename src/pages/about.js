import * as React from 'react'
import { StaticImage } from "gatsby-plugin-image"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import Seo from "../components/seo"

const AboutPage = ({ data, location }) => {
    const siteTitle = data.site.siteMetadata.title
    return (
        <Layout location={location} title={siteTitle}>
            <Seo title="About me" />
            <StaticImage
                className="aboutme-pic"
                layout="fixed"
                formats={["auto", "webp", "avif"]}
                src="../images/profile-pic.jpg"
                width={630}
                height={500}
                quality={95}
                alt="Profile picture"
            />
            <p>
                Hi, I'm <b>John</b>.
                <br />
                I am from and live in Louisiana.
                <br />
                I work as a Mechanical Engineer, Product Owner, and Business Lead for {' '}<a href="http://intralox.com">Intralox</a>.
                <br />
                I have been married to my wife Danielle since 2012 and we have three beautiful children, Roselynn, Maxwell and Atlas.
            </p>
            <p>
                I have always had an interest in technology.  When I was 10 or 11, I frequented a site called {' '}<a href="http://www.byond.com/">BYOND</a> which 
                is a platform for making your own video games. I created several games there and made some long lasting memories.  
                I fell in love with programming and it has never left me.
            </p>
            <p>
                Later on in life, I was naturally going to pursue software development as a career but decided to 
                instead try out Engineering Physics at {' '}%<a href="https://sse.tulane.edu/">Tulane University</a>, and I ended up loving it too.
                Throughout my engineering career, I've gotten the chance to use various programming languages 
                including MATLAB, Mathematica, and Python which has brought me the best of both worlds. 
            </p>
            <p>
                For whatever reason, I never really got into web development much despite dabbling in it for a little bit in the days of MySpace and Xanga.  
                A few years ago, an opportunity at work lead me to my Product Owner position, where I work with a team of software developers 
                and the business to create <a href="http://calclab.intralox.com">Intralox's CalcLab</a>, a web-based engineering 
                calculation platform for our engineers and our customers.
            </p>
            <p>
                Seeing the team create an amazing, useful piece of software has reignited my desire to broaden my programming horizon, and this adventure
                 I have chosen to learn a bit of React with GatsbyJS--and that's why this blog exists.
            </p>
        </Layout>
    )
}

export default AboutPage

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`