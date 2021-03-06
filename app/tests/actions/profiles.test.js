// Dependencies
import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";
import nock from "nock";
import expect from "expect";
import axios from "axios";
import httpAdapter from "axios/lib/adapters/http";

import * as actions from "../../actions/profiles";
import * as types from "../../constants/profiles_types";

const host = "http://localhost";

axios.defaults.host = host;
axios.defaults.adapter = httpAdapter;

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);
var store;

beforeEach(function() {
    store = mockStore();
});

describe("PROFILES ACTIONS", () => {
    describe("fetchUser()", () => {
        it("should create FETCH_USER_SUCCESS when fetching user has been done", () => {
            const user = { id: 123 };
            const expectedAction = [{ type: types.FETCH_USER_SUCCESS, payload: user }];

            nock(host).get("/api/auth/current_user").reply(200, user);

            return store.dispatch(actions.fetchUser()).then(() => {
                expect(store.getActions()).toEqual(expectedAction);
            });
        });

        it("should create FETCH_USER_ERROR if error returned when fetching user", () => {
            const err = "an_error";

            nock(host).get("/api/auth/current_user").reply(400, err);

            return store.dispatch(actions.fetchUser()).then(() => {
                expect(store.getActions()[0].type).toBe(types.FETCH_USER_ERROR);
                expect(store.getActions()[0].payload.response.data).toBe(err);
            });
        });
    });

    describe("fetchProfile()", () => {
        it("should create FETCH_PROFILE_SUCCESS when fetching a profile has been done", () => {
            const payload = { id: 123 };
            const data = { id: 123, name: "test" };
            const expectedAction = [
                { type: types.FETCH_PROFILE },
                { type: types.FETCH_PROFILE_SUCCESS, payload: data }
            ];

            nock(host).get("/api/admin/profile/123").reply(200, data);

            return store.dispatch(actions.fetchProfile(payload)).then(() => {
                expect(store.getActions()).toEqual(expectedAction);
            });
        });

        it("should create FETCH_PROFILE_ERROR if error returned when fetching profile", () => {
            const payload = { id: 123 };
            const err = "an_error";
            const expectedAction = { type: types.FETCH_PROFILE };

            nock(host).get("/api/admin/profile/123").reply(400, err);

            return store.dispatch(actions.fetchProfile(payload)).then(() => {
                expect(store.getActions()[0]).toEqual(expectedAction);
                expect(store.getActions()[1].type).toBe(types.FETCH_PROFILE_ERROR);
                expect(store.getActions()[1].payload.response.data).toBe(err);
            });
        });
    });

    describe("signupUser()", () => {
        it("should create SIGNUP_LOGIN_SUCCESS when signing up user has been successfully done", () => {
            const payload = { id: 123 };
            const data = { success: true };
            const expectedActions = [
                { type: types.SIGNUP_LOGIN },
                { type: types.SIGNUP_LOGIN_SUCCESS }
            ];

            nock(host).post("/api/auth/signup", payload).reply(200, data);

            return store.dispatch(actions.signupUser(payload)).then(() => {
                expect(store.getActions()).toEqual(expectedActions);
            });
        });

        it("should create SIGNUP_ERROR when signing up user has not been successfully done", () => {
            const payload = { id: 123 };
            const data = { success: false, error: "error" };
            const expectedActions = [
                { type: types.SIGNUP_LOGIN },
                { type: types.SIGNUP_ERROR, payload: data.error }
            ];

            nock(host).post("/api/auth/signup", payload).reply(200, data);

            return store.dispatch(actions.signupUser(payload)).then(() => {
                expect(store.getActions()).toEqual(expectedActions);
            });
        });
    });

    describe("loginUser()", () => {
        it("should create SIGNUP_LOGIN_SUCCESS when logging in user has been successfully done", () => {
            const payload = { id: 123 };
            const data = { success: true };
            const expectedActions = [
                { type: types.SIGNUP_LOGIN },
                { type: types.SIGNUP_LOGIN_SUCCESS }
            ];

            nock(host).post("/api/auth/login", payload).reply(200, data);

            return store.dispatch(actions.loginUser(payload)).then(() => {
                expect(store.getActions()).toEqual(expectedActions);
            });
        });

        it("should create LOGIN_ERROR when logging up user has not been successfully done", () => {
            const payload = { id: 123 };
            const data = { success: false, error: "error" };
            const expectedActions = [
                { type: types.SIGNUP_LOGIN },
                { type: types.LOGIN_ERROR, payload: data.error }
            ];

            nock(host).post("/api/auth/login", payload).reply(200, data);

            return store.dispatch(actions.loginUser(payload)).then(() => {
                expect(store.getActions()).toEqual(expectedActions);
            });
        });
    });

    describe("updateProfile()", () => {
        it("should create UPDATE_PROFILE_SUCCESS when updating profile has been done", () => {
            const payload = { id: 123 };
            const data = { id: 123, name: "abc" };
            const expectedActions = [
                { type: types.UPDATE_PROFILE },
                { type: types.UPDATE_PROFILE_SUCCESS, payload: data }
            ];

            nock(host).patch("/api/admin/profile/123", payload).reply(200, data);

            return store.dispatch(actions.updateProfile(payload)).then(() => {
                expect(store.getActions()).toEqual(expectedActions);
            });
        });

        it("should create UPDATE_PROFILE_ERROR if error returned when updating profile", () => {
            const payload = { id: 123 };
            const expectedAction = { type: types.UPDATE_PROFILE };
            const err = "an_error";

            nock(host).patch("/api/admin/profile/123", payload).reply(400, err);

            return store.dispatch(actions.updateProfile(payload)).then(() => {
                expect(store.getActions()[0]).toEqual(expectedAction);
                expect(store.getActions()[1].type).toBe(types.UPDATE_PROFILE_ERROR);
                expect(store.getActions()[1].payload.response.data).toBe(err);
            });
        });
    });

    describe("sendVerifyToken()", () => {
        it("should create SEND_TOKEN_SUCCESS when verify token has been sent", () => {
            const expectedAction = [{ type: types.SEND_TOKEN }, { type: types.SEND_TOKEN_SUCCESS }];

            nock(host).get("/api/token/send").reply(200);

            return store.dispatch(actions.sendVerifyToken()).then(() => {
                expect(store.getActions()).toEqual(expectedAction);
            });
        });

        it("should create SEND_TOKEN_ERROR if error returned when sending token", () => {
            const err = "an_error";
            const expectedAction = { type: types.SEND_TOKEN };

            nock(host).get("/api/token/send").reply(400, err);

            return store.dispatch(actions.sendVerifyToken()).then(() => {
                expect(store.getActions()[0]).toEqual(expectedAction);
                expect(store.getActions()[1].type).toBe(types.SEND_TOKEN_ERROR);
                expect(store.getActions()[1].payload.response.data).toBe(err);
            });
        });
    });
});
