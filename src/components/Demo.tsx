'use client';
import React from "react";
import { Container } from "@/components/Container";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

export const Demo = () => {
  return (
    <Container>
      <VerticalTimeline layout="1-column" animate={false} lineColor="blue">
        {/* Experience 1 */}
        <VerticalTimelineElement
          contentStyle={{
            background: "rgba(255, 255, 255, 0.5)",
            boxShadow: "none",
            textAlign: "left",
            padding: "1.3rem 2rem",
          }}
          contentArrowStyle={{
            borderRight: "0.4rem solid rgba(255, 255, 255, 0.5)",
          }}
          icon={<></>} // Remove icon if not needed
        >
          <div style={{ display: "flex", alignItems: "center" }}>
            <div style={{ width: "50%", marginRight: "1rem" }}>
              <h2 className="font-semibold capitalize">Add extension to chrome</h2>
              <p className="!mt-1 !font-normal text-gray-700 dark:text-white/75">
                1. Open the JOBSquad Extension page.
              </p>
              <p className="!mt-1 !font-normal text-gray-700 dark:text-white/75">
                2. Click on Add to Chromez
              </p>
              <p className="!mt-1 !font-normal text-gray-700 dark:text-white/75">
                3. A pop-up will appear. Click on Add extensionz
              </p>
            </div>
            <div style={{ width: "50%", textAlign: "right" }}>
              <img
                src="../img/expvid/atc.gif" // Example path to GIF
                alt="GIF"
                style={{ maxWidth: "100%", maxHeight: "100%", borderRadius: "2rem" }}
              />
            </div>
          </div>
        </VerticalTimelineElement>

        {/* Experience 2 */}
        <VerticalTimelineElement
          contentStyle={{
            background: "rgba(255, 255, 255, 0.5)",
            boxShadow: "none",
            textAlign: "left",
            padding: "1.3rem 2rem",
          }}
          contentArrowStyle={{
            borderRight: "0.4rem solid rgba(255, 255, 255, 0.5)",
          }}
          icon={<></>} // Remove icon if not needed
        >
          <div style={{ display: "flex", alignItems: "center" }}>
            <div style={{ width: "50%", marginRight: "1rem" }}>
              <h2 className="font-semibold capitalize">Pin the extension</h2>
              <p className="!mt-1 !font-normal text-gray-700 dark:text-white/75">
                1. On the top right corner of the browser click on extensions.
              </p>
              <p className="!mt-1 !font-normal text-gray-700 dark:text-white/75">
                2. Pin JOBSquad extension to the top by clicking on pin.
              </p>
            </div>
            <div style={{ width: "50%", textAlign: "right" }}>
              <img
                src="../img/expvid/pe.gif" // Example path to GIF
                alt="GIF"
                style={{ maxWidth: "100%", maxHeight: "100%", borderRadius: "2rem" }}
              />
            </div>
          </div>
        </VerticalTimelineElement>

        {/* Experience 3 */}
        <VerticalTimelineElement
          contentStyle={{
            background: "rgba(255, 255, 255, 0.5)",
            boxShadow: "none",
            textAlign: "left",
            padding: "1.3rem 2rem",
          }}
          contentArrowStyle={{
            borderRight: "0.4rem solid rgba(255, 255, 255, 0.5)",
          }}
          icon={<></>} // Remove icon if not needed
        >
          <div style={{ display: "flex", alignItems: "center" }}>
            <div style={{ width: "50%", marginRight: "1rem" }}>
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
            <div style={{ width: "50%", textAlign: "right" }}>
              <img
                src="../img/expvid/l.gif" // Example path to GIF
                alt="GIF"
                style={{ maxWidth: "100%", maxHeight: "100%", borderRadius: "2rem" }}
              />
            </div>
          </div>
        </VerticalTimelineElement>

        {/* Experience 4 */}
        <VerticalTimelineElement
          contentStyle={{
            background: "rgba(255, 255, 255, 0.5)",
            boxShadow: "none",
            textAlign: "left",
            padding: "1.3rem 2rem",
          }}
          contentArrowStyle={{
            borderRight: "0.4rem solid rgba(255, 255, 255, 0.5)",
          }}
          icon={<></>} // Remove icon if not needed
        >
          <div style={{ display: "flex", alignItems: "center" }}>
            <div style={{ width: "50%", marginRight: "1rem" }}>
              <h2 className="font-semibold capitalize">Create your Application</h2>
              <p className="!mt-1 !font-normal text-gray-700 dark:text-white/75">
                1. Start your Job Application Process by clicking on CREATE APPPLICATION on the menu on the left.
              </p>
              <p className="!mt-1 !font-normal text-gray-700 dark:text-white/75">
                2. Fill the Job Application form, Upload your resume, and click on Submit button on the bottom.
              </p>
              <p className="!mt-1 !font-normal text-gray-700 dark:text-white/75">
                3. Click on Close button.
              </p>
            </div>
            <div style={{ width: "50%", textAlign: "right" }}>
              <img
                src="../img/expvid/ca.gif" // Example path to GIF
                alt="GIF"
                style={{ maxWidth: "100%", maxHeight: "100%", borderRadius: "2rem" }}
              />
            </div>
          </div>
        </VerticalTimelineElement>

        {/* Experience 5 */}
        <VerticalTimelineElement
          contentStyle={{
            background: "rgba(255, 255, 255, 0.5)",
            boxShadow: "none",
            textAlign: "left",
            padding: "1.3rem 2rem",
          }}
          contentArrowStyle={{
            borderRight: "0.4rem solid rgba(255, 255, 255, 0.5)",
          }}
          icon={<></>} // Remove icon if not needed
        >
          <div style={{ display: "flex", alignItems: "center" }}>
            <div style={{ width: "50%", marginRight: "1rem" }}>
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
            <div style={{ width: "50%", textAlign: "right" }}>
              <img
                src="../img/expvid/sa.gif" // Example path to GIF
                alt="GIF"
                style={{ maxWidth: "100%", maxHeight: "100%", borderRadius: "2rem" }}
              />
            </div>
          </div>
        </VerticalTimelineElement>

        {/* Add more VerticalTimelineElements for additional experiences */}
      </VerticalTimeline>
    </Container>
  );
};
