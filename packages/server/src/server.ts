import express from "express";
import { Test } from "shared";

const app = express();

app.get("/", (_, res) => {
  const responseBody: Test = {
    foo: "foo",
    bar: "bar"
  };
  res.send(responseBody);
});

app.listen(8080, () => {
  console.log("run");
});
