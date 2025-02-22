
import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { ArrowBackIosNewOutlined, ArrowForwardIosOutlined } from "@mui/icons-material";
import './form.css'

const ImageGallery = () => {
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  const images = [
    {
      src: "./images/client1.png",
      name: "Aman Kaushik",
      experience: "à¤¬à¤¹à¥à¤¤ à¤…à¤šà¥à¤›à¥€ à¤ªà¤¹à¤² à¤¹à¥ˆ à¤‡à¤¸ à¤•à¤¾à¤°à¤£ à¤¹à¥€ à¤¸à¤¹à¥€ à¤¹à¤° à¤¸à¤¨à¤¾à¤¤à¤¨à¥€ à¤§à¤°à¥à¤® à¤•à¥‹ à¤®à¤¾à¤¨à¤¨à¥‡ à¤µà¤¾à¤²à¥‡ à¤…à¤ªà¤¨à¥‡ à¤§à¤°à¥à¤® à¤•à¥‡ à¤¬à¤¾à¤°à¥‡ à¤®à¥‡à¤‚ à¤ªà¤¤à¤¾ à¤¹à¥‹à¤—à¤¾, à¤œà¤¯ à¤¶à¥à¤°à¥€ à¤°à¤¾à¤®",
      address:
        "15/A, Krishna Apartments, M.G. Road, Koramangala, Bengaluru - 560034, Karnataka, India",
    },
    {
      src: "./images/client2.jpg",
      name: "Recipient 2",
      experience:"à´šàµ†à´±à´¿à´¯ à´¤àµà´Ÿà´•àµà´•à´®à´¾à´£àµ, à´•à´¾à´°à´£à´‚ à´¶à´°à´¿ à´“à´°àµ‹ à´¸à´¨à´¾à´¤à´¨à´¿ à´®à´¤à´µàµà´‚ à´ªà´¿à´¨àµà´¤àµà´Ÿà´°àµà´¨àµà´¨à´µàµ¼ à´¤à´™àµà´™à´³àµà´Ÿàµ† à´®à´¤à´¤àµà´¤àµ†à´•àµà´•àµà´±à´¿à´šàµà´šàµ à´…à´±à´¿à´¯àµ‡à´£àµà´Ÿà´¤àµà´£àµà´Ÿàµ, à´œà´¯ à´¶àµà´°àµ€ à´±à´¾à´‚",
      address: "Address 2",
    },
    {
      src: "./images/client3.jpg",
      name: "Recipient 3",
      experience:"à°šà°¾à°²à°¾ à°®à°‚à°šà°¿ à°†à°°à°‚à°­à°‚, à°…à°‚à°¦à±à°•à±‡ à°ªà±à°°à°¤à°¿ à°¸à°¨à°¾à°¤à°¨ à°§à°°à±à°®à°¾à°¨à±à°¨à°¿ à°…à°¨à±à°¸à°°à°¿à°‚à°šà±‡ à°µà°¾à°°à± à°¤à°® à°§à°°à±à°®à°‚ à°—à±à°°à°¿à°‚à°šà°¿ à°¤à±†à°²à±à°¸à±à°•à±‹à°µà°¾à°²à°¿, à°œà±ˆ à°¶à±à°°à±€ à°°à°¾à°‚",
      address: "Address 3",
    },
    {
      src: "./images/client1.png",
      name: "Aman Kaushik",
      experience:"à¤–à¥‚à¤ª à¤šà¤¾à¤‚à¤—à¤²à¥€ à¤¸à¥à¤°à¥à¤µà¤¾à¤¤ à¤†à¤¹à¥‡, à¤¯à¤¾à¤®à¥à¤³à¥‡à¤š à¤ªà¥à¤°à¤¤à¥à¤¯à¥‡à¤• à¤¸à¤¨à¤¾à¤¤à¤¨à¥€ à¤§à¤°à¥à¤® à¤®à¤¾à¤¨à¤£à¤¾à¤±à¥à¤¯à¤¾à¤‚à¤¨à¤¾ à¤¤à¥à¤¯à¤¾à¤‚à¤šà¥à¤¯à¤¾ à¤§à¤°à¥à¤®à¤¾à¤¬à¤¦à¥à¤¦à¤² à¤®à¤¾à¤¹à¤¿à¤¤à¥€ à¤…à¤¸à¤¾à¤¯à¤²à¤¾ à¤¹à¤µà¥€, à¤œà¤¯ à¤¶à¥à¤°à¥€à¤°à¤¾à¤®",
      address:
        "15/A, Krishna Apartments, M.G. Road, Koramangala, Bengaluru - 560034, Karnataka, India",
    },
    {
      src: "./images/client2.jpg",
      name: "Recipient 2",
      address: "Address 2",
    },
    {
      src: "./images/client3.jpg",
      name: "Recipient 3",
      experience:"à®®à®¿à®• à®šà®¿à®±à®¨à¯à®¤ à®®à¯à®¯à®±à¯à®šà®¿, à®…à®¤à®©à®¾à®²à¯ à®’à®µà¯à®µà¯Šà®°à¯ à®šà®©à®¾à®¤à®© à®¤à®°à¯à®®à®¤à¯à®¤à¯ˆà®ªà¯ à®ªà®¿à®©à¯à®ªà®±à¯à®±à¯à®µà¯‹à®°à¯à®•à¯à®•à¯à®®à¯ à®¤à®™à¯à®•à®³à¯ à®®à®¤à®¤à¯à®¤à¯ˆà®ªà¯ à®ªà®±à¯à®±à®¿ à®¤à¯†à®°à®¿à®¨à¯à®¤à®¿à®°à¯à®•à¯à®• à®µà¯‡à®£à¯à®Ÿà¯à®®à¯, à®œà¯†à®¯à¯ à®¸à¯à®°à¯€à®°à®¾à®®à¯",
      address: "Address 3",
    },
    {
      src: "./images/client1.png",
      name: "Aman Kaushik",
      experience:"à²¤à³à²‚à²¬à²¾ à²‰à²¤à³à²¤à²® à²†à²°à²‚à²­, à²‡à²¦à²°à²¿à²‚à²¦ à²ªà³à²°à²¤à²¿à²¯à³Šà²¬à³à²¬ à²¸à²¨à²¾à²¤à²¨ à²§à²°à³à²®à²µà²¨à³à²¨à³ à²…à²¨à³à²¸à²°à²¿à²¸à³à²µà²µà²°à³ à²¤à²®à³à²® à²§à²°à³à²®à²µà²¨à³à²¨à³ à²…à²°à²¿à²¤à³à²•à³Šà²³à³à²³à²¬à³‡à²•à³, à²œà²¯ à²¶à³à²°à³€ à²°à²¾à²®à³",
      address:
        "15/A, Krishna Apartments, M.G. Road, Koramangala, Bengaluru - 560034, Karnataka, India",
    },
    {
      src: "./images/client2.jpg",
      name: "Recipient 2",
      address: "Address 2",
    },
    {
      src: "./images/client3.jpg",
      name: "Recipient 3",
      address: "Address 3",
    },
    {
      src: "./images/client1.png",
      name: "Aman Kaushik",
      address:
        "15/A, Krishna Apartments, M.G. Road, Koramangala, Bengaluru - 560034, Karnataka, India",
    },
    {
      src: "./images/client2.jpg",
      name: "Recipient 2",
      address: "Address 2",
    },
    {
      src: "./images/client3.jpg",
      name: "Recipient 3",
      address: "Address 3",
    },
    {
      src: "./images/client1.png",
      name: "Aman Kaushik",
      address:
        "15/A, Krishna Apartments, M.G. Road, Koramangala, Bengaluru - 560034, Karnataka, India",
    },
    {
      src: "./images/client2.jpg",
      name: "Recipient 2",
      address: "Address 2",
    },
    {
      src: "./images/client3.jpg",
      name: "Recipient 3",
      address: "Address 3",
    },
    // Add more images here
  ];

  const handleThumbnailClick = (index) => {
    setSelectedImageIndex(index);
  };

  return (
    <div style={{ background: "rgb(243 241 241)" ,padding:"2rem"}}>
      <div className="container  p-1">
        <h3 className="text-center" style={{ margin: "1rem", color: "#fab826",fontSize:"2.5rem" }}>Testimonials</h3>
       <div style={{padding:"1.5rem",display:"flex",justifyContent:"center",alignItems:"center",background:"#f3ebe5",borderRadius:"0pc"}}>
       <img
            src={images[selectedImageIndex].src}
            alt={images[selectedImageIndex].name}
            // className="img-fluid"
            style={{
              height: "25vh",
              width: "12vw",
              objectFit: "cover",
              borderRadius:"50%"
            }}
          />
            <div
            // className="overlay position-absolute bottom-0 start-0 w-100 text-white p-3"
            style={{textAlign:"start",margin:"2rem"}}
          >
            <p>{images[selectedImageIndex].experience}</p>
            <h5 className="mb-1 mt-2" >{images[selectedImageIndex].name}</h5>
            <p className="mb-0" style={{ fontSize: "0.9rem" }}>
              {images[selectedImageIndex].address}
            </p>
          </div>
       </div>
        {/* <div className=" position-relative">
          <img
            src={images[selectedImageIndex].src}
            alt={images[selectedImageIndex].name}
            className="img-fluid"
            style={{
              height: "80vh",
              width: "100%",
              objectFit: "cover",
            }}
          />
          <div
            className="overlay position-absolute bottom-0 start-0 w-100 text-white p-3"
            style={{
              background: "rgba(0, 0, 0, 0.5)",
            }}
          >
            <p>{images[selectedImageIndex].experience}</p>
            <h5 className="mb-1">{images[selectedImageIndex].name}</h5>
            <p className="mb-0" style={{ fontSize: "0.9rem" }}>
              {images[selectedImageIndex].address}
            </p>
          </div>
        </div> */}
        {/* <div className="d-flex  align-items-center">
          <button
            className="btn btn-primary me-2"
            disabled={selectedImageIndex === 0}
            style={{ background: "#FD8C50" }}
            onClick={() => setSelectedImageIndex(selectedImageIndex - 1)}
          >
            <ArrowBackIosNewOutlined />
          </button>
          <div className="d-flex overflow-auto" style={{ scrollbarWidth: "none" }}>
            {images.map((image, index) => (
              <img
                key={index}
                src={image.src}
                alt={image.name}
                className={`img-thumbnail m-1 ${index === selectedImageIndex ? "border border-primary" : ""
                  }`}
                style={{
                  width: "80px",
                  height: "80px",
                  objectFit: "cover",
                  cursor: "pointer",
                }}
                onClick={() => handleThumbnailClick(index)}
              />
            ))}
          </div>
          <button
            className="btn  ms-2"
            style={{ background: "#FD8C50" }}
            disabled={selectedImageIndex === images.length - 1}
            onClick={() => setSelectedImageIndex(selectedImageIndex + 1)}
          >
            <ArrowForwardIosOutlined />
          </button>
        </div> */}
      </div>
    </div>
  );
};

export default ImageGallery;

