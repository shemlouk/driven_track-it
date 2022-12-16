import { ThreeDots } from "react-loader-spinner";

export default function LoadingSubmit() {
  return (
    <ThreeDots
      height="40"
      width="40"
      radius="9"
      color="white"
      ariaLabel="three-dots-loading"
      wrapperStyle={{}}
      wrapperClassName=""
      visible={true}
    />
  );
}
