import React, { useEffect, useRef } from "react";

function RenderRtchText(props: PropsType) {
  const ali = useRef<HTMLDivElement | null>(null);
  useEffect(() => {
    if (ali?.current) {
      ali.current.innerHTML = props.rtchText;
    }
  });
  return <div ref={ali}></div>;
}

export default RenderRtchText;

type PropsType = {
  rtchText: string;
};
