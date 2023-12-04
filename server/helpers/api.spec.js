import expect from "expect";
import { callUrl } from "./api";

describe("Api Helper", () => {
  const EXAMPLE_URL = "https://jsonplaceholder.typicode.com/posts/1";

  it("should retrieve data from a given url", (done) => {
    callUrl(EXAMPLE_URL).then((data) => {
      expect(data).toBeDefined();
      done();
    });
  });
});
