/* eslint-disable no-unused-vars */
import { css, unsafeCSS } from 'lit-element';
import * as foundations from '@bbva-web-components/bbva-foundations-styles';

export default css`:host {
  display: block;
  box-sizing: border-box;
}

:host([hidden]), [hidden] {
  display: none !important;
}

*, *:before, *:after {
  box-sizing: inherit;
}

.header #header-title {
  background-color: #072146;
}
.header section {
  text-align: center;
}

.main-container {
  padding: 5px;
}
.main-container .title {
  font-weight: bold;
}
.main-container .notification {
  margin: 5px 0;
}
.main-container .main .link-btn {
  background-color: #1464A5;
  color: #fff;
  margin-top: 20px;
}
.main-container .other .link-btn {
  background-color: #1464A5;
  color: #fff;
  margin-top: 20px;
}

@media screen and (min-width: 800px) {
  .main-container {
    padding-left: 100px;
    width: 100%;
  }
  .main-container .main {
    margin-bottom: 60px;
  }
  .main-container .main .section-btn {
    display: flex;
  }
  .main-container .main .section-btn .sec-btn {
    width: 25%;
    height: 75px;
    margin: 0 25px;
  }
  .main-container .other .section-btn {
    display: flex;
  }
  .main-container .other .sec-btn {
    width: 25%;
    height: 75px;
    margin: 0 25px;
  }
}
`;