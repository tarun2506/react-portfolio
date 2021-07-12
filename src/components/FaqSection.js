import React from "react";
import styled from "styled-components";
import { About } from "../styles";
import { Toggle } from "./Toggle";
import { AnimateSharedLayout, motion } from "framer-motion";
import { answerFade } from "../animation";

const FaqSection = () => {
  return (
    <Faq>
      <h2>
        Any Questions <span>FAQ</span>
      </h2>
      <AnimateSharedLayout>
        <Toggle title="How Do I Start?">
          <motion.div variants={answerFade} className="answer">
            <p>Lorem ipsum dolor sit amet.</p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Cupiditate, quae.
            </p>
          </motion.div>
        </Toggle>
        <Toggle title="Daily Schedule?">
          <motion.div variants={answerFade} className="answer">
            <p>Lorem ipsum dolor sit amet.</p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Cupiditate, quae.
            </p>
          </motion.div>
        </Toggle>
        <Toggle title="Different Payment Methods?">
          <motion.div variants={answerFade} className="answer">
            <p>Lorem ipsum dolor sit amet.</p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Cupiditate, quae.
            </p>
          </motion.div>
        </Toggle>
        <Toggle title="What Products Do You Offer?">
          <motion.div variants={answerFade} className="answer">
            <p>Lorem ipsum dolor sit amet.</p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Cupiditate, quae.
            </p>
          </motion.div>
        </Toggle>
      </AnimateSharedLayout>
    </Faq>
  );
};

const Faq = styled(About)`
  display: block;
  span {
    display: block;
  }
  h2 {
    padding-bottom: 2rem;
    font-weight: lighter;
  }
  .faq-line {
    background: #cccccc;
    height: 0.2rem;
    margin: 2rem 0rem;
    width: 100%;
  }
  .questions {
    padding: 3rem 0rem;
    cursor: pointer;
  }
  .answer {
    padding: 2rem 0rem;
    p {
      padding: 1rem 0rem;
    }
  }
`;

export default FaqSection;
