import styles from "./Card.module.css";
import { useEffect, useState } from "react";
import { createApi } from "unsplash-js";

const api = createApi({
  // Don't forget to set your access token here!
  // See https://unsplash.com/developers
  accessKey: "M1dsgksncu-N8pjPvgshjGXU6tRjhWjpqIfD28rtyg0",
});

const Avatar = () => {
  const [data, setPhotosResponse] = useState(null);

  useEffect(() => {
    api.photos
      .getRandom({})
      .then((result) => {
        setPhotosResponse(result);
      })
      .catch(() => {
        console.log("something went wrong!");
      });
  }, []);

  if (!data) {
    return null;
  }

  return <img className={styles.avatar} src={data.response.urls.regular} />;
};

export default Avatar;
