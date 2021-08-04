import React, { useState } from "react";
import useContent from "../custom-hooks/useContent";
import HeaderWrapper from "../components/Header/HeaderWrapper";
import NavBar from "../components/Header/NavBar";
import Logo from "../components/Header/Logo";
import FeatureWrapper from "../components/Header/FeatureWrapper";
import FeatureTitle from "../components/Header/FeatureTitle";
import FeatureSubTitle from "../components/Header/FeatureSubTitle";
import PlayButton from "../components/Header/PlayButton";
import HeaderLink from "../components/Header/HeaderLink";
import AllSlidesWrapper from "../components/Movies/AllSlidesWrapper";
import SlideWrapper from "../components/Movies/SlideWrapper";
import SlideTitle from "../components/Movies/SlideTitle";
import AllCardsWrapper from "../components/Movies/AllCardsWrapper";
import CardWrapper from "../components/Movies/CardWrapper";
import CardImage from "../components/Movies/CardImage";
import CardTitle from "../components/Movies/CardTitle";
import CardDescription from "../components/Movies/CardDescription";
import CardFeatureWrapper from "../components/Movies/CardFeatureWrapper";
import CardFeatureClose from "../components/Movies/CardFeatureClose";
import PlayerVideo from "../components/Movies/PlayerVideo";
import PlayerOverlay from "../components/Movies/PlayerOverlay";
import FooterCompound from "../compounds/FooterCompound";

function BrowsePage() {
  let { family } = useContent("family");
  family = [
    {
      title: "Toronto",
      data: family.filter((item) => item.genre === "toronto"),
    },
    {
      title: "Eastbourne",
      data: family.filter((item) => item.genre === "eastbourne"),
    },
  ];

  let { messages } = useContent("messages");
  messages = [
    { title: "Canada", data: messages.filter((item) => item.genre === "canada") },
    {
      title: "Eastbourne",
      data: messages.filter((item) => item.genre === "eastbourne"),
    },
    {
      title: "London",
      data: messages.filter((item) => item.genre === "london"),
    },
  ];

  const [category, setCategory] = useState("messages");
  const currentCategory = category === "messages" ? messages : family;
  const [showCardFeature, setShowCardFeature] = useState(false);
  const [activeItem, setActiveItem] = useState(false);
  const [showPlayer, setShowPlayer] = useState(false);

  return (
    <>
      <HeaderWrapper className="header-wrapper-browse">
        <NavBar className="navbar-browse">
          <Logo />
          <HeaderLink
            className={
              category === "messages" ? "header-link-bold" : "header-link"
            }
            onClick={() => setCategory("messages")}
          >
            Messages
          </HeaderLink>
        </NavBar>
        <FeatureWrapper>
          <FeatureTitle className="feature-title-browse">
            Happy 30th Birthday Sara
          </FeatureTitle>
          <FeatureSubTitle className="feature-subtitle-browse">
            Happy Birthday to the caring, beautiful and amazing person you are. Enjoy all the messages
            people have sent in. Mayy all your dreams turn into reality and have an amazing day. Happy birthday to one of the sweetest people I’ve ever known.
            My finacée, my love, my Sara. Richard x
          </FeatureSubTitle>
          <PlayButton onClick={() => setShowPlayer(true)}>Play</PlayButton>
          {showPlayer ? (
            <PlayerOverlay onClick={() => setShowPlayer(false)}>
              <PlayerVideo src="./videos/video.mp4" type="video/mp4" />
            </PlayerOverlay>
          ) : null}
        </FeatureWrapper>
      </HeaderWrapper>

      <AllSlidesWrapper>
        {currentCategory.map((slideItem) => (
          <SlideWrapper key={`${category}-${slideItem.title.toLowerCase()}`}>
            <SlideTitle>{slideItem.title}</SlideTitle>
            <AllCardsWrapper>
              {slideItem.data.map((cardItem) => (
                <CardWrapper key={cardItem.docId}>
                  <CardImage
                    onClick={() => {
                      setShowCardFeature(true);
                      setActiveItem(cardItem);
                    }}
                    src={`../images/${category}/${cardItem.genre}/${cardItem.slug}/small.jpg`}
                  />
                </CardWrapper>
              ))}
            </AllCardsWrapper>
            {showCardFeature &&
            slideItem.title.toLowerCase() === activeItem.genre ? (
              <div className="backdrop">
                <CardFeatureWrapper
                  style={{
                    backgroundImage: `url(../images/${category}/${activeItem.genre}/${activeItem.slug}/large.jpg)`,
                  }}
                >
                  <CardTitle>{activeItem.title}</CardTitle>
                  <CardDescription>{activeItem.description}</CardDescription>
                  <CardFeatureClose onClick={() => setShowCardFeature(false)} />
                  <PlayButton onClick={() => setShowPlayer(true)}>
                    Play
                  </PlayButton>
                  {showPlayer ? (
                    <PlayerOverlay onClick={() => setShowPlayer(false)}>
                      <PlayerVideo src={`../videos/${category}/${activeItem.genre}/${activeItem.slug}/video.mp4`} type="video/mp4" />
                    </PlayerOverlay>
                  ) : null}
                </CardFeatureWrapper>
              </div>
            ) : null}
          </SlideWrapper>
        ))}
      </AllSlidesWrapper>
      <FooterCompound />
    </>
  );
}

export default BrowsePage;
