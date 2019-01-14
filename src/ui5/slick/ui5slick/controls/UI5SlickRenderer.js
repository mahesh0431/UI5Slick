/*!
 * ${copyright}
 */

sap.ui.define(["jquery.sap.global"],

	function ( /*jQuery*/ ) {
		"use strict";

		/**
		 * Example renderer.
		 * @namespace
		 */
		var UI5SlickRenderer = {};

		/**
		 * Renders the HTML for the given control, using the provided
		 * {@link sap.ui.core.RenderManager}.
		 *
		 * @param {sap.ui.core.RenderManager} oRm
		 *            the RenderManager that can be used for writing to
		 *            the Render-Output-Buffer
		 * @param {sap.ui.core.Control} oControl
		 *            the control to be rendered
		 */
		UI5SlickRenderer.render = function (oRm, oControl) {

			oRm.write("<div");
			oRm.writeControlData(oControl);
			oRm.writeClasses();
			oRm.write(">");
			UI5SlickRenderer.renderItems(oRm, oControl);
			oRm.write("</div>");

		};
		UI5SlickRenderer.renderItems = function (oRM, oControl) {
			var aChildren = oControl.getItems();

			for (var i = 0; i < aChildren.length; i++) {
				UI5SlickRenderer.renderItem(aChildren[i], oRM);
			}
		};
		UI5SlickRenderer.renderItem = function (oItem, oRm) {
			// Render control
			oRm.write("<div>");
			oRm.renderControl(oItem);
			oRm.write("</div>");
		};

		return UI5SlickRenderer;

	}, /* bExport= */ true);