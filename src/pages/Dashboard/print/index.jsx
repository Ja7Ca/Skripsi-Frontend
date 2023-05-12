import React from "react";
import { PDFViewer, Document, Page, Font } from "@react-pdf/renderer";
import { main } from "./tables/table-style";

import interThin from "../../../assets/font/Inter/Inter-Thin.ttf";
import interExtraLight from "../../../assets/font/Inter/Inter-ExtraLight.ttf";
import interLight from "../../../assets/font/Inter/Inter-Light.ttf";
import interRegular from "../../../assets/font/Inter/Inter-Regular.ttf";
import interMedium from "../../../assets/font/Inter/Inter-Medium.ttf";
import interSemiBold from "../../../assets/font/Inter/Inter-SemiBold.ttf";
import interBold from "../../../assets/font/Inter/Inter-Bold.ttf";
import interExtraBold from "../../../assets/font/Inter/Inter-ExtraBold.ttf";
import interBlack from "../../../assets/font/Inter/Inter-Black.ttf";

import { Pages1 } from "./tables/pages-1";
import { Pages2 } from "./tables/pages-2";
import { Pages3 } from "./tables/pages-3";
import { Pages4 } from "./tables/pages-4";
import { Pages5 } from "./tables/pages-5";
import { Pages6 } from "./tables/pages-6";
import { Cover } from "./tables/cover";

export default function Print() {
  Font.register({
    family: "Inter",
    fonts: [
      { src: interThin, fontWeight: 100 },
      { src: interExtraLight, fontWeight: 200 },
      { src: interLight, fontWeight: 300 },
      { src: interRegular },
      { src: interMedium, fontWeight: 500 },
      { src: interSemiBold, fontWeight: 600 },
      { src: interBold, fontWeight: 700 },
      { src: interExtraBold, fontWeight: 800 },
      { src: interBlack, fontWeight: 900 },
    ],
  });

  Font.registerHyphenationCallback((word) => {
    // Return entire word as unique part
    return [word];
  });
  return (
    <div
      style={{
        height: "72vh",
      }}
    >
      <PDFViewer width="100%" height="100%">
        <Document>
          <Page size="A4" style={main.body}>
            <Cover />
            <Pages1 />
            <Pages2 />
            <Pages3 />
            <Pages4 />
            <Pages5 />
            <Pages6 />
          </Page>
        </Document>
      </PDFViewer>
    </div>
  );
}
