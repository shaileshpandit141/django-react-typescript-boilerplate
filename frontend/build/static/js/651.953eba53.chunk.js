(self.webpackChunkfrontend = self.webpackChunkfrontend || []).push([
  [651],
  {
    5651: (e, s, a) => {
      a.r(s), a.d(s, { default: () => l });
      var d = a(2483),
        r = a(149),
        n = a(5250),
        i = a(3562),
        o = a(8940),
        c = a(6723);
      const l = (e) => {
        const { status: s, message: a, errors: l, data: u } = (0, i.eR)(),
          [t, p] = (0, r.MY)({ email: "", password: "", confirm_password: "" });
        return (
          (0, d.useEffect)(() => {
            "succeeded" === s
              ? (0, o.aT)("success", a)
              : "failed" === s && (0, o.aT)("error", a);
          }, [a, s]),
          (0, r.RT)(() => {
            (0, i.T0)();
          }),
          (0, c.jsxs)("div", {
            className: "signup-page",
            children: [
              (0, c.jsxs)("div", {
                className: "header",
                children: [
                  (0, c.jsx)("h3", {
                    className: "form-label",
                    children: "Sign up",
                  }),
                  (0, c.jsx)("p", {
                    className: "form-description",
                    children: "Join us by creating your account.",
                  }),
                ],
              }),
              (0, c.jsxs)("form", {
                className: "form",
                onSubmit: (e) => {
                  e.preventDefault(), (0, i.E_)(t);
                },
                children: [
                  (0, c.jsx)(n.pd, {
                    name: "email",
                    type: "email",
                    value: t.email,
                    onChange: p,
                    isDisabled: "loading" === s || "succeeded" === s,
                    errors: l,
                  }),
                  (0, c.jsx)(n.pd, {
                    name: "password",
                    type: "password",
                    value: t.password,
                    onChange: p,
                    isDisabled: "loading" === s || "succeeded" === s,
                    errors: l,
                  }),
                  (0, c.jsx)(n.pd, {
                    name: "confirm_password",
                    type: "password",
                    value: t.confirm_password,
                    onChange: p,
                    isDisabled: "loading" === s || "succeeded" === s,
                    errors: l,
                  }),
                  (0, c.jsx)(n.q_, { field: "none", errors: l }),
                  (null === u || void 0 === u ? void 0 : u.detail) &&
                    (0, c.jsx)("p", { children: u.detail }),
                  (0, c.jsxs)("div", {
                    className: "actions",
                    children: [
                      (0, c.jsx)(n.xP, {}),
                      (0, c.jsx)(n.$n, {
                        type: "submit",
                        iconName: "signup",
                        className: "button",
                        isLoaderOn: "loading" === s,
                        isDisabled: "succeeded" === s,
                        children: "sign up",
                      }),
                    ],
                  }),
                ],
              }),
            ],
          })
        );
      };
    },
  },
]);
//# sourceMappingURL=651.953eba53.chunk.js.map
