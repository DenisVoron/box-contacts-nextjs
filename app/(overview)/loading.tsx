import React from "react";
import ContentLoader from "react-content-loader";

const MyLoader = (): React.JSX.Element => (
  <ContentLoader
    rtl
    speed={2}
    width={900}
    height={460}
    viewBox="0 0 700 460"
    backgroundColor="#e19ee6"
    foregroundColor="#ca57cb"
  >
    <rect x="148" y="190" rx="2" ry="2" width="156" height="28" />
    <circle cx="149" cy="252" r="15" />
    <circle cx="202" cy="252" r="15" />
    <circle cx="301" cy="252" r="15" />
    <circle cx="251" cy="252" r="14" />
  </ContentLoader>
);

const Loading = (): React.JSX.Element => {
  return (
    <div>
      <MyLoader />
    </div>
  );
};

export default Loading;
