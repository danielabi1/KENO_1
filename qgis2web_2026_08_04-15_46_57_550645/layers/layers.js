var wms_layers = [];


        var lyr_Mapa_base_0 = new ol.layer.Tile({
            'title': 'Mapa_base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: '<a href="https://cartodb.com/basemaps/">Map tiles by CartoDB, under CC BY 3.0. Data by OpenStreetMap, under ODbL.</a>',
                url: 'https://a.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png'
            })
        });
var format_Puntos_KENO_1 = new ol.format.GeoJSON();
var features_Puntos_KENO_1 = format_Puntos_KENO_1.readFeatures(json_Puntos_KENO_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Puntos_KENO_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Puntos_KENO_1.addFeatures(features_Puntos_KENO_1);
var lyr_Puntos_KENO_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Puntos_KENO_1, 
                style: style_Puntos_KENO_1,
                popuplayertitle: 'Puntos_KENO',
                interactive: true,
                title: '<img src="styles/legend/Puntos_KENO_1.png" /> Puntos_KENO'
            });
var format_Terminales_KENO_2 = new ol.format.GeoJSON();
var features_Terminales_KENO_2 = format_Terminales_KENO_2.readFeatures(json_Terminales_KENO_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Terminales_KENO_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Terminales_KENO_2.addFeatures(features_Terminales_KENO_2);
var lyr_Terminales_KENO_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Terminales_KENO_2, 
                style: style_Terminales_KENO_2,
                popuplayertitle: 'Terminales_KENO',
                interactive: true,
                title: '<img src="styles/legend/Terminales_KENO_2.png" /> Terminales_KENO'
            });

lyr_Mapa_base_0.setVisible(true);lyr_Puntos_KENO_1.setVisible(true);lyr_Terminales_KENO_2.setVisible(true);
var layersList = [lyr_Mapa_base_0,lyr_Puntos_KENO_1,lyr_Terminales_KENO_2];
lyr_Puntos_KENO_1.set('fieldAliases', {'ID': 'ID', 'NOMBRE_PDV': 'NOMBRE_PDV', 'DIRECCI�N': 'DIRECCI�N', 'BARRIO': 'BARRIO', 'NOMBRE_MUNICIPIO': 'NOMBRE_MUNICIPIO', 'DEPARTAMENTO': 'DEPARTAMENTO', 'COD_DANE': 'COD_DANE', 'LATITUD': 'LATITUD', 'LONGITUD': 'LONGITUD', });
lyr_Terminales_KENO_2.set('fieldAliases', {'ID': 'ID', 'ID_TERMINAL': 'ID_TERMINAL', 'TIPO': 'TIPO', 'LATITUD': 'LATITUD', 'LONGITUD': 'LONGITUD', 'COD_DANE': 'COD_DANE', 'DEPARTAMENTO': 'DEPARTAMENTO', 'MUNICIPIO': 'MUNICIPIO', 'ESTADO': 'ESTADO', 'COMERCIALIZADOR': 'COMERCIALIZADOR', 'ID_COMERCIALIZADOR': 'ID_COMERCIALIZADOR', 'COD_PDV': 'COD_PDV', });
lyr_Puntos_KENO_1.set('fieldImages', {'ID': 'TextEdit', 'NOMBRE_PDV': 'TextEdit', 'DIRECCI�N': 'TextEdit', 'BARRIO': 'TextEdit', 'NOMBRE_MUNICIPIO': 'TextEdit', 'DEPARTAMENTO': 'TextEdit', 'COD_DANE': 'Range', 'LATITUD': 'TextEdit', 'LONGITUD': 'TextEdit', });
lyr_Terminales_KENO_2.set('fieldImages', {'ID': 'Range', 'ID_TERMINAL': 'TextEdit', 'TIPO': 'TextEdit', 'LATITUD': 'TextEdit', 'LONGITUD': 'TextEdit', 'COD_DANE': 'Range', 'DEPARTAMENTO': 'TextEdit', 'MUNICIPIO': 'TextEdit', 'ESTADO': 'TextEdit', 'COMERCIALIZADOR': 'TextEdit', 'ID_COMERCIALIZADOR': 'TextEdit', 'COD_PDV': 'TextEdit', });
lyr_Puntos_KENO_1.set('fieldLabels', {'ID': 'inline label - visible with data', 'NOMBRE_PDV': 'inline label - visible with data', 'DIRECCI�N': 'inline label - visible with data', 'BARRIO': 'inline label - visible with data', 'NOMBRE_MUNICIPIO': 'inline label - visible with data', 'DEPARTAMENTO': 'inline label - visible with data', 'COD_DANE': 'inline label - visible with data', 'LATITUD': 'inline label - visible with data', 'LONGITUD': 'inline label - visible with data', });
lyr_Terminales_KENO_2.set('fieldLabels', {'ID': 'inline label - visible with data', 'ID_TERMINAL': 'inline label - visible with data', 'TIPO': 'inline label - visible with data', 'LATITUD': 'inline label - visible with data', 'LONGITUD': 'inline label - visible with data', 'COD_DANE': 'inline label - visible with data', 'DEPARTAMENTO': 'inline label - visible with data', 'MUNICIPIO': 'inline label - visible with data', 'ESTADO': 'inline label - visible with data', 'COMERCIALIZADOR': 'inline label - visible with data', 'ID_COMERCIALIZADOR': 'inline label - visible with data', 'COD_PDV': 'inline label - visible with data', });
lyr_Terminales_KENO_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});