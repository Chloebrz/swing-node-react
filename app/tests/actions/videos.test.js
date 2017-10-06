// Dependencies
import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";
import nock from "nock";
import expect from "expect";
import axios from "axios";
import httpAdapter from "axios/lib/adapters/http";

import * as actions from "../../actions/videos";
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

describe("VIDEOS ACTIONS", () => {
    describe("fetchVideos()", () => {
        it("should create FETCH_VIDEOS_SUCCESS when fetching videos has been done", () => {
            const data = ["t", "e", "s", "t"];
            const expectedAction = [{ type: types.FETCH_VIDEOS_SUCCESS, payload: data }];

            nock(host).get("/api/admin/videos").reply(200, data);

            return store.dispatch(actions.fetchVideos()).then(() => {
                expect(store.getActions()).toEqual(expectedAction);
            });
        });

        it("should create FETCH_VIDEOS_ERROR if error returned when fetching videos", () => {
            const err = "an_error";

            nock(host).get("/api/admin/videos").reply(400, err);

            return store.dispatch(actions.fetchVideos()).then(() => {
                expect(store.getActions()[0].type).toBe(types.FETCH_VIDEOS_ERROR);
                expect(store.getActions()[0].payload.response.data).toBe(err);
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
});
