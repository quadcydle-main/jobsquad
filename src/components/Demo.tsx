'use client';
import React from "react";
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
      <VerticalTimeline layout="1-column" animate={false} lineColor="rgb(57, 117, 234)">
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
          icon={<FaCircle />} // Remove icon if not needed
        >
          <div className="flex flex-col md:flex-row">
            <div className="w-full md:w-1/2 md:mr-4 mb-4 md:mb-0" style={{ alignSelf: "flex-start" }}>
              <h2 className="font-semibold capitalize">Add extension to chrome</h2>
              <p className="!mt-1 !font-normal text-gray-700 dark:text-white/75">
                1. Open the JOBSquad Extension page.
              </p>
              <p className="!mt-1 !font-normal text-gray-700 dark:text-white/75">
                2. Click on Add to Chrome
              </p>
              <p className="!mt-1 !font-normal text-gray-700 dark:text-white/75">
                3. A pop-up will appear. Click on Add extension
              </p>
            </div>
            <div className="w-full md:w-1/2 text-right">
              <img
                src="../img/expvid/atc.gif" // Example path to GIF
                alt="GIF"
                className="max-w-full max-h-full rounded-lg"
              />
            </div>
          </div>
        </VerticalTimelineElement>

        {/* Experience 2 */}
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
          icon={<FaCircle />} // Remove icon if not needed
        >
          <div className="flex flex-col md:flex-row">
            <div className="w-full md:w-1/2 md:mr-4 mb-4 md:mb-0" style={{ alignSelf: "flex-start" }}>
              <h2 className="font-semibold capitalize">Pin the extension</h2>
              <p className="!mt-1 !font-normal text-gray-700 dark:text-white/75">
                1. On the top right corner of the browser click on extensions.
              </p>
              <p className="!mt-1 !font-normal text-gray-700 dark:text-white/75">
                2. Pin JOBSquad extension to the top by clicking on pin.
              </p>
            </div>
            <div className="w-full md:w-1/2 text-right">
              <img
                src="../img/expvid/pe.gif" // Example path to GIF
                alt="GIF"
                className="max-w-full max-h-full rounded-lg"
              />
            </div>
          </div>
        </VerticalTimelineElement>

        {/* Experience 3 */}
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
          icon={<FaCircle />} // Remove icon if not needed
        >
          <div className="flex flex-col md:flex-row">
            <div className="w-full md:w-1/2 md:mr-4 mb-4 md:mb-0" style={{ alignSelf: "flex-start" }}>
              <h2 className="font-semibold capitalize">Sign in with LinkedIn</h2>
              <p className="!mt-1 !font-normal text-gray-700 dark:text-white/75">
                1. On the top right corner of the browser click on extensions.
              </p>
              <p className="!mt-1 !font-normal text-gray-700 dark:text-white/75">
                2. Click on the Job Squad Extension
              </p>
              <p className="!mt-1 !font-normal text-gray-700 dark:text-white/75">
                3. Click on Open Dashboard.
              </p>
              <p className="!mt-1 !font-normal text-gray-700 dark:text-white/75">
                4. Click on Login with LinkedIn.
              </p>
            </div>
            <div className="w-full md:w-1/2 text-right">
              <img
                src="../img/expvid/l.gif" // Example path to GIF
                alt="GIF"
                className="max-w-full max-h-full rounded-lg"
              />
            </div>
          </div>
        </VerticalTimelineElement>

        {/* Experience 4 */}
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
          icon={<FaCircle />} // Remove icon if not needed
        >
          <div className="flex flex-col md:flex-row">
            <div className="w-full md:w-1/2 md:mr-4 mb-4 md:mb-0" style={{ alignSelf: "flex-start" }}>
              <h2 className="font-semibold capitalize">Create your Application</h2>
              <p className="!mt-1 !font-normal text-gray-700 dark:text-white/75">
                1. Start your Job Application Process by clicking on CREATE APPLICATION on the menu on the left.
              </p>
              <p className="!mt-1 !font-normal text-gray-700 dark:text-white/75">
                2. Fill the Job Application form, Upload your resume, and click on Submit button on the bottom.
              </p>
              <p className="!mt-1 !font-normal text-gray-700 dark:text-white/75">
                3. Click on Close button.
              </p>
            </div>
            <div className="w-full md:w-1/2 text-right">
              <img
                src="../img/expvid/ca.gif" // Example path to GIF
                alt="GIF"
                className="max-w-full max-h-full rounded-lg"
              />
            </div>
          </div>
        </VerticalTimelineElement>

        {/* Experience 5 */}
        <VerticalTimelineElement
          contentStyle={{
            background: "transparent",
            boxShadow: "none",
            textAlign: "left",
            padding: "0rem 1rem md:0rem 2rem",
          }}
          iconStyle={{
            background: "rgba(255, 255, 255, 0.9)",
            color: "rgb(57, 117, 234)",
            fontSize: "4rem",
          }}
          icon={<FaCircle />} // Remove icon if not needed
        >
          <div className="flex flex-col md:flex-row">
            <div className="w-full md:w-1/2 md:mr-4 mb-4 md:mb-0" style={{ alignSelf: "flex-start" }}>
              <h2 className="font-semibold capitalize">Start Applying</h2>
              <p className="!mt-1 !font-normal text-gray-700 dark:text-white/75">
                1. On the Start Applying page click on SELECT button under your card to select it.
              </p>
              <p className="!mt-1 !font-normal text-gray-700 dark:text-white/75">
                2. Click Close to close the pop up after your card is selected.
              </p>
              <p className="!mt-1 !font-normal text-gray-700 dark:text-white/75">
                3. Start Applying by clicking on START APPLYING WITH APPLICATION ID,
              </p>
            </div>
            <div className="w-full md:w-1/2 text-right">
              <img
                src="../img/expvid/sa.gif" // Example path to GIF
                alt="GIF"
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
