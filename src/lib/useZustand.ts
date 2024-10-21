import { useState, useEffect } from "react";

export const useZustand = <T, F>(store: (callback?: (state: T) => unknown) => unknown, callback?: (state: T) => F) => {
  type Result = unknown extends F ? T : F;
  const result = store(callback) as Result;
  const [data, setData] = useState<Result>();

  useEffect(() => {
    setData(result);
  }, [result]);

  return data;
};
