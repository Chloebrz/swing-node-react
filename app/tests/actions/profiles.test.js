// Dependencies
import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";
import nock from "nock";
import expect from "expect";
import axios from "axios";
import httpAdapter from "axios/lib/adapters/http";

import * as actions from "../../actions/profiles";
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

describe("PROFILES ACTIONS", () => {
    it("should create FETCH_USER when fetching user has been done", () => {
        const user = { id: 123 };
        const expectedAction = [{ type: types.FETCH_USER, payload: user }];

        nock(host).get("/api/current_user").reply(200, user);

        return store.dispatch(actions.fetchUser()).then(() => {
            expect(store.getActions()).toEqual(expectedAction);
        });
    });

    it("should create FETCH_PROFILE when fetching a profile has been done", () => {
        const payload = { id: 123 };
        const data = { id: 123, name: "test" };
        const expectedAction = [{ type: types.FETCH_PROFILE, payload: data }];

        nock(host).get("/api/admin/profile/123").reply(200, data);

        return store.dispatch(actions.fetchProfile(payload)).then(() => {
            expect(store.getActions()).toEqual(expectedAction);
        });
    });

    it("should create SIGNUP_LOGIN_SUCCESS when signing up user has been successfully done", () => {
        const payload = { id: 123 };
        const data = { success: true };
        const expectedAction = [{ type: types.SIGNUP_LOGIN_SUCCESS }];

        nock(host).post("/auth/signup", payload).reply(200, data);

        return store.dispatch(actions.signupUser(payload)).then(() => {
            expect(store.getActions()).toEqual(expectedAction);
        });
    });

    it("should create SIGNUP_LOGIN_ERROR when signing up user has not been successfully done", () => {
        const payload = { id: 123 };
        const data = { success: false, errors: "errors" };
        const expectedAction = [{ type: types.SIGNUP_LOGIN_ERROR, payload: data.errors }];

        nock(host).post("/auth/signup", payload).reply(200, data);

        return store.dispatch(actions.signupUser(payload)).then(() => {
            expect(store.getActions()).toEqual(expectedAction);
        });
    });

    it("should create SIGNUP_LOGIN_SUCCESS when logging in user has been successfully done", () => {
        const payload = { id: 123 };
        const data = { success: true };
        const expectedAction = [{ type: types.SIGNUP_LOGIN_SUCCESS }];

        nock(host).post("/auth/login", payload).reply(200, data);

        return store.dispatch(actions.loginUser(payload)).then(() => {
            expect(store.getActions()).toEqual(expectedAction);
        });
    });

    it("should create SIGNUP_LOGIN_ERROR when logging up user has not been successfully done", () => {
        const payload = { id: 123 };
        const data = { success: false, errors: "errors" };
        const expectedAction = [{ type: types.SIGNUP_LOGIN_ERROR, payload: data.errors }];

        nock(host).post("/auth/login", payload).reply(200, data);

        return store.dispatch(actions.loginUser(payload)).then(() => {
            expect(store.getActions()).toEqual(expectedAction);
        });
    });

    it("should create UPDATE_PROFILE_SUCCESS when updating profile has been done", () => {
        const payload = { id: 123 };
        const data = { id: 123, name: "abc" };
        const expectedAction = [{ type: types.UPDATE_PROFILE_SUCCESS, payload: data }];

        nock(host).patch("/api/admin/profile/123", payload).reply(200, data);

        return store.dispatch(actions.updateProfile(payload)).then(() => {
            expect(store.getActions()).toEqual(expectedAction);
        });
    });
});
