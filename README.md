# Acortador de Enlaces 🔗

Este proyecto es un acortador de enlaces desarrollado utilizando la Arquitectura Hexagonal (también conocida como Puertos y Adaptadores). El objetivo principal es aprender y aplicar los principios de la Arquitectura Hexagonal mientras construimos una aplicación funcional.

## 📖 Descripción

El acortador de enlaces permite a los usuarios acortar URLs largas en URLs cortas y fáciles de compartir. La aplicación está diseñada siguiendo los principios de la Arquitectura Hexagonal para garantizar un desacoplamiento entre la lógica de negocio y los detalles de implementación.

## 🚀 Características

- **Acortar URLs**: Convierte URLs largas en URLs cortas.
- **Redireccionamiento**: Redirige automáticamente a la URL original cuando se accede a la URL corta.
- **Listar URLs**: Permite ver todas las URLs acortadas.

## 📂 Estructura del Proyecto

El proyecto sigue la siguiente estructura de directorios:

```markdown
/src 📁
├── /application 📁
│ └── /use-cases 📁
│ ├── CreateLinkUseCase.ts 📄
│ ├── FindLinkByIdUseCase.ts 📄
│ └── GetAllLinksUseCase.ts 📄
├── /domain 📁
│ ├── /entities 📁
│ │ └── Link.ts 📄
│ ├── /value-objects 📁
│ │ ├── Id.ts 📄
│ │ ├── OriginalUrl.ts 📄
│ │ ├── ShortUrl.ts 📄
│ │ └── ShortUrlGenerator.ts 📄
│ └── /repositories 📁
│ └── ILinkRepository.ts 📄
├── /infrastructure 📁
│ ├── /controllers 📁
│ │ └── LinkController.ts 📄
│ ├── /repositories 📁
│ │ └── InMemoryLinkRepository.ts 📄
│ ├── /services 📁
│ │ └── LinkService.ts 📄
│ └── app.ts 📄
└── /interfaces 📁
└── /rest 📁
└── LinkRouter.ts 📄
```

### Descripción de las Carpetas

- **`application`**: Contiene los casos de uso que orquestan la lógica de negocio.
- **`domain`**: Contiene las entidades, objetos de valor y repositorios (puertos) del dominio.
- **`infrastructure`**: Contiene los controladores, repositorios en memoria y servicios que interactúan con la infraestructura.
- **`interfaces`**: Contiene los adaptadores primarios (drivers) que interactúan con el mundo exterior, como el enrutador REST.

## 🛠️ Instalación y Ejecución

1. **Clonar el Repositorio**:

   ```bash
   git clone https://github.com/FeliPrado31/link-shorter-backend
   cd link-shorter-backend
   ```

2. **Instalar Dependencias**:

   ```bash
   npm install
   ```

3. **Ejecutar la Aplicación**:

   ```bash
   npm start
   ```

   La aplicación estará disponible en `http://localhost:3000`.

## 🤝 Contribuciones

¡Las contribuciones son bienvenidas! Si deseas contribuir a este proyecto, por favor sigue estos pasos:

1. **Fork el Repositorio**.
2. **Crea una Nueva Rama**:
   ```bash
   git checkout -b feature/nueva-funcionalidad
   ```
3. **Realiza tus Cambios** y **Haz Commit**:
   ```bash
   git commit -m "Añadir nueva funcionalidad"
   ```
4. **Push a la Rama**:
   ```bash
   git push origin feature/nueva-funcionalidad
   ```
5. **Abre un Pull Request**.

## 📚 Recursos Adicionales

- [Arquitectura Hexagonal](https://alistair.cockburn.us/hexagonal-architecture/)
- [Domain-Driven Design (DDD)](https://martinfowler.com/bliki/DomainDrivenDesign.html)

## 📝 Licencia

Este proyecto está bajo la Licencia GNU General Public License (GPL) versión 3. Consulta el archivo [LICENSE](LICENSE) para más detalles.

---

¡Gracias por tu interés en este proyecto! Si tienes alguna pregunta o sugerencia, no dudes en abrir un issue o contactarme directamente.

Happy coding! 🚀
