import React from "react";
import Banner from "./Banner";
import QueryCollection from "./QueryCollection";
import TopQueries from "./TopQueries";
import TopContriButors from "./TopContriButors";
import BlogSection from "./BlogSection";
import OfferSection from "./OfferSection";
import NewsletterSection from "./NewsletterSection";

const Home = () => {
  return (
    <div>
      <div className="glass-banner">
        <Banner></Banner>
      </div>
      <div className="lg:mt-16 mt-14">
        <div className="">
          <QueryCollection></QueryCollection>
        </div>

        <div className="lg:mt-16 mt-14">
          <TopQueries></TopQueries>
        </div>
        <div className="lg:mt-16 mt-8">
          <TopContriButors></TopContriButors>
        </div>
        <div className="lg:mt-16 mt-14">
          <BlogSection></BlogSection>
        </div>
        {/* <OfferSection></OfferSection> */}
        <div className="lg:px-0 px-3">
          <NewsletterSection></NewsletterSection>
        </div>
      </div>
    </div>
  );
};

export default Home;
