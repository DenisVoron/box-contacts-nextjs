import React, { FC } from "react";
import ContentLoader from "react-content-loader";

const MyLoader = (): React.JSX.Element => (
  <ContentLoader
    rtl
    speed={2}
    width={700}
    height={700}
    viewBox="0 0 700 700"
    backgroundColor="#d4b9b9"
    foregroundColor="#ca57cb"
  >
    <rect x="109" y="63" rx="3" ry="3" width="463" height="12" />
    <rect x="109" y="86" rx="3" ry="3" width="463" height="13" />
    <rect x="110" y="113" rx="3" ry="3" width="463" height="13" />
    <rect x="111" y="141" rx="3" ry="3" width="463" height="13" />
    <rect x="111" y="171" rx="3" ry="3" width="463" height="13" />
    <rect x="111" y="200" rx="3" ry="3" width="463" height="13" />
    <rect x="110" y="231" rx="3" ry="3" width="463" height="13" />
    <rect x="110" y="263" rx="3" ry="3" width="463" height="13" />
    <rect x="111" y="293" rx="3" ry="3" width="463" height="13" />
    <rect x="111" y="325" rx="3" ry="3" width="463" height="13" />
    <rect x="113" y="480" rx="3" ry="3" width="463" height="13" />
    <rect x="114" y="358" rx="3" ry="3" width="463" height="13" />
    <rect x="113" y="392" rx="3" ry="3" width="463" height="13" />
    <rect x="113" y="422" rx="3" ry="3" width="463" height="13" />
    <rect x="112" y="450" rx="3" ry="3" width="463" height="13" />
    <rect x="111" y="511" rx="3" ry="3" width="463" height="13" />
    <rect x="110" y="542" rx="3" ry="3" width="463" height="13" />
    <rect x="110" y="571" rx="3" ry="3" width="463" height="13" />
    <rect x="111" y="597" rx="3" ry="3" width="463" height="13" />
    <rect x="112" y="626" rx="3" ry="3" width="463" height="13" />
    <rect x="112" y="654" rx="3" ry="3" width="463" height="13" />
  </ContentLoader>
);

const Loading: FC = (): React.JSX.Element => {
  return (
    <div>
      <MyLoader />
    </div>
  );
};

export default Loading;
