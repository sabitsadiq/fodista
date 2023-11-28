import React, { Fragment } from "react";
import Head from "next/head";
import { ThemeProvider } from "styled-components";
import Sticky from "react-stickynode";
import { DrawerProvider } from "common/contexts/DrawerContext";
import { theme } from "common/theme/fodista";
import ResetCSS from "common/assets/css/style";
import Banner from "containers/fodista/Banner";
import Navbar from "containers/fodista/Navbar";
import Clients from "containers/fodista/Clients";
import HowItWorks from "containers/fodista/HowItWorks";
import AnalyticsTool from "containers/fodista/AnalyticsTool";
import Dashboard from "containers/fodista/Dashboard";
import Testimonials from "containers/fodista/Testimonials";
import Integrations from "containers/fodista/Integrations";
import Pricing from "containers/fodista/Pricing";
import NewsFeed from "containers/fodista/NewsFeed";
import Faq from "containers/fodista/Faq";
import CallToAction from "containers/fodista/CallToAction";
import Footer from "containers/fodista/Footer";
import {
  GlobalStyle,
  ContentWrapper,
  CombinedSection,
  CornerPattern,
} from "containers/fodista/webAppCreative.style";
import "animate.css";

const webAppCreative = () => {
  return (
    <ThemeProvider theme={theme}>
      <Fragment>
        <Head>
          <title>Empowering Restaurants, Simplifying Success Using AI</title>
          <meta name="Description" content="React next landing page" />
          <meta name="theme-color" content="#ec5555" />
          {/* Load google fonts */}
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500&family=Manrope:wght@400;500;700;800&display=swap"
          />
        </Head>

        <ResetCSS />
        <GlobalStyle />

        <ContentWrapper>
          <Sticky top={0} innerZ={9999} activeClass="sticky-nav-active">
            <DrawerProvider>
              <Navbar />
            </DrawerProvider>
          </Sticky>
          <Banner />
          {/* <Clients /> */}
          <HowItWorks />
          <AnalyticsTool />
          <Dashboard />
          <Testimonials />
          <CombinedSection>
            <Integrations />
            {/* <Pricing /> */}
            <CornerPattern />
          </CombinedSection>
          {/* <Faq /> */}
          {/* <CallToAction /> */}
          <Footer />
        </ContentWrapper>
      </Fragment>
    </ThemeProvider>
  );
};
export default webAppCreative;
