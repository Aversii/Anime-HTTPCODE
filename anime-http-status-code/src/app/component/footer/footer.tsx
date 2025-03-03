import { Github, Mail, Linkedin, MessageCircle } from "lucide-react";
import {
  FooterContainer,
  InfoData,
  MediaContainer,
  NameSpan,
  SocialIcon,
  TextFooter,
} from "./styles";
import {
  FaGithub,
  FaLinkedin,
  FaWhatsapp,
  FaWhatsappSquare,
} from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa6";

const Footer = () => {
  return (
    <FooterContainer>
      <MediaContainer>
        <SocialIcon href="https://github.com/aversii" target="_blank">
          <FaGithub size={36} />
        </SocialIcon>
        <SocialIcon href="mailto:lucasaversi@gmail.com">
          <Mail size={36} />
        </SocialIcon>
        <SocialIcon
          href="https://www.linkedin.com/in/lucas-aversi-18997a22a/"
          target="_blank"
        >
          <FaLinkedinIn size={36} />
        </SocialIcon>
        <SocialIcon href="https://wa.me/+5511944470975" target="_blank">
          <FaWhatsapp size={36} />
        </SocialIcon>
      </MediaContainer>
      <InfoData>
        <TextFooter>
          DESENVOLVIDO POR <NameSpan> LA</NameSpan>versi
        </TextFooter>
      </InfoData>
    </FooterContainer>
  );
};

export default Footer;
