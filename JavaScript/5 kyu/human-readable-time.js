const addPad = str => `${str}`.padStart(2, 0)

const humanReadable = (seconds) => `${addPad(Math.trunc(seconds / 3600))}:${addPad(Math.trunc(seconds / 60) % 60)}:${addPad(seconds % 60)}`