import React from "react";
import styled from "styled-components";
import aboutImg from '../assets/hero-bcg.jpeg'
import PageHero from "../components/PageHero";
const About = () => {
  return (
    <main>
      <PageHero title='about' />
      <Wrapper className="page section section-center">
        <img src={aboutImg} alt="nice desk" />
        <article>
          <div className="title">
            <h2>our story</h2>
            <div className="underline"></div>
          </div>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Dignissimos corporis illo, delectus rem, tempore quisquam a ducimus
            placeat voluptas ratione aliquam labore ipsa autem tempora tenetur
            officia. Inventore, neque. Reiciendis, quisquam ad. Soluta fuga
            blanditiis mollitia at ab enim quisquam.
          </p>
        </article>
      </Wrapper>
    </main>
  );
};
const Wrapper = styled.section`
  display: grid;
  gap: 4rem;
  img {
    width: 100%;
    display: block;
    border-radius: var(--radius);
    height: 500px;
    object-fit: cover;
  }
  p {
    line-height: 2;
    max-width: 45em;
    margin: 0 auto;
    margin-top: 2rem;
    color: var(--clr-grey-5);
  }
  .title {
    text-align: left;
  }
  .underline {
    margin-left: 0;
  }
  @media (min-width: 992px) {
    grid-template-columns: 1fr 1fr;
  }
`
export default About;
