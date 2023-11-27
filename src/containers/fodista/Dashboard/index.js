import React from "react";
import { Tab, TabList, TabPanel } from "react-tabs";
import Container from "common/components/UI/Container";
import NextImage from "common/components/NextImage";
import Text from "common/components/Text";
import Heading from "common/components/Heading";
import Section, {
  CardWrapper,
  CardInnerWrapper,
  CardDesc,
  CardTextWrapper,
  CardTitle,
  CardMain,
  CardSection,
  ImageCard,
  SectionHeading,
  ReactTabs,
} from "./dashboard.style";
import Card from "common/components/Card";

import { newDashboard } from "common/data/fodista/index.json";
// import { CardTextWrapper, CardTitle } from "./dashboard.style";
// import { CardWrapper } from "common/components/Card/card.style";

const Dashboard = () => {
  const { sectionTitle, sectionDesc, tabs } = newDashboard;
  console.log(tabs[0].content);
  console.log(tabs.content);
  return (
    <Section id="features">
      <Container width="1400px">
        <SectionHeading>
          <Heading content={sectionTitle} />
          <Text content={sectionDesc} />
        </SectionHeading>
        <ReactTabs>
          <nav>
            <TabList>
              {tabs.map((tab) => (
                <Tab key={tab.id}>{tab.title}</Tab>
              ))}
            </TabList>
          </nav>
          <CardSection>
            {tabs.map((tab) => {
              // console.log("tab", tab);
              return (
                <>
                  {/* <div>testing testing</div> */}
                  <TabPanel>
                    <figure className="animate__animated animate__fadeInUp">
                      <CardMain>
                        {tab.content.map((item) => (
                          // console.log(item);
                          <>
                            {/* <div>testing</div> */}

                            <CardWrapper>
                              <CardInnerWrapper>
                                <ImageCard>
                                  <NextImage
                                    src={item.image}
                                    alt={item.title}
                                    layout="fill"
                                  />
                                </ImageCard>
                                <CardTextWrapper>
                                  <CardTitle>{item.title}</CardTitle>
                                  <CardDesc>{item.desc}</CardDesc>
                                </CardTextWrapper>
                              </CardInnerWrapper>
                            </CardWrapper>
                          </>
                        ))}
                        ;
                      </CardMain>
                    </figure>
                  </TabPanel>
                </>
              );
            })}
          </CardSection>
        </ReactTabs>
      </Container>
    </Section>
  );
};

export default Dashboard;
