// this file contains a list of all files that need to be loaded dynamically for this i2b2 Cell
// every file in this list will be loaded after the cell's Init function is called
{
	files:[
		"ExampPDO_ctrlr.js"
	],
	css:[ 
		"vwExampPDO.css"
	],
	config: {
		// additional configuration variables that are set by the system
		short_name: "OpenCPU",
		name: "OpenCPU - Export",
		description: "This plugin allows fast and compressed exports for i2b2",
		category: ["celless","plugin","examples"],
		plugin: {
			isolateHtml: false,  // this means do not use an IFRAME
			isolateComm: false,  // this means to expect the plugin to use AJAX communications provided by the framework
			standardTabs: true, // this means the plugin uses standard tabs at top
			html: {
				source: 'injected_screens.html',
				mainDivId: 'ExampPDO-mainDiv'
			},
	ocpuUrl : "//10.172.146.39:8004/ocpu/library/Pubmed4URCPO/R"
//	ocpuUrl : "//localhost:8004/ocpu/library/i2b2ExportData/R"
		}
	}
}
