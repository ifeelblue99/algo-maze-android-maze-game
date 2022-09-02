export default function shortestPath(graph: Map<number, number[]>, start: number, end: number) {
  /*
    This func uses graph like this:
    
    graph = Map {
      0 => Array [
        1,
      ],
      1 => Array [
        0,
        6,
      ],
      6 => Array [
        1,
        11,
      ]
    }

    to find shortest path to destination

    ex: shortestPath(graph, 0, 11) // returns (start (0) excluded) 1 6 11
  */

  let queue: number[] = [start]
  const prev: Map<number, number | null | undefined> = new Map();

  prev.set(start, null)

  while (queue.length > 0) {
    let currentLocation: number | null | undefined = queue.shift();

    if (currentLocation === end) {
      let path: number[] = [];

      while (currentLocation) {
        path.unshift(currentLocation);
        currentLocation = prev.get(currentLocation);
      }
      /*returns path or undefined here*/
      return path;
    }

    if (currentLocation !== undefined && currentLocation !== null && graph.get(currentLocation) !== undefined) {

      graph.get(currentLocation)?.forEach(dest => {
        if (prev.get(dest) === undefined) {
          prev.set(dest, currentLocation)
          queue.unshift(dest)
        }
      })
    }
  }

}
