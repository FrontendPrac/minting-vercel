import React, { useEffect } from "react";
import { heroSlider2 } from "../utilits";

const EventSlider = () => {
  useEffect(() => {
    heroSlider2();
  }, []);

  return (
    <div
      className="frenify_cards_gallery"
      data-initial-width={400}
      data-ratio="0.925"
    >
      <ul>
        <li>
          <div className="img_holder">
            <div className="item_in">
              <div className="o_img" data-bg-img="/img/event/nft_ticket.png" />
              <img src="/img/1x1.jpg" alt="" />
            </div>
          </div>
        </li>
        <li>
          <div className="img_holder">
            <div className="item_in">
              <div className="o_img" data-bg-img="/img/event/nft_ticket.png" />
              <img src="/img/1x1.jpg" alt="" />
            </div>
          </div>
        </li>
        <li>
          <div className="img_holder">
            <div className="item_in">
              <div className="o_img" data-bg-img="/img/event/nft_ticket.png" />
              <img src="/img/1x1.jpg" alt="" />
            </div>
          </div>
        </li>
        <li>
          <div className="img_holder">
            <div className="item_in">
              <div className="o_img" data-bg-img="/img/event/nft_ticket.png" />
              <img src="/img/1x1.jpg" alt="" />
            </div>
          </div>
        </li>
        <li>
          <div className="img_holder">
            <div className="item_in">
              <div className="o_img" data-bg-img="/img/event/nft_ticket.png" />
              <img src="/img/1x1.jpg" alt="" />
            </div>
          </div>
        </li>
        <li>
          <div className="img_holder">
            <div className="item_in">
              <div className="o_img" data-bg-img="/img/event/nft_ticket.png" />
              <img src="/img/1x1.jpg" alt="" />
            </div>
          </div>
        </li>
        <li>
          <div className="img_holder">
            <div className="item_in">
              <div className="o_img" data-bg-img="/img/event/nft_ticket.png" />
              <img src="/img/1x1.jpg" alt="" />
            </div>
          </div>
        </li>
        <li>
          <div className="img_holder">
            <div className="item_in">
              <div className="o_img" data-bg-img="/img/event/nft_ticket.png" />
              <img src="/img/1x1.jpg" alt="" />
            </div>
          </div>
        </li>
        <li>
          <div className="img_holder">
            <div className="item_in">
              <div className="o_img" data-bg-img="/img/event/nft_ticket.png" />
              <img src="/img/1x1.jpg" alt="" />
            </div>
          </div>
        </li>
        <li>
          <div className="img_holder">
            <div className="item_in">
              <div className="o_img" data-bg-img="/img/event/nft_ticket.png" />
              <img src="/img/1x1.jpg" alt="" />
            </div>
          </div>
        </li>
        <li>
          <div className="img_holder">
            <div className="item_in">
              <div className="o_img" data-bg-img="/img/event/nft_ticket.png" />
              <img src="/img/1x1.jpg" alt="" />
            </div>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default EventSlider;
