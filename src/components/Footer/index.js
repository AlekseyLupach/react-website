import React from "react";
import { animateScroll as scroll } from "react-scroll";
import {
  FaFacebook,
  FaInstagram,
  FaYoutube,
  FaTwitter,
  FaLinkedin,
} from "react-icons/fa";
import {
  FooterContainer,
  FooterWrap,
  FooterLinksContainer,
  FooterLinksWrapper,
  FooterLinkItems,
  FooterLinkTitle,
  FooterLink,
  SocialMedia,
  SocialMediaWrap,
  SocialLogo,
  WebsiteRights,
  SocialIcons,
  SocialIconLink,
} from "./FooterElements";
const Footer = () => {
  const toggleHome = () => {
    scroll.scrollToTop();
  };

  return (
    <FooterContainer>
      <FooterWrap>
        <FooterLinksContainer>
          <FooterLinksWrapper>
            <FooterLinkItems>
              <FooterLinkTitle>О нас</FooterLinkTitle>
              <FooterLink to="/signin">Как это работает</FooterLink>
              <FooterLink to="/signin">Отзывы</FooterLink>
              <FooterLink to="/signin">Карьера</FooterLink>
              <FooterLink to="/signin">Инвесторам</FooterLink>
              <FooterLink to="/signin">Условия обслуживания</FooterLink>
            </FooterLinkItems>

            <FooterLinkItems>
              <FooterLinkTitle>Связаться с нами</FooterLinkTitle>
              <FooterLink to="/signin">Контакты</FooterLink>
              <FooterLink to="/signin">Служба поддержки</FooterLink>
              <FooterLink to="/signin">Местоположение</FooterLink>
              <FooterLink to="/signin">Спонсорство</FooterLink>
            </FooterLinkItems>
          </FooterLinksWrapper>

          <FooterLinksWrapper>
            <FooterLinkItems>
              <FooterLinkTitle>Видео</FooterLinkTitle>
              <FooterLink to="/signin">Отправить видео</FooterLink>
              <FooterLink to="/signin">Амбасадор</FooterLink>
              <FooterLink to="/signin">Агентство</FooterLink>
              <FooterLink to="/signin">Влияние</FooterLink>
            </FooterLinkItems>

            <FooterLinkItems>
              <FooterLinkTitle>Социальные сети</FooterLinkTitle>
              <FooterLink to="/signin">Instagramm</FooterLink>
              <FooterLink to="/signin">Facebook</FooterLink>
              <FooterLink to="/signin">Youtube</FooterLink>
              <FooterLink to="/signin">Twitter</FooterLink>
            </FooterLinkItems>
          </FooterLinksWrapper>
        </FooterLinksContainer>
        <SocialMedia>
          <SocialMediaWrap>
            <SocialLogo to="/" onClick={toggleHome}>
              cubbl
            </SocialLogo>
            <WebsiteRights>
              cubbl © {new Date().getFullYear()} Все права защищены.
            </WebsiteRights>
            <SocialIcons>
              <SocialIconLink href="/" target="_blank" aria-label="Facebook">
                <FaFacebook />
              </SocialIconLink>
              <SocialIconLink href="/" target="_blank" aria-label="Instagram">
                <FaInstagram />
              </SocialIconLink>
              <SocialIconLink href="/" target="_blank" aria-label="Youtube">
                <FaYoutube />
              </SocialIconLink>
              <SocialIconLink href="/" target="_blank" aria-label="Twitter">
                <FaTwitter />
              </SocialIconLink>
              <SocialIconLink href="/" target="_blank" aria-label="Linkedin">
                <FaLinkedin />
              </SocialIconLink>
            </SocialIcons>
          </SocialMediaWrap>
        </SocialMedia>
      </FooterWrap>
    </FooterContainer>
  );
};

export default Footer;
