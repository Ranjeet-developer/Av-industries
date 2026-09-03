import React from "react";
import Image from "next/image";
// import {
//   BannerSection,
//   BannerContainer,
//   BannerContent,
//   Badge,
//   BannerTitle,
//   Highlight,
//   BannerDescription,
//   ButtonWrapper,
//   QuoteButton,
//   ProductsButton,
//   BannerImage,
// } from "./Banner.styles";
import { BannerSection,BannerContainer,BannerContent,Badge,BannerTitle,Highlight,BannerDescription,ButtonWrapper,QuoteButton,ProductsButton,BannerImage, } from "./Banner.style";

export default function Banner() {
  return (
    <BannerSection>
      <BannerContainer>

        {/* LEFT CONTENT */}
        <BannerContent>
          <Badge>
            MADE BY AV INDUSTRIES • BULK ORDERS • WHOLESALE
          </Badge>

          <BannerTitle>
            Quality Products.
            <Highlight>Smarter Sourcing.</Highlight>
          </BannerTitle>

          <BannerDescription>
            Connect with trusted manufacturers and discover premium wholesale
            products at competitive prices. Enjoy flexible MOQs, reliable
            suppliers, and fast global shipping with AV-Industries.
          </BannerDescription>

          <ButtonWrapper>
            <QuoteButton>
              Request a Quote
            </QuoteButton>

            <ProductsButton>
              Explore Products
            </ProductsButton>
          </ButtonWrapper>
        </BannerContent>

        {/* RIGHT IMAGE */}
        <BannerImage>
          <Image
            src="/assets/banner3.png"
            alt="Premium products"
            width={700}
            height={500}
            priority
          />
        </BannerImage>

      </BannerContainer>
    </BannerSection>
  );
}