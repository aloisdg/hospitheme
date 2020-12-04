/*:root {
  --vibrant: #ffed44;
  --vibrant-red: red;
  --text-main: #323232;
  --background-body: #fff;
  --background: #efefef;
  --background-alt: #f7f7f7;
  --border-alt: #ccc;
  --text-muted: #70777f;
}*/

const templateClassicCss = `
html,
body {
  color: var(--text-main);
}

body {
  background-color: var(--background-body);
  background-size: cover;
  font-size: 16px;
  margin: 0;
}

h1 {
  margin-bottom: 2rem;
}

.header h1 .hotel-title-location {
  display: none;
}

.page-background {
  background-color: color-mod(var(--background-body) lightness(-10%));
  box-shadow: none;
  color: var(--text-main) !important;
}

.durandal-wrapper {
  position: relative;
}

.page-head.js-page-head {
  border-color: #f5f5f5;
  padding-top: 0;
  position: absolute;
  right: 2rem;
  top: 2rem;
  z-index: 10;
}

.page-aside {
  background-color: var(--vibrant);
}

.this-link._skin-primary,
.this-link._skin-primary:visited,
.this-link._skin-primary:active,
.this-button._skin-6,
.this-button._skin-6:visited,
.this-button._skin-6:active {
  color: var(--text-main);
}

.this-link._skin-primary {
  text-decoration: underline;
}

.this-link._skin-primary:hover {
  text-decoration: none;
}

.header .filters-wrapper {
  min-height: 0;
  margin-bottom: 2rem;
  margin-top: 2rem;
}

.header .change-filters-spacing {
  padding: 20px;
}

.pt2,
.ptm {
  margin: 20px 0;
  padding: 0;
}

.brand-img {
  height: 80px;
}

.this-button._skin-3,
.this-button._skin-3:hover,
.this-button._skin-3:visited {
  background-color: var(--vibrant);
  color: var(--text-main);
}

.this-button._skin-3._progress {
  color: var(--vibrant);
  background-color: var(--text-main);
}

.this-button._skin-3 {
  background-color: var(--vibrant);
  text-transform: initial;
}

a {
  transition: color 0.125s ease;
}

i[class^="icon-"],
.this-button._skin-4 [class^="icon-"],
.basket-guarantee .list-item-icon,
.basket-guarantee .list-item-text,
.occupancy-icon-adult,
.occupancy-icon-child,
.this-occupancy:hover .occupancy-icon-adult,
.this-occupancy:hover .occupancy-icon-child,
.room-rates-item-info-icon {
  color: var(--text-main);
}

.page-head.js-page-head i {
  color: var(--text-main);
}

.basket-guarantee .this-list .list-item:last-child {
  padding-bottom: 0;
}

section.basket.js-basket {
  padding: 6rem 1rem;
  padding-bottom: 0;
  box-sizing: border-box;
}

section.basket.js-basket.basket-moving {
  background-color: var(--vibrant);
  padding-top: 1rem;
  padding-left: 1rem;
}

.basket-moving .basket-guarantee {
  margin-top: 1rem;
}

.page-main {
  border: 0;
}

.this-link._skin-primary i,
.this-link._skin-primary:visited i,
.this-button._skin-3._size-big._icon-right i {
  display: none;
}

.this-link._skin-primary,
.this-link._skin-primary:hover,
.this-link._skin-primary:active {
  color: var(--text-main);
}

.this-form-label {
  font-size: 0.9em;
}

.basket-guarantee .list-item-cards {
  margin-top: 0.5rem;
}

.this-breadcrumb {
  background-color: var(--text-main);
  display: block;
  padding: 1rem 2rem;
}

.breadcrumb-text {
  color: var(--vibrant);
  font-weight: bold;
  text-decoration: dotted;
}

.breadcrumb-text.breadcrumb-text-disabled {
  color: #bbb;
  font-weight: normal;
}

.breadcrumb-text > .breadcrumb-text-arrow {
  height: 8px;
  width: 8px;
  top: 15px;
}

.change-filters-spacing input {
  font-size: 0.9em;
}

.header {
  margin-bottom: 2rem;
}

.header .check-in-datepicker,
.header .check-out-datepicker {
  width: 115px;
}

.this-form-text,
.this-form-select {
  border-radius: 0;
  padding: 10px;
}

.this-tooltip,
.this-tooltip i,
.this-occupancy,
.occupancy-icon-adult,
.occupancy-icon-child,
.room-rates-item-info,
.summary-item-info-icon.icon-info-sign {
  color: #777 !important;
}

.room-details-content-beds-item,
.room-filters,
.room-details-content-options {
  background-color: var(--background-alt) !important;
}

#ui-datepicker-div {
  z-index: 20;
}

.ui-widget-header,
.ui-widget-header .ui-datepicker-month {
  background-color: var(--vibrant);
}

.ui-widget-header .ui-datepicker-month {
  border-color: var(--text-main);
}

.ui-state-default {
  background-color: var(--background-alt);
  border-color: var(--background-alt);
}

.ui-widget-content .ui-state-hover {
  background-color: var(--vibrant);
  border-color: var(--vibrant);
  color: var(--text-main);
}

.header .feedback,
.this-insertion {
  background-color: var(--background-alt);
  color: var(--vibrant-red);
}

.this-insertion i {
  color: var(--vibrant-red);
}

.tooltip-content {
  background-color: var(--background-alt);
  border: 1px solid #ccc;
  border-radius: 0;
  box-shadow: none;
  color: var(--text-main);
}

.tooltip-content .tooltip-arrow {
  border-bottom-color: #ccc;
}

.room-rates-item-price-out,
.room-rates-item-availability {
  display: none;
}

.room-rates-item-price-moy.has-price-out {
  color: var(--text-bright);
  font-size: 1em;
}

i.icon-plus,
i.icon-minus {
  display: none !important;
}

.select-room .text-show,
.select-room .text-hide {
  background-color: var(--text-main);
  color: var(--vibrant);
  padding: 1rem 1.5rem;
  text-transform: uppercase;
}

.room-filters .text-show,
.room-filters .text-hide,
.room-aside-right .text-show,
.room-aside-right .text-hide {
  background-color: inherit;
  color: inherit;
  padding: inherit;
}

.room-aside-items-title {
  width: 100px;
}

.room-aside-items-content {
  width: initial;
}

.this-button._skin-4:hover,
.this-button._skin-4:focus,
.this-button._skin-4:active,
.this-button._skin-5:hover,
.this-button._skin-5:focus,
.this-button._skin-5:active {
  background-color: #f5f5f5;
}

.this-border-top.ptm {
  padding-top: 2rem;
}

.ctx-submit-button > .be-button {
  background-color: var(--vibrant-red);
}

#app .date-selection__overlay {
  background-color: var(--text-main);
}

#app #header {
  background-color: var(--vibrant);
}

.room-rates-item-request-subtitle {
  color: var(--vibrant-red);
  font-weight: normal;
}

.summary-section #checkin {
  width: auto;
}

.this-form-textarea {
  border-radius: 0;
}

.room-rates-item-info-text {
  font-size: 0.9em;
}

.room-rates-item-info-text {
  font-size: 0.8em;
}

.room-rates-item-price-tax {
  font-size: 0.8em;
  margin-top: 5px;
}

.basket-summary-item .last-unit {
  overflow: visible;
}
`;