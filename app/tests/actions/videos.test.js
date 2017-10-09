// Dependencies
import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";
import nock from "nock";
import expect from "expect";
import axios from "axios";
import httpAdapter from "axios/lib/adapters/http";

import * as actions from "../../actions/videos";
import * as types from "../../constants/videos_types";

const host = "http://localhost";

axios.defaults.host = host;
axios.defaults.adapter = httpAdapter;

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);
var store;

beforeEach(function() {
    store = mockStore();
});

describe("VIDEOS ACTIONS", () => {
    describe("fetchVideos()", () => {
        it("should create FETCH_VIDEOS before fetching video", () => {
            const data = ["t", "e", "s", "t"];
            const expectedAction = { type: types.FETCH_VIDEOS };

            nock(host).get("/api/admin/videos").reply(200, data);

            return store.dispatch(actions.fetchVideos()).then(() => {
                expect(store.getActions()[0]).toEqual(expectedAction);
            });
        });

        it("should create FETCH_VIDEOS_SUCCESS when fetching videos has been done", () => {
            const data = ["t", "e", "s", "t"];
            const expectedAction = [
                { type: types.FETCH_VIDEOS },
                { type: types.FETCH_VIDEOS_SUCCESS, payload: data }
            ];

            nock(host).get("/api/admin/videos").reply(200, data);

            return store.dispatch(actions.fetchVideos()).then(() => {
                expect(store.getActions()).toEqual(expectedAction);
            });
        });

        it("should create FETCH_VIDEOS_ERROR if error returned when fetching videos", () => {
            const err = "an_error";

            nock(host).get("/api/admin/videos").reply(400, err);

            return store.dispatch(actions.fetchVideos()).then(() => {
                expect(store.getActions()[1].type).toBe(types.FETCH_VIDEOS_ERROR);
                expect(store.getActions()[1].payload.response.data).toBe(err);
            });
        });
    });

    describe("fetchVideo()", () => {
        it("should create FETCH_VIDEO_SUCCESS when fetching video has been done", () => {
            const payload = { id: 123 };
            const data = { id: 123, name: "test" };
            const expectedActions = [
                { type: types.FETCH_VIDEO },
                { type: types.FETCH_VIDEO_SUCCESS, payload: data }
            ];

            nock(host).get("/api/admin/video/123").reply(200, data);

            return store.dispatch(actions.fetchVideo(payload)).then(() => {
                expect(store.getActions()).toEqual(expectedActions);
            });
        });

        it("should create FETCH_VIDEO_ERROR if error returned when fetching video", () => {
            const payload = { id: 123 };
            const err = "an_error";
            const expectedAction = { type: types.FETCH_VIDEO };

            nock(host).get("/api/admin/video/123").reply(400, err);

            return store.dispatch(actions.fetchVideo(payload)).then(() => {
                expect(store.getActions()[0]).toEqual(expectedAction);
                expect(store.getActions()[1].type).toBe(types.FETCH_VIDEO_ERROR);
                expect(store.getActions()[1].payload.response.data).toBe(err);
            });
        });
    });

    describe("postVideo()", () => {
        it("should create POST_VIDEO before posting video", () => {
            const payload = { file: "a_file", name: "a_name", legend: "a legend" };
            const data = ["t", "e", "s", "t"];
            const expectedAction = { type: types.POST_VIDEO };

            nock(host).post("/api/admin/video", payload).reply(200, data);

            return store.dispatch(actions.postVideo(payload)).then(() => {
                expect(store.getActions()[0]).toEqual(expectedAction);
            });
        });

        it.skip("should create POST_VIDEO_SUCCESS when posting video has been done", () => {
            const payload = { file: "a_file", name: "a_name", legend: "a legend" };
            const data = "data";
            const expectedAction = [
                { type: types.POST_VIDEO },
                { type: types.POST_VIDEO_SUCCESS, payload: data }
            ];

            nock(host).post("/api/admin/video").reply(200, data);

            return store.dispatch(actions.postVideo(payload)).then(() => {
                expect(store.getActions()).toEqual(expectedAction);
            });
        });

        it.skip("should create POST_VIDEO_ERROR if error returned when posting video", () => {
            const payload = { file: "a_file", name: "a_name", legend: "a legend" };
            const err = "an_error";

            nock(host).post("/api/admin/video").reply(400, err);

            return store.dispatch(actions.postVideo(payload)).then(() => {
                expect(store.getActions()[0].type).toBe(types.POST_VIDEO);
                expect(store.getActions()[1].type).toBe(types.POST_VIDEO_ERROR);
                expect(store.getActions()[1].payload.response.data).toBe(err);
            });
        });
    });

    describe("deleteVideo()", () => {
        it("should create DELETE_VIDEO_SUCCESS when deleting video has been done", () => {
            const payload = { id: 123 };
            const data = { id: 123, name: "test" };
            const expectedAction = [{ type: types.DELETE_VIDEO_SUCCESS, payload: data }];

            nock(host).delete("/api/admin/video/123").reply(200, data);

            return store.dispatch(actions.deleteVideo(payload)).then(() => {
                expect(store.getActions()).toEqual(expectedAction);
            });
        });

        it("should create DELETE_VIDEO_ERROR if error returned when deleting video", () => {
            const payload = { id: 123 };
            const err = "an_error";

            nock(host).delete("/api/admin/video/123").reply(400, err);

            return store.dispatch(actions.deleteVideo(payload)).then(() => {
                expect(store.getActions()[0].type).toBe(types.DELETE_VIDEO_ERROR);
                expect(store.getActions()[0].payload.response.data).toBe(err);
            });
        });
    });

    describe("updateVideo()", () => {
        it("should create UPDATE_VIDEO_SUCCESS when updating video has been done", () => {
            const payload = { id: 123 };
            const data = { id: 123, name: "test" };
            const expectedAction = [{ type: types.UPDATE_VIDEO_SUCCESS, payload: data }];

            nock(host).patch("/api/admin/video/123", payload).reply(200, data);

            return store.dispatch(actions.updateVideo(payload)).then(() => {
                expect(store.getActions()).toEqual(expectedAction);
            });
        });

        it("should create UPDATE_VIDEO_ERROR if error returned when updating video", () => {
            const payload = { id: 123 };
            const err = "an_error";

            nock(host).patch("/api/admin/video/123", payload).reply(400, err);

            return store.dispatch(actions.updateVideo(payload)).then(() => {
                expect(store.getActions()[0].type).toBe(types.UPDATE_VIDEO_ERROR);
                expect(store.getActions()[0].payload.response.data).toBe(err);
            });
        });
    });
});
