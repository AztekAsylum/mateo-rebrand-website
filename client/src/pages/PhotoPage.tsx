import { PhotoAlbum, RenderPhotoProps, Photo } from "react-photo-album";
import { Container, Col, Row } from "react-bootstrap";
import * as React from "react";

const Photos = () => {
  const images = [
    {
      src: "https://images.squarespace-cdn.com/content/v1/53597948e4b0b7727660b369/1602303120982-L3VNAA8Q4CAIPV3G9TKY/R1-06507-0037.JPG",
      width: 375,
      height: 556,
      alt: "",
    },
    {
      src: "https://images.squarespace-cdn.com/content/v1/53597948e4b0b7727660b369/1602302944447-EBP5PBQ6NZMC5QF6QZJS/R1-00183-0002.JPG",
      width: 823,
      height: 556,
      alt: "",
    },
    {
      src: "https://images.squarespace-cdn.com/content/v1/53597948e4b0b7727660b369/1602302987788-FRS7M0WA0A0JQOQEYOT1/R1-03429-0023.JPG",
      width: 823,
      height: 556,
    },
    {
      src: "https://images.squarespace-cdn.com/content/v1/53597948e4b0b7727660b369/1602303864120-2ENTS37HNQKK366BFONC/1011046_1011046-R2-011-4.jpg",
      width: 375,
      height: 556,
      alt: "",
    },
    {
      src: "https://images.squarespace-cdn.com/content/v1/53597948e4b0b7727660b369/1602303304335-0NT3IJ3JTNXUX74KYC3G/R1-04529-0026.JPG",
      width: 823,
      height: 556,
      alt: "",
    },
    {
      src: "https://images.squarespace-cdn.com/content/v1/53597948e4b0b7727660b369/1602303070916-YPAGFEG0MC464GD7XCRB/R1-05136-0009.JPG",
      width: 823,
      height: 556,
      alt: "",
    },
    {
      src: "https://images.squarespace-cdn.com/content/v1/53597948e4b0b7727660b369/7de02255-0ae0-4e3f-93e8-9e22570d1606/Screen+Shot+2023-02-04+at+5.44.50+PM.jpg",
      width: 768,
      height: 556,
      alt: "",
    },
  ];

  const padding = 0;
  const spacing = 18;

  const renderPhoto = React.useCallback(
    ({ imageProps: { alt, style, ...rest } }: RenderPhotoProps) => (
      <img
        alt={alt}
        style={{
          ...style,
          borderRadius: padding > 2 ? "4px" : 0,
          boxShadow:
            spacing > 0
              ? "0px 3px 3px -2px rgb(0 0 0 / 20%), 0px 3px 4px 0px rgb(0 0 0 / 14%), 0px 1px 8px 0px rgb(0 0 0 / 12%)"
              : "none",
          transition: "box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms",
        }}
        {...rest}
      />
    ),
    [spacing, padding]
  );

  const cols = (containerWidth) => {
    if (containerWidth < 400) {
      return 1;
    }
    if (containerWidth < 800) {
      return 2;
    } else {
      return 3;
    }
  };

  return (
    <Container fluid className="pt-3">
      <Row>
        <Col className="mx-auto" xs={12} lg={11}>
          <PhotoAlbum
            layout="masonry"
            photos={images}
            columns={cols}
            padding={padding}
            spacing={spacing}
            targetRowHeight={150}
            renderPhoto={renderPhoto}
          />
        </Col>
      </Row>
    </Container>
  );
};

export default Photos;
