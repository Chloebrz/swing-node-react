// Dependencies
import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";
import nock from "nock";
import expect from "expect";
import axios from "axios";
import httpAdapter from "axios/lib/adapters/http";

import * as actions from "../../actions/pictures";
import * as types from "../../actions/types";

const host = "http://localhost";

axios.defaults.host = host;
axios.defaults.adapter = httpAdapter;

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);
var store;

beforeEach(function() {
    store = mockStore();
});

describe("PICTURES ACTIONS", () => {
    describe("fetchPictures()", () => {
        it("should create FETCH_PICTURES_SUCCESS when fetching pictures has been done", () => {
            const payload = { n: 1 };
            const data = { pictures: ["t", "e", "s", "t"] };
            const expectedAction = [{ type: types.FETCH_PICTURES_SUCCESS, payload: data.pictures }];

            nock(host).post("/api/admin/pictures", payload).reply(200, data);

            return store.dispatch(actions.fetchPictures(payload)).then(() => {
                expect(store.getActions()).toEqual(expectedAction);
            });
        });

        it("should create FETCH_PICTURES_ERROR if error returned when fetching pictures", () => {
            const payload = { n: 1 };
            const err = "an_error";

            nock(host).post("/api/admin/pictures", payload).reply(400, err);

            return store.dispatch(actions.fetchPictures(payload)).then(() => {
                expect(store.getActions()[0].type).toBe(types.FETCH_PICTURES_ERROR);
                expect(store.getActions()[0].payload.response.data).toBe(err);
            });
        });

        it("should create FETCH_PICTURES if n = 0", () => {
            const payload = { n: 0 };
            const data = { pictures: ["t", "e", "s", "t"] };
            const expectedAction = [
                { type: types.FETCH_PICTURES },
                { type: types.FETCH_PICTURES_SUCCESS, payload: data.pictures }
            ];

            nock(host).post("/api/admin/pictures", payload).reply(200, data);

            return store.dispatch(actions.fetchPictures(payload)).then(() => {
                expect(store.getActions()).toEqual(expectedAction);
            });
        });

        it("should create FETCH_PICTURES_DONE if all pictures loaded", () => {
            const payload = { n: 2 };
            const data = { pictures: ["t", "e", "s", "t"], last: true };
            const expectedAction = [
                { type: types.FETCH_PICTURES_SUCCESS, payload: data.pictures },
                { type: types.FETCH_PICTURES_DONE }
            ];

            nock(host).post("/api/admin/pictures", payload).reply(200, data);

            return store.dispatch(actions.fetchPictures(payload)).then(() => {
                expect(store.getActions()).toEqual(expectedAction);
            });
        });
    });

    describe("fetchUserPictures()", () => {
        it("should create FETCH_PICTURES_SUCCESS when fetching pictures of a given user has been done", () => {
            const payload = { n: 1, id: 123 };
            const data = { pictures: ["t", "e", "s", "t", "s"] };
            const expectedAction = [{ type: types.FETCH_PICTURES_SUCCESS, payload: data.pictures }];

            nock(host).post("/api/admin/pictures/123", payload).reply(200, data);

            return store.dispatch(actions.fetchUserPictures(payload)).then(() => {
                expect(store.getActions()).toEqual(expectedAction);
            });
        });

        it("should create FETCH_PICTURES_ERROR if error returned when fetching pictures of a given user", () => {
            const payload = { n: 1, id: 123 };
            const err = "an_error";

            nock(host).post("/api/admin/pictures/123", payload).reply(400, err);

            return store.dispatch(actions.fetchUserPictures(payload)).then(() => {
                expect(store.getActions()[0].type).toBe(types.FETCH_PICTURES_ERROR);
                expect(store.getActions()[0].payload.response.data).toBe(err);
            });
        });

        it("should create FETCH_PICTURES if n = 0", () => {
            const payload = { n: 0, id: 123 };
            const data = { pictures: ["t", "e", "s", "t", "s"] };
            const expectedAction = [
                { type: types.FETCH_PICTURES },
                { type: types.FETCH_PICTURES_SUCCESS, payload: data.pictures }
            ];

            nock(host).post("/api/admin/pictures/123", payload).reply(200, data);

            return store.dispatch(actions.fetchUserPictures(payload)).then(() => {
                expect(store.getActions()).toEqual(expectedAction);
            });
        });

        it("should create FETCH_PICTURES_DONE if all pictures loaded", () => {
            const payload = { n: 2, id: 123 };
            const data = { pictures: ["t", "e", "s", "t"], last: true };
            const expectedAction = [
                { type: types.FETCH_PICTURES_SUCCESS, payload: data.pictures },
                { type: types.FETCH_PICTURES_DONE }
            ];

            nock(host).post("/api/admin/pictures/123", payload).reply(200, data);

            return store.dispatch(actions.fetchUserPictures(payload)).then(() => {
                expect(store.getActions()).toEqual(expectedAction);
            });
        });
    });

    describe("fetchPicture()", () => {
        it("should create FETCH_PICTURE_SUCCESS when fetching picture has been done", () => {
            const payload = { id: 123 };
            const data = { id: 123, name: "abc" };
            const expectedAction = [
                { type: types.FETCH_PICTURE },
                { type: types.FETCH_PICTURE_SUCCESS, payload: data }
            ];

            nock(host).get("/api/admin/picture/123").reply(200, data);

            return store.dispatch(actions.fetchPicture(payload)).then(() => {
                expect(store.getActions()).toEqual(expectedAction);
            });
        });

        it("should create FETCH_PICTURE_ERROR if error returned when fetching picture", () => {
            const payload = { id: 123 };
            const err = "an_error";
            const expectedAction = { type: types.FETCH_PICTURE };

            nock(host).get("/api/admin/picture/123").reply(400, err);

            return store.dispatch(actions.fetchPicture(payload)).then(() => {
                expect(store.getActions()[0]).toEqual(expectedAction);
                expect(store.getActions()[1].type).toBe(types.FETCH_PICTURE_ERROR);
                expect(store.getActions()[1].payload.response.data).toBe(err);
            });
        });
    });

    describe("postPicture()", () => {
        it("should create POST_PICTURE_SUCCESS when posting picture has been done", () => {
            const payload = { id: 123 };
            const data = { id: 123, name: "abc" };
            const expectedAction = [{ type: types.POST_PICTURE_SUCCESS, payload: data }];

            nock(host).post("/api/admin/picture", payload).reply(200, data);

            return store.dispatch(actions.postPicture(payload)).then(() => {
                expect(store.getActions()).toEqual(expectedAction);
            });
        });

        it("should create POST_PICTURE_ERROR if error returned when posting picture", () => {
            const payload = { id: 123 };
            const err = "an_error";

            nock(host).post("/api/admin/picture", payload).reply(400, err);

            return store.dispatch(actions.postPicture(payload)).then(() => {
                expect(store.getActions()[0].type).toBe(types.POST_PICTURE_ERROR);
                expect(store.getActions()[0].payload.response.data).toBe(err);
            });
        });
    });

    describe("deletePicture()", () => {
        it("should create DELETE_PICTURE_SUCCESS when deleting picture has been done", () => {
            const payload = { id: 123 };
            const data = { id: 123, name: "abc" };
            const expectedAction = [{ type: types.DELETE_PICTURE_SUCCESS, payload: data }];

            nock(host).delete("/api/admin/picture/123").reply(200, data);

            return store.dispatch(actions.deletePicture(payload)).then(() => {
                expect(store.getActions()).toEqual(expectedAction);
            });
        });

        it("should create DELETE_PICTURE_ERROR if error returned when deleting picture", () => {
            const payload = { id: 123 };
            const err = "an_error";

            nock(host).delete("/api/admin/picture/123").reply(400, err);

            return store.dispatch(actions.deletePicture(payload)).then(() => {
                expect(store.getActions()[0].type).toBe(types.DELETE_PICTURE_ERROR);
                expect(store.getActions()[0].payload.response.data).toBe(err);
            });
        });
    });

    describe("updatePicture()", () => {
        it("should create UPDATE_PICTURE_SUCCESS when updating picture has been done", () => {
            const payload = { id: 123 };
            const data = { id: 123, name: "abc" };
            const expectedAction = [{ type: types.UPDATE_PICTURE_SUCCESS, payload: data }];

            nock(host).patch("/api/admin/picture/123", payload).reply(200, data);

            return store.dispatch(actions.updatePicture(payload)).then(() => {
                expect(store.getActions()).toEqual(expectedAction);
            });
        });

        it("should create UPDATE_PICTURE_ERROR if error returned when updating picture", () => {
            const payload = { id: 123 };
            const err = "an_error";

            nock(host).patch("/api/admin/picture/123", payload).reply(400, err);

            return store.dispatch(actions.updatePicture(payload)).then(() => {
                expect(store.getActions()[0].type).toBe(types.UPDATE_PICTURE_ERROR);
                expect(store.getActions()[0].payload.response.data).toBe(err);
            });
        });
    });
});
