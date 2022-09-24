import { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';

import useFetch from '../../hooks/useFetch';
import useTeam from '../../hooks/useTeam';
import ChallengeCard from '../../components/challengeCard/challengeCard';

import styles from './play.module.css';
import LoadingAnimation from '../../components/loadingAnimation/loadingAnimation';

export default function Play() {
    const { apiPostGetJsonAsTeam } = useFetch();
    const { fetchTeam } = useTeam();

    const [formValues, setFormValues] = useState({
        username: '',
        password: ''
    });

    const handleChange = field => e => {
        setFormValues({ ...formValues, [field]: e.target.value });
        // console.log(formValues);
    };

    const submit = e => {
        e.preventDefault();
        apiPostGetJsonAsTeam('/bugbounty/login3', formValues);
        fetchTeam();
    };

    return (
        <>
            <form className='lug-form' onSubmit={submit}>
                <div className='form-start'>Bug Bounty: Login</div>
                <div className='form-field'>
                    User: <input onChange={handleChange('username')} />
                </div>
                <div className='form-field'>
                    Password: <input onChange={handleChange('password')} />
                </div>
                <div className='form-end'>
                    <button className='form-nav-button'>Submit</button>
                </div>
            </form>
	    <div>
	    <style source-path="global-text-editor-styles">
    .mde-cm-wrapper .CodeMirror {
      font-size: 15px;
      font-family: SFMono-Regular, Consolas, Liberation Mono, Menlo, Courier, monospace;
      font-weight: normal;
      line-height: 1.5;
    }

    .mde-preview pre code,
    .mde-preview code {
      font-family: SFMono-Regular, Consolas, Liberation Mono, Menlo, Courier, monospace;
    }
  </style>
  <style source-path="global-preview-styles">
    .mde-preview {
      font-size: 16px
    }
  </style>
  <style source-path="/Users/artemis/Library/Application Support/inkdrop/packages/math/styles/markdown-math.less"
    priority="0">
    @font-face {
      font-family: "KaTeX_AMS";
      src: url("inkdrop://math/node_modules/katex/dist/fonts/KaTeX_AMS-Regular.woff2") format("woff2"), url("inkdrop://math/node_modules/katex/dist/fonts/KaTeX_AMS-Regular.woff") format("woff"), url("inkdrop://math/node_modules/katex/dist/fonts/KaTeX_AMS-Regular.ttf") format("truetype");
      font-weight: normal;
      font-style: normal;
    }

    @font-face {
      font-family: "KaTeX_Caligraphic";
      src: url("inkdrop://math/node_modules/katex/dist/fonts/KaTeX_Caligraphic-Bold.woff2") format("woff2"), url("inkdrop://math/node_modules/katex/dist/fonts/KaTeX_Caligraphic-Bold.woff") format("woff"), url("inkdrop://math/node_modules/katex/dist/fonts/KaTeX_Caligraphic-Bold.ttf") format("truetype");
      font-weight: bold;
      font-style: normal;
    }

    @font-face {
      font-family: "KaTeX_Caligraphic";
      src: url("inkdrop://math/node_modules/katex/dist/fonts/KaTeX_Caligraphic-Regular.woff2") format("woff2"), url("inkdrop://math/node_modules/katex/dist/fonts/KaTeX_Caligraphic-Regular.woff") format("woff"), url("inkdrop://math/node_modules/katex/dist/fonts/KaTeX_Caligraphic-Regular.ttf") format("truetype");
      font-weight: normal;
      font-style: normal;
    }

    @font-face {
      font-family: "KaTeX_Fraktur";
      src: url("inkdrop://math/node_modules/katex/dist/fonts/KaTeX_Fraktur-Bold.woff2") format("woff2"), url("inkdrop://math/node_modules/katex/dist/fonts/KaTeX_Fraktur-Bold.woff") format("woff"), url("inkdrop://math/node_modules/katex/dist/fonts/KaTeX_Fraktur-Bold.ttf") format("truetype");
      font-weight: bold;
      font-style: normal;
    }

    @font-face {
      font-family: "KaTeX_Fraktur";
      src: url("inkdrop://math/node_modules/katex/dist/fonts/KaTeX_Fraktur-Regular.woff2") format("woff2"), url("inkdrop://math/node_modules/katex/dist/fonts/KaTeX_Fraktur-Regular.woff") format("woff"), url("inkdrop://math/node_modules/katex/dist/fonts/KaTeX_Fraktur-Regular.ttf") format("truetype");
      font-weight: normal;
      font-style: normal;
    }

    @font-face {
      font-family: "KaTeX_Main";
      src: url("inkdrop://math/node_modules/katex/dist/fonts/KaTeX_Main-Bold.woff2") format("woff2"), url("inkdrop://math/node_modules/katex/dist/fonts/KaTeX_Main-Bold.woff") format("woff"), url("inkdrop://math/node_modules/katex/dist/fonts/KaTeX_Main-Bold.ttf") format("truetype");
      font-weight: bold;
      font-style: normal;
    }

    @font-face {
      font-family: "KaTeX_Main";
      src: url("inkdrop://math/node_modules/katex/dist/fonts/KaTeX_Main-BoldItalic.woff2") format("woff2"), url("inkdrop://math/node_modules/katex/dist/fonts/KaTeX_Main-BoldItalic.woff") format("woff"), url("inkdrop://math/node_modules/katex/dist/fonts/KaTeX_Main-BoldItalic.ttf") format("truetype");
      font-weight: bold;
      font-style: italic;
    }

    @font-face {
      font-family: "KaTeX_Main";
      src: url("inkdrop://math/node_modules/katex/dist/fonts/KaTeX_Main-Italic.woff2") format("woff2"), url("inkdrop://math/node_modules/katex/dist/fonts/KaTeX_Main-Italic.woff") format("woff"), url("inkdrop://math/node_modules/katex/dist/fonts/KaTeX_Main-Italic.ttf") format("truetype");
      font-weight: normal;
      font-style: italic;
    }

    @font-face {
      font-family: "KaTeX_Main";
      src: url("inkdrop://math/node_modules/katex/dist/fonts/KaTeX_Main-Regular.woff2") format("woff2"), url("inkdrop://math/node_modules/katex/dist/fonts/KaTeX_Main-Regular.woff") format("woff"), url("inkdrop://math/node_modules/katex/dist/fonts/KaTeX_Main-Regular.ttf") format("truetype");
      font-weight: normal;
      font-style: normal;
    }

    @font-face {
      font-family: "KaTeX_Math";
      src: url("inkdrop://math/node_modules/katex/dist/fonts/KaTeX_Math-BoldItalic.woff2") format("woff2"), url("inkdrop://math/node_modules/katex/dist/fonts/KaTeX_Math-BoldItalic.woff") format("woff"), url("inkdrop://math/node_modules/katex/dist/fonts/KaTeX_Math-BoldItalic.ttf") format("truetype");
      font-weight: bold;
      font-style: italic;
    }

    @font-face {
      font-family: "KaTeX_Math";
      src: url("inkdrop://math/node_modules/katex/dist/fonts/KaTeX_Math-Italic.woff2") format("woff2"), url("inkdrop://math/node_modules/katex/dist/fonts/KaTeX_Math-Italic.woff") format("woff"), url("inkdrop://math/node_modules/katex/dist/fonts/KaTeX_Math-Italic.ttf") format("truetype");
      font-weight: normal;
      font-style: italic;
    }

    @font-face {
      font-family: "KaTeX_SansSerif";
      src: url("inkdrop://math/node_modules/katex/dist/fonts/KaTeX_SansSerif-Bold.woff2") format("woff2"), url("inkdrop://math/node_modules/katex/dist/fonts/KaTeX_SansSerif-Bold.woff") format("woff"), url("inkdrop://math/node_modules/katex/dist/fonts/KaTeX_SansSerif-Bold.ttf") format("truetype");
      font-weight: bold;
      font-style: normal;
    }

    @font-face {
      font-family: "KaTeX_SansSerif";
      src: url("inkdrop://math/node_modules/katex/dist/fonts/KaTeX_SansSerif-Italic.woff2") format("woff2"), url("inkdrop://math/node_modules/katex/dist/fonts/KaTeX_SansSerif-Italic.woff") format("woff"), url("inkdrop://math/node_modules/katex/dist/fonts/KaTeX_SansSerif-Italic.ttf") format("truetype");
      font-weight: normal;
      font-style: italic;
    }

    @font-face {
      font-family: "KaTeX_SansSerif";
      src: url("inkdrop://math/node_modules/katex/dist/fonts/KaTeX_SansSerif-Regular.woff2") format("woff2"), url("inkdrop://math/node_modules/katex/dist/fonts/KaTeX_SansSerif-Regular.woff") format("woff"), url("inkdrop://math/node_modules/katex/dist/fonts/KaTeX_SansSerif-Regular.ttf") format("truetype");
      font-weight: normal;
      font-style: normal;
    }

    @font-face {
      font-family: "KaTeX_Script";
      src: url("inkdrop://math/node_modules/katex/dist/fonts/KaTeX_Script-Regular.woff2") format("woff2"), url("inkdrop://math/node_modules/katex/dist/fonts/KaTeX_Script-Regular.woff") format("woff"), url("inkdrop://math/node_modules/katex/dist/fonts/KaTeX_Script-Regular.ttf") format("truetype");
      font-weight: normal;
      font-style: normal;
    }

    @font-face {
      font-family: "KaTeX_Size1";
      src: url("inkdrop://math/node_modules/katex/dist/fonts/KaTeX_Size1-Regular.woff2") format("woff2"), url("inkdrop://math/node_modules/katex/dist/fonts/KaTeX_Size1-Regular.woff") format("woff"), url("inkdrop://math/node_modules/katex/dist/fonts/KaTeX_Size1-Regular.ttf") format("truetype");
      font-weight: normal;
      font-style: normal;
    }

    @font-face {
      font-family: "KaTeX_Size2";
      src: url("inkdrop://math/node_modules/katex/dist/fonts/KaTeX_Size2-Regular.woff2") format("woff2"), url("inkdrop://math/node_modules/katex/dist/fonts/KaTeX_Size2-Regular.woff") format("woff"), url("inkdrop://math/node_modules/katex/dist/fonts/KaTeX_Size2-Regular.ttf") format("truetype");
      font-weight: normal;
      font-style: normal;
    }

    @font-face {
      font-family: "KaTeX_Size3";
      src: url("inkdrop://math/node_modules/katex/dist/fonts/KaTeX_Size3-Regular.woff2") format("woff2"), url("inkdrop://math/node_modules/katex/dist/fonts/KaTeX_Size3-Regular.woff") format("woff"), url("inkdrop://math/node_modules/katex/dist/fonts/KaTeX_Size3-Regular.ttf") format("truetype");
      font-weight: normal;
      font-style: normal;
    }

    @font-face {
      font-family: "KaTeX_Size4";
      src: url("inkdrop://math/node_modules/katex/dist/fonts/KaTeX_Size4-Regular.woff2") format("woff2"), url("inkdrop://math/node_modules/katex/dist/fonts/KaTeX_Size4-Regular.woff") format("woff"), url("inkdrop://math/node_modules/katex/dist/fonts/KaTeX_Size4-Regular.ttf") format("truetype");
      font-weight: normal;
      font-style: normal;
    }

    @font-face {
      font-family: "KaTeX_Typewriter";
      src: url("inkdrop://math/node_modules/katex/dist/fonts/KaTeX_Typewriter-Regular.woff2") format("woff2"), url("inkdrop://math/node_modules/katex/dist/fonts/KaTeX_Typewriter-Regular.woff") format("woff"), url("inkdrop://math/node_modules/katex/dist/fonts/KaTeX_Typewriter-Regular.ttf") format("truetype");
      font-weight: normal;
      font-style: normal;
    }

    .katex {
      font: normal 1.21em KaTeX_Main, Times New Roman, serif;
      line-height: 1.2;
      text-indent: 0;
      text-rendering: auto;
    }

    .katex * {
      -ms-high-contrast-adjust: none !important;
      border-color: currentColor;
    }

    .katex .katex-version::after {
      content: "";
    }

    .katex .katex-mathml {
      /* Accessibility hack to only show to screen readers
         Found at: http://a11yproject.com/posts/how-to-hide-content/ */
      position: absolute;
      clip: rect(1px, 1px, 1px, 1px);
      padding: 0;
      border: 0;
      height: 1px;
      width: 1px;
      overflow: hidden;
    }

    .katex .katex-html {
      /* \newline is an empty block at top level, between .base elements */
    }

    .katex .katex-html>.newline {
      display: block;
    }

    .katex .base {
      position: relative;
      display: inline-block;
      white-space: nowrap;
      width: min-content;
    }

    .katex .strut {
      display: inline-block;
    }

    .katex .textbf {
      font-weight: bold;
    }

    .katex .textit {
      font-style: italic;
    }

    .katex .textrm {
      font-family: KaTeX_Main;
    }

    .katex .textsf {
      font-family: KaTeX_SansSerif;
    }

    .katex .texttt {
      font-family: KaTeX_Typewriter;
    }

    .katex .mathnormal {
      font-family: KaTeX_Math;
      font-style: italic;
    }

    .katex .mathit {
      font-family: KaTeX_Main;
      font-style: italic;
    }

    .katex .mathrm {
      font-style: normal;
    }

    .katex .mathbf {
      font-family: KaTeX_Main;
      font-weight: bold;
    }

    .katex .boldsymbol {
      font-family: KaTeX_Math;
      font-weight: bold;
      font-style: italic;
    }

    .katex .amsrm {
      font-family: KaTeX_AMS;
    }

    .katex .mathbb,
    .katex .textbb {
      font-family: KaTeX_AMS;
    }

    .katex .mathcal {
      font-family: KaTeX_Caligraphic;
    }

    .katex .mathfrak,
    .katex .textfrak {
      font-family: KaTeX_Fraktur;
    }

    .katex .mathtt {
      font-family: KaTeX_Typewriter;
    }

    .katex .mathscr,
    .katex .textscr {
      font-family: KaTeX_Script;
    }

    .katex .mathsf,
    .katex .textsf {
      font-family: KaTeX_SansSerif;
    }

    .katex .mathboldsf,
    .katex .textboldsf {
      font-family: KaTeX_SansSerif;
      font-weight: bold;
    }

    .katex .mathitsf,
    .katex .textitsf {
      font-family: KaTeX_SansSerif;
      font-style: italic;
    }

    .katex .mainrm {
      font-family: KaTeX_Main;
      font-style: normal;
    }

    .katex .vlist-t {
      display: inline-table;
      table-layout: fixed;
      border-collapse: collapse;
    }

    .katex .vlist-r {
      display: table-row;
    }

    .katex .vlist {
      display: table-cell;
      vertical-align: bottom;
      position: relative;
    }

    .katex .vlist>span {
      display: block;
      height: 0;
      position: relative;
    }

    .katex .vlist>span>span {
      display: inline-block;
    }

    .katex .vlist>span>.pstrut {
      overflow: hidden;
      width: 0;
    }

    .katex .vlist-t2 {
      margin-right: -2px;
    }

    .katex .vlist-s {
      display: table-cell;
      vertical-align: bottom;
      font-size: 1px;
      width: 2px;
      min-width: 2px;
    }

    .katex .vbox {
      display: inline-flex;
      flex-direction: column;
      align-items: baseline;
    }

    .katex .hbox {
      display: inline-flex;
      flex-direction: row;
      width: 100%;
    }

    .katex .thinbox {
      display: inline-flex;
      flex-direction: row;
      width: 0;
      max-width: 0;
    }

    .katex .msupsub {
      text-align: left;
    }

    .katex .mfrac>span>span {
      text-align: center;
    }

    .katex .mfrac .frac-line {
      display: inline-block;
      width: 100%;
      border-bottom-style: solid;
    }

    .katex .mfrac .frac-line,
    .katex .overline .overline-line,
    .katex .underline .underline-line,
    .katex .hline,
    .katex .hdashline,
    .katex .rule {
      min-height: 1px;
    }

    .katex .mspace {
      display: inline-block;
    }

    .katex .llap,
    .katex .rlap,
    .katex .clap {
      width: 0;
      position: relative;
    }

    .katex .llap>.inner,
    .katex .rlap>.inner,
    .katex .clap>.inner {
      position: absolute;
    }

    .katex .llap>.fix,
    .katex .rlap>.fix,
    .katex .clap>.fix {
      display: inline-block;
    }

    .katex .llap>.inner {
      right: 0;
    }

    .katex .rlap>.inner,
    .katex .clap>.inner {
      left: 0;
    }

    .katex .clap>.inner>span {
      margin-left: -50%;
      margin-right: 50%;
    }

    .katex .rule {
      display: inline-block;
      border: solid 0;
      position: relative;
    }

    .katex .overline .overline-line,
    .katex .underline .underline-line,
    .katex .hline {
      display: inline-block;
      width: 100%;
      border-bottom-style: solid;
    }

    .katex .hdashline {
      display: inline-block;
      width: 100%;
      border-bottom-style: dashed;
    }

    .katex .sqrt>.root {
      /* These values are taken from the definition of `\r@@t`,
             `\mkern 5mu` and `\mkern -10mu`. */
      margin-left: 0.27777778em;
      margin-right: -0.55555556em;
    }

    .katex .sizing.reset-size1.size1,
    .katex .fontsize-ensurer.reset-size1.size1 {
      font-size: 1em;
    }

    .katex .sizing.reset-size1.size2,
    .katex .fontsize-ensurer.reset-size1.size2 {
      font-size: 1.2em;
    }

    .katex .sizing.reset-size1.size3,
    .katex .fontsize-ensurer.reset-size1.size3 {
      font-size: 1.4em;
    }

    .katex .sizing.reset-size1.size4,
    .katex .fontsize-ensurer.reset-size1.size4 {
      font-size: 1.6em;
    }

    .katex .sizing.reset-size1.size5,
    .katex .fontsize-ensurer.reset-size1.size5 {
      font-size: 1.8em;
    }

    .katex .sizing.reset-size1.size6,
    .katex .fontsize-ensurer.reset-size1.size6 {
      font-size: 2em;
    }

    .katex .sizing.reset-size1.size7,
    .katex .fontsize-ensurer.reset-size1.size7 {
      font-size: 2.4em;
    }

    .katex .sizing.reset-size1.size8,
    .katex .fontsize-ensurer.reset-size1.size8 {
      font-size: 2.88em;
    }

    .katex .sizing.reset-size1.size9,
    .katex .fontsize-ensurer.reset-size1.size9 {
      font-size: 3.456em;
    }

    .katex .sizing.reset-size1.size10,
    .katex .fontsize-ensurer.reset-size1.size10 {
      font-size: 4.148em;
    }

    .katex .sizing.reset-size1.size11,
    .katex .fontsize-ensurer.reset-size1.size11 {
      font-size: 4.976em;
    }

    .katex .sizing.reset-size2.size1,
    .katex .fontsize-ensurer.reset-size2.size1 {
      font-size: 0.83333333em;
    }

    .katex .sizing.reset-size2.size2,
    .katex .fontsize-ensurer.reset-size2.size2 {
      font-size: 1em;
    }

    .katex .sizing.reset-size2.size3,
    .katex .fontsize-ensurer.reset-size2.size3 {
      font-size: 1.16666667em;
    }

    .katex .sizing.reset-size2.size4,
    .katex .fontsize-ensurer.reset-size2.size4 {
      font-size: 1.33333333em;
    }

    .katex .sizing.reset-size2.size5,
    .katex .fontsize-ensurer.reset-size2.size5 {
      font-size: 1.5em;
    }

    .katex .sizing.reset-size2.size6,
    .katex .fontsize-ensurer.reset-size2.size6 {
      font-size: 1.66666667em;
    }

    .katex .sizing.reset-size2.size7,
    .katex .fontsize-ensurer.reset-size2.size7 {
      font-size: 2em;
    }

    .katex .sizing.reset-size2.size8,
    .katex .fontsize-ensurer.reset-size2.size8 {
      font-size: 2.4em;
    }

    .katex .sizing.reset-size2.size9,
    .katex .fontsize-ensurer.reset-size2.size9 {
      font-size: 2.88em;
    }

    .katex .sizing.reset-size2.size10,
    .katex .fontsize-ensurer.reset-size2.size10 {
      font-size: 3.45666667em;
    }

    .katex .sizing.reset-size2.size11,
    .katex .fontsize-ensurer.reset-size2.size11 {
      font-size: 4.14666667em;
    }

    .katex .sizing.reset-size3.size1,
    .katex .fontsize-ensurer.reset-size3.size1 {
      font-size: 0.71428571em;
    }

    .katex .sizing.reset-size3.size2,
    .katex .fontsize-ensurer.reset-size3.size2 {
      font-size: 0.85714286em;
    }

    .katex .sizing.reset-size3.size3,
    .katex .fontsize-ensurer.reset-size3.size3 {
      font-size: 1em;
    }

    .katex .sizing.reset-size3.size4,
    .katex .fontsize-ensurer.reset-size3.size4 {
      font-size: 1.14285714em;
    }

    .katex .sizing.reset-size3.size5,
    .katex .fontsize-ensurer.reset-size3.size5 {
      font-size: 1.28571429em;
    }

    .katex .sizing.reset-size3.size6,
    .katex .fontsize-ensurer.reset-size3.size6 {
      font-size: 1.42857143em;
    }

    .katex .sizing.reset-size3.size7,
    .katex .fontsize-ensurer.reset-size3.size7 {
      font-size: 1.71428571em;
    }

    .katex .sizing.reset-size3.size8,
    .katex .fontsize-ensurer.reset-size3.size8 {
      font-size: 2.05714286em;
    }

    .katex .sizing.reset-size3.size9,
    .katex .fontsize-ensurer.reset-size3.size9 {
      font-size: 2.46857143em;
    }

    .katex .sizing.reset-size3.size10,
    .katex .fontsize-ensurer.reset-size3.size10 {
      font-size: 2.96285714em;
    }

    .katex .sizing.reset-size3.size11,
    .katex .fontsize-ensurer.reset-size3.size11 {
      font-size: 3.55428571em;
    }

    .katex .sizing.reset-size4.size1,
    .katex .fontsize-ensurer.reset-size4.size1 {
      font-size: 0.625em;
    }

    .katex .sizing.reset-size4.size2,
    .katex .fontsize-ensurer.reset-size4.size2 {
      font-size: 0.75em;
    }

    .katex .sizing.reset-size4.size3,
    .katex .fontsize-ensurer.reset-size4.size3 {
      font-size: 0.875em;
    }

    .katex .sizing.reset-size4.size4,
    .katex .fontsize-ensurer.reset-size4.size4 {
      font-size: 1em;
    }

    .katex .sizing.reset-size4.size5,
    .katex .fontsize-ensurer.reset-size4.size5 {
      font-size: 1.125em;
    }

    .katex .sizing.reset-size4.size6,
    .katex .fontsize-ensurer.reset-size4.size6 {
      font-size: 1.25em;
    }

    .katex .sizing.reset-size4.size7,
    .katex .fontsize-ensurer.reset-size4.size7 {
      font-size: 1.5em;
    }

    .katex .sizing.reset-size4.size8,
    .katex .fontsize-ensurer.reset-size4.size8 {
      font-size: 1.8em;
    }

    .katex .sizing.reset-size4.size9,
    .katex .fontsize-ensurer.reset-size4.size9 {
      font-size: 2.16em;
    }

    .katex .sizing.reset-size4.size10,
    .katex .fontsize-ensurer.reset-size4.size10 {
      font-size: 2.5925em;
    }

    .katex .sizing.reset-size4.size11,
    .katex .fontsize-ensurer.reset-size4.size11 {
      font-size: 3.11em;
    }

    .katex .sizing.reset-size5.size1,
    .katex .fontsize-ensurer.reset-size5.size1 {
      font-size: 0.55555556em;
    }

    .katex .sizing.reset-size5.size2,
    .katex .fontsize-ensurer.reset-size5.size2 {
      font-size: 0.66666667em;
    }

    .katex .sizing.reset-size5.size3,
    .katex .fontsize-ensurer.reset-size5.size3 {
      font-size: 0.77777778em;
    }

    .katex .sizing.reset-size5.size4,
    .katex .fontsize-ensurer.reset-size5.size4 {
      font-size: 0.88888889em;
    }

    .katex .sizing.reset-size5.size5,
    .katex .fontsize-ensurer.reset-size5.size5 {
      font-size: 1em;
    }

    .katex .sizing.reset-size5.size6,
    .katex .fontsize-ensurer.reset-size5.size6 {
      font-size: 1.11111111em;
    }

    .katex .sizing.reset-size5.size7,
    .katex .fontsize-ensurer.reset-size5.size7 {
      font-size: 1.33333333em;
    }

    .katex .sizing.reset-size5.size8,
    .katex .fontsize-ensurer.reset-size5.size8 {
      font-size: 1.6em;
    }

    .katex .sizing.reset-size5.size9,
    .katex .fontsize-ensurer.reset-size5.size9 {
      font-size: 1.92em;
    }

    .katex .sizing.reset-size5.size10,
    .katex .fontsize-ensurer.reset-size5.size10 {
      font-size: 2.30444444em;
    }

    .katex .sizing.reset-size5.size11,
    .katex .fontsize-ensurer.reset-size5.size11 {
      font-size: 2.76444444em;
    }

    .katex .sizing.reset-size6.size1,
    .katex .fontsize-ensurer.reset-size6.size1 {
      font-size: 0.5em;
    }

    .katex .sizing.reset-size6.size2,
    .katex .fontsize-ensurer.reset-size6.size2 {
      font-size: 0.6em;
    }

    .katex .sizing.reset-size6.size3,
    .katex .fontsize-ensurer.reset-size6.size3 {
      font-size: 0.7em;
    }

    .katex .sizing.reset-size6.size4,
    .katex .fontsize-ensurer.reset-size6.size4 {
      font-size: 0.8em;
    }

    .katex .sizing.reset-size6.size5,
    .katex .fontsize-ensurer.reset-size6.size5 {
      font-size: 0.9em;
    }

    .katex .sizing.reset-size6.size6,
    .katex .fontsize-ensurer.reset-size6.size6 {
      font-size: 1em;
    }

    .katex .sizing.reset-size6.size7,
    .katex .fontsize-ensurer.reset-size6.size7 {
      font-size: 1.2em;
    }

    .katex .sizing.reset-size6.size8,
    .katex .fontsize-ensurer.reset-size6.size8 {
      font-size: 1.44em;
    }

    .katex .sizing.reset-size6.size9,
    .katex .fontsize-ensurer.reset-size6.size9 {
      font-size: 1.728em;
    }

    .katex .sizing.reset-size6.size10,
    .katex .fontsize-ensurer.reset-size6.size10 {
      font-size: 2.074em;
    }

    .katex .sizing.reset-size6.size11,
    .katex .fontsize-ensurer.reset-size6.size11 {
      font-size: 2.488em;
    }

    .katex .sizing.reset-size7.size1,
    .katex .fontsize-ensurer.reset-size7.size1 {
      font-size: 0.41666667em;
    }

    .katex .sizing.reset-size7.size2,
    .katex .fontsize-ensurer.reset-size7.size2 {
      font-size: 0.5em;
    }

    .katex .sizing.reset-size7.size3,
    .katex .fontsize-ensurer.reset-size7.size3 {
      font-size: 0.58333333em;
    }

    .katex .sizing.reset-size7.size4,
    .katex .fontsize-ensurer.reset-size7.size4 {
      font-size: 0.66666667em;
    }

    .katex .sizing.reset-size7.size5,
    .katex .fontsize-ensurer.reset-size7.size5 {
      font-size: 0.75em;
    }

    .katex .sizing.reset-size7.size6,
    .katex .fontsize-ensurer.reset-size7.size6 {
      font-size: 0.83333333em;
    }

    .katex .sizing.reset-size7.size7,
    .katex .fontsize-ensurer.reset-size7.size7 {
      font-size: 1em;
    }

    .katex .sizing.reset-size7.size8,
    .katex .fontsize-ensurer.reset-size7.size8 {
      font-size: 1.2em;
    }

    .katex .sizing.reset-size7.size9,
    .katex .fontsize-ensurer.reset-size7.size9 {
      font-size: 1.44em;
    }

    .katex .sizing.reset-size7.size10,
    .katex .fontsize-ensurer.reset-size7.size10 {
      font-size: 1.72833333em;
    }

    .katex .sizing.reset-size7.size11,
    .katex .fontsize-ensurer.reset-size7.size11 {
      font-size: 2.07333333em;
    }

    .katex .sizing.reset-size8.size1,
    .katex .fontsize-ensurer.reset-size8.size1 {
      font-size: 0.34722222em;
    }

    .katex .sizing.reset-size8.size2,
    .katex .fontsize-ensurer.reset-size8.size2 {
      font-size: 0.41666667em;
    }

    .katex .sizing.reset-size8.size3,
    .katex .fontsize-ensurer.reset-size8.size3 {
      font-size: 0.48611111em;
    }

    .katex .sizing.reset-size8.size4,
    .katex .fontsize-ensurer.reset-size8.size4 {
      font-size: 0.55555556em;
    }

    .katex .sizing.reset-size8.size5,
    .katex .fontsize-ensurer.reset-size8.size5 {
      font-size: 0.625em;
    }

    .katex .sizing.reset-size8.size6,
    .katex .fontsize-ensurer.reset-size8.size6 {
      font-size: 0.69444444em;
    }

    .katex .sizing.reset-size8.size7,
    .katex .fontsize-ensurer.reset-size8.size7 {
      font-size: 0.83333333em;
    }

    .katex .sizing.reset-size8.size8,
    .katex .fontsize-ensurer.reset-size8.size8 {
      font-size: 1em;
    }

    .katex .sizing.reset-size8.size9,
    .katex .fontsize-ensurer.reset-size8.size9 {
      font-size: 1.2em;
    }

    .katex .sizing.reset-size8.size10,
    .katex .fontsize-ensurer.reset-size8.size10 {
      font-size: 1.44027778em;
    }

    .katex .sizing.reset-size8.size11,
    .katex .fontsize-ensurer.reset-size8.size11 {
      font-size: 1.72777778em;
    }

    .katex .sizing.reset-size9.size1,
    .katex .fontsize-ensurer.reset-size9.size1 {
      font-size: 0.28935185em;
    }

    .katex .sizing.reset-size9.size2,
    .katex .fontsize-ensurer.reset-size9.size2 {
      font-size: 0.34722222em;
    }

    .katex .sizing.reset-size9.size3,
    .katex .fontsize-ensurer.reset-size9.size3 {
      font-size: 0.40509259em;
    }

    .katex .sizing.reset-size9.size4,
    .katex .fontsize-ensurer.reset-size9.size4 {
      font-size: 0.46296296em;
    }

    .katex .sizing.reset-size9.size5,
    .katex .fontsize-ensurer.reset-size9.size5 {
      font-size: 0.52083333em;
    }

    .katex .sizing.reset-size9.size6,
    .katex .fontsize-ensurer.reset-size9.size6 {
      font-size: 0.5787037em;
    }

    .katex .sizing.reset-size9.size7,
    .katex .fontsize-ensurer.reset-size9.size7 {
      font-size: 0.69444444em;
    }

    .katex .sizing.reset-size9.size8,
    .katex .fontsize-ensurer.reset-size9.size8 {
      font-size: 0.83333333em;
    }

    .katex .sizing.reset-size9.size9,
    .katex .fontsize-ensurer.reset-size9.size9 {
      font-size: 1em;
    }

    .katex .sizing.reset-size9.size10,
    .katex .fontsize-ensurer.reset-size9.size10 {
      font-size: 1.20023148em;
    }

    .katex .sizing.reset-size9.size11,
    .katex .fontsize-ensurer.reset-size9.size11 {
      font-size: 1.43981481em;
    }

    .katex .sizing.reset-size10.size1,
    .katex .fontsize-ensurer.reset-size10.size1 {
      font-size: 0.24108004em;
    }

    .katex .sizing.reset-size10.size2,
    .katex .fontsize-ensurer.reset-size10.size2 {
      font-size: 0.28929605em;
    }

    .katex .sizing.reset-size10.size3,
    .katex .fontsize-ensurer.reset-size10.size3 {
      font-size: 0.33751205em;
    }

    .katex .sizing.reset-size10.size4,
    .katex .fontsize-ensurer.reset-size10.size4 {
      font-size: 0.38572806em;
    }

    .katex .sizing.reset-size10.size5,
    .katex .fontsize-ensurer.reset-size10.size5 {
      font-size: 0.43394407em;
    }

    .katex .sizing.reset-size10.size6,
    .katex .fontsize-ensurer.reset-size10.size6 {
      font-size: 0.48216008em;
    }

    .katex .sizing.reset-size10.size7,
    .katex .fontsize-ensurer.reset-size10.size7 {
      font-size: 0.57859209em;
    }

    .katex .sizing.reset-size10.size8,
    .katex .fontsize-ensurer.reset-size10.size8 {
      font-size: 0.69431051em;
    }

    .katex .sizing.reset-size10.size9,
    .katex .fontsize-ensurer.reset-size10.size9 {
      font-size: 0.83317261em;
    }

    .katex .sizing.reset-size10.size10,
    .katex .fontsize-ensurer.reset-size10.size10 {
      font-size: 1em;
    }

    .katex .sizing.reset-size10.size11,
    .katex .fontsize-ensurer.reset-size10.size11 {
      font-size: 1.19961427em;
    }

    .katex .sizing.reset-size11.size1,
    .katex .fontsize-ensurer.reset-size11.size1 {
      font-size: 0.20096463em;
    }

    .katex .sizing.reset-size11.size2,
    .katex .fontsize-ensurer.reset-size11.size2 {
      font-size: 0.24115756em;
    }

    .katex .sizing.reset-size11.size3,
    .katex .fontsize-ensurer.reset-size11.size3 {
      font-size: 0.28135048em;
    }

    .katex .sizing.reset-size11.size4,
    .katex .fontsize-ensurer.reset-size11.size4 {
      font-size: 0.32154341em;
    }

    .katex .sizing.reset-size11.size5,
    .katex .fontsize-ensurer.reset-size11.size5 {
      font-size: 0.36173633em;
    }

    .katex .sizing.reset-size11.size6,
    .katex .fontsize-ensurer.reset-size11.size6 {
      font-size: 0.40192926em;
    }

    .katex .sizing.reset-size11.size7,
    .katex .fontsize-ensurer.reset-size11.size7 {
      font-size: 0.48231511em;
    }

    .katex .sizing.reset-size11.size8,
    .katex .fontsize-ensurer.reset-size11.size8 {
      font-size: 0.57877814em;
    }

    .katex .sizing.reset-size11.size9,
    .katex .fontsize-ensurer.reset-size11.size9 {
      font-size: 0.69453376em;
    }

    .katex .sizing.reset-size11.size10,
    .katex .fontsize-ensurer.reset-size11.size10 {
      font-size: 0.83360129em;
    }

    .katex .sizing.reset-size11.size11,
    .katex .fontsize-ensurer.reset-size11.size11 {
      font-size: 1em;
    }

    .katex .delimsizing.size1 {
      font-family: KaTeX_Size1;
    }

    .katex .delimsizing.size2 {
      font-family: KaTeX_Size2;
    }

    .katex .delimsizing.size3 {
      font-family: KaTeX_Size3;
    }

    .katex .delimsizing.size4 {
      font-family: KaTeX_Size4;
    }

    .katex .delimsizing.mult .delim-size1>span {
      font-family: KaTeX_Size1;
    }

    .katex .delimsizing.mult .delim-size4>span {
      font-family: KaTeX_Size4;
    }

    .katex .nulldelimiter {
      display: inline-block;
      width: 0.12em;
    }

    .katex .delimcenter {
      position: relative;
    }

    .katex .op-symbol {
      position: relative;
    }

    .katex .op-symbol.small-op {
      font-family: KaTeX_Size1;
    }

    .katex .op-symbol.large-op {
      font-family: KaTeX_Size2;
    }

    .katex .op-limits>.vlist-t {
      text-align: center;
    }

    .katex .accent>.vlist-t {
      text-align: center;
    }

    .katex .accent .accent-body {
      position: relative;
    }

    .katex .accent .accent-body:not(.accent-full) {
      width: 0;
    }

    .katex .overlay {
      display: block;
    }

    .katex .mtable .vertical-separator {
      display: inline-block;
      min-width: 1px;
    }

    .katex .mtable .arraycolsep {
      display: inline-block;
    }

    .katex .mtable .col-align-c>.vlist-t {
      text-align: center;
    }

    .katex .mtable .col-align-l>.vlist-t {
      text-align: left;
    }

    .katex .mtable .col-align-r>.vlist-t {
      text-align: right;
    }

    .katex .svg-align {
      text-align: left;
    }

    .katex svg {
      display: block;
      position: absolute;
      width: 100%;
      height: inherit;
      fill: currentColor;
      stroke: currentColor;
      fill-rule: nonzero;
      fill-opacity: 1;
      stroke-width: 1;
      stroke-linecap: butt;
      stroke-linejoin: miter;
      stroke-miterlimit: 4;
      stroke-dasharray: none;
      stroke-dashoffset: 0;
      stroke-opacity: 1;
    }

    .katex svg path {
      stroke: none;
    }

    .katex img {
      border-style: none;
      min-width: 0;
      min-height: 0;
      max-width: none;
      max-height: none;
    }

    .katex .stretchy {
      width: 100%;
      display: block;
      position: relative;
      overflow: hidden;
    }

    .katex .stretchy::before,
    .katex .stretchy::after {
      content: "";
    }

    .katex .hide-tail {
      width: 100%;
      position: relative;
      overflow: hidden;
    }

    .katex .halfarrow-left {
      position: absolute;
      left: 0;
      width: 50.2%;
      overflow: hidden;
    }

    .katex .halfarrow-right {
      position: absolute;
      right: 0;
      width: 50.2%;
      overflow: hidden;
    }

    .katex .brace-left {
      position: absolute;
      left: 0;
      width: 25.1%;
      overflow: hidden;
    }

    .katex .brace-center {
      position: absolute;
      left: 25%;
      width: 50%;
      overflow: hidden;
    }

    .katex .brace-right {
      position: absolute;
      right: 0;
      width: 25.1%;
      overflow: hidden;
    }

    .katex .x-arrow-pad {
      padding: 0 0.5em;
    }

    .katex .cd-arrow-pad {
      padding: 0 0.55556em 0 0.27778em;
    }

    .katex .x-arrow,
    .katex .mover,
    .katex .munder {
      text-align: center;
    }

    .katex .boxpad {
      padding: 0 0.3em 0 0.3em;
    }

    .katex .fbox,
    .katex .fcolorbox {
      box-sizing: border-box;
      border: 0.04em solid;
    }

    .katex .cancel-pad {
      padding: 0 0.2em 0 0.2em;
    }

    .katex .cancel-lap {
      margin-left: -0.2em;
      margin-right: -0.2em;
    }

    .katex .sout {
      border-bottom-style: solid;
      border-bottom-width: 0.08em;
    }

    .katex .angl {
      box-sizing: border-box;
      border-top: 0.049em solid;
      border-right: 0.049em solid;
      margin-right: 0.03889em;
    }

    .katex .anglpad {
      padding: 0 0.03889em 0 0.03889em;
    }

    .katex .eqn-num::before {
      counter-increment: katexEqnNo;
      content: "(" counter(katexEqnNo) ")";
    }

    .katex .mml-eqn-num::before {
      counter-increment: mmlEqnNo;
      content: "(" counter(mmlEqnNo) ")";
    }

    .katex .mtr-glue {
      width: 50%;
    }

    .katex .cd-vert-arrow {
      display: inline-block;
      position: relative;
    }

    .katex .cd-label-left {
      display: inline-block;
      position: absolute;
      right: calc(50% + 0.3em);
      text-align: left;
    }

    .katex .cd-label-right {
      display: inline-block;
      position: absolute;
      left: calc(50% + 0.3em);
      text-align: right;
    }

    .katex-display {
      display: block;
      margin: 1em 0;
      text-align: center;
    }

    .katex-display>.katex {
      display: block;
      text-align: center;
      white-space: nowrap;
    }

    .katex-display>.katex>.katex-html {
      display: block;
      position: relative;
    }

    .katex-display>.katex>.katex-html>.tag {
      position: absolute;
      right: 0;
    }

    .katex-display.leqno>.katex>.katex-html>.tag {
      left: 0;
      right: auto;
    }

    .katex-display.fleqn>.katex {
      text-align: left;
      padding-left: 2em;
    }

    body {
      counter-reset: katexEqnNo mmlEqnNo;
    }
  </style>
  <style source-path="/Users/artemis/Library/Application Support/inkdrop/packages/mermaid/styles/mermaid.less"
    priority="0">
    .mermaid-diagram svg {
      color: black;
    }

    body[class*='dark-ui'] .mermaid-diagram {
      background-color: rgba(255, 255, 255, 0.8);
      border-radius: 0.3rem;
    }

    body .mermaid-diagram.theme-default,
    body .mermaid-diagram.theme-neutral {
      background-color: white;
    }

    body .mermaid-diagram.theme-dark {
      background-color: transparent;
    }

    body .mermaid-diagram.disable-auto-scale {
      overflow: auto;
    }

    body .mermaid-diagram.disable-auto-scale svg {
      width: auto !important;
    }
  </style>
  <style source-path="/Users/artemis/Library/Application Support/inkdrop/packages/vim/styles/vim.less" priority="0">
  </style>
  <style source-path="/Applications/Inkdrop.app/Contents/Resources/app.asar/node_modules/export-print/styles/index.css"
    priority="0">
    @media print {
      .mde-preview table {
        overflow: hidden;
        word-break: break-word;
      }

      .mde-preview pre>code {
        word-wrap: break-word;
        white-space: pre-wrap;
      }
    }
  </style>
  <style
    source-path="/Applications/Inkdrop.app/Contents/Resources/app.asar/node_modules/import-markdown/styles/progress-dialog.less"
    priority="0">
    .ui.modal.dialog-frame.import-markdown-progress-dialog {
      text-align: center;
      min-width: 360px;
      max-width: 600px;
    }

    .ui.modal.dialog-frame.import-markdown-progress-dialog .content,
    .ui.modal.dialog-frame.import-markdown-progress-dialog pre {
      overflow: auto;
    }

    .ui.modal.dialog-frame.import-markdown-progress-dialog .actions {
      text-align: left;
    }
  </style>
  <style
    source-path="/Applications/Inkdrop.app/Contents/Resources/app.asar/node_modules/import-markdown/styles/select-book-dialog.less"
    priority="0">
    .ui.modal.dialog-frame.import-markdown-select-notebook-dialog {
      min-width: 600px;
      width: 50vw !important;
      min-height: 50vh;
    }

    .ui.modal.dialog-frame.import-markdown-select-notebook-dialog .actions {
      text-align: left;
    }
  </style>
  <style
    source-path="/Applications/Inkdrop.app/Contents/Resources/app.asar/node_modules/import-html/styles/select-book-dialog.less"
    priority="0">
    .ui.modal.dialog-frame.import-html-select-notebook-dialog {
      min-width: 600px;
      width: 50vw !important;
      min-height: 50vh;
    }

    .ui.modal.dialog-frame.import-html-select-notebook-dialog .actions {
      text-align: left;
    }
  </style>
  <style
    source-path="/Applications/Inkdrop.app/Contents/Resources/app.asar/node_modules/github-preview/styles/github-markdown.css"
    context="inkdrop-preview" priority="1">
    @font-face {
      font-family: octicons-anchor;
      src: url(data:font/woff;charset=utf-8;base64,d09GRgABAAAAAAYcAA0AAAAACjQAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAABGRlRNAAABMAAAABwAAAAca8vGTk9TLzIAAAFMAAAARAAAAFZG1VHVY21hcAAAAZAAAAA+AAABQgAP9AdjdnQgAAAB0AAAAAQAAAAEACICiGdhc3AAAAHUAAAACAAAAAj//wADZ2x5ZgAAAdwAAADRAAABEKyikaNoZWFkAAACsAAAAC0AAAA2AtXoA2hoZWEAAALgAAAAHAAAACQHngNFaG10eAAAAvwAAAAQAAAAEAwAACJsb2NhAAADDAAAAAoAAAAKALIAVG1heHAAAAMYAAAAHwAAACABEAB2bmFtZQAAAzgAAALBAAAFu3I9x/Nwb3N0AAAF/AAAAB0AAAAvaoFvbwAAAAEAAAAAzBdyYwAAAADP2IQvAAAAAM/bz7t4nGNgZGFgnMDAysDB1Ml0hoGBoR9CM75mMGLkYGBgYmBlZsAKAtJcUxgcPsR8iGF2+O/AEMPsznAYKMwIkgMA5REMOXicY2BgYGaAYBkGRgYQsAHyGMF8FgYFIM0ChED+h5j//yEk/3KoSgZGNgYYk4GRCUgwMaACRoZhDwCs7QgGAAAAIgKIAAAAAf//AAJ4nHWMMQrCQBBF/0zWrCCIKUQsTDCL2EXMohYGSSmorScInsRGL2DOYJe0Ntp7BK+gJ1BxF1stZvjz/v8DRghQzEc4kIgKwiAppcA9LtzKLSkdNhKFY3HF4lK69ExKslx7Xa+vPRVS43G98vG1DnkDMIBUgFN0MDXflU8tbaZOUkXUH0+U27RoRpOIyCKjbMCVejwypzJJG4jIwb43rfl6wbwanocrJm9XFYfskuVC5K/TPyczNU7b84CXcbxks1Un6H6tLH9vf2LRnn8Ax7A5WQAAAHicY2BkYGAA4teL1+yI57f5ysDNwgAC529f0kOmWRiYVgEpDgYmEA8AUzEKsQAAAHicY2BkYGB2+O/AEMPCAAJAkpEBFbAAADgKAe0EAAAiAAAAAAQAAAAEAAAAAAAAKgAqACoAiAAAeJxjYGRgYGBhsGFgYgABEMkFhAwM/xn0QAIAD6YBhwB4nI1Ty07cMBS9QwKlQapQW3VXySvEqDCZGbGaHULiIQ1FKgjWMxknMfLEke2A+IJu+wntrt/QbVf9gG75jK577Lg8K1qQPCfnnnt8fX1NRC/pmjrk/zprC+8D7tBy9DHgBXoWfQ44Av8t4Bj4Z8CLtBL9CniJluPXASf0Lm4CXqFX8Q84dOLnMB17N4c7tBo1AS/Qi+hTwBH4rwHHwN8DXqQ30XXAS7QaLwSc0Gn8NuAVWou/gFmnjLrEaEh9GmDdDGgL3B4JsrRPDU2hTOiMSuJUIdKQQayiAth69r6akSSFqIJuA19TrzCIaY8sIoxyrNIrL//pw7A2iMygkX5vDj+G+kuoLdX4GlGK/8Lnlz6/h9MpmoO9rafrz7ILXEHHaAx95s9lsI7AHNMBWEZHULnfAXwG9/ZqdzLI08iuwRloXE8kfhXYAvE23+23DU3t626rbs8/8adv+9DWknsHp3E17oCf+Z48rvEQNZ78paYM38qfk3v/u3l3u3GXN2Dmvmvpf1Srwk3pB/VSsp512bA/GG5i2WJ7wu430yQ5K3nFGiOqgtmSB5pJVSizwaacmUZzZhXLlZTq8qGGFY2YcSkqbth6aW1tRmlaCFs2016m5qn36SbJrqosG4uMV4aP2PHBmB3tjtmgN2izkGQyLWprekbIntJFing32a5rKWCN/SdSoga45EJykyQ7asZvHQ8PTm6cslIpwyeyjbVltNikc2HTR7YKh9LBl9DADC0U/jLcBZDKrMhUBfQBvXRzLtFtjU9eNHKin0x5InTqb8lNpfKv1s1xHzTXRqgKzek/mb7nB8RZTCDhGEX3kK/8Q75AmUM/eLkfA+0Hi908Kx4eNsMgudg5GLdRD7a84npi+YxNr5i5KIbW5izXas7cHXIMAau1OueZhfj+cOcP3P8MNIWLyYOBuxL6DRylJ4cAAAB4nGNgYoAALjDJyIAOWMCiTIxMLDmZedkABtIBygAAAA==) format('woff');
    }

    .mde-preview {
      -webkit-text-size-adjust: 100%;
      text-size-adjust: 100%;
      color: #333;
      font-family: "Helvetica Neue", Helvetica, "Segoe UI", Arial, freesans, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
      line-height: 1.6;
      word-wrap: break-word;
    }

    .mde-preview:before {
      display: table;
      content: "";
    }

    .mde-preview:after {
      display: table;
      clear: both;
      content: "";
    }

    .mde-preview a {
      background-color: transparent;
    }

    .mde-preview a:active,
    .mde-preview a:hover {
      outline: 0;
    }

    .mde-preview strong {
      font-weight: bold;
      color: black;
    }

    .mde-preview em {
      color: black;
    }

    .mde-preview h1 {
      font-size: 2em;
      margin: 0.67em 0;
    }

    .mde-preview img {
      border: 0;
    }

    .mde-preview hr {
      box-sizing: content-box;
      height: 0;
    }

    .mde-preview pre {
      overflow: auto;
    }

    .mde-preview code,
    .mde-preview kbd,
    .mde-preview pre {
      font-family: SFMono-Regular, Consolas, Liberation Mono, Menlo, Courier, monospace;
      font-size: 1em;
    }

    .mde-preview input {
      color: inherit;
      font: inherit;
      margin: 0;
    }

    .mde-preview html input[disabled] {
      cursor: default;
    }

    .mde-preview input {
      line-height: normal;
    }

    .mde-preview input[type="checkbox"] {
      box-sizing: border-box;
      padding: 0;
    }

    .mde-preview table {
      border-collapse: collapse;
      border-spacing: 0;
    }

    .mde-preview td,
    .mde-preview th {
      padding: 0;
    }

    .mde-preview * {
      box-sizing: border-box;
    }

    .mde-preview input {
      font: 13px / 1.4 Helvetica, arial, nimbussansl, liberationsans, freesans, clean, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
    }

    .mde-preview a {
      color: #4078c0;
      text-decoration: none;
    }

    .mde-preview a:hover,
    .mde-preview a:active {
      text-decoration: underline;
    }

    .mde-preview hr {
      height: 0;
      margin: 15px 0;
      overflow: hidden;
      background: transparent;
      border: 0;
      border-bottom: 1px solid #ddd;
    }

    .mde-preview hr:before {
      display: table;
      content: "";
    }

    .mde-preview hr:after {
      display: table;
      clear: both;
      content: "";
    }

    .mde-preview h1,
    .mde-preview h2,
    .mde-preview h3,
    .mde-preview h4,
    .mde-preview h5,
    .mde-preview h6 {
      margin-top: 0;
      padding-top: 15px;
      margin-bottom: 15px;
      line-height: 1.1;
    }

    .mde-preview h1 {
      font-size: 30px;
    }

    .mde-preview h2 {
      font-size: 21px;
    }

    .mde-preview h3 {
      font-size: 16px;
    }

    .mde-preview h4 {
      font-size: 14px;
    }

    .mde-preview h5 {
      font-size: 12px;
    }

    .mde-preview h6 {
      font-size: 11px;
    }

    .mde-preview blockquote {
      margin: 0;
    }

    .mde-preview ul,
    .mde-preview ol {
      padding: 0;
      margin-top: 0;
      margin-bottom: 0;
    }

    .mde-preview ol ol,
    .mde-preview ul ol {
      list-style-type: lower-roman;
    }

    .mde-preview ul ul ol,
    .mde-preview ul ol ol,
    .mde-preview ol ul ol,
    .mde-preview ol ol ol {
      list-style-type: lower-alpha;
    }

    .mde-preview dd {
      margin-left: 0;
    }

    .mde-preview code {
      font-size: 12px;
    }

    .mde-preview pre {
      margin-top: 0;
      margin-bottom: 0;
      font-size: 12px;
    }

    .mde-preview .select::-ms-expand {
      opacity: 0;
    }

    .mde-preview .octicon {
      font: normal normal normal 16px/1 octicons-anchor;
      display: inline-block;
      text-decoration: none;
      text-rendering: auto;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
      -webkit-user-select: none;
      -moz-user-select: none;
      -ms-user-select: none;
      user-select: none;
    }

    .mde-preview .octicon-link:before {
      content: '\f05c';
    }

    .mde-preview .mde-preview>*:first-child {
      margin-top: 0 !important;
    }

    .mde-preview .mde-preview>*:last-child {
      margin-bottom: 0 !important;
    }

    .mde-preview a:not([href]) {
      color: inherit;
      text-decoration: none;
    }

    .mde-preview .anchor {
      display: inline-block;
      padding-right: 2px;
      margin-left: -18px;
    }

    .mde-preview .anchor:focus {
      outline: none;
    }

    .mde-preview h1 .octicon-link,
    .mde-preview h2 .octicon-link,
    .mde-preview h3 .octicon-link,
    .mde-preview h4 .octicon-link,
    .mde-preview h5 .octicon-link,
    .mde-preview h6 .octicon-link {
      color: #000;
      vertical-align: middle;
      visibility: hidden;
    }

    .mde-preview h1:hover .anchor,
    .mde-preview h2:hover .anchor,
    .mde-preview h3:hover .anchor,
    .mde-preview h4:hover .anchor,
    .mde-preview h5:hover .anchor,
    .mde-preview h6:hover .anchor {
      text-decoration: none;
    }

    .mde-preview h1:hover .anchor .octicon-link,
    .mde-preview h2:hover .anchor .octicon-link,
    .mde-preview h3:hover .anchor .octicon-link,
    .mde-preview h4:hover .anchor .octicon-link,
    .mde-preview h5:hover .anchor .octicon-link,
    .mde-preview h6:hover .anchor .octicon-link {
      visibility: visible;
    }

    .mde-preview h1 {
      padding-bottom: 0.3em;
      font-size: 2.25em;
      line-height: 1.2;
      border-bottom: 1px solid #eee;
    }

    .mde-preview h1 .anchor {
      line-height: 1;
    }

    .mde-preview h2 {
      padding-bottom: 0.3em;
      font-size: 1.75em;
      line-height: 1.225;
      border-bottom: 1px solid #eee;
    }

    .mde-preview h2 .anchor {
      line-height: 1;
    }

    .mde-preview h3 {
      font-size: 1.5em;
      line-height: 1.43;
    }

    .mde-preview h3 .anchor {
      line-height: 1.2;
    }

    .mde-preview h4 {
      font-size: 1.25em;
    }

    .mde-preview h4 .anchor {
      line-height: 1.2;
    }

    .mde-preview h5 {
      font-size: 1em;
    }

    .mde-preview h5 .anchor {
      line-height: 1.1;
    }

    .mde-preview h6 {
      font-size: 1em;
      color: #777;
    }

    .mde-preview h6 .anchor {
      line-height: 1.1;
    }

    .mde-preview p,
    .mde-preview blockquote,
    .mde-preview ul,
    .mde-preview ol,
    .mde-preview dl,
    .mde-preview table,
    .mde-preview pre {
      margin-top: 0;
      margin-bottom: 16px;
    }

    .mde-preview hr {
      height: 4px;
      padding: 0;
      margin: 16px 0;
      background-color: #e7e7e7;
      border: 0 none;
    }

    .mde-preview ul,
    .mde-preview ol {
      padding-left: 2em;
    }

    .mde-preview ul ul,
    .mde-preview ul ol,
    .mde-preview ol ol,
    .mde-preview ol ul {
      margin-top: 0;
      margin-bottom: 0;
    }

    .mde-preview li>p {
      margin: 0;
    }

    .mde-preview dl {
      padding: 0;
    }

    .mde-preview dl dt {
      padding: 0;
      margin-top: 16px;
      font-size: 1em;
      font-style: italic;
      font-weight: bold;
    }

    .mde-preview dl dd {
      padding: 0 16px;
      margin-bottom: 16px;
    }

    .mde-preview blockquote {
      padding: 0 15px;
      color: #777;
      border-left: 4px solid #ddd;
    }

    .mde-preview blockquote> :first-child {
      margin-top: 0;
    }

    .mde-preview blockquote> :last-child {
      margin-bottom: 0;
    }

    .mde-preview table {
      display: block;
      width: 100%;
      overflow: auto;
      word-break: keep-all;
    }

    .mde-preview table th {
      font-weight: bold;
    }

    .mde-preview table th,
    .mde-preview table td {
      padding: 6px 13px;
      border: 1px solid #ddd;
    }

    .mde-preview table tr {
      background-color: #fff;
      border-top: 1px solid #ccc;
    }

    .mde-preview table tr:nth-child(2n) {
      background-color: #f8f8f8;
    }

    .mde-preview img {
      max-width: 100%;
      box-sizing: content-box;
      background-color: #fff;
    }

    .mde-preview code {
      padding: 0;
      padding-top: 0.2em;
      padding-bottom: 0.2em;
      margin: 0;
      font-size: 85%;
      background-color: rgba(0, 0, 0, 0.04);
      border-radius: 3px;
    }

    .mde-preview code:before,
    .mde-preview code:after {
      letter-spacing: -0.2em;
      content: "\00a0";
    }

    .mde-preview pre>code {
      padding: 0;
      margin: 0;
      font-size: 100%;
      word-break: normal;
      white-space: pre;
      background: transparent;
      border: 0;
    }

    .mde-preview pre {
      padding: 16px;
      overflow: auto;
      word-wrap: normal;
      font-size: 85%;
      line-height: 1.45;
      background-color: #f7f7f7;
      border-radius: 3px;
    }

    .mde-preview pre code {
      display: inline;
      max-width: initial;
      padding: 0;
      margin: 0;
      overflow: initial;
      line-height: inherit;
      word-wrap: normal;
      background-color: transparent;
      border: 0;
    }

    .mde-preview pre code:before,
    .mde-preview pre code:after {
      content: normal;
    }

    .mde-preview kbd {
      display: inline-block;
      padding: 3px 5px;
      font-size: 11px;
      line-height: 10px;
      color: #555;
      vertical-align: middle;
      background-color: #fcfcfc;
      border: solid 1px #ccc;
      border-bottom-color: #bbb;
      border-radius: 3px;
      box-shadow: inset 0 -1px 0 #bbb;
    }

    .mde-preview .cm-header {
      color: blue;
    }

    .mde-preview .cm-quote {
      color: #090;
      font-style: italic;
    }

    .mde-preview .cm-negative {
      color: #d44;
    }

    .mde-preview .cm-positive {
      color: #292;
    }

    .mde-preview .cm-header,
    .mde-preview .cm-strong {
      font-weight: bold;
    }

    .mde-preview .cm-em {
      font-style: italic;
    }

    .mde-preview .cm-link {
      text-decoration: underline;
    }

    .mde-preview .cm-strikethrough {
      text-decoration: line-through;
    }

    .mde-preview .cm-keyword {
      color: #333;
      font-weight: bold;
    }

    .mde-preview .cm-atom {
      color: #219;
    }

    .mde-preview .cm-number {
      color: #164;
    }

    .mde-preview .cm-def {
      color: #00f;
    }

    .mde-preview .cm-property {
      color: #00c;
    }

    .mde-preview .cm-operator {
      color: #708;
    }

    .mde-preview .cm-variable-2 {
      color: #05a;
    }

    .mde-preview .cm-variable-3,
    .mde-preview .cm-s-default .cm-type {
      color: #085;
    }

    .mde-preview .cm-comment {
      color: #a50;
      font-style: italic;
    }

    .mde-preview .cm-string {
      color: #a11;
    }

    .mde-preview .cm-string-2 {
      color: #f50;
    }

    .mde-preview .cm-meta {
      color: #555;
    }

    .mde-preview .cm-qualifier {
      color: #555;
    }

    .mde-preview .cm-builtin {
      color: #30a;
    }

    .mde-preview .cm-bracket {
      color: #997;
    }

    .mde-preview .cm-tag {
      color: #170;
    }

    .mde-preview .cm-attribute {
      color: #00c;
    }

    .mde-preview .cm-hr {
      color: #999;
    }

    .mde-preview .cm-link {
      color: #00c;
    }

    .mde-preview .cm-error {
      color: #f00;
    }

    .mde-preview kbd {
      display: inline-block;
      padding: 3px 5px;
      font: 11px Consolas, "Liberation Mono", Menlo, Courier, monospace;
      line-height: 10px;
      color: #555;
      vertical-align: middle;
      background-color: #fcfcfc;
      border: solid 1px #ccc;
      border-bottom-color: #bbb;
      border-radius: 3px;
      box-shadow: inset 0 -1px 0 #bbb;
    }

    .mde-preview .task-list-item {
      list-style-type: none;
    }

    .mde-preview .task-list-item+.task-list-item {
      margin-top: 0px;
    }

    .mde-preview .task-list-item input {
      /* margin: 0 0.35em 0.25em -1.6em; */
      vertical-align: middle;
    }

    .mde-preview :checked+.radio-label {
      z-index: 1;
      position: relative;
      border-color: #4078c0;
    }

    @media print {
      .mde-preview table {
        overflow: hidden;
        word-break: break-word;
      }

      .mde-preview pre>code {
        word-wrap: break-word;
        white-space: pre-wrap;
      }
    }
  </style>
  <style
    source-path="/Applications/Inkdrop.app/Contents/Resources/app.asar/node_modules/github-preview/styles/github-markdown-dark.css"
    context="inkdrop-preview" priority="1">
    body[class*="dark-ui"] .mde-preview {
      color: rgba(255, 255, 255, 0.7);
    }

    body[class*="dark-ui"] .mde-preview a {
      background-color: transparent;
    }

    body[class*="dark-ui"] .mde-preview img {
      border: 0;
    }

    body[class*="dark-ui"] .mde-preview input {
      color: inherit;
    }

    body[class*="dark-ui"] .mde-preview a {
      color: #6987AF;
    }

    body[class*="dark-ui"] .mde-preview strong,
    body[class*="dark-ui"] .mde-preview em {
      color: white;
    }

    body[class*="dark-ui"] .mde-preview h1,
    body[class*="dark-ui"] .mde-preview h2,
    body[class*="dark-ui"] .mde-preview h3,
    body[class*="dark-ui"] .mde-preview h4,
    body[class*="dark-ui"] .mde-preview h5,
    body[class*="dark-ui"] .mde-preview h6 {
      color: rgba(255, 255, 255, 0.875);
    }

    body[class*="dark-ui"] .mde-preview h6 {
      color: rgba(255, 255, 255, 0.625);
    }

    body[class*="dark-ui"] .mde-preview h1,
    body[class*="dark-ui"] .mde-preview h2 {
      border-bottom-color: rgba(255, 255, 255, 0.4);
    }

    body[class*="dark-ui"] .mde-preview hr {
      background-color: rgba(255, 255, 255, 0.3);
    }

    body[class*="dark-ui"] .mde-preview blockquote {
      color: rgba(255, 255, 255, 0.4);
      border-left: 4px solid rgba(255, 255, 255, 0.1);
    }

    body[class*="dark-ui"] .mde-preview table th {
      background-color: rgba(255, 255, 255, 0.1);
    }

    body[class*="dark-ui"] .mde-preview table th,
    body[class*="dark-ui"] .mde-preview table td {
      border: 1px solid rgba(255, 255, 255, 0.25);
    }

    body[class*="dark-ui"] .mde-preview table tr {
      background-color: transparent;
      border-top: 1px solid rgba(255, 255, 255, 0.25);
    }

    body[class*="dark-ui"] .mde-preview table tr:nth-child(2n) {
      background-color: rgba(255, 255, 255, 0.05);
    }

    body[class*="dark-ui"] .mde-preview img {
      background-color: transparent;
    }

    body[class*="dark-ui"] .mde-preview .highlight pre,
    body[class*="dark-ui"] .mde-preview pre {
      background-color: rgba(0, 0, 0, 0.1);
    }

    body[class*="dark-ui"] .mde-preview .cm-header {
      color: #ffcc66;
    }

    body[class*="dark-ui"] .mde-preview .cm-quote {
      color: #969896;
      font-style: italic;
    }

    body[class*="dark-ui"] .mde-preview .cm-negative {
      color: #d44;
    }

    body[class*="dark-ui"] .mde-preview .cm-positive {
      color: #292;
    }

    body[class*="dark-ui"] .mde-preview .cm-header,
    body[class*="dark-ui"] .mde-preview .cm-strong {
      font-weight: bold;
    }

    body[class*="dark-ui"] .mde-preview .cm-em {
      font-style: italic;
    }

    body[class*="dark-ui"] .mde-preview .cm-link {
      text-decoration: underline;
    }

    body[class*="dark-ui"] .mde-preview .cm-strikethrough {
      text-decoration: line-through;
    }

    body[class*="dark-ui"] .mde-preview .cm-keyword {
      color: #cc99cc;
      font-weight: normal;
    }

    body[class*="dark-ui"] .mde-preview .cm-atom {
      color: #8abeb7;
    }

    body[class*="dark-ui"] .mde-preview .cm-number {
      color: #f99157;
    }

    body[class*="dark-ui"] .mde-preview .cm-def {
      color: #b5bd68;
    }

    body[class*="dark-ui"] .mde-preview .cm-property {
      color: #b5bd68;
    }

    body[class*="dark-ui"] .mde-preview .cm-operator {
      color: #cc99cc;
    }

    body[class*="dark-ui"] .mde-preview .cm-variable-2 {
      color: #4A664A;
    }

    body[class*="dark-ui"] .mde-preview .cm-variable-3,
    body[class*="dark-ui"] .mde-preview .cm-type {
      color: rgba(255, 255, 255, 0.8);
    }

    body[class*="dark-ui"] .mde-preview .cm-comment {
      color: #969896;
      font-style: italic;
    }

    body[class*="dark-ui"] .mde-preview .cm-string {
      color: #8abeb7;
    }

    body[class*="dark-ui"] .mde-preview .cm-string-2 {
      color: #8abeb7;
    }

    body[class*="dark-ui"] .mde-preview .cm-meta {
      color: #f99157;
    }

    body[class*="dark-ui"] .mde-preview .cm-qualifier {
      color: #555;
    }

    body[class*="dark-ui"] .mde-preview .cm-builtin {
      color: #8abeb7;
    }

    body[class*="dark-ui"] .mde-preview .cm-bracket {
      color: #f99157;
    }

    body[class*="dark-ui"] .mde-preview .cm-tag {
      color: #a54543;
    }

    body[class*="dark-ui"] .mde-preview .cm-attribute {
      color: #fda331;
    }

    body[class*="dark-ui"] .mde-preview .cm-hr {
      color: #999;
    }

    body[class*="dark-ui"] .mde-preview .cm-link {
      color: #f99157;
    }

    body[class*="dark-ui"] .mde-preview .cm-error {
      color: #f00;
    }
  </style>
</head>

<body class="mde-preview">
  <div>
    <h1 id="linux-quiz" data-line="1" data-line-end="1">Linux Quiz</h1>
    <p data-line="3" data-line-end="3">Answer the following question </p>
    <ol data-line="4" data-line-end="65">
      <li data-line="4" data-line-end="8">
        <p data-line="4" data-line-end="4">Which command displays the list of groups to which a user belongs?</p>
        <ul class="contains-task-list" data-line="5" data-line-end="8">
          <li class="task-list-item" data-line="5" data-line-end="5"><span class="ui checkbox"><input
                type="checkbox"><label></label></span> Whoami</li>
          <li class="task-list-item" data-line="6" data-line-end="6"><span class="ui checkbox"><input
                type="checkbox"><label></label></span> Isgroup</li>
          <li class="task-list-item" data-line="7" data-line-end="7"><span class="ui checkbox"><input
                type="checkbox"><label></label></span> Who</li>
          <li class="task-list-item" data-line="8" data-line-end="8"><span class="ui checkbox"><input
                type="checkbox"><label></label></span> Id</li>
        </ul>
      </li>
      <li data-line="9" data-line-end="14">
        <p data-line="9" data-line-end="9">Which of the following can be used to access the command line?</p>
        <ul class="contains-task-list" data-line="10" data-line-end="14">
          <li class="task-list-item" data-line="10" data-line-end="10"><span class="ui checkbox"><input
                type="checkbox"><label></label></span> BIOS</li>
          <li class="task-list-item" data-line="11" data-line-end="11"><span class="ui checkbox"><input
                type="checkbox"><label></label></span> Terminal</li>
          <li class="task-list-item" data-line="12" data-line-end="12"><span class="ui checkbox"><input
                type="checkbox"><label></label></span> XWindow</li>
          <li class="task-list-item" data-line="13" data-line-end="13"><span class="ui checkbox"><input
                type="checkbox"><label></label></span> Firefox</li>
          <li class="task-list-item" data-line="14" data-line-end="14"><span class="ui checkbox"><input
                type="checkbox"><label></label></span> Xargs</li>
        </ul>
      </li>
      <li data-line="15" data-line-end="20">
        <p data-line="15" data-line-end="15">Which of the following commands increases the number of elements in a
          directory (choose two answers)</p>
        <ul class="contains-task-list" data-line="16" data-line-end="20">
          <li class="task-list-item" data-line="16" data-line-end="16"><span class="ui checkbox"><input
                type="checkbox"><label></label></span> touch newfile</li>
          <li class="task-list-item" data-line="17" data-line-end="17"><span class="ui checkbox"><input
                type="checkbox"><label></label></span> create newfile</li>
          <li class="task-list-item" data-line="18" data-line-end="18"><span class="ui checkbox"><input
                type="checkbox"><label></label></span> ls newfile</li>
          <li class="task-list-item" data-line="19" data-line-end="19"><span class="ui checkbox"><input
                type="checkbox"><label></label></span> rmdir newdirectory</li>
          <li class="task-list-item" data-line="20" data-line-end="20"><span class="ui checkbox"><input
                type="checkbox"><label></label></span> mkdir newdirectory</li>
        </ul>
      </li>
      <li data-line="21" data-line-end="26">
        <p data-line="21" data-line-end="21">Which of the following are correct commands for changing the current
          directory to the user's home? (Choose TWO answers)</p>
        <ul class="contains-task-list" data-line="22" data-line-end="26">
          <li class="task-list-item" data-line="22" data-line-end="22"><span class="ui checkbox"><input
                type="checkbox"><label></label></span> cd /home</li>
          <li class="task-list-item" data-line="23" data-line-end="23"><span class="ui checkbox"><input
                type="checkbox"><label></label></span> cd ~</li>
          <li class="task-list-item" data-line="24" data-line-end="24"><span class="ui checkbox"><input
                type="checkbox"><label></label></span> cd ..</li>
          <li class="task-list-item" data-line="25" data-line-end="25"><span class="ui checkbox"><input
                type="checkbox"><label></label></span> cd</li>
          <li class="task-list-item" data-line="26" data-line-end="26"><span class="ui checkbox"><input
                type="checkbox"><label></label></span> cd /</li>
        </ul>
      </li>
      <li data-line="27" data-line-end="31">
        <p data-line="27" data-line-end="27">Which option will cause the echo command NOT to output a trailing newline?
        </p>
        <ul class="contains-task-list" data-line="28" data-line-end="31">
          <li class="task-list-item" data-line="28" data-line-end="28"><span class="ui checkbox"><input
                type="checkbox"><label></label></span> -e</li>
          <li class="task-list-item" data-line="29" data-line-end="29"><span class="ui checkbox"><input
                type="checkbox"><label></label></span> -p</li>
          <li class="task-list-item" data-line="30" data-line-end="30"><span class="ui checkbox"><input
                type="checkbox"><label></label></span> -n</li>
          <li class="task-list-item" data-line="31" data-line-end="31"><span class="ui checkbox"><input
                type="checkbox"><label></label></span> -s</li>
        </ul>
      </li>
      <li data-line="32" data-line-end="37">
        <p data-line="32" data-line-end="32">Which of the following commands moves the directory ~/summer-vacation and
          it content to ~/vacation/2011?</p>
        <ul class="contains-task-list" data-line="33" data-line-end="37">
          <li class="task-list-item" data-line="33" data-line-end="33"><span class="ui checkbox"><input
                type="checkbox"><label></label></span> Mv ~/vacation/2011 ~/summer-vacation</li>
          <li class="task-list-item" data-line="34" data-line-end="34"><span class="ui checkbox"><input
                type="checkbox"><label></label></span> Move -R ~/summer-vacation ~/vacation/2011</li>
          <li class="task-list-item" data-line="35" data-line-end="35"><span class="ui checkbox"><input
                type="checkbox"><label></label></span> Mv /home/summer-vacation /home/vacation/2011</li>
          <li class="task-list-item" data-line="36" data-line-end="36"><span class="ui checkbox"><input
                type="checkbox"><label></label></span> Mv ~/summer-vacation ~/vacation/2011</li>
          <li class="task-list-item" data-line="37" data-line-end="37"><span class="ui checkbox"><input
                type="checkbox"><label></label></span> Mv -R ~/summer-vacation ~/vacation/2011</li>
        </ul>
      </li>
      <li data-line="38" data-line-end="43">
        <p data-line="38" data-line-end="38">Which of the following commands can be used to create a file?</p>
        <ul class="contains-task-list" data-line="39" data-line-end="43">
          <li class="task-list-item" data-line="39" data-line-end="39"><span class="ui checkbox"><input
                type="checkbox"><label></label></span> touch</li>
          <li class="task-list-item" data-line="40" data-line-end="40"><span class="ui checkbox"><input
                type="checkbox"><label></label></span> build</li>
          <li class="task-list-item" data-line="41" data-line-end="41"><span class="ui checkbox"><input
                type="checkbox"><label></label></span> nico</li>
          <li class="task-list-item" data-line="42" data-line-end="42"><span class="ui checkbox"><input
                type="checkbox"><label></label></span> create</li>
          <li class="task-list-item" data-line="43" data-line-end="43"><span class="ui checkbox"><input
                type="checkbox"><label></label></span> mkfile</li>
        </ul>
      </li>
      <li data-line="44" data-line-end="48">
        <p data-line="44" data-line-end="44">Which function does a shell program serve?</p>
        <ul class="contains-task-list" data-line="45" data-line-end="48">
          <li class="task-list-item" data-line="45" data-line-end="45"><span class="ui checkbox"><input
                type="checkbox"><label></label></span> It provides a graphical environment</li>
          <li class="task-list-item" data-line="46" data-line-end="46"><span class="ui checkbox"><input
                type="checkbox"><label></label></span> It is responsible for establishing a connection to another
            computer</li>
          <li class="task-list-item" data-line="47" data-line-end="47"><span class="ui checkbox"><input
                type="checkbox"><label></label></span> It receives user commands and executes them</li>
          <li class="task-list-item" data-line="48" data-line-end="48"><span class="ui checkbox"><input
                type="checkbox"><label></label></span> It is responsible for logging a user into the system</li>
        </ul>
      </li>
      <li data-line="49" data-line-end="54">
        <p data-line="49" data-line-end="49">How could one search for the file foo.txt under the directory /home?</p>
        <ul class="contains-task-list" data-line="50" data-line-end="54">
          <li class="task-list-item" data-line="50" data-line-end="50"><span class="ui checkbox"><input
                type="checkbox"><label></label></span> Search /home -file foo.tx</li>
          <li class="task-list-item" data-line="51" data-line-end="51"><span class="ui checkbox"><input
                type="checkbox"><label></label></span> Search /home foo.txt</li>
          <li class="task-list-item" data-line="52" data-line-end="52"><span class="ui checkbox"><input
                type="checkbox"><label></label></span> Find /home -file foo.txt</li>
          <li class="task-list-item" data-line="53" data-line-end="53"><span class="ui checkbox"><input
                type="checkbox"><label></label></span> Find /home -name foo.txt</li>
          <li class="task-list-item" data-line="54" data-line-end="54"><span class="ui checkbox"><input
                type="checkbox"><label></label></span> Find /home foo.txt</li>
        </ul>
      </li>
      <li data-line="55" data-line-end="60">
        <p data-line="55" data-line-end="55">Which of the following is a Linux based operating system for use on mobile
          devices?</p>
        <ul class="contains-task-list" data-line="56" data-line-end="59">
          <li class="task-list-item" data-line="56" data-line-end="56"><span class="ui checkbox"><input
                type="checkbox"><label></label></span> IOS</li>
          <li class="task-list-item" data-line="57" data-line-end="57"><span class="ui checkbox"><input
                type="checkbox"><label></label></span> CentOS</li>
          <li class="task-list-item" data-line="58" data-line-end="58"><span class="ui checkbox"><input
                type="checkbox"><label></label></span> Android</li>
          <li class="task-list-item" data-line="59" data-line-end="59"><span class="ui checkbox"><input
                type="checkbox"><label></label></span> Debian</li>
        </ul>
      </li>
      <li data-line="61" data-line-end="65">
        <p data-line="61" data-line-end="61">Which command will display running process information in realtime?</p>
        <ul class="contains-task-list" data-line="62" data-line-end="65">
          <li class="task-list-item" data-line="62" data-line-end="62"><span class="ui checkbox"><input
                type="checkbox"><label></label></span> Top</li>
          <li class="task-list-item" data-line="63" data-line-end="63"><span class="ui checkbox"><input
                type="checkbox"><label></label></span> Show current</li>
          <li class="task-list-item" data-line="64" data-line-end="64"><span class="ui checkbox"><input
                type="checkbox"><label></label></span> Ps current</li>
          <li class="task-list-item" data-line="65" data-line-end="65"><span class="ui checkbox"><input
                type="checkbox"><label></label></span> Process</li>
        </ul>
      </li>
    </ol>
  </div>

  <p hidden id="p1"><b>Error! </b>The page expired on 22 September 2021</p>
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.1/jquery.min.js"></script>
  <div class="rightdiv">
    <div id="BTNONE">
      <button type="button" ID="Button2" value="New Tab" style="display: none;" />
      Next
      </button>
      <button ID="Button1" value="Button" />Submit</button>
    </div>
  </div>

  <script>
    $(function () {
      var x = document.getElementById("p1");
      $("#Button1").on('click', function () {
        $("#Button2").show();
        var timeTarget = new Date(2021, 9, 22, 23, 59, 59, 0).getTime();
        var now = Date.now();

        if (now <= timeTarget) {
          document.getElementById("Button2").disabled = false;
          x.style.display = "none";
        }
        else if (now > timeTarget) {
          document.getElementById("Button2").disabled = true;
          x.style.display = "block";
        }
      });
    });
  </script>

	    </div>
        </>
    );
}

