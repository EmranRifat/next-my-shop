import _ from "lodash";

export const paginate = (data, pageNumber, pageSize) => {
    const startIndex = (pageNumber - 1) * pageSize;
    return data?.slice(startIndex, startIndex + pageSize);
  };