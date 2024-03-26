import { ModelContext } from "../contexts/ModelContext";
import { IModel } from "../interfaces/model.interface";
import { useContext } from "react";

const useModel = () => {
  const useModel: IModel = useContext(ModelContext);

  return useModel;
};

export default useModel;
