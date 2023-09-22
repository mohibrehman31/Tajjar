import axiosApi from "src/utils/axios";
import routes, { api_versions } from "src/constants/ApiRoutes";

export function getProfileData() {
  const mainURL = `http://localhost:1337${api_versions}${routes?.profile}`;
  const url = mainURL;
  let data,
    error,
    loading = true;
  axiosApi
    .get(url)
    .then((d) => {
      data = d?.data?.data?.attributes;
      loading = false;
    })
    .catch((e) => {
      error = e;
      loading = false;
    });
  console.log("loading,", loading, data, error);
  return { loading, data, error };
}
