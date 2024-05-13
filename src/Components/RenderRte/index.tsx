import React, { useEffect, useRef } from "react";

function RenderRte(props: PropsType) {
  const ali = useRef<HTMLDivElement | null>(null);
  useEffect(() => {
    if (ali?.current && props.rte) {
      ali.current.innerHTML = props.rte;
    }
  });
  return <div ref={ali}></div>;
}

export default RenderRte;

type PropsType = {
  rte?: string;
};
