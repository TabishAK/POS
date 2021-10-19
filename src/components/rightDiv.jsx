import React, { useState } from "react";
import "../CSS/rightDiv.css";
import CategoryDrawer from "../components/Drawer/categoryDrawer";
import BrandDrawer from "../components/Drawer/brandDrawer";
import FeatureDrawer from "../components/Drawer/featureDrawer";
import "../components/Drawer/card.css";
import Collapse from "../components/Collapse/ForceInitialAnimation";

const RightDiv = () => {
  const [catgegoryData] = useState([
    {
      id: 1,
      name: "demo-1",
      image: "https://img.icons8.com/cotton/2x/small-axe.png",
    },
    {
      id: 2,
      name: "demo-2",
      image: "https://image.flaticon.com/icons/png/512/18/18609.png",
    },
    {
      id: 3,
      name: "demo-3",
      image:
        "https://png.pngtree.com/element_our/20190530/ourmid/pngtree-correct-icon-image_1267804.jpg",
    },
  ]);
  const [brandData] = useState([
    {
      id: 1,
      name: "demo-1",
      image:
        "https://img.flaticon.com/icons/png/512/126/126472.png?size=1200x630f&pad=10,10,10,10&ext=png&bg=FFFFFFFF",
    },
    {
      id: 2,
      name: "demo-2",
      image:
        "https://img.favpng.com/6/15/21/black-white-computer-icons-icon-design-png-favpng-6hWnwhUDLXiMcVXM5HGeiYFKG.jpg",
    },
  ]);
  const [featureData] = useState([
    {
      id: 1,
      name: "demo-1",
      image:
        "https://www.vippng.com/png/detail/1-10288_free-icons-png-transparent-website-icon-small.png",
    },
    {
      id: 2,
      name: "demo-2",
      image:
        "https://cdn2.iconfinder.com/data/icons/picol-vector/32/view-512.png",
    },
    {
      id: 3,
      name: "demo-3",
      image:
        "https://www.pinclipart.com/picdir/middle/422-4226211_idea-clipart-eureka-weather-png-icons-transparent-png.png",
    },
    {
      id: 3,
      name: "demo-4",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7pmhmGk5QDqFEfSonO1YefwwlGoydauu0-A&usqp=CAU",
    },
  ]);
  const [selectedData, setSelectedData] = useState([]);
  const handleData = (data) => {
    setSelectedData([...selectedData, data]);
  };
  return (
    <React.Fragment>
      <div className="container background ml-3 mt-2">
        <div className="rightDiv-Item-1">
          <CategoryDrawer
            catgegoryData={catgegoryData}
            handleData={handleData}
          />
          <BrandDrawer brandData={brandData} handleData={handleData} />
          <FeatureDrawer featureData={featureData} handleData={handleData} />
        </div>
        {selectedData.length === 0 ? (
          <div className="No-data-div mt-4">
            <p className="mt-2">No Data Available</p>
          </div>
        ) : (
          <div className="container-fluid">
            <div className="row margin-right-2">
              {selectedData.map((data) => (
                <div className="category-card-mainboard col-sm-4">
                  <img src={data.image} alt="our-product" />
                  <p>{data.name}</p>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      <div>
        <Collapse />
      </div>
    </React.Fragment>
  );
};

export default RightDiv;
