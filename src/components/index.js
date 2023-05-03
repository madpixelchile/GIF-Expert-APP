
export * from './AddCategory/AddCategory';
export * from './GifGrid/GifGrid';
export * from './GifGridItem/GifGridItem';

//ARCHIVO DE BARRIL, este index centralizará todas las exportaciones, para reducir las líneas de código de importaciones por componente.
//Para hacer este tipo de exportaciones de barril, hay que asegurarse que las exportaciones de origen coincidan con el tipo de exportación. 
//de acá, es decir, si son default, hay que homologar en el archivo de barril como por ejemplo export {default as nameOfComponent} from './nameOfComponent';
