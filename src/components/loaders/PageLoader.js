import { MutatingDots } from "react-loader-spinner";

export default function PageLoader() {
  return (
    <MutatingDots
      height="100"
      width="100"
      color="var(--theme-blue-light)"
      secondaryColor="var(--theme-blue-light)"
      radius="12"
      ariaLabel="mutating-dots-loading"
      wrapperStyle={{}}
      wrapperClass=""
      visible={true}
    />
  );
}
