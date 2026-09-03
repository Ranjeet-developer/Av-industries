import styled from "styled-components";

export const BannerSection = styled.section`
  width: 100%;
  background: #ffffff;
  overflow: hidden;
`;

export const BannerContainer = styled.div`
  max-width: 1440px;
  min-height: 545px;
  margin: 0 auto;

  padding: 40px 20px;

  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 1000px) {
    padding: 50px 30px;
  }

  @media (max-width: 768px) {
    min-height: auto;
    flex-direction: column;
    padding: 40px 20px;
  }
`;

export const BannerContent = styled.div`
  width: 50%;
  max-width: 650px;
  z-index: 2;

  @media (max-width: 768px) {
    width: 100%;
    max-width: 100%;
  }
`;

export const Badge = styled.div`
  display: inline-block;

  border: 1px solid #222;
  border-radius: 10px;

  padding: 8px 13px;

  font-size: 14px;
  font-weight: 400;
  letter-spacing: 0.5px;

  color: #172b3a;

  margin-bottom: 28px;

  @media (max-width: 768px) {
    font-size: 12px;
    margin-bottom: 20px;
  }
`;

export const BannerTitle = styled.h1`
  margin: 0;

  font-size: 58px;
  line-height: 1.08;
  font-weight: 700;

  color: #222222;
  letter-spacing: -1.5px;

  @media (max-width: 1000px) {
    font-size: 46px;
  }

  @media (max-width: 768px) {
    font-size: 42px;
  }

  @media (max-width: 480px) {
    font-size: 36px;
  }
`;

export const Highlight = styled.span`
  display: block;
  color: #d39b2c;
`;

export const BannerDescription = styled.p`
  max-width: 620px;

  margin-top: 28px;
  margin-bottom: 35px;

  font-size: 17px;
  line-height: 1.55;

  color: #173047;

  @media (max-width: 768px) {
    font-size: 16px;
    margin-top: 22px;
  }
`;

export const ButtonWrapper = styled.div`
  display: flex;
  gap: 20px;
  align-items: center;

  @media (max-width: 768px) {
    flex-wrap: wrap;
    gap: 12px;
  }

  @media (max-width: 480px) {
    flex-direction: column;
    align-items: stretch;
  }
`;

export const QuoteButton = styled.button`
  height: 46px;
  padding: 0 30px;

  border: none;
  border-radius: 5px;

  background: #d39b2c;
  color: #ffffff;

  font-size: 16px;
  font-weight: 600;

  cursor: pointer;

  transition: all 0.3s ease;

  &:hover {
    background: #b98320;
    transform: translateY(-2px);
    box-shadow: 0 6px 15px rgba(0, 0, 0, 0.15);
  }

  @media (max-width: 480px) {
    width: 100%;
  }
`;

export const ProductsButton = styled.button`
  height: 46px;
  padding: 0 30px;

  border: none;
  border-radius: 5px;

  background: #003b39;
  color: #ffffff;

  font-size: 16px;
  font-weight: 600;

  cursor: pointer;

  transition: all 0.3s ease;

  &:hover {
    background: #002c2a;
    transform: translateY(-2px);
    box-shadow: 0 6px 15px rgba(0, 0, 0, 0.15);
  }

  @media (max-width: 480px) {
    width: 100%;
  }
`;

export const BannerImage = styled.div`
  width: 50%;

  display: flex;
  justify-content: flex-end;
  align-items: center;

  img {
    width: 100%;
    max-width: 700px;
    height: auto;
    object-fit: contain;
  }

  @media (max-width: 1000px) {
    width: 45%;
  }

  @media (max-width: 768px) {
    width: 100%;
    justify-content: center;
    margin-top: 40px;

    img {
      max-width: 600px;
    }
  }
`;