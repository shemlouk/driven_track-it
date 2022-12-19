import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

export default function ProgressBar({ name, percentage }) {
  return (
    <CircularProgressbar
      value={percentage}
      text={name}
      background
      backgroundPadding={6}
      styles={buildStyles({
        backgroundColor: "#52B6FF",
        textColor: "#ffffff",
        pathColor: "#ffffff",
        trailColor: "transparent",
      })}
    />
  );
}
