/*!
 * ${copyright}
 */

/**
 * Initialization Code and shared classes of library ui5.slick.ui5slick.
 */
sap.ui.define(["jquery.sap.global",
		"sap/ui/core/library"
	], // library dependency
	function ( /*jQuery*/ ) {

		"use strict";

		/**
		 * Slick UI5 Control
		 *
		 * @namespace
		 * @name ui5.slick.ui5slick
		 * @author SAP SE
		 * @version ${version}
		 * @public
		 */

		// delegate further initialization of this library to the Core
		sap.ui.getCore().initLibrary({
			name: "ui5.slick.ui5slick",
			version: "0.1",
			dependencies: ["sap.ui.core"],
			types: [],
			interfaces: [],
			controls: [
				"ui5.slick.ui5slick.controls.UI5Slick"
			],
			elements: []
		});

		/* eslint-disable */
		return ui5.slick.ui5slick;
		/* eslint-enable */

	}, /* bExport= */ false);