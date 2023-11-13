import React from "react";
import { useState } from "react";
import Container from "common/components/UI/Container";
import Heading from "common/components/Heading";
import Text from "common/components/Text";
import Input from "common/components/Input";
import Button from "common/components/Button";
import Section, {
  BannerContentWrapper,
  BannerContent,
  Subscribe,
  Figure,
} from "./banner.style";
import dashboard from "common/assets/image/webAppCreative/dashboard.png";
import envelope from "common/assets/image/webAppCreative/icons/envelope.svg";
import fodista from "utils/fodista";

const Banner = () => {
  const [phone, setPhone] = useState("");
  const [subscribed, setIsSubscribed] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const handleChange = (event) => {
    setPhone(event);
  };
  const handleSubmit = async () => {
    setIsLoading(true);
    try {
      const response = await fetch(`/api?phone=${phone}`);

      if (response.ok) {
        setIsSubscribed(true);
      } else {
        setIsSubscribed(false);
      }
    } catch (error) {
      setIsSubscribed(false);
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <Section id="home">
      <Container width="1400px">
        <BannerContentWrapper>
          <BannerContent>
            <Heading
              className="animate__animated animate__fadeInUp"
              content="Empowering Restaurants, Simplifying Success Using AI"
            />
            <Text
              className="animate__animated animate__fadeInUp"
              content="We believe in providing the resources and support necessary to unlock the full potential of every restaurant, enabling them to thrive in a competitive industry."
            />
            <Subscribe className="animate__animated animate__fadeInUp">
              <Input
                inputType="text"
                placeholder="Your phone"
                iconPosition="left"
                aria-label="phone"
                onChange={handleChange}
                icon={<img src={envelope?.src} alt="envelope" />}
              />
              <Button
                title={
                  isLoading
                    ? "Loading..."
                    : subscribed
                    ? "Done, Thanks!"
                    : "Get a demo"
                }
                type="submit"
                disabled={subscribed === true}
                onClick={handleSubmit}
              />
            </Subscribe>
          </BannerContent>
          <Figure className="animate__animated animate__fadeInUp animate__fast">
            <img src={dashboard?.src} alt="dashboard" />
          </Figure>
        </BannerContentWrapper>
      </Container>
    </Section>
  );
};

export default Banner;
