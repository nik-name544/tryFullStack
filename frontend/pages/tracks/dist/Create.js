"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
exports.__esModule = true;
var core_1 = require("@material-ui/core");
var react_1 = require("react");
var FileUpload_1 = require("../../components/FileUpload");
var StepWrapper_1 = require("../../components/StepWrapper");
var MainLayout_1 = require("../../MainLayout/MainLayout");
var tracks_module_scss_1 = require("./tracks.module.scss");
var useInput_1 = require("../../hooks/useInput");
var axios_1 = require("axios");
var router_1 = require("next/router");
var Create = function () {
    var _a = react_1.useState(null), img = _a[0], setImg = _a[1];
    var _b = react_1.useState(null), track = _b[0], setTrack = _b[1];
    var _c = react_1.useState(0), num = _c[0], setNum = _c[1];
    var _d = react_1.useState(false), isDisabled = _d[0], setIsDisabled = _d[1];
    var _e = react_1.useState(false), isDisabled1 = _e[0], setIsDisabled1 = _e[1];
    var name = useInput_1.useInput('');
    var artist = useInput_1.useInput('');
    var text = useInput_1.useInput('');
    var router = router_1.useRouter();
    var StepContent = function (_a) {
        var className = _a.className, label = _a.label;
        return (react_1["default"].createElement(core_1.Grid, { container: true, direction: "column", className: className[0] },
            react_1["default"].createElement(core_1.TextField, __assign({ label: label[0], className: className[1] }, name)),
            react_1["default"].createElement(core_1.TextField, __assign({ label: label[1], className: className[1] }, artist)),
            react_1["default"].createElement(core_1.TextField, __assign({ label: label[2], className: className[1], multiline: true, rows: 3 }, text))));
    };
    var StepContentFile = function (_a) {
        var accept = _a.accept, setFile = _a.setFile, text = _a.text;
        return (react_1["default"].createElement(FileUpload_1["default"], { setFile: setFile, accept: accept },
            react_1["default"].createElement(core_1.Button, null, text)));
    };
    var sendData = function () {
        console.log(track);
        var formData = new FormData();
        formData.append("name", name.value);
        formData.append("artist", artist.value);
        formData.append("text", text.value);
        formData.append("picture", img);
        formData.append("audio", track);
        axios_1["default"].post("http://localhost:5000/tracks", formData).then(function (res) { return router.push('/tracks'); })["catch"](function (e) { return console.log(e); });
    };
    return (react_1["default"].createElement(MainLayout_1.MainLayout, null,
        react_1["default"].createElement(StepWrapper_1["default"], { activeStep: num }, num === 0 ?
            react_1["default"].createElement(StepContent, { className: ["" + tracks_module_scss_1["default"].stepContent, "" + tracks_module_scss_1["default"].stepContent__item], label: ["track name", "author name", "text"] }) :
            num === 1 ?
                react_1["default"].createElement(StepContentFile, { accept: "image/*", setFile: setImg, text: "upld cover" }) :
                num === 2 ?
                    react_1["default"].createElement(StepContentFile, { accept: "audio/*", setFile: setTrack, text: "upld track" }) :
                    sendData
        // ""
        ),
        react_1["default"].createElement(core_1.Grid, { container: true, justifyContent: "space-between" },
            react_1["default"].createElement(core_1.Button, { disabled: isDisabled, onClick: function () {
                    num > 0 ?
                        (setNum(num - 1), setIsDisabled(false)) :
                        (setNum(num), setIsDisabled(true), setIsDisabled1(false));
                } }, "back"),
            react_1["default"].createElement(core_1.Button, { disabled: isDisabled1, onClick: function () {
                    num <= 2 ?
                        (setNum(num + 1), setIsDisabled(false)) :
                        (setNum(num), setIsDisabled1(true), setIsDisabled(false));
                } }, "next"))));
};
exports["default"] = Create;
// import React, { useState } from 'react'; 
// import StepWrapper from "../../components/StepWrapper";
// import { Button, Grid, TextField } from "@material-ui/core";
// import FileUpload from "../../components/FileUpload";
// import { useInput } from "../../hooks/useInput";
// import axios from "axios";
// import { useRouter } from "next/router";
// import { MainLayout } from '../../MainLayout/MainLayout';
// const Create = () => {
//     const [activeStep, setActiveStep] = useState(0)
//     const [picture, setPicture] = useState(null)
//     const [audio, setAudio] = useState(null)
//     const name = useInput('')
//     const artist = useInput('')
//     const text = useInput('')
//     const router = useRouter()
//     const next = () => {
//         if (activeStep !== 2) {
//             setActiveStep(prev => prev + 1)
//         } else {
//             const formData = new FormData()
//             formData.append('name', name.value)
//             formData.append('text', text.value)
//             formData.append('artist', artist.value)
//             formData.append('picture', picture)
//             formData.append('audio', audio)
//             axios.post('http://localhost:5000/tracks', formData)
//                 .then(resp => router.push('/tracks'))
//                 .catch(e => console.log(e))
//         }
//     }
//     const back = () => {
//         setActiveStep(prev => prev - 1);
//     }
//     return (
//         <MainLayout>
//             <StepWrapper activeStep={activeStep}>
//                 {activeStep === 0 &&
//                     <Grid container direction={"column"} style={{ padding: 20 }}>
//                         <TextField
//                             {...name}
//                             style={{ marginTop: 10 }}
//                             label={"Название трека"}
//                         />
//                         <TextField
//                             {...artist}
//                             style={{ marginTop: 10 }}
//                             label={"Имя исполнителя"}
//                         />
//                         <TextField
//                             {...text}
//                             style={{ marginTop: 10 }}
//                             label={"Слова к треку"}
//                             multiline
//                             rows={3}
//                         />
//                     </Grid>
//                 }
//                 {activeStep === 1 &&
//                     <FileUpload setFile={setPicture} accept="image/*">
//                         <Button>Загрузить изображение</Button>
//                     </FileUpload>
//                 }
//                 {activeStep === 2 &&
//                     <FileUpload setFile={setAudio} accept="audio/*">
//                         <Button>Загрузить аудио</Button>
//                     </FileUpload>
//                 }
//             </StepWrapper>
//             <Grid container justifyContent='space-between'>
//                 <Button disabled={activeStep === 0} onClick={back}>Назад</Button>
//                 <Button onClick={next}>Далее</Button>
//             </Grid>
//         </MainLayout>
//     );
// };
// export default Create;
