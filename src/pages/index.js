import React from "react";

export default function IndexPage() {
  return (
    <div className="p-8 flex flex-col gap-2">
      <h1 className="text-3xl ftw-font-outfit font-bold">Jonathan Foster</h1>
      <div>
        Senior Software Engineer @{" "}
        <a
          href="https://www.zendesk.com/"
          className="text-green-500 hover:text-green-400"
        >
          Zendesk
        </a>
      </div>
      <h3 className="text-xl font-bold ftw-font-outfit mt-4">Projects</h3>
      <div>
        <a
          href="https://crowdq.fm"
          className="text-orange-500 hover:text-orange-400"
        >
          crowdq.fm
        </a>{" "}
        - shared play queue
      </div>
      <br />
      <div>
        come see what else i'm working on,{" "}
        <a
          href="https://github.com/fostertheweb"
          className="text-purple-500 hover:text-purple-400"
        >
          github.com/fostertheweb
        </a>
      </div>
      <h3 className="text-xl font-bold ftw-font-outfit mt-4">Other Work</h3>
      <div>
        <a
          href="https://teamtreehouse.com/library/user-authentication-with-express-and-mongo"
          className="text-rose-500 hover:text-rose-400"
        >
          User Authentication with Express and Mongo
        </a>{" "}
        - Treehouse course guest author
      </div>
    </div>
  );
}
