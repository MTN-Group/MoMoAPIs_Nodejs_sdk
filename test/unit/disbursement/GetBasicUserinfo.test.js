"use strict";

describe("Disbursement - Get User Details", () => {
  it("should get details of an existing disbursement user", async () => {
    // Act

    const response = await global.DISBURSEMENT.getBasicUserinfo(global.testMsisdn);

    // Assert
    expect(response.status).toBe(200);
    expect(response.statusText).toBe("OK");
    expect(response.data).toHaveProperty("sub");
    expect(response.data).toHaveProperty("name");
    expect(response.data).toHaveProperty("given_name");
    expect(response.data).toHaveProperty("family_name");
    expect(response.data).toHaveProperty("birthdate");
    expect(response.data).toHaveProperty("locale");
    expect(response.data).toHaveProperty("gender");
    expect(response.data).toHaveProperty("updated_at");
  });
});
