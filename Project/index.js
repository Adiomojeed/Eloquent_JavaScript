/**
 * The village of Meadowfield isn’t very big. It consists of eleven places with
    fourteen roads between them. It can be described with this array of roads:
 */


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

// Creates possible destinations of each location
function buildGraph (edges) {
    let graph = Object.create(null)
    let newEdges = edges.map(x => x.split('-'))
    function addEdges (from, to) {
        if (graph[from] == null) {
            graph[from] = [to]
        }
        else {
            graph[from].push(to)
        }
    }
    for (let [from, to] of newEdges) {
        addEdges(from, to)
        addEdges(to, from)
    }
    return graph
}

let roadGraph = buildGraph(roads)

// Create the village state's class, picking and delivering of parcel

class villageState {
    constructor(place, parcels) {
        this.place = place
        this.parcels = parcels
    }

    move (destination) {
        if (!roadGraph[this.place].includes(destination)) {
            return this
        }
        else {
            let parcels = this.parcels.map(p => {
                if (p.place != this.place) return p
                return {place: destination, address: p.address}
            }).filter(p => p.place != p.address)
            return new villageState(destination, parcels)
        }
    }
}

let first = new villageState('Post Office', [{palce: 'Post Office', address: "Alice's House"}])

let next = first.move("Alice's House")
console.log(next.place)