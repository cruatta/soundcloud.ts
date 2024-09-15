import {assert} from "chai"
import "mocha"
import {soundcloud} from "./login"

describe.only("Users", function () {
    it("should get a user", async function () {
        const response = await soundcloud.users.get("https://soundcloud.com/yourparadis")
        assert(Object.prototype.hasOwnProperty.call(response, "description"))
    })

    it("should search for users", async function () {
        const response = await soundcloud.users.search({ q: "virtual riot" })
        assert(Object.prototype.hasOwnProperty.call(response.collection[0], "description"))
    })

    it("should get user tracks", async function () {
        const response = await soundcloud.users.tracks("https://soundcloud.com/nocopyrightsounds")
        assert(Object.prototype.hasOwnProperty.call(response[0], "description"))
    })

    it.only("should get a user's likes with different limits", async function () {
        const five = await soundcloud.users.likes("https://soundcloud.com/qwertykelo", 5);
        assert(five.length === 5);

        const fifty_one = await soundcloud.users.likes("https://soundcloud.com/qwertykelo", 51);
        assert(fifty_one.length === 51);

        const one_hundred = await soundcloud.users.likes("https://soundcloud.com/qwertykelo", 100);
        assert(one_hundred.length === 100);
    });

    it.only("should get all of a user's likes without a limit", async function () {
        const unlimited = await soundcloud.users.likes("https://soundcloud.com/qwertykelo");
        assert(unlimited.length === 436);
    });

    it("should get a users web profiles", async function () {
        const response = await soundcloud.users.webProfiles("https://soundcloud.com/yourparadis")
        assert(Object.prototype.hasOwnProperty.call(response[0], "url"))
    })
})
