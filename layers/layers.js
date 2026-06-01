var wms_layers = [];


        var lyr_hybrid_0 = new ol.layer.Tile({
            'title': 'hybrid',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'http://mt0.google.com/vt/lyrs=y&hl=en&x={x}&y={y}&z={z}'
            })
        });
var format_LAKES_1 = new ol.format.GeoJSON();
var features_LAKES_1 = format_LAKES_1.readFeatures(json_LAKES_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LAKES_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LAKES_1.addFeatures(features_LAKES_1);
var lyr_LAKES_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LAKES_1, 
                style: style_LAKES_1,
                popuplayertitle: 'LAKES',
                interactive: true,
                title: '<img src="styles/legend/LAKES_1.png" /> LAKES'
            });
var format_OCEAN_2 = new ol.format.GeoJSON();
var features_OCEAN_2 = format_OCEAN_2.readFeatures(json_OCEAN_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_OCEAN_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_OCEAN_2.addFeatures(features_OCEAN_2);
var lyr_OCEAN_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_OCEAN_2, 
                style: style_OCEAN_2,
                popuplayertitle: 'OCEAN',
                interactive: true,
                title: '<img src="styles/legend/OCEAN_2.png" /> OCEAN'
            });
var format_TANZANIATRUNKROADS_3 = new ol.format.GeoJSON();
var features_TANZANIATRUNKROADS_3 = format_TANZANIATRUNKROADS_3.readFeatures(json_TANZANIATRUNKROADS_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TANZANIATRUNKROADS_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TANZANIATRUNKROADS_3.addFeatures(features_TANZANIATRUNKROADS_3);
var lyr_TANZANIATRUNKROADS_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TANZANIATRUNKROADS_3, 
                style: style_TANZANIATRUNKROADS_3,
                popuplayertitle: 'TANZANIA TRUNK ROADS',
                interactive: true,
                title: '<img src="styles/legend/TANZANIATRUNKROADS_3.png" /> TANZANIA TRUNK ROADS'
            });
var format_TANZANIAREGIONALROADS_4 = new ol.format.GeoJSON();
var features_TANZANIAREGIONALROADS_4 = format_TANZANIAREGIONALROADS_4.readFeatures(json_TANZANIAREGIONALROADS_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TANZANIAREGIONALROADS_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TANZANIAREGIONALROADS_4.addFeatures(features_TANZANIAREGIONALROADS_4);
var lyr_TANZANIAREGIONALROADS_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TANZANIAREGIONALROADS_4, 
                style: style_TANZANIAREGIONALROADS_4,
                popuplayertitle: 'TANZANIA REGIONAL ROADS',
                interactive: true,
                title: '<img src="styles/legend/TANZANIAREGIONALROADS_4.png" /> TANZANIA REGIONAL ROADS'
            });
var format_TANZANIARAILWAYNETWORK_5 = new ol.format.GeoJSON();
var features_TANZANIARAILWAYNETWORK_5 = format_TANZANIARAILWAYNETWORK_5.readFeatures(json_TANZANIARAILWAYNETWORK_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TANZANIARAILWAYNETWORK_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TANZANIARAILWAYNETWORK_5.addFeatures(features_TANZANIARAILWAYNETWORK_5);
var lyr_TANZANIARAILWAYNETWORK_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TANZANIARAILWAYNETWORK_5, 
                style: style_TANZANIARAILWAYNETWORK_5,
                popuplayertitle: 'TANZANIA RAILWAY NETWORK',
                interactive: true,
                title: '<img src="styles/legend/TANZANIARAILWAYNETWORK_5.png" /> TANZANIA RAILWAY NETWORK'
            });
var format_TANZANIAMAJORTOWNS_6 = new ol.format.GeoJSON();
var features_TANZANIAMAJORTOWNS_6 = format_TANZANIAMAJORTOWNS_6.readFeatures(json_TANZANIAMAJORTOWNS_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TANZANIAMAJORTOWNS_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TANZANIAMAJORTOWNS_6.addFeatures(features_TANZANIAMAJORTOWNS_6);
var lyr_TANZANIAMAJORTOWNS_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TANZANIAMAJORTOWNS_6, 
                style: style_TANZANIAMAJORTOWNS_6,
                popuplayertitle: 'TANZANIA MAJOR TOWNS',
                interactive: true,
                title: '<img src="styles/legend/TANZANIAMAJORTOWNS_6.png" /> TANZANIA MAJOR TOWNS'
            });

lyr_hybrid_0.setVisible(true);lyr_LAKES_1.setVisible(true);lyr_OCEAN_2.setVisible(true);lyr_TANZANIATRUNKROADS_3.setVisible(true);lyr_TANZANIAREGIONALROADS_4.setVisible(true);lyr_TANZANIARAILWAYNETWORK_5.setVisible(true);lyr_TANZANIAMAJORTOWNS_6.setVisible(true);
var layersList = [lyr_hybrid_0,lyr_LAKES_1,lyr_OCEAN_2,lyr_TANZANIATRUNKROADS_3,lyr_TANZANIAREGIONALROADS_4,lyr_TANZANIARAILWAYNETWORK_5,lyr_TANZANIAMAJORTOWNS_6];
lyr_LAKES_1.set('fieldAliases', {'REGION': 'REGION', 'LAKES': 'LAKES', });
lyr_OCEAN_2.set('fieldAliases', {'REGION': 'REGION', 'OCEAN': 'OCEAN', });
lyr_TANZANIATRUNKROADS_3.set('fieldAliases', {'Road': 'Road', 'Link': 'Link', 'RoadClass': 'RoadClass', 'Region': 'Region', 'Upstream': 'Upstream', 'Downstream': 'Downstream', 'Startumber': 'Startumber', 'StarteName': 'StarteName', 'EndNoumber': 'EndNoumber', 'EndNoeName': 'EndNoeName', 'kmPaved': 'kmPaved', 'kmSurveyed': 'kmSurveyed', 'kmUnpaved': 'kmUnpaved', 'WeighdAADT': 'WeighdAADT', 'CurredAADT': 'CurredAADT', 'RoadLabel': 'RoadLabel', });
lyr_TANZANIAREGIONALROADS_4.set('fieldAliases', {'Road': 'Road', 'Link': 'Link', 'RoadClass': 'RoadClass', 'Region': 'Region', 'Upstream': 'Upstream', 'Downstream': 'Downstream', 'Startumber': 'Startumber', 'StarteName': 'StarteName', 'EndNoumber': 'EndNoumber', 'EndNoeName': 'EndNoeName', 'kmPaved': 'kmPaved', 'kmSurveyed': 'kmSurveyed', 'kmUnpaved': 'kmUnpaved', 'WeighdAADT': 'WeighdAADT', 'CurredAADT': 'CurredAADT', 'RoadLabel': 'RoadLabel', });
lyr_TANZANIARAILWAYNETWORK_5.set('fieldAliases', {'FNODE_': 'FNODE_', 'TNODE_': 'TNODE_', 'LPOLY_': 'LPOLY_', 'RPOLY_': 'RPOLY_', 'LENGTH': 'LENGTH', 'RRLINE_': 'RRLINE_', 'RRLINE_ID': 'RRLINE_ID', 'RRLNTYPE': 'RRLNTYPE', 'RRLNTYPETX': 'RRLNTYPETX', 'RRLNSTAT': 'RRLNSTAT', 'RRLNSTATTX': 'RRLNSTATTX', });
lyr_TANZANIAMAJORTOWNS_6.set('fieldAliases', {'NAME': 'NAME', 'AUTO_ID': 'AUTO_ID', });
lyr_LAKES_1.set('fieldImages', {'REGION': 'TextEdit', 'LAKES': 'TextEdit', });
lyr_OCEAN_2.set('fieldImages', {'REGION': 'TextEdit', 'OCEAN': 'TextEdit', });
lyr_TANZANIATRUNKROADS_3.set('fieldImages', {'Road': 'TextEdit', 'Link': 'TextEdit', 'RoadClass': 'TextEdit', 'Region': 'TextEdit', 'Upstream': 'TextEdit', 'Downstream': 'TextEdit', 'Startumber': 'TextEdit', 'StarteName': 'TextEdit', 'EndNoumber': 'TextEdit', 'EndNoeName': 'TextEdit', 'kmPaved': 'TextEdit', 'kmSurveyed': 'TextEdit', 'kmUnpaved': 'TextEdit', 'WeighdAADT': 'TextEdit', 'CurredAADT': 'TextEdit', 'RoadLabel': 'TextEdit', });
lyr_TANZANIAREGIONALROADS_4.set('fieldImages', {'Road': 'TextEdit', 'Link': 'TextEdit', 'RoadClass': 'TextEdit', 'Region': 'TextEdit', 'Upstream': 'TextEdit', 'Downstream': 'TextEdit', 'Startumber': 'TextEdit', 'StarteName': 'TextEdit', 'EndNoumber': 'TextEdit', 'EndNoeName': 'TextEdit', 'kmPaved': 'TextEdit', 'kmSurveyed': 'TextEdit', 'kmUnpaved': 'TextEdit', 'WeighdAADT': 'TextEdit', 'CurredAADT': 'TextEdit', 'RoadLabel': 'TextEdit', });
lyr_TANZANIARAILWAYNETWORK_5.set('fieldImages', {'FNODE_': 'TextEdit', 'TNODE_': 'TextEdit', 'LPOLY_': 'TextEdit', 'RPOLY_': 'TextEdit', 'LENGTH': 'TextEdit', 'RRLINE_': 'TextEdit', 'RRLINE_ID': 'TextEdit', 'RRLNTYPE': 'Range', 'RRLNTYPETX': 'TextEdit', 'RRLNSTAT': 'Range', 'RRLNSTATTX': 'TextEdit', });
lyr_TANZANIAMAJORTOWNS_6.set('fieldImages', {'NAME': 'TextEdit', 'AUTO_ID': 'TextEdit', });
lyr_LAKES_1.set('fieldLabels', {'REGION': 'no label', 'LAKES': 'header label - visible with data', });
lyr_OCEAN_2.set('fieldLabels', {'REGION': 'no label', 'OCEAN': 'header label - visible with data', });
lyr_TANZANIATRUNKROADS_3.set('fieldLabels', {'Road': 'header label - visible with data', 'Link': 'header label - visible with data', 'RoadClass': 'header label - visible with data', 'Region': 'header label - visible with data', 'Upstream': 'header label - visible with data', 'Downstream': 'header label - visible with data', 'Startumber': 'header label - visible with data', 'StarteName': 'header label - visible with data', 'EndNoumber': 'header label - visible with data', 'EndNoeName': 'header label - visible with data', 'kmPaved': 'header label - visible with data', 'kmSurveyed': 'header label - visible with data', 'kmUnpaved': 'header label - visible with data', 'WeighdAADT': 'header label - visible with data', 'CurredAADT': 'header label - visible with data', 'RoadLabel': 'header label - visible with data', });
lyr_TANZANIAREGIONALROADS_4.set('fieldLabels', {'Road': 'header label - visible with data', 'Link': 'header label - visible with data', 'RoadClass': 'header label - visible with data', 'Region': 'header label - visible with data', 'Upstream': 'header label - visible with data', 'Downstream': 'header label - visible with data', 'Startumber': 'header label - visible with data', 'StarteName': 'header label - visible with data', 'EndNoumber': 'header label - visible with data', 'EndNoeName': 'header label - visible with data', 'kmPaved': 'header label - visible with data', 'kmSurveyed': 'header label - visible with data', 'kmUnpaved': 'header label - visible with data', 'WeighdAADT': 'no label', 'CurredAADT': 'no label', 'RoadLabel': 'header label - visible with data', });
lyr_TANZANIARAILWAYNETWORK_5.set('fieldLabels', {'FNODE_': 'no label', 'TNODE_': 'header label - visible with data', 'LPOLY_': 'no label', 'RPOLY_': 'no label', 'LENGTH': 'header label - visible with data', 'RRLINE_': 'header label - visible with data', 'RRLINE_ID': 'header label - visible with data', 'RRLNTYPE': 'header label - visible with data', 'RRLNTYPETX': 'header label - visible with data', 'RRLNSTAT': 'header label - visible with data', 'RRLNSTATTX': 'header label - visible with data', });
lyr_TANZANIAMAJORTOWNS_6.set('fieldLabels', {'NAME': 'header label - visible with data', 'AUTO_ID': 'no label', });
lyr_TANZANIAMAJORTOWNS_6.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});