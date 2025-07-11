import { config } from "process";

export default ({ env }) => ({
  upload: {
    config: {
      provider: 'cloudinary',
      providerOptions: {
        cloud_name: env('ddyacw0tk'),
        api_key: env('358166127228376'),
        api_secret: env('ciFRTuCuROOiYCula_0VMxQlyNA'),
      },
    },
  },
});