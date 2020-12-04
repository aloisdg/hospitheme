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

const templateReloadedCss = `
  /* Common */

.page-background {
  color: var(--background-body);
}

h1, h2, h3, h4 {
    font-weight: normal;
    margin-bottom: 20px;
}

.bold {
    font-weight: normal;
}

.small {
    font-size: inherit;
}

.this-form-text {
    padding: 7px 12px !important;
}

.this-step-header {
    border-bottom: 0;
    margin: 0;
    padding: 0;
}

.step-header-title {
    font-size: 16px !important;
    margin-bottom: 10px;
    text-transform: uppercase;
}

.occupancy-icon-adult,
.occupancy-icon-child {
    color: #888;
}

.this-button._skin-3._size-big {
    font-weight: normal;
    padding: 10px 30px;
    border-radius: 4px;
}

.this-button._skin-3._size-medium {
    padding: 8px 16px;
    font-weight: normal;
    border-radius: 4px;
}

.this-button._skin-3._size-small {
    font-weight: normal;
    border-radius: 4px;
}

.this-button._skin-4 {
    background: var(--text-main);
    color: white;
    padding: 6px 12px;
    text-transform: uppercase;
    font-size: 11px;
    border-radius: 4px;
}

.this-button._skin-4:hover {
    background: #a2a2a2;
}

.this-button._skin-4 > i {
    display: none !important;
}

.tooltip-content {
    box-shadow: 0 0 20px #b3b3b3;
    border: 1px solid #c5c5c5;
}

.tooltip-arrow {
    border-bottom-color: #888 !important;
}

.dialog-content {
    padding: 30px;
    color: #4a4a49;
}

.dialog-close {
    font-size: 32px;
    color: black;
    top: 15px;
    right: 25px;
}

.this-form-custom-radio-button label {
    box-shadow: none;
    padding: 3px 12px;
}

.this-insertion,
.feedback {
    background: transparent !important;
    padding: 20px;
}

.icon-caret-left:before {
    content: "\f104" !important;
}

.icon-caret-right:before {
    content: "\f105";
}

.this-form-text,
.this-form-select,
.this-form-textarea {
    background: transparent;
    color: inherit;
}

/* Page */

.page {
    width: 1240px;
}

.page-background {
    background: none;
}

.page-main {
    width: 760px;
    padding: 30px 30px 100px 30px;
    background: rgba(255, 255, 255, 0.96);
    border-right: 0;
}

.page-aside {
    margin-left: 840px;
}

/*  Breadcrumb */

.this-breadcrumb {
    box-sizing: border-box;
    width: 100%;
    border: 1px solid #c5c5c5;
    display: flex;
    align-items: center;
    margin-bottom: 45px;
}

.breadcrumb-text {
    float: none;
    display: flex;
    flex: 1;
    padding: 0 10px !important;
    border-right: 1px solid #c5c5c5;
    justify-content: center;
    font-weight: normal;
    background: #4a4a49;
    color: white;
}

.breadcrumb-text-disabled {
    background: transparent;
}

.breadcrumb-text:last-child {
    border-right: 0;
}

.breadcrumb-text-arrow {
    display: none !important;
}

/*  Quick Search */

.change-filters {
    margin-bottom: 40px !important;
    background-color: transparent !important;
}

.change-filters-spacing {
    border: 1px solid #c5c5c5;
    padding: 30px !important;
}

.this-form-label {
    font-weight: normal;
}

.change-filters-datepicker-wrapper {
    display: inline-block;
}

.change-filters-datepicker-wrapper + .change-filters-datepicker-wrapper {
    margin-left: 20px;
}

.change-filters-datepicker-wrapper + span > b {
    font-weight: normal;
}

.change-filters-spacing > span:nth-child(3) {
}

.change-filters-control-wrapper {
    margin: 50px 0 50px 0;
    padding: 0 !important;
    display: flex;
}

.change-filters-control-wrapper .unit,
.change-filters-control-wrapper .last-unit {
    float: none;
}

.change-filters-control-wrapper .last-unit {
    width: 200px;
}

.change-filters-datepicker-wrapper .this-form-label,
.change-filters-control-wrapper .this-form-label {
    text-transform: uppercase !important;
    font-size: 13px;
}

.change-filters-datepicker-wrapper .this-form-label {
    margin-left: -4px;
}

.check-in-icon-label,
.check-out-icon-label {
    display: none;
}

.occupancy-icon-wrapper,
.special-offer {
    margin: 5px 0 5px 0 !important;
}

.occupancy-icon-wrapper .icon-user {
    display: none
}

.change-filters-control-wrapper .special-offer {
    box-sizing: border-box;
    width: 100%;
}

.check-in-icon-label,
.check-out-icon-label {
    color: #868686;
}


.change-filters-spacing .this-button .icon-caret-right {
    display: none;
}

.change-filters-control-wrapper + .text-right {
    text-align: center;
}

/* Hotel name */

.header > h1 {
    display: flex;
    text-transform: uppercase;
}

.hotel-title-location {
    margin-left: auto;
    margin-right: 5px;
}

.hotel-title-link-wrapper {
    font-size: 14px !important;
    margin-right: -4px;
    text-transform: none;
}

.hotel-title-link .icon-caret-right {
    display: none;
}

.hotel-title-name {
    max-width: 450px;
}

.hotel-title-rank {
    margin-left: 10px;
}

.hotel-title-rank-star {
    color: #888;
}

.hotel-title-link {
    color: inherit !important;
}

/* Recap Filters */

.filters-wrapper {
    margin: 40px 0 10px 0 !important;
}

.filters-link {
    float: right;
}

.filters {
    color: inherit !important;
}

/* Basket */

.basket {
    background: rgba(255, 255, 255, 0.96);
    margin-top: 0;
    padding: 30px;
    /*border-top: 3px solid black;*/
}

.basket-summary {
    padding: 0 0 30px 0;
    margin-bottom: 30px;
}

.basket-summary > .h6-like {
    font-size: 22px;
    font-weight: normal;
}

.basket-summary .small {
    font-size: 14px;
}

.basket-summary-item {
    border-top: 1px solid #c5c5c5;
    margin-top: 15px;
    padding-top: 15px;
}

.basket .this-list {
    margin-bottom: 0;
}

.basket .list-item-text {
    font-weight: normal;
    font-size: 14px;
    color: inherit;
}

.basket .list-item-icon {
    color: #888;
}

.basket .list-item-cards {
    margin-top: 10px;
}

.basket-guarantee {
    padding: 0;
    margin: 0;
}

.basket-guarantee .h6-like {
    font-size: 20px;
    font-weight: normal;
    margin-bottom: 20px;
}

.basket-guarantee .this-list {
    margin: 0;
}

.basket-guarantee .list-item {
    padding: 5px 0 0 0;
}

.basket-guarantee .list-item-icon {
    display: none;
}

.basket.basket-moving {
    width: 340px;
}

/* Modal Package */

#modal-package-details h2 {
    font-weight: normal;
    font-size: 24px;
    margin: 0 0 25px 0;
    text-transform: uppercase;
}

#modal-package-details .secondary-column {
    padding-top: 60px;
}

#modal-package-details .package-image-wrapper {
    margin: 0;
    padding: 0;
    text-align: left;
}

#modal-package-details .package-image {
    margin: 0;
    padding: 0;
    border: 0;
    box-shadow: none;
}

#modal-package-details .package-gallery {
    margin: 0 !important;
}

#modal-package-details .package-gallery-image {
    padding: 0;
    margin: 10px 10px 0 0 !important;
    border: 0;
    box-shadow: none;
    transform: none !important;
    bottom: 0 !important;
}

/* Modal Hotel */

#modal-hotel-description h1 {
    text-transform: uppercase;
}

#modal-hotel-description .hotel-title-rank {
    color: #888;
}

#modal-hotel-description .gallery-image {
    padding: 0;
    border: 0;
    box-shadow: none;
    transform: none !important;
    margin: 0 0 10px 0 !important;
    position: static;
}

#modal-hotel-description .selected-image {
    padding: 0;
    margin: 10px 10px 0 0 !important;
    border: 0;
    box-shadow: none;
    transform: none !important;
    bottom: 0 !important;
}

#modal-hotel-description .this-step-header {
    margin: 30px 0 10px 0 !important;
}

/* Room Selection */

.room-selection-section {
    margin-top: 50px;
}

.room-filters.mts {
    background: transparent !important;
    border: 1px solid #c5c5c5;
    padding: 15px;
}

.room-filters .h6-like {
    margin-top: 4px;
}

.room-filters .this-link {
    margin-top: 20px !important;
    display: inline-block;
    font-weight: normal;
    font-size: inherit;
}

.room-filters ul.small li:not(.room-filters-item) {
    font-size: inherit;
    font-weight: normal;
    text-transform: uppercase;
}

.room-filters-item {
    margin-bottom: 6px !important;
}

.room-filters + .this-insertion,
.room-filters + .this-insertion + .this-insertion {
    margin-top: 20px;
}

.this-room {
    padding: 15px;
    border: 1px solid #c5c5c5;
    border-bottom: none;
}

.template-room + .this-insertion {
    margin-top: 0;
    border-left: 1px solid #c5c5c5;
    border-right: 1px solid #c5c5c5;
    padding: 15px 20px;
}

.room-aside {
    display: flex;
}

.room-aside-left {
    float: none;
    display: flex;
    width: 330px;
    height: 100%;
}

.room-aside-image {
    padding: 0;
    border: 0;
    box-shadow: none;
    width: 330px;
    height: 100%;
    margin: 0;
}

.room-aside .icon-zoom-in {
    bottom: 0;
    right: 0;
    border-radius: 0;
    background: #a2a2a2;
    color: white;
    font-size: 14px;
    opacity: 1;
    padding: 6px 10px 5px 11px;
}

.room-aside .icon-zoom-in:before {
    content: "\f067";
}

.room-aside-right {
    float: none;
    display: flex;
    flex: 1;
    flex-direction: column;
    justify-content: space-between;
    padding: 0 0 0 20px;
    margin: 0;
}

.room-aside-title {
    font-weight: 600;
    font-size: 18px;
    text-transform: uppercase;
}

.room-aside-items {
    width: 100% !important;
    margin: 0;
}

.room-aside-items-title {
    width: 30%;
    box-sizing: border-box;
}

.room-aside-items-content {
    width: 70%;
    padding: 0 !important;
}

.room-aside-right > .this-button {
    align-self: flex-start;
}

.room-details-content {
    padding: 20px 0 0 0;
}

.room-details-content-full-width {
    padding-left: 0 !important;
    padding-right: 0 !important;
}

.room-details-content-description {
    padding: 0;
}

.room-details-content-beds-item {
    padding: 0;
    background: transparent;
}

.room-details-content-options {
    padding: 0;
    background: transparent;
}

.room-details-content-options-item {
    width: 32%;
}

.room-details-gallery {
    display: none !important;
}

.room-details-gallery-image {
    transform: none !important;
    padding: 0;
    border: 0;
    box-shadow: none;
    margin: 0 0 10px 0 !important;
    position: static;
}

.room-details-gallery-image:hover {
    bottom: 0;
}

#modal-gallery h2 {
    font-weight: normal;
    font-size: 24px;
    margin: 0 0 20px 0;
    text-align: center;
    text-transform: uppercase;
}

#modal-gallery .gallery {
    width: 100%;
}

#modal-gallery .gallery > span {
    justify-content: center;
    width: 100% !important;
}

#modal-gallery .selected-image {
    padding: 0;
    border: 0;
    box-shadow: none;
}

#modal-gallery .gallery-image:hover {
    bottom: 0;
}

.this-room-rates {
    border: 1px solid #c5c5c5;
    border-top: 0;
    margin: 0 !important;
    box-shadow: none !important;
}

.this-room-rates table {
    width: 100%;
}

.room-rates-head-occupancy,
.room-rates-head-rate-plan,
.room-rates-head-prices,
.room-rates-head-button {
    font-weight: normal;
    font-size: 11px;
    text-transform: uppercase;
    padding: 15px 0 0 0 !important;
}

/* https://stackoverflow.com/q/64032355/1248177*/
.room-rates-item:first-child td, .room-rates-item[style*='display'][style*='none'] + .room-rates-item:not([style*='display']):not([style*='none']) td {
    border-top: 0;
}

.room-rates-head-occupancy {
    padding-left: 15px !important;
}

.room-rates-head-button {
    padding-right: 15px !important;
}

.room-rates-col-occupancy,
.room-rates-col-rate-plan,
.room-rates-col-prices,
.room-rates-col-button,
.room-rates-col-button-booking-request {
    padding: 20px 0;
    width: auto;
    border-top: 1px solid #c5c5c5;
}

.room-rates-col-rate-plan-package {
    border-top: 1px solid #c5c5c5;
}

.room-rates-col-rate-plan {
    padding-right: 15px;
}

.room-rates-col-occupancy {
    padding-left: 15px;
    width: 150px;
}

.room-rates-col-button {
    width: 160px;
    padding-right: 15px;
}

.room-rates-col-button .this-button {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 8px 8px 8px 5px !important;
}

.room-rates-col-button .this-button span {
    margin-left: auto !important;
    margin-right: 5px;
}

.room-rates-col-button .this-button i {
    font-size: 20px !important;
    margin-left: auto !important;
}

.room-rates-col-button .this-button._icon-right i:before {
    content: "\f105";
}

.room-rates-col-button-booking-request {
    padding-right: 10px;
}

.room-rates-item-request-total-price {
    font-weight: normal;
    font-size: 16px;
}

.room-rates-item-request-subtitle {
    font-weight: normal;
}

.room-rates-item-title-meal-plan {
    font-weight: normal;
    font-size: 14px;
}

.room-rates-item-info {
    margin: 0;
}

.room-rates-item-info .tooltip-content .bold {
    font-weight: 600;
}

.room-rates-item-info-icon,
.room-rates-item-info-text {
    color: #888;
}

.room-rates-item-price-moy,
.room-rates-item-price-moy.has-price-out {
    font-weight: normal;
    font-size: 14px;
}

.room-rates-item-price-out,
.room-rates-item-price-tax {
    color: #888;
}

.room-rates-item-availability {
    font-weight: normal;
    font-size: 12px;
    color: inherit;
}

.room-rates-col-occupancy-package {
    padding: 0;
}

.room-rates-item-package-wrapper {
    width: 160px;
    padding: 0;
}

.room-rates-item-package-wrapper-image {
    padding: 0;
    border: 0;
    box-shadow: none;
    width: 100%;
    height: auto;
    margin: 0;
    transform: none;
    position: static;
}

.room-rates-item-package-link {
    font-weight: normal;
}

.this-room-rates .this-button._skin-6 {
    margin: 15px 0 0 0;
}

.this-rates {
}

.rates-item-name {
    font-weight: normal;
}

.rates-item-price-off {
    color: #888;
}

.rates-item-price-tax {
    color: #888;
}

.link-back-to-room .this-link {
    font-weight: normal;
    font-size: 14px;
}

/* Room for Extra Selection */

.extra-selection-section .this-room {
    border: 1px solid #c5c5c5;
    border-bottom: none;
    padding: 20px 20px 40px 20px !important;
}

.extra-selection-section .this-room.first-child {
    border-top: 1px solid #c5c5c5;
}

.extra-selection-section .this-room-rates + .this-room {
    margin-top: 20px !important;
}

.extra-selection-section .this-room-rates {
    border: 1px solid #c5c5c5;
    border-top: none;
    margin: 0 !important;
    box-shadow: none !important;
}

.extra-selection-section .this-room-rates table {
    width: 100%;
}

.extra-selection-section .room-rates-col-occupancy {
    padding: 0 0 0 10px;
    width: 150px;
}

.extra-selection-section .room-rates-col-total-price {
    width: 140px;
}

.extra-selection-section .room-rates-item-package .room-rates-col-occupancy {
    padding-left: 0 !important;
}

.extra-selection-section .room-rates-item-package-wrapper {
    width: 160px;
    padding: 0;
}

.extra-selection-section .room-rates-item-package-wrapper-image {
    padding: 0;
    border: 0;
    box-shadow: none;
    width: 100%;
    height: 100%;
    margin: 0;
    transform: none;
    position: static;
}

.extra-selection-section .room-rates-item-package-link {
    font-weight: normal;
}

.extra-selection-section .room-extra-text {
    margin: 0 0 0 170px !important;
}

.extra-selection-section .room-rates-item-info {
    margin: 0;
}

.extra-selection-section .room-rates-item-info .tooltip-content .bold {
    font-weight: 600;
}

.extra-selection-section .room-rates-item-info-icon,
.extra-selection-section .room-rates-item-info-text {
    color: #888;
}

/* Extra Selection */

.extra-selection-section {
    margin-top: 40px;
}

.this-room-extra {
    box-sizing: border-box;
    width: 100%;
    padding: 20px 23px 20px 10px;
    height: 100%;
}

.extra-selection-section .room-rates-col-occupancy {
    padding-left: 20px;
}

.room-rates-item-total-price {
    font-weight: normal;
    font-size: 16px;
}

.room-rates-col-remove {
    padding-right: 20px;
}

.this-room-extra {
    padding-right: 40px;
    margin: 0;
    border-top: 1px solid #c5c5c5;
}

.room-extra-text {
    margin: 0 0 0 168px;
}

.room-extra-price-wrapper {
    width: 140px;
}

.room-extra-price {
    font-weight: normal;
}

.room-extra-text-action {
    font-weight: normal;
}

.room-extra-text-action i {
    display: none;
}

.quantity-wrapper {
    border-top: 0;
}

.add-another-room-type {
    font-weight: normal !important;
    font-size: inherit;
}

.extra-basket-item-name {
    font-weight: normal;
}

.extra-basket-item-name-value {
    font-weight: normal;
}

.extra-basket-item-name-link {
    font-weight: normal;
}

.extra-basket-item {
    padding: 20px 0;
}

.extra-basket-item-type {
    font-weight: normal;
}

.this-extra-gallery {
    display: flex;
    flex-wrap: wrap;
    margin: 40px -15px 0 -15px !important;
}

.extra-gallery-item {
    float: none;
    box-sizing: border-box;
    width: 33%;
    height: 100%;
    margin: 0;
    padding: 0 15px 20px 15px;
}

.extra-gallery-item-image {
    border: 0;
    box-shadow: none;
    width: 100%;
    height: 100%;
}

.extra-gallery-item-name {
    font-weight: normal;
    font-size: 14px;
}

.extra-basket-item-name-link {
    font-size: inherit;
}

.extra-basket-item-name-link i {
    display: none;
}

.extra-gallery-item-reserved {
    margin: 5px 0 0 0;
}

.extra-gallery-item-details {
    font-weight: normal;
}

.extra-gallery-item-details i {
    display: none;
}

.extra-gallery-item-price {
    margin: 5px 0 0 0;
}

.extra-gallery-item-price-value {
    font-weight: normal;
    font-size: 16px;
}

.extra-gallery-item-book i {
    display: none;
}

#modal-extra-details .secondary-column {
    padding-top: 25px;
}

#modal-extra-details .link-back {
    font-weight: normal;
}

#modal-extra-details .extra-image {
    border: 0;
    padding: 0;
    box-shadow: none;
}

/* Summary */

.summary-section {
    margin-top: 40px;
}

.summary-section .this-step-header {
    margin: 30px 0 0 0;
}

.summary-section .step-header-title {
    margin: 0;
}

.step-header-summary {
    border-top: 0;
    margin: 0 0 20px 0 !important;
    padding: 0 !important;
}

.this-cancellation-insurance {
    background: transparent;
   	border: 1px solid #c5c5c5;
    padding: 20px;
}

.cancellation-insurance-text {
    width: 430px;
    margin-right: 10px;
}

.cancellation-insurance-text-link {
    font-weight: normal;
}

.cancellation-insurance-action {
    margin-top: 0;
}

.this-form-custom-radio-button [for="cancellation-insurance-no"] {
    background: #888;
}

.this-summary li:nth-child(2) {
    border-top: 0;
    margin: 0;
}

.summary-col-name {
    width: 384px;
}

.summary-col-price {
    width: 185px;
}

.summary-link {
    font-weight: normal;
}

.summary-col-quantity {
    text-align: left;
}

.summary-item {
    display: flex;
    align-items: center;
}

.summary-room-item {
    padding: 20px 0 0 0;
    margin: 20px 0 0 0;
}

.summary-item-room-name {
    font-weight: normal;
    font-size: 16px;
    text-transform: uppercase;
}

.summary-item-info {
    display: block;
    font-size: 14px;
}

.summary-item-info-icon,
.summary-item-cancellation-policy {
    color: #888;
}

.summary-item-price {
    font-weight: normal;
    font-size: 16px;
}

.summary-title {
    padding: 20px 0 20px 0;
    margin: 20px 0 0 0;
    font-size: 16px;
}

.summary-total {
    padding-left: 0;
    background: transparent;
}

.summary-total-name {
    font-weight: normal;
    font-size: 18px;
    width: 533px !important;
}

.summary-total-price {
    font-weight: normal;
    font-size: 18px;
}

.summary-total-name,
.summary-included-taxes {
    width: 533px;
}

.summary-rate-total {
    padding-right: 38px
}

.summary-included-taxes,
.summary-included-taxes + .summary-col-price,
.summary-excluded-taxes,
.summary-excluded-taxes + .summary-col-price {
    font-size: 14px !important;
}
  
  .avp-room {
    border: 1px solid #c5c5c5;
    margin-top: 20px;
}

.room-head {
    background-color: black;
    color: white;
    padding: 10px 20px;
    font-size: 20px
}

.room-head-name {
}

.room-picture {
    width: 100%;
    position: relative;
    background-color: #f7f7f7;
}

.room-picture:hover {
    cursor: pointer;
}

.room-picture-img:not(.room-picture-placeholder) {
    width: 100%;
}

.room-picture-icon {
    position: absolute;
    right: 0;
    bottom: 0;
    display: block;
    padding: 15px 20px;
    background-color: black;
    color: white;
    font-size: 14px;
}

.room-info {
    background-color: #f7f7f7;
    padding: 15px 20px;
    display: flex;
}

.room-info-left {
    flex: 4;
    display: flex;
    flex-wrap: wrap;
}

.room-info-column {
    flex-shrink: 0;
}

.room-info-column-beds {
    width: 45%;
}

.room-info-column-occupancy {
    width: 30%;
}

.room-info-column-superficy {
    width: 25%;
}

.room-info-property {
    color: #717171;
}

.room-info-property + .room-info-property {
    margin-top: 5px;
}

.room-info-property-icon {
    margin-right: 5px;
    font-size: 1.1em;
}

.room-info-property-text {
}

.room-info-right {
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: flex-end;
}

.room-info-details-link {
    color: #717171;
    text-decoration: none;
}

.room-info-details-link:not(.collapse-target-visible) .text-hide {
    display: none;
}

.room-info-details-link.collapse-target-visible .text-show {
    display: none;
}

.room-info-details-link:hover {
    cursor: pointer;
    text-decoration: none;
}

.room-description-details {
    color: #717171;
}

.room-description-details-inner {
    border-top: 1px solid #c5c5c5;
    padding: 20px;
}

.room-description-details-summary {
}

.room-description-details-beds {
    font-weight: 600;
    margin-top: 20px;
    display: flex;
    flex-wrap: wrap;
    list-style: none;
    padding: 0;
}

.room-description-details-bed {
    margin-right: 15px;
}

.room-description-details-amenities {
    display: flex;
    flex-wrap: wrap;
    list-style: none;
    padding: 0;
    margin: 20px 0 0 0;
}

.room-description-details-amenity {
    width: 33%;
    flex-shrink: 0;
}
`;