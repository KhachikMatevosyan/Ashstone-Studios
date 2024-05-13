import "./Navigation.css";

const Navigation = () => {
  return (
    <>
      <div className="nav">
        <div className="menuItem">
          <div>Demos</div>
          <div className="path"></div>
        </div>
        <div className="menuItem dropdown">
          <div>Post</div>
          <div className="path"></div>
          <div className="subMenu">
            <div className="subMenuItem">
              <div>Post Header</div>
              <div className="right"></div>
            </div>
            <div className="subMenuItem">
              <div>Post Layout</div>
              <div className="right"></div>
            </div>
            <div className="subMenuItem">
              <div>Share Buttons</div>
              <div className="right"></div>
            </div>
            <div className="subMenuItem">
              <div>Gallery Post</div>
              <div className="right"></div>
            </div>
            <div className="subMenuItem end">
              <div>Video Post</div>
              <div className="right"></div>
            </div>
          </div>
        </div>
        <div className="menuItem">
          <div>Features</div>
          <div className="path"></div>
        </div>
        <div className="menuItem">
          <div>Categories</div>
          <div className="path"></div>
        </div>
        <div className="menuItem">
          <div>Shop</div>
          <div className="path"></div>
        </div>
        <div className="menuItem">
          <div>Buy Now</div>
        </div>
      </div>
    </>
  );
};

export default Navigation;
