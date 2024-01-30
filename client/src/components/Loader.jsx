import { MutatingDots } from "react-loader-spinner";

function Loader({ color }) {
  return (
    <div>
      <MutatingDots
        visible={true}
        height="100%"
        width="100"
        color={color}
        secondaryColor="#4fa94d"
        radius="11"
        ariaLabel="mutating-dots-loading"
        wrapperStyle={{
          height: "10vh",
          display: "flex",
          "justify-content": "center",
          "align-items": "center",
        }}
        wrapperClass=""
      />
    </div>
  );
}

export default Loader;
