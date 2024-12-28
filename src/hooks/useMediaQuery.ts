// import { useState, useEffect } from "react";

// const useMediaQuery = (query: string) => {
//   const [matches, setMatches] = useState(false);

//   useEffect(() => {
//     const media = window.matchMedia(query);
//     if (media.matches !== matches) {
//       setMatches(media.matches);
//     }
//     const listener = () => setMatches(media.matches);
//     window.addEventListener("resize", listener);
//     return () => window.removeEventListener("resize", listener);
//   }, [matches, query]);

//   return matches;
// };

// export default useMediaQuery;

import { useState, useEffect } from "react";

const useMediaQuery = (query: string) => {
  const [matches, setMatches] = useState(
    () => window.matchMedia(query).matches,
  );

  useEffect(() => {
    const media = window.matchMedia(query);
    const updateMatch = () => setMatches(media.matches);

    // Initial check
    updateMatch();

    // Add listener
    media.addEventListener("change", updateMatch);

    // Cleanup
    return () => media.removeEventListener("change", updateMatch);
  }, [query]);

  return matches;
};

export default useMediaQuery;
