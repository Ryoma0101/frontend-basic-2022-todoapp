import styled from "styled-components";
import React from "react";
import COLOR from "../../variables/color"; // color.jsのCOLOR定数をインポート fromの中身はvariables/color.jsへの相対パス
import TEXT from "../../variables/texts"; // text.jsのTEXT定数をインポート
import FONTFAMILY from "../../variables/font_family"; // fontFamily.jsのFONTFAMILY定数をインポート
import BREAKPOINT from "../../variables/breakpoint";
/* styled-componentの定義 文字色にGREEN、背景色にLIGHT_BLACK、テキストのサイズはMを指定 */
// const StyledExample = styled.div`
//   color: ${COLOR.GREEN};
//   background: ${COLOR.LIGHT_BLACK};
//   ${TEXT.M}
// `;

export const Title = () => {
  return <StyledText>SIMPLE TODO APP</StyledText>;
}

const StyledText = styled.div`
  color: ${COLOR.WHITE};
  ${TEXT.L};
  font-family: ${FONTFAMILY.ROBOTO};
  @media (max-width: ${BREAKPOINT.MEDIUM}) {
    ${TEXT.M};
    font-family: ${FONTFAMILY.NOTO_SANS};
  };
`;
