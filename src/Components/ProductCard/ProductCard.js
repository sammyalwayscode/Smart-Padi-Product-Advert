import React from "react";
import "./ProductCard.css";
// import CompLogo from "../Img/cokeLo.png";
// import CompAd from "../Img/coke.jpg";
import { app } from "../Base/Base";

const GetBase = app.firestore().collection("Product Ad");
function ProductCard() {
  const [getProductFiles, setGetProductFiles] = React.useState([]);

  const GettingBase = async () => {
    await GetBase.onSnapshot((snapshot) => {
      const GetBaseFiles = [];
      snapshot.forEach((doc) => {
        GetBaseFiles.push({ ...doc.data(), id: doc.id });
      });
      setGetProductFiles(GetBaseFiles);
    });
  };

  React.useState(() => {
    GettingBase();
  }, []);

  return (
    <div>
      {getProductFiles.map(
        ({ id, companyName, productDiscription, AdvertImage, ProductLogo }) => (
          <div className="MainProductCard">
            <img src={AdvertImage} alt="" className="CompanyAdDiv" />
            <div className="SubProductCard">
              <div className="CompanyLogoName">
                <img src={ProductLogo} alt="" className="CompanyLogoDiv" />
                <div className="CompanyNameDiv"> {companyName} </div>
              </div>
              <div className="ShortDiscriptionDiv">{productDiscription}</div>
            </div>
          </div>
        )
      )}
    </div>
  );
}

export default ProductCard;
