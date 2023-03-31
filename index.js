"use strict";
(() => {
var exports = {};
exports.id = 405;
exports.ids = [405,91];
exports.modules = {

/***/ 9577:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"src":"/_next/static/media/henri-trip.97c431e9.svg","height":789,"width":553});

/***/ }),

/***/ 7883:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"src":"/_next/static/media/ynov-campus.6842b812.svg","height":48,"width":31});

/***/ }),

/***/ 2380:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ Home),
  "getStaticProps": () => (/* binding */ getStaticProps)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__(968);
var head_default = /*#__PURE__*/__webpack_require__.n(head_);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: external "clsx"
var external_clsx_ = __webpack_require__(8103);
var external_clsx_default = /*#__PURE__*/__webpack_require__.n(external_clsx_);
// EXTERNAL MODULE: external "react-wrap-balancer"
var external_react_wrap_balancer_ = __webpack_require__(5420);
var external_react_wrap_balancer_default = /*#__PURE__*/__webpack_require__.n(external_react_wrap_balancer_);
// EXTERNAL MODULE: ./src/components/Button.jsx
var components_Button = __webpack_require__(1109);
// EXTERNAL MODULE: ./src/components/Card.jsx
var Card = __webpack_require__(5834);
// EXTERNAL MODULE: ./src/components/Container.jsx
var Container = __webpack_require__(7527);
// EXTERNAL MODULE: ./src/components/SocialIcons.jsx
var SocialIcons = __webpack_require__(2792);
;// CONCATENATED MODULE: ./src/images/logos/Flag-of-France.svg
/* harmony default export */ const Flag_of_France = ({"src":"/_next/static/media/Flag-of-France.4f925af2.svg","height":709,"width":1063});
;// CONCATENATED MODULE: ./src/images/logos/Flag-of-the-United-Kingdom.svg
/* harmony default export */ const Flag_of_the_United_Kingdom = ({"src":"/_next/static/media/Flag-of-the-United-Kingdom.681e8a99.svg","height":500,"width":1000});
// EXTERNAL MODULE: ./src/images/logos/henri-trip.svg
var henri_trip = __webpack_require__(9577);
;// CONCATENATED MODULE: ./src/images/logos/facebook.svg
/* harmony default export */ const facebook = ({"src":"/_next/static/media/facebook.dd9e7d48.svg","height":28,"width":28});
// EXTERNAL MODULE: ./src/images/logos/ynov-campus.svg
var ynov_campus = __webpack_require__(7883);
;// CONCATENATED MODULE: ./src/images/logos/starbucks.svg
/* harmony default export */ const starbucks = ({"src":"/_next/static/media/starbucks.4a5bd050.svg","height":28,"width":28});
;// CONCATENATED MODULE: ./src/images/photos/3d-printer.jpg
/* harmony default export */ const _3d_printer = ({"src":"/_next/static/media/3d-printer.3fb2ee36.jpg","height":3456,"width":4608,"blurDataURL":"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/sBCgoKCgoKCwwMCw8QDhAPFhQTExQWIhgaGBoYIjMgJSAgJSAzLTcsKSw3LVFAODhAUV5PSk9ecWVlcY+Ij7u7+//CABEIAAYACAMBIgACEQEDEQH/xAAoAAEBAAAAAAAAAAAAAAAAAAAABQEBAQAAAAAAAAAAAAAAAAAAAQL/2gAMAwEAAhADEAAAAKAK/8QAGhAAAgMBAQAAAAAAAAAAAAAAAgMEBRIAIv/aAAgBAQABPwCypoE94Me6RsRyWc+u/8QAFBEBAAAAAAAAAAAAAAAAAAAAAP/aAAgBAgEBPwB//8QAFBEBAAAAAAAAAAAAAAAAAAAAAP/aAAgBAwEBPwB//9k=","blurWidth":8,"blurHeight":6});
;// CONCATENATED MODULE: ./src/images/photos/model-lighter.jpg
/* harmony default export */ const model_lighter = ({"src":"/_next/static/media/model-lighter.49a1d778.jpg","height":1920,"width":1080,"blurDataURL":"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/sBCgoKCgoKCwwMCw8QDhAPFhQTExQWIhgaGBoYIjMgJSAgJSAzLTcsKSw3LVFAODhAUV5PSk9ecWVlcY+Ij7u7+//CABEIAAgABQMBIgACEQEDEQH/xAAnAAEBAAAAAAAAAAAAAAAAAAAABQEBAAAAAAAAAAAAAAAAAAAABP/aAAwDAQACEAMQAAAAmBR//8QAGxAAAwEAAwEAAAAAAAAAAAAAAQIEAwAREkH/2gAIAQEAAT8A3mkwnhSWjVHGAXXw5HbD7z//xAAYEQACAwAAAAAAAAAAAAAAAAAAAQMTUv/aAAgBAgEBPwCqPCP/xAAYEQACAwAAAAAAAAAAAAAAAAAAAQIDUv/aAAgBAwEBPwBWT0z/2Q==","blurWidth":5,"blurHeight":8});
;// CONCATENATED MODULE: ./src/images/photos/lighter.jpg
/* harmony default export */ const lighter = ({"src":"/_next/static/media/lighter.6545d43d.jpg","height":1047,"width":1080,"blurDataURL":"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/sBCgoKCgoKCwwMCw8QDhAPFhQTExQWIhgaGBoYIjMgJSAgJSAzLTcsKSw3LVFAODhAUV5PSk9ecWVlcY+Ij7u7+//CABEIAAgACAMBIgACEQEDEQH/xAAoAAEBAAAAAAAAAAAAAAAAAAAABgEBAQAAAAAAAAAAAAAAAAAABAX/2gAMAwEAAhADEAAAAKsFo//EAB4QAAEEAQUAAAAAAAAAAAAAAAMBBAUSAAITISIy/9oACAEBAAE/ANLk4yTEe3LegODG7rvKnjP/xAAXEQEAAwAAAAAAAAAAAAAAAAABABIh/9oACAECAQE/AFsqg7P/xAAZEQEAAgMAAAAAAAAAAAAAAAACAAEEEjH/2gAIAQMBAT8AGOQAQma1rlz/2Q==","blurWidth":8,"blurHeight":8});
;// CONCATENATED MODULE: ./src/images/photos/image-1.jpg
/* harmony default export */ const image_1 = ({"src":"/_next/static/media/image-1.c5d2141c.jpg","height":5616,"width":3744,"blurDataURL":"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/sBCgoKCgoKCwwMCw8QDhAPFhQTExQWIhgaGBoYIjMgJSAgJSAzLTcsKSw3LVFAODhAUV5PSk9ecWVlcY+Ij7u7+//CABEIAAgABQMBIgACEQEDEQH/xAAnAAEAAAAAAAAAAAAAAAAAAAAAAQEBAAAAAAAAAAAAAAAAAAACA//aAAwDAQACEAMQAAAAA0//xAAbEAABBAMAAAAAAAAAAAAAAAAEAQIDMgAGEv/aAAgBAQABPwAve+5lQcAWWJKufbP/xAAWEQEBAQAAAAAAAAAAAAAAAAABAAL/2gAIAQIBAT8AdJf/xAAXEQADAQAAAAAAAAAAAAAAAAABAhEA/9oACAEDAQE/AFRSLN//2Q==","blurWidth":5,"blurHeight":8});
;// CONCATENATED MODULE: ./src/images/photos/image-5.jpg
/* harmony default export */ const image_5 = ({"src":"/_next/static/media/image-5.6c6f2784.jpg","height":2384,"width":4240,"blurDataURL":"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/sBCgoKCgoKCwwMCw8QDhAPFhQTExQWIhgaGBoYIjMgJSAgJSAzLTcsKSw3LVFAODhAUV5PSk9ecWVlcY+Ij7u7+//CABEIAAQACAMBIgACEQEDEQH/xAAoAAEBAAAAAAAAAAAAAAAAAAAABQEBAQAAAAAAAAAAAAAAAAAABAX/2gAMAwEAAhADEAAAAIoDV//EABsQAAICAwEAAAAAAAAAAAAAAAEDAhEABAUx/9oACAEBAAE/ANPnpbANnNlgV6KojP/EABURAQEAAAAAAAAAAAAAAAAAAAAB/9oACAECAQE/AK//xAAXEQADAQAAAAAAAAAAAAAAAAAAAkFx/9oACAEDAQE/AK2n/9k=","blurWidth":8,"blurHeight":4});
;// CONCATENATED MODULE: ./src/images/photos/yaya.gif
/* harmony default export */ const yaya = ({"src":"/_next/static/media/yaya.8d1aac8a.gif","height":500,"width":500});
// EXTERNAL MODULE: ./src/lib/formatDate.js
var formatDate = __webpack_require__(3997);
;// CONCATENATED MODULE: external "react-dom/server"
const server_namespaceObject = require("react-dom/server");
var server_default = /*#__PURE__*/__webpack_require__.n(server_namespaceObject);
;// CONCATENATED MODULE: external "feed"
const external_feed_namespaceObject = require("feed");
;// CONCATENATED MODULE: external "fs/promises"
const promises_namespaceObject = require("fs/promises");
// EXTERNAL MODULE: ./src/lib/getAllArticles.js
var getAllArticles = __webpack_require__(3622);
;// CONCATENATED MODULE: ./src/lib/generateRssFeed.js





async function generateRssFeed() {
    let articles = await (0,getAllArticles/* getAllArticles */.z)();
    let siteUrl = "https://example.com";
    let author = {
        name: "Joan Glendinning",
        email: "jonisouthanva@gmail.com"
    };
    let feed = new external_feed_namespaceObject.Feed({
        title: author.name,
        description: "Your blog description",
        author,
        id: siteUrl,
        link: siteUrl,
        image: `${siteUrl}/favicon.ico`,
        favicon: `${siteUrl}/favicon.ico`,
        copyright: `All rights reserved ${new Date().getFullYear()}`,
        feedLinks: {
            rss2: `${siteUrl}/rss/feed.xml`,
            json: `${siteUrl}/rss/feed.json`
        }
    });
    for (let article of articles){
        let url = `${siteUrl}/articles/${article.slug}`;
        let html = server_default().renderToStaticMarkup(/*#__PURE__*/ jsx_runtime_.jsx(article.component, {
            isRssFeed: true
        }));
        feed.addItem({
            title: article.title,
            id: url,
            link: url,
            description: article.description,
            content: html,
            author: [
                author
            ],
            contributor: [
                author
            ],
            date: new Date(article.date)
        });
    }
    await (0,promises_namespaceObject.mkdir)("./public/rss", {
        recursive: true
    });
    await Promise.all([
        (0,promises_namespaceObject.writeFile)("./public/rss/feed.xml", feed.rss2(), "utf8"),
        (0,promises_namespaceObject.writeFile)("./public/rss/feed.json", feed.json1(), "utf8")
    ]);
}

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "react-circle-flags"
var external_react_circle_flags_ = __webpack_require__(2193);
;// CONCATENATED MODULE: ./src/pages/index.jsx
/* eslint-disable react/no-unescaped-entities */ 



























function MailIcon(props) {
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("svg", {
        viewBox: "0 0 24 24",
        fill: "none",
        strokeWidth: "1.5",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        "aria-hidden": "true",
        ...props,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                d: "M2.75 7.75a3 3 0 0 1 3-3h12.5a3 3 0 0 1 3 3v8.5a3 3 0 0 1-3 3H5.75a3 3 0 0 1-3-3v-8.5Z",
                className: "fill-zinc-100 stroke-zinc-400 dark:fill-zinc-100/10 dark:stroke-zinc-500"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                d: "m4 6 6.024 5.479a2.915 2.915 0 0 0 3.952 0L20 6",
                className: "stroke-zinc-400 dark:stroke-zinc-500"
            })
        ]
    });
}
function BriefcaseIcon(props) {
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("svg", {
        viewBox: "0 0 24 24",
        fill: "none",
        strokeWidth: "1.5",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        "aria-hidden": "true",
        ...props,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                d: "M2.75 9.75a3 3 0 0 1 3-3h12.5a3 3 0 0 1 3 3v8.5a3 3 0 0 1-3 3H5.75a3 3 0 0 1-3-3v-8.5Z",
                className: "fill-zinc-100 stroke-zinc-400 dark:fill-zinc-100/10 dark:stroke-zinc-500"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                d: "M3 14.25h6.249c.484 0 .952-.002 1.316.319l.777.682a.996.996 0 0 0 1.316 0l.777-.682c.364-.32.832-.319 1.316-.319H21M8.75 6.5V4.75a2 2 0 0 1 2-2h2.5a2 2 0 0 1 2 2V6.5",
                className: "stroke-zinc-400 dark:stroke-zinc-500"
            })
        ]
    });
}
function ArrowDownIcon(props) {
    return /*#__PURE__*/ jsx_runtime_.jsx("svg", {
        viewBox: "0 0 16 16",
        fill: "none",
        "aria-hidden": "true",
        ...props,
        children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
            d: "M4.75 8.75 8 12.25m0 0 3.25-3.5M8 12.25v-8.5",
            strokeWidth: "1.5",
            strokeLinecap: "round",
            strokeLinejoin: "round"
        })
    });
}
function Article({ article  }) {
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Card/* Card */.Z, {
        as: "article",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(Card/* Card.Title */.Z.Title, {
                href: `/articles/${article.slug}`,
                children: article.title
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(Card/* Card.Eyebrow */.Z.Eyebrow, {
                as: "time",
                dateTime: article.date,
                decorate: true,
                children: (0,formatDate/* formatDate */.p)(article.date)
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(Card/* Card.Description */.Z.Description, {
                children: article.description
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(Card/* Card.Cta */.Z.Cta, {
                children: "Read article"
            })
        ]
    });
}
function SocialLink({ icon: Icon , ...props }) {
    return /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
        className: "group -m-1 p-1",
        ...props,
        children: /*#__PURE__*/ jsx_runtime_.jsx(Icon, {
            className: "h-6 w-6 fill-zinc-500 transition group-hover:fill-zinc-600 dark:fill-zinc-400 dark:group-hover:fill-zinc-300"
        })
    });
}
function DownloadCV() {
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "rounded-2xl border border-zinc-100 p-6 dark:border-zinc-700/40",
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("h2", {
                className: "flex text-sm font-semibold text-zinc-900 dark:text-zinc-100",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(ArrowDownIcon, {
                        className: "h-6 w-6 stroke-zinc-400 transition group-active:stroke-zinc-600 dark:group-hover:stroke-zinc-50 dark:group-active:stroke-zinc-50"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                        className: "ml-3",
                        children: "Download my CV"
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                className: "mt-2 text-sm text-zinc-600 dark:text-zinc-400",
                children: "Dowload the latest version of my CV in French or English (PDF format)"
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "mt-6 flex",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("a", {
                        className: "m-auto flex",
                        href: "../../public/Joan_CV_FR.pdf",
                        download: true,
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(components_Button/* Button */.z, {
                            variant: "secondary",
                            className: "m-auto flex",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                    src: Flag_of_France,
                                    alt: "fr flag",
                                    className: "max-w-[2rem]"
                                }),
                                "Fran\xe7ais"
                            ]
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("a", {
                        className: "m-auto flex",
                        href: "../../public/Joan_CV_EN.pdf",
                        download: true,
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(components_Button/* Button */.z, {
                            variant: "secondary",
                            className: "m-auto flex",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                    src: Flag_of_the_United_Kingdom,
                                    alt: "uk flag",
                                    className: "max-w-[2rem]"
                                }),
                                "English"
                            ]
                        })
                    })
                ]
            })
        ]
    });
}
function Newsletter() {
    return /*#__PURE__*/ _jsxs("form", {
        action: "/thank-you",
        className: "rounded-2xl border border-zinc-100 p-6 dark:border-zinc-700/40",
        children: [
            /*#__PURE__*/ _jsxs("h2", {
                className: "flex text-sm font-semibold text-zinc-900 dark:text-zinc-100",
                children: [
                    /*#__PURE__*/ _jsx(MailIcon, {
                        className: "h-6 w-6 flex-none"
                    }),
                    /*#__PURE__*/ _jsx("span", {
                        className: "ml-3",
                        children: "Stay up to date"
                    })
                ]
            }),
            /*#__PURE__*/ _jsx("p", {
                className: "mt-2 text-sm text-zinc-600 dark:text-zinc-400",
                children: "Get notified when I publish something new, and unsubscribe at any time."
            }),
            /*#__PURE__*/ _jsxs("div", {
                className: "mt-6 flex",
                children: [
                    /*#__PURE__*/ _jsx("input", {
                        type: "email",
                        placeholder: "Email address",
                        "aria-label": "Email address",
                        required: true,
                        className: "min-w-0 flex-auto appearance-none rounded-md border border-zinc-900/10 bg-white px-3 py-[calc(theme(spacing.2)-1px)] shadow-md shadow-zinc-800/5 placeholder:text-zinc-400 focus:border-teal-500 focus:outline-none focus:ring-4 focus:ring-teal-500/10 dark:border-zinc-700 dark:bg-zinc-700/[0.15] dark:text-zinc-200 dark:placeholder:text-zinc-500 dark:focus:border-teal-400 dark:focus:ring-teal-400/10 sm:text-sm"
                    }),
                    /*#__PURE__*/ _jsx(Button, {
                        type: "submit",
                        className: "ml-4 flex-none",
                        children: "Join"
                    })
                ]
            })
        ]
    });
}
function Resume() {
    let resume = [
        {
            company: "Ynov Toulouse Campus",
            title: "Mentor Informatique",
            logo: ynov_campus/* default */.Z,
            start: "2022",
            end: {
                label: "Present",
                dateTime: new Date().getFullYear()
            }
        },
        {
            company: "Henri Trip",
            title: "Stage D\xe9veloppeur Web",
            logo: henri_trip/* default */.Z,
            start: "2021",
            end: "2021"
        }
    ];
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "rounded-2xl border border-zinc-100 p-6 dark:border-zinc-700/40",
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("h2", {
                className: "flex text-sm font-semibold text-zinc-900 dark:text-zinc-100",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(BriefcaseIcon, {
                        className: "h-6 w-6 flex-none"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                        className: "ml-3",
                        children: "Work"
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("ol", {
                className: "mt-6 space-y-4",
                children: resume.map((role, roleIndex)=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                        className: "flex gap-4",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "relative mt-1 flex h-10 w-10 flex-none items-center justify-center rounded-full shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0",
                                children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                    src: role.logo,
                                    alt: "",
                                    className: "h-7 w-7",
                                    unoptimized: true
                                })
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("dl", {
                                className: "flex flex-auto flex-wrap gap-x-2",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("dt", {
                                        className: "sr-only",
                                        children: "Company"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("dd", {
                                        className: "w-full flex-none text-sm font-medium text-zinc-900 dark:text-zinc-100",
                                        children: role.company
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("dt", {
                                        className: "sr-only",
                                        children: "Role"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("dd", {
                                        className: "text-xs text-zinc-500 dark:text-zinc-400",
                                        children: role.title
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("dt", {
                                        className: "sr-only",
                                        children: "Date"
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("dd", {
                                        className: "ml-auto text-xs text-zinc-400 dark:text-zinc-500",
                                        "aria-label": `${role.start.label ?? role.start} until ${role.end.label ?? role.end}`,
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("time", {
                                                dateTime: role.start.dateTime ?? role.start,
                                                children: role.start.label ?? role.start
                                            }),
                                            " ",
                                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                "aria-hidden": "true",
                                                children: "—"
                                            }),
                                            " ",
                                            /*#__PURE__*/ jsx_runtime_.jsx("time", {
                                                dateTime: role.end.dateTime ?? role.end,
                                                children: role.end.label ?? role.end
                                            })
                                        ]
                                    })
                                ]
                            })
                        ]
                    }, roleIndex))
            })
        ]
    });
}
function Photos() {
    let rotations = [
        "rotate-2",
        "-rotate-2",
        "rotate-2",
        "rotate-2",
        "-rotate-2"
    ];
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: "mt-16 sm:mt-20",
        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
            className: "-my-4 flex justify-center gap-5 overflow-hidden py-4 sm:gap-8",
            children: [
                model_lighter,
                lighter,
                yaya,
                _3d_printer
            ].map((image, imageIndex)=>/*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: external_clsx_default()("relative aspect-[9/10] w-44 flex-none overflow-hidden rounded-xl bg-zinc-100 dark:bg-zinc-800 sm:w-72 sm:rounded-2xl", rotations[imageIndex % rotations.length]),
                    children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                        src: image,
                        alt: "",
                        sizes: "(min-width: 640px) 18rem, 11rem",
                        className: "absolute inset-0 h-full w-full object-cover"
                    })
                }, image.src))
        })
    });
}
function Home({ articles  }) {
    const [language, setLanguage] = (0,external_react_.useState)("English");
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)((head_default()), {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("title", {
                        children: "Joan Glendinning - Software developper & student."
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        name: "description",
                        content: "I’m Joan, a software developper based in the dynamic city of Toulouse."
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(Container/* Container */.W, {
                className: "mt-9",
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "max-w-3l",
                    children: [
                        language === "English" ? /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                            className: "text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl",
                            children: "Software developper & student"
                        }) : /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                            className: "text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl",
                            children: "D\xe9veloppeuse web & \xe9tudiante"
                        }),
                        language === "English" ? /*#__PURE__*/ jsx_runtime_.jsx("p", {
                            className: "mt-4 text-base text-zinc-600 dark:text-zinc-400",
                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)((external_react_wrap_balancer_default()), {
                                children: [
                                    "Hi ! I’m Joan, a software designer based in the dynamic city of Toulouse. ",
                                    /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                                    "I’m currently in my third year of my bachelor’s degree as a student at Ynov Campus, where I’m studying web and applications development.",
                                    /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                                    "I have a strong passion for creating visually appealing and user-friendly websites that not only meet but exceed customer expectations. My expertise lies in HTML, CSS, JavaScript and I’m constantly learning other web development technologies, such as React and Node.js. ",
                                    /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                                    "Always eager to learn new skills and techniques to enhance my web development knowledge, I am actively seeking a co-op opportunity in web development to gain real-world experience and contribute to a company’s success."
                                ]
                            })
                        }) : /*#__PURE__*/ jsx_runtime_.jsx("p", {
                            className: "mt-4 text-base text-zinc-600 dark:text-zinc-400",
                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)((external_react_wrap_balancer_default()), {
                                children: [
                                    "Bonjour ! Je suis Joan, une conceptrice de logiciels bas\xe9e dans la ville dynamique de Toulouse. ",
                                    /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                                    "Je suis actuellement en troisi\xe8me ann\xe9e de licence en d\xe9veloppement web et applications \xe0 Ynov Campus, o\xf9 j'\xe9tudie.",
                                    /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                                    "J'ai une forte passion pour la cr\xe9ation de sites web esth\xe9tiques et intuitifs qui non seulement r\xe9pondent, mais d\xe9passent les attentes des clients. Mon expertise se situe dans l'HTML, CSS, JavaScript et j'apprends constamment d'autres outils de d\xe9veloppement, telles que React, Angular et Node.js. ",
                                    /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                                    "Toujours pr\xeate \xe0 apprendre de nouvelles comp\xe9tences et techniques pour am\xe9liorer mes connaissances en d\xe9veloppement Web, je suis \xe0 la recherche d'une opportunit\xe9 d'alternance en d\xe9veloppement Web afin d'acqu\xe9rir de l'exp\xe9rience et contribuer au succ\xe8s d'une entreprise."
                                ]
                            })
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "mt-6 flex gap-6",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx(SocialLink, {
                                    href: "mailto:joan.glendinning@ynov.com",
                                    icon: MailIcon,
                                    className: "border-zinc-100 dark:border-zinc-700/40"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx(SocialLink, {
                                    href: "https://github.com/Sinnamoon",
                                    "aria-label": "Follow on GitHub",
                                    icon: SocialIcons/* GitHubIcon */.fy
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx(SocialLink, {
                                    href: "https://www.linkedin.com/in/joan-glendinning-3a26971b6/",
                                    "aria-label": "Follow on LinkedIn",
                                    icon: SocialIcons/* LinkedInIcon */.nI
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    classname: "relative",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx(components_Button/* Button */.z, {
                                            variant: "secondary",
                                            className: "absolute right-4 mx-3 rounded-full",
                                            style: {
                                                borderRadius: "75%"
                                            },
                                            onClick: ()=>setLanguage("French"),
                                            children: /*#__PURE__*/ jsx_runtime_.jsx(external_react_circle_flags_.CircleFlag, {
                                                countryCode: "fr",
                                                className: "max-w-[2rem]"
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx(components_Button/* Button */.z, {
                                            variant: "secondary",
                                            className: "absolute right-24 rounded-full",
                                            style: {
                                                borderRadius: "75%"
                                            },
                                            onClick: ()=>setLanguage("English"),
                                            children: /*#__PURE__*/ jsx_runtime_.jsx(external_react_circle_flags_.CircleFlag, {
                                                countryCode: "uk",
                                                className: "max-w-[2rem]"
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {})
                                    ]
                                })
                            ]
                        })
                    ]
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(Photos, {}),
            /*#__PURE__*/ jsx_runtime_.jsx(Container/* Container */.W, {
                className: "mt-24 md:mt-28",
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "mx-auto grid max-w-xl grid-cols-1 gap-y-20 lg:max-w-none lg:grid-cols-2",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "flex flex-col gap-16",
                            children: articles.map((article)=>/*#__PURE__*/ jsx_runtime_.jsx(Article, {
                                    article: article
                                }, article.slug))
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "space-y-10 lg:pl-16 xl:pl-24",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx(DownloadCV, {}),
                                /*#__PURE__*/ jsx_runtime_.jsx(Resume, {})
                            ]
                        })
                    ]
                })
            })
        ]
    });
}
function changeToFrench() {}
async function getStaticProps() {
    if (true) {
        await generateRssFeed();
    }
    return {
        props: {
            articles: (await (0,getAllArticles/* getAllArticles */.z)()).slice(0, 4).map(({ component , ...meta })=>meta)
        }
    };
}


/***/ }),

/***/ 8103:
/***/ ((module) => {

module.exports = require("clsx");

/***/ }),

/***/ 2479:
/***/ ((module) => {

module.exports = require("fast-glob");

/***/ }),

/***/ 3280:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/app-router-context.js");

/***/ }),

/***/ 2796:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head-manager-context.js");

/***/ }),

/***/ 4957:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head.js");

/***/ }),

/***/ 4014:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 4486:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-blur-svg.js");

/***/ }),

/***/ 744:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-config-context.js");

/***/ }),

/***/ 5843:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-config.js");

/***/ }),

/***/ 9552:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-loader");

/***/ }),

/***/ 8524:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/is-plain-object.js");

/***/ }),

/***/ 8020:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 4406:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/page-path/denormalize-page-path.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 1751:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/add-path-prefix.js");

/***/ }),

/***/ 6220:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/compare-states.js");

/***/ }),

/***/ 299:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/format-next-pathname-info.js");

/***/ }),

/***/ 3938:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 9565:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 5789:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-next-pathname-info.js");

/***/ }),

/***/ 1897:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-bot.js");

/***/ }),

/***/ 1428:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 8854:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-path.js");

/***/ }),

/***/ 1292:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 4567:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/path-has-prefix.js");

/***/ }),

/***/ 979:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 3297:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/remove-trailing-slash.js");

/***/ }),

/***/ 6052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/resolve-rewrites.js");

/***/ }),

/***/ 4226:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 5052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 618:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils/warn-once.js");

/***/ }),

/***/ 968:
/***/ ((module) => {

module.exports = require("next/head");

/***/ }),

/***/ 1853:
/***/ ((module) => {

module.exports = require("next/router");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 2193:
/***/ ((module) => {

module.exports = require("react-circle-flags");

/***/ }),

/***/ 6405:
/***/ ((module) => {

module.exports = require("react-dom");

/***/ }),

/***/ 5420:
/***/ ((module) => {

module.exports = require("react-wrap-balancer");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 7834:
/***/ ((module) => {

module.exports = import("@mdx-js/react");;

/***/ }),

/***/ 1017:
/***/ ((module) => {

module.exports = require("path");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [675,398,676,664,527,834,109,792,35], () => (__webpack_exec__(2380)));
module.exports = __webpack_exports__;

})();