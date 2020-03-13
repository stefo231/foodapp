import axios from "axios";

export default axios.create({
  baseURL: "https://api.yelp.com/v3/businesses",
  headers: {
    Authorization:
      "Bearer IcJvG0Go4Vfvn3T0SABlcAtLnVk-1XV7dA_jzhAA6MXekO-1Csfne2asNkK_vz1f8Qjn4L24CIk3WKqHsWCortAJFRQx9TpjsyLy2ghrvYwLBUfpJlOeuzfVs_JrXnYx"
  }
});
