import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";
import { variantsOpacity } from "../variants";
import { TypeAnimation } from "react-type-animation";

const Event = () => {
  return (
    <div class="main_sec1">
      <div class="sec1title">
        <motion.div
          whileInView="onscreen"
          initial="offscreen"
          variants={variantsOpacity}
          custom={0.5}
        >
          <TypeAnimation
            style={{
              display: "block",
            }}
            sequence={[`KTMF PASS NFT\nDRAW EVENT`, 100]}
            wrapper="h3"
            cursor={true}
            repeat={Infinity}
          />
        </motion.div>
        {/* <h3>
          KTMF PASS NFT <br />
          DRAW EVENT
        </h3> */}
        <div class="baro">
          <Link href="/event">Get started!</Link>
        </div>
      </div>
      <div class="potext-1 t-n">
        <ul class="text_ani">
          <li>get your whitelist</li>
          <li>get your whitelist</li>
          <li>get your whitelist</li>
          <li>get your whitelist</li>
          <li>get your whitelist</li>
          <li>get your whitelist</li>
          <li>get your whitelist</li>
        </ul>
      </div>
      <div class="potext-2 t-n">
        <ul class="text_ani">
          <li>get your whitelist</li>
          <li>get your whitelist</li>
          <li>get your whitelist</li>
          <li>get your whitelist</li>
          <li>get your whitelist</li>
          <li>get your whitelist</li>
          <li>get your whitelist</li>
        </ul>
      </div>
      {/* <!-- POINT IMG --> */}
      <motion.div
        whileInView="onscreen"
        initial="offscreen"
        variants={variantsOpacity}
        custom={0.5}
      >
        <img class="secpo1 p-1" src="/img/main/mainsec1.png" alt="" />
      </motion.div>
      <motion.div
        whileInView="onscreen"
        initial="offscreen"
        variants={variantsOpacity}
        custom={1}
      >
        <img class="secpo2 p-1" src="/img/main/mainsec1.png" alt="" />
      </motion.div>
      <motion.div
        whileInView="onscreen"
        initial="offscreen"
        variants={variantsOpacity}
        custom={1.5}
      >
        <img class="secpo3 p-1" src="/img/main/mainsec1.png" alt="" />
      </motion.div>
      <motion.div
        className="item"
        whileInView="onscreen"
        initial="offscreen"
        variants={variantsOpacity}
        custom={0.5}
      >
        <div>
          <img class="secpo4 p-2" src="/img/main/NFT_TICKET.png" alt="" />
          <img class="secpo5 p-2" src="/img/main/NFT_TICKET.png" alt="" />
        </div>
      </motion.div>
    </div>
  );
};

export default Event;
