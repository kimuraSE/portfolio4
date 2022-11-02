import { FC, memo } from "react";
import { Footer } from "../templates/footer/Footer";
import { Header } from "../templates/header/Header";
import { Example } from "../templates/main/Example";
import { HeroSwiper } from "../templates/main/HeroSwiper";
import { Products } from "../templates/main/Products";
import { ArticleTag } from "../templates/tag/ArticleTag";
import { Container } from "../templates/tag/ContainerTag";
import { FooterTag } from "../templates/tag/FooterTag";
import { GlobalContainerTag } from "../templates/tag/GlobalContainerTag";
import { HeaderTag } from "../templates/tag/HeaderTag";
import { MainTag } from "../templates/tag/MainTag";
import { SectionTag } from "../templates/tag/SectionTag";

export const Home: FC = memo(() => {
  return (
    <>
      <GlobalContainerTag>
        <HeaderTag className="header-area">
          <Header />
        </HeaderTag>

        
        <HeroSwiper />
        

        <MainTag>
          <ArticleTag>
            <Container>
              <SectionTag className="products-area">
                <Products />
              </SectionTag>


            </Container>

            <SectionTag className="example-area">
              <Example />
            </SectionTag>

          </ArticleTag>
        </MainTag>


        
        <FooterTag className="footer-area">
          <Footer />
        </FooterTag>

      </GlobalContainerTag>
    </>
  );
});
