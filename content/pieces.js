// The work on the art page.
// One entry per piece. The first entry is the featured piece in the intro; the rest fill the grid in order.
// shots: photo numbers (IMG_xxxx). The first shot is the grid image; any others are extra views in the viewer.
// Caption fields come from the "Art page captions" sheet: title, year, clay, glaze, dims (e.g. '14 × 6 × 6 in').
// Leave a field empty ('') if it isn't known yet; the viewer skips empty fields.

window.SHOW_PHOTO_REF = true; // set to false at launch

window.PIECES = [
  { shots: ['1182'], alt: 'Tall raku-fired sculptural vessel with a metallic copper surface and folded, pinched walls',
    title: '', year: '', clay: '', glaze: '', dims: '' },
  { shots: ['1215', '1225'], alt: 'Black double vessel joined by a looped bridge, holding dried lavender',
    title: '', year: '', clay: '', glaze: '', dims: '' },
  { shots: ['1221'], alt: 'Cream stoneware vessel built from two offset, stacked forms',
    title: '', year: '', clay: '', glaze: '', dims: '' },
  { shots: ['1226', '1228'], alt: 'Round raku vessel with smoke markings in rust and black over a ribbed white surface',
    title: '', year: '', clay: '', glaze: '', dims: '' },
  { shots: ['1186'], alt: 'Speckled white vessel with a split, folded rim holding dried lavender',
    title: '', year: '', clay: '', glaze: '', dims: '' },
  { shots: ['1634'], alt: 'Wide carved vessel with fine horizontal bands in ochre, rust and green',
    title: '', year: '', clay: '', glaze: '', dims: '' },
  { shots: ['1196'], alt: 'Tall smoke-fired vessel with a split neck holding dried lavender',
    title: '', year: '', clay: '', glaze: '', dims: '' },
  { shots: ['1212'], alt: 'Black lidded form with a carved, banded base',
    title: '', year: '', clay: '', glaze: '', dims: '' },
  { shots: ['1635'], alt: 'Small carved vessel with fine horizontal bands in yellow and rust',
    title: '', year: '', clay: '', glaze: '', dims: '' },
  { shots: ['1198'], alt: 'Small smoke-fired cup with a single red mark',
    title: '', year: '', clay: '', glaze: '', dims: '' },
  { shots: ['1179'], alt: 'Cream lidded jar with a ribbed body', functional: true,
    title: '', year: '', clay: '', glaze: '', dims: '' },
  { shots: ['1224'], alt: 'Rust-brown banded teapot', functional: true,
    title: '', year: '', clay: '', glaze: '', dims: '' },
  { shots: ['1191'], alt: 'Banded brown bowl with a white glazed interior', functional: true,
    title: '', year: '', clay: '', glaze: '', dims: '' },
];
