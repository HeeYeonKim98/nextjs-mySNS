import { useCallback, useState } from "react";

const useToggle = (initalValue) => {
  const [data, setData] = useState(initalValue);

  return [data, useCallback(() => setData((toggle) => !toggle))];
};

export default useToggle;
