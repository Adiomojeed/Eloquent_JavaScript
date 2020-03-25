/**
 * Write a CommonJS module, based on the example from Chapter 7, which
contains the array of roads and exports the graph data structure representing
them as roadGraph . It should depend on a module ./graph , which exports a
function buildGraph that is used to build the graph. This function expects an
array of two-element arrays (the start and end points of the roads).
 */


let {buildGraph} = require('./graph')

// Declaration of roads in the village
const roads = [
    "Alice's House-Bob's House",
    "Alice's House-Post Office",
    "Daria's House-Ernie's House",
    "Ernie's House-Grete's House",
    "Grete's House-Shop",
    "Marketplace-Post Office",
    "Marketplace-Town Hall",
    "Alice's House-Cabin",
    "Bob's House-Town Hall",
    "Daria's House-Town Hall",
    "Grete's House-Farm",
    "Marketplace-Farm",
    "Marketplace-Shop",
    "Shop-Town Hall"
];

exports.roadGraph = buildGraph(roads.map(x => x.split('-')))