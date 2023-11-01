import { HighChartsStock } from "./HighChartsStock";
// import { ReactLogoSVG } from "./ReactLogoSVG";

export const MainComp = () => {
  return  (<>
    <HighChartsStock />
    <svg><rect width="400" height="100" style={{fill:'green',strokeWidth:3,stroke:'white'}}/></svg>
  </>)
}