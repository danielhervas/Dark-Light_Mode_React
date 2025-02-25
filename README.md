# Dark-Light Mode React

Este proyecto es una página web desarrollada con React Router que implementa un diseño proporcionado en Figma. La página incluye un modo nocturno y un modo claro, que pueden activarse manualmente o automáticamente según las preferencias del sistema. El diseño es completamente responsivo y utiliza Tailwind CSS para la estilización y el sistema de grid.

## Características

- **Diseño en Figma**: El diseño ha sido replicado fielmente a partir del prototipo proporcionado en Figma.
  [Prototipo en Figma](https://www.figma.com/design/6GpKxtv0ZVujAcRmlRK5lR/Dark-Mode-(Copy)?node-id=0-1&t=FmEcHraaFQpIXDNW-1)
- **Modo Noche y Modo Claro**: La página cambia entre modos de color según las preferencias del sistema o manualmente.
- **Responsividad**: La responsividad en este código se logra utilizando Tailwind CSS y su sistema de Flexbox y Grid. El contenedor de los componentes se ajusta dinámicamente con clases como flex y flex-wrap para organizar los elementos de manera flexible en diferentes tamaños de pantalla. La grid se adapta a dispositivos móviles, tabletas y escritorios mediante clases como grid-cols-1, sm:grid-cols-2 y md:grid-cols-3, mientras que el UseCard ocupa toda una columna en pantallas pequeñas gracias a col-span-1 y row-span-2. Esto asegura que los elementos se reorganicen correctamente según el tamaño del dispositivo.
- **Sistema de Grid**: El sistema de grid en este código se configura usando las clases de Tailwind grid y grid-cols-1, sm:grid-cols-2, y md:grid-cols-3 para definir cuántas columnas debe tener la cuadrícula según el tamaño de pantalla. En pantallas pequeñas, la cuadrícula tiene una sola columna (grid-cols-1), en pantallas medianas dos columnas (sm:grid-cols-2), y en pantallas grandes tres columnas (md:grid-cols-3). Además, la propiedad gap-5 se usa para mantener el espacio entre los elementos de la cuadrícula, mientras que el estilo en línea ajusta el tamaño y la disposición de las filas.
- ## Tailwind

Este código utiliza Tailwind CSS y la personalización de variables CSS para gestionar el tema de la aplicación y los colores en función del modo claro y oscuro. Se importan las clases de Tailwind y luego se definen varias variables CSS personalizadas para los colores de fondo, texto, botones, etc., que cambian según el tema. En la regla @apply, se aplican clases de Tailwind como bg-body-bg-light y dark:bg-body-bg-dark para aplicar los colores de fondo correspondientes según si el usuario está en el modo claro o oscuro. Además, la clase transition duration-300 se utiliza para suavizar la transición entre los modos. El bloque @custom-variant dark asegura que el modo oscuro se aplique cuando la clase dark está presente en el HTML.

## Repositorio
[Repositorio del Proyecto](https://github.com/danielhervas/Dark-Light_Mode_React)


- **Nombre**: Daniel Hervás Muñoz
- **Asignatura**: Diseño de Interfaces Web
- **Curso**: 2º DAW


   
