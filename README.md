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

Luego abre tu navegador en: [http://localhost:4200](http://localhost:4200)

## 🧠 Componente Principal: `EntityTableComponent`

Este componente está diseñado para ser reutilizable con cualquier entidad, permitiendo operaciones completas **CRUD** en una tabla editable con **paginación**, **búsqueda** y **creación vía modal**.

---

### 🎯 Inputs

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

## Conexión a la Base de Datos: `totalum-api.service.ts`

El servicio `TotalumApiService` actúa como puente entre el frontend Angular y la base de datos gestionada a través de la SDK de *Totalum API*.

Contiene todos los métodos de las *CRUDS*, la paginación y el buscador, que vienen dados en la misma documentación de Totalum.

---

