/*!
 * ${copyright}
 */

sap.ui.define(["jquery.sap.global", "./../library", "sap/ui/core/Control", "ui5/slick/ui5slick/3rdPartyLib/slick/slick.min"],
	function (jQuery, library, Control, slick) {
		"use strict";
		/**
		 * Constructor for a new Slick UI5 control.
		 *
		 * @param {string} [sId] id for the new control, generated automatically if no id is given
		 * @param {object} [mSettings] initial settings for the new control
		 *
		 * @class
		 * Some class description goes here.
		 * @extends sap.ui.core.Control
		 *
		 * @author SAP SE
		 * @version ${version}
		 *
		 * @constructor
		 * @public
		 * @alias ui5.slick.ui5slick.controls.UI5Slick
		 * @ui5-metamodel This control/element also will be described in the UI5 (legacy) designtime metamodel
		 */
		jQuery.sap.includeStyleSheet(jQuery.sap.getModulePath("ui5.slick.ui5slick") + "/3rdPartyLib/slick/slick.css");
		jQuery.sap.includeStyleSheet(jQuery.sap.getModulePath("ui5.slick.ui5slick") + "/3rdPartyLib/slick/slick-theme.css");
		jQuery.sap.includeStyleSheet(jQuery.sap.getModulePath("ui5.slick.ui5slick") + "/controls/styles.css");
		var UI5Slick = Control.extend("ui5.slick.ui5slick.controls.UI5Slick", {
			metadata: {
				library: "ui5.slick.ui5slick",
				properties: {

					slidesToShow: {
						type: "int",
						defaultValue: 2
					},
					showDots: {
						type: "boolean",
						defaultValue: true
					}

				},
				aggregations: {

					/**
					 * Flex items within the flexible box layout
					 */
					items: {
						type: "sap.ui.core.Control",
						multiple: true,
						singularName: "item"
					}
				},
				events: {
					/**
					 * Event is fired when the user clicks on the control.
					 */
					press: {}

				}
			},

			onAfterRendering: function () {
				// this.__idCntrl = document.getElementById(this.getId());
				$("#" + this.getId()).slick({
					infinite: true,
					slidesToShow: 3,
					slidesToScroll: 3,
					dots: true,
					arrows: true,
					centerMode: true,
					centerPadding: "60px"
				});
				// 	slidesToScroll: this.getSlidesToShow(),
				// 	slidesToScroll: this.getSlidesToShow(),
				// 	dots: this.getShowDots()
				// });
			}
		});
		return UI5Slick;
	}, /* bExport= */ true);