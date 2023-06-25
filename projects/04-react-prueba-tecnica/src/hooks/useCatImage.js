import { useEffect, useState } from 'react';

const CAT_PREFIX_IMAGE_URL = 'https://cataas.com';

export function useCatImage({ fact }) {
  const [imagineUrl, setImagineUrl] = useState();
  useEffect(() => {
    if (!fact) return;

    const threeFirstWord = fact.split(' ', 3).join(' ');
    console.log(threeFirstWord);

    fetch(
      `https://cataas.com/cat/says/${threeFirstWord}?size=50&color=red&json=true`
    )
      .then((res) => res.json())
      .then((response) => {
        const { url } = response;
        setImagineUrl(url);
      });
  }, [fact]);
  return { imagineUrl: `${CAT_PREFIX_IMAGE_URL}${imagineUrl}` };
}
