# PruebaTecnicaTotalum

Este proyecto es una prueba técnica desarrollada para Totalum. Consiste en una aplicación web construida con **Angular** que permite gestionar entidades genéricas a través de un componente reutilizable que consume una API REST para realizar operaciones CRUD (Crear, Leer, Actualizar, Eliminar).

## Instalación y Ejecución

1. Clona el repositorio:

```bash
   git clone https://github.com/RafaPeCas/prueba_tecnica_totalum.git
   cd prueba_tecnica_totalum
```

2. Instala las dependencias:

```bash
   npm install
```

3. Ejecuta la aplicación:

```bash
ng serve
```

4. Poner la API key dentro de la variable de entorno *totalumApiKey* que se encuentra dentro de: *src/enviroments/enviroments.prod.ts*. Lay key está adjunta al correo de inscripción.

Luego abre tu navegador en: [http://localhost:4200](http://localhost:4200)

## Componente Principal: `EntityTableComponent`

Este componente está diseñado para ser reutilizable con cualquier entidad, permitiendo operaciones completas **CRUD** en una tabla editable con **paginación**, **búsqueda** y **creación vía modal**.

---

### Inputs

| Propiedad     | Tipo     | Descripción                                      |
|---------------|----------|--------------------------------------------------|
| `tableName`   | `string` | Nombre de la colección en la API                |
| `title`       | `string` | Título que se muestra en el encabezado de la tabla |
| `items`       | `any[]`  | Lista de elementos a mostrar                    |
| `columns`     | `string[]` | Nombres de las columnas a renderizar           |
| `editable`    | `boolean` | Indica si los registros pueden editarse o eliminarse |
| `searchField` | `string` | Campo de búsqueda a usar dentro de la tabla     |

---

### Funcionalidades

- Visualización de datos paginados.
- Búsqueda dinámica sobre un campo especificado.
- Edición en línea.
- Creación de registros mediante modal.
- Eliminación directa desde la tabla.

---

### Métodos Principales

- `loadItems()` → Carga los datos desde la API.
- `addItem(newItem)` → Añade un nuevo registro.
- `updateItem(item)` → Actualiza un registro.
- `deleteItem(id)` → Elimina un registro.
- `filteredItems()` → Devuelve los datos filtrados según `searchQuery`.
- `getInputType(column)` → Determina el tipo de input (`text` o `date`).
- `nextPage()` / `previousPage()` → Control de paginación.
- `saveEdit()` / `cancelEdit()` → Control del modo de edición.

---

### Formato de Fechas

Cualquier columna que incluya la palabra `"fecha"` automáticamente:

- Se muestra con formato `dd/MM/yyyy`.
- Se edita mediante un `<input type="date">`.

---

## Pipe Personalizado: `centToEuro`

Este pipe se utiliza para **formatear valores monetarios almacenados en céntimos** y mostrarlos correctamente como euros con formato local (por ejemplo, `12345` se renderiza como `123,45 €`).

He decicidido guardar los valores monetarios en números enteros en la base de datos, ya que son mucho más estables que los números flotantes.

### Ubicación

```bash
src/app/shared/pipes/cent-to-euro.pipe.ts
```

## Conexión a la Base de Datos: `totalum-api.service.ts`

El servicio `TotalumApiService` actúa como puente entre el frontend Angular y la base de datos gestionada a través de la SDK de *Totalum API*.

Contiene todos los métodos de las *CRUDS*, la paginación y el buscador, que vienen dados en la misma documentación de Totalum.

La API se recoge de:
```bash
export const environment = {
    production: true,
    totalumApiKey: 'key'
  };
```
---

