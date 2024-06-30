import React from "react";
import Image from "next/image";
import { Container } from "@/components/Container";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { FaCircle } from "react-icons/fa";

export const Demo = () => {
  return (
    <Container className="flex flex-col items-center justify-center">
      <VerticalTimeline layout="1-column" animate={false} lineColor="blue">
        {/* Experience 1 */}
        <VerticalTimelineElement
          contentStyle={{
            background: "transparent",
            boxShadow: "none",
            textAlign: "left",
            padding: "0rem 1rem md:0rem 2rem",
          }}
          iconStyle={{
            background: "rgba(255, 255, 255, 1)",
            color: "rgb(57, 117, 234)",
            fontSize: "4rem",
          }}
          contentArrowStyle={{
            display: "none",
            color: "transparent",
          }}
          icon={<FaCircle />} // Remove icon if not needed
        >
          <div className="flex flex-col md:flex-row">
            <div className="w-full md:w-1/2 md:mr-4 mb-4 mr-10 md:mb-0" style={{ alignSelf: "flex-start" }}>
              <h2 className="font-semibold capitalize">Add extension to chrome</h2>
              <p className="!mt-1 !font-normal text-gray-700 ">
                1. Open the JOBSquad Extension page.
              </p>
              <p className="!mt-1 !font-normal text-gray-700 ">
                2. Click on Add to Chrome
              </p>
              <p className="!mt-1 !font-normal text-gray-700 ">
                3. A pop-up will appear. Click on Add extension
              </p>
            </div>
            <div className="w-full md:w-1/2 text-right">
              <Image
                src="../img/expvid/atc.gif" 
                alt="Adding extension to Chrome"
                className="max-w-full max-h-full rounded-lg"
              />
            </div>
          </div>
        </VerticalTimelineElement>

        {/* Add more VerticalTimelineElements for additional experiences */}
        
      </VerticalTimeline>
    </Container>
  );
};
