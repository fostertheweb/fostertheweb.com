import { useEffect, useState } from "preact/hooks";

export default function MostRecentCommit({ owner, repo }) {
  const [mostRecentCommit, setMostRecentCommit] = useState({
    sha: "",
    url: "",
  });

  useEffect(async () => {
    const apiUrl = `https://api.github.com/repos/${owner}/${repo}/commits/main`;
    const response = await fetch(apiUrl, {
      headers: {
        Accept: "application/vnd.github.v3+json",
      },
    });
    const data = await response.json();
    const { sha, html_url: url } = data;

    setMostRecentCommit({ sha, url });
  }, [owner, repo]);

  return mostRecentCommit.sha && mostRecentCommit.url ? (
    <span>
      Last Commit:{" "}
      <a
        href={mostRecentCommit.url}
        class="underline dark:hover:text-squirrel-500"
      >
        {mostRecentCommit.sha.slice(0, 16)}
      </a>
    </span>
  ) : null;
}
