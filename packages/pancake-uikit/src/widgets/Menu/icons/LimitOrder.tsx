import React from "react";
import Svg from "../../../components/Svg/Svg";
import { SvgProps } from "../../../components/Svg/types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg viewBox="0 0 64 64" {...props}>
      <path d="m9 27h2v5h-2z"/><path d="m21 17h2v5h-2z"/><path d="m33 33h2v5h-2z"/><path d="m45 33h2v5h-2z"/><path d="m57 17h2v5h-2z"/><path d="m59 61v-19h-2v19h-10v-3h-2v3h-10v-3h-2v3h-10v-19h-2v19h-10v-9h-2v9h-6v-60h-2v61c0 .553.448 1 1 1h61v-2z"/><path d="m7 33h6v18h-6z"/><path d="m31 39h6v18h-6z"/><path d="m19 23h6v18h-6z"/><path d="m43 39h6v18h-6z"/><path d="m55 23h6v18h-6z"/><path d="m40 23c5.514 0 10-4.486 10-10s-4.486-10-10-10-10 4.486-10 10 4.486 10 10 10zm-5-5h1v-10h-1v-2h2v-2h2v2h1v-2h2v2.142c1.72.447 3 2 3 3.858 0 1.2-.542 2.266-1.382 3 .84.734 1.382 1.8 1.382 3 0 1.858-1.28 3.411-3 3.858v2.142h-2v-2h-1v2h-2v-2h-2z"/><path d="m43 10c0-1.103-.897-2-2-2h-3v4h3c1.103 0 2-.897 2-2z"/><path d="m43 16c0-1.103-.897-2-2-2h-3v4h3c1.103 0 2-.897 2-2z"/>
    </Svg>
  );
};

export default Icon;
